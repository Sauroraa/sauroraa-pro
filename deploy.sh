#!/bin/bash

# ============================================================================
# Sauroraa Pro - Docker VPS Deployment Script
# ============================================================================

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

PROJECT_NAME="sauroraa-pro"
DEPLOY_DIR="/var/www/$PROJECT_NAME"
DOMAIN="pro.sauroraa.be"
PORT=3001

print_status() { echo -e "${GREEN}[✓]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[!]${NC} $1"; }
print_error() { echo -e "${RED}[✗]${NC} $1"; }
print_step() { echo -e "${BLUE}[→]${NC} $1"; }

check_root() {
    [[ $EUID -eq 0 ]] && SUDO="" || SUDO="sudo"
}

check_prerequisites() {
    print_step "Checking prerequisites..."
    
    if ! command -v docker &> /dev/null; then
        print_error "Docker not installed"
        exit 1
    fi
    print_status "Docker: $(docker --version)"
    
    if ! command -v docker compose &> /dev/null; then
        print_error "Docker Compose not installed"
        exit 1
    fi
    print_status "Docker Compose: $(docker compose version)"
    
    if ! command -v nginx &> /dev/null; then
        print_warning "Nginx not installed, will install..."
    fi
    
    if ! command -v certbot &> /dev/null; then
        print_warning "Certbot not installed, will install..."
    fi
}

install_nginx_certbot() {
    if ! command -v nginx &> /dev/null; then
        print_step "Installing Nginx..."
        $SUDO apt-get update
        $SUDO apt-get install -y nginx
    fi
    
    if ! command -v certbot &> /dev/null; then
        print_step "Installing Certbot..."
        $SUDO apt-get install -y certbot python3-certbot-nginx
    fi
}

setup_directories() {
    print_step "Creating directories..."
    $SUDO mkdir -p "$DEPLOY_DIR"
    $SUDO chown -R $(whoami):$(whoami) "$DEPLOY_DIR" 2>/dev/null || true
}

deploy_code() {
    print_step "Deploying code..."
    cd "$DEPLOY_DIR"
    
    if [[ -d ".git" ]]; then
        print_warning "Pulling latest changes..."
        git fetch origin
        git reset --hard "origin/main"
    else
        git clone https://github.com/Sauroraa/sauroraa-pro.git "$DEPLOY_DIR"
    fi
    print_status "Code deployed"
}

start_docker() {
    print_step "Starting Docker containers..."
    cd "$DEPLOY_DIR"
    
    print_warning "Stopping existing containers..."
    $SUDO docker compose down 2>/dev/null || true
    
    print_status "Building images..."
    $SUDO docker compose build --no-cache
    
    print_status "Starting containers..."
    $SUDO docker compose up -d
    
    print_status "Containers started on port $PORT"
}

wait_for_db() {
    print_step "Waiting for database..."
    max_attempts=30
    for i in $(seq 1 $max_attempts); do
        if $SUDO docker compose exec -T db mysqladmin ping -h localhost --silent 2>/dev/null; then
            print_status "Database ready!"
            return 0
        fi
        echo -n "."
        sleep 2
    done
    print_error "Database failed"
    return 1
}

setup_db() {
    print_step "Setting up database..."
    cd "$DEPLOY_DIR"
    wait_for_db
    
    print_status "Running schema..."
    $SUDO docker compose exec -T db mysql -u phpmyadmin -pTmLq9zEwH8bxc4WhZlQZ sauroraa_pro < database/schema.sql 2>/dev/null || \
    $SUDO docker compose exec -T db mysql -u root -pTmLq9zEwH8bxc4WhZlQZ sauroraa_pro < database/schema.sql 2>/dev/null || \
    print_warning "Schema may already exist"
    
    print_status "Database ready"
}

configure_nginx() {
    print_step "Configuring Nginx for $DOMAIN..."
    
    # Create nginx config
    cat > /tmp/${DOMAIN}.conf << EOF
server {
    server_name $DOMAIN;
    
    location / {
        proxy_pass http://127.0.0.1:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
    
    # SSL configuration will be added by Certbot
    listen 80;
}
EOF
    
    $SUDO cp /tmp/${DOMAIN}.conf /etc/nginx/sites-available/${DOMAIN}
    $SUDO ln -sf /etc/nginx/sites-available/${DOMAIN} /etc/nginx/sites-enabled/
    
    # Remove default
    $SUDO rm -f /etc/nginx/sites-enabled/default
    
    # Test nginx config
    $SUDO nginx -t
    
    $SUDO systemctl reload nginx
    
    print_status "Nginx configured"
}

setup_ssl() {
    print_step "Setting up SSL with Certbot..."
    
    # Check if port 80 is accessible (not blocked)
    if [[ -f /etc/letsencrypt/live/${DOMAIN}/fullchain.pem ]]; then
        print_warning "SSL certificate already exists for $DOMAIN"
        
        # Update nginx config with SSL
        cat > /etc/nginx/sites-available/${DOMAIN} << EOF
server {
    server_name $DOMAIN;
    
    location / {
        proxy_pass http://127.0.0.1:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
    
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}
EOF
        
        $SUDO nginx -t
        $SUDO systemctl reload nginx
        print_status "SSL configuration updated"
        return 0
    fi
    
    # Get SSL certificate
    print_status "Requesting SSL certificate for $DOMAIN..."
    $SUDO certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN
    
    if [[ $? -eq 0 ]]; then
        print_status "SSL certificate obtained!"
    else
        print_warning "SSL certificate failed, running on HTTP only"
        print_warning "Make sure port 80 is open and domain DNS points to this server"
    fi
}

verify() {
    print_step "Verifying deployment..."
    cd "$DEPLOY_DIR"
    
    if $SUDO docker compose ps | grep -q "Up"; then
        print_status "App container: Running on port $PORT"
    else
        print_warning "Check logs with: sudo docker compose logs"
    fi
    
    # Check nginx status
    if systemctl is-active --quiet nginx; then
        print_status "Nginx: Running"
    fi
    
    # Check SSL
    if [[ -f /etc/letsencrypt/live/${DOMAIN}/fullchain.pem ]]; then
        print_status "SSL: Enabled"
    else
        print_warning "SSL: Not configured (run with --ssl flag when ready)"
    fi
}

main() {
    echo ""
    echo "========================================================================"
    echo -e "${BLUE}Sauroraa Pro - Docker Deployment with Nginx${NC}"
    echo "========================================================================"
    echo ""
    
    check_root
    install_nginx_certbot
    setup_directories
    deploy_code
    start_docker
    wait_for_db
    setup_db
    configure_nginx
    
    # Check if we should setup SSL
    if [[ "$1" == "--ssl" ]]; then
        setup_ssl
    fi
    
    verify
    
    echo ""
    echo "========================================================================"
    echo -e "${GREEN}Deployment Complete!${NC}"
    echo "========================================================================"
    echo ""
    echo "Domain: https://$DOMAIN"
    echo ""
    echo "Commands:"
    echo -e "  ${BLUE}Logs:${NC}       cd $DEPLOY_DIR && sudo docker compose logs -f"
    echo -e "  ${BLUE}Restart:${NC}   cd $DEPLOY_DIR && sudo docker compose restart"
    echo -e "  ${BLUE}Stop:${NC}       cd $DEPLOY_DIR && sudo docker compose down"
    echo -e "  ${BLUE}SSL setup:${NC} sudo $0 --ssl"
    echo ""
    echo "SSL certificate: https://$DOMAIN (after running --ssl)"
    echo "========================================================================"
}

main "$@"
