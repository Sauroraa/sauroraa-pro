#!/bin/bash

# ============================================================================
# Sauroraa Pro - VPS Deployment Script
# ============================================================================
# This script deploys the application to a Linux VPS with MariaDB
# ============================================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="sauroraa-pro"
DEPLOY_DIR="/var/www/$PROJECT_NAME"
BACKUP_DIR="/var/backups/$PROJECT_NAME"
SERVICE_NAME="$PROJECT_NAME"
GIT_REPO="https://github.com/Sauroraa/sauroraa-pro.git"
BRANCH="main"

# ============================================================================
# Functions
# ============================================================================

print_status() {
    echo -e "${GREEN}[✓]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[!]${NC} $1"
}

print_error() {
    echo -e "${RED}[✗]${NC} $1"
}

print_step() {
    echo -e "${BLUE}[→]${NC} $1"
}

# Check if running as root
check_root() {
    if [[ $EUID -eq 0 ]]; then
        SUDO=""
    else
        SUDO="sudo"
    fi
}

# Check prerequisites
check_prerequisites() {
    print_step "Checking prerequisites..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    print_status "Node.js version: $(node --version)"
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed."
        exit 1
    fi
    print_status "npm version: $(npm --version)"
    
    # Check Git
    if ! command -v git &> /dev/null; then
        print_warning "Git is not installed. Installing..."
        $SUDO apt-get update && $SUDO apt-get install -y git
    fi
    print_status "Git version: $(git --version)"
    
    # Check MariaDB
    if ! command -v mysql &> /dev/null; then
        print_warning "MariaDB is not installed. Installing..."
        $SUDO apt-get update && $SUDO apt-get install -y mariadb-server mariadb-client
    fi
    print_status "MariaDB is installed"
    
    # Check if MariaDB is running
    if ! systemctl is-active --quiet mariadb; then
        print_warning "MariaDB is not running. Starting..."
        $SUDO systemctl start mariadb
    fi
    print_status "MariaDB is running"
}

# Create deployment directory
setup_directories() {
    print_step "Setting up directories..."
    
    $SUDO mkdir -p "$DEPLOY_DIR"
    $SUDO mkdir -p "$BACKUP_DIR"
    $SUDO mkdir -p "/var/log/$PROJECT_NAME"
    
    $SUDO chown -R $(whoami):$(whoami) "$DEPLOY_DIR" 2>/dev/null || true
    
    print_status "Directories created"
}

# Clone or update repository
deploy_code() {
    print_step "Deploying code from $GIT_REPO..."
    
    cd "$DEPLOY_DIR"
    
    if [[ -d ".git" ]]; then
        print_warning "Repository already exists. Pulling latest changes..."
        git fetch origin
        git reset --hard "origin/$BRANCH"
    else
        print_status "Cloning repository..."
        git clone --branch "$BRANCH" --depth 1 "$GIT_REPO" "$DEPLOY_DIR"
    fi
    
    print_status "Code deployed successfully"
}

# Install dependencies
install_dependencies() {
    print_step "Installing dependencies..."
    
    cd "$DEPLOY_DIR"
    
    # Clean node_modules if exists
    if [[ -d "node_modules" ]]; then
        print_warning "Removing existing node_modules..."
        rm -rf node_modules
    fi
    
    npm install --only=production
    
    print_status "Dependencies installed"
}

# Setup environment variables
setup_env() {
    print_step "Setting up environment variables..."
    
    cd "$DEPLOY_DIR"
    
    if [[ ! -f ".env" ]]; then
        print_warning ".env file not found. Creating from example..."
        cat > .env << 'EOF'
# Database (MariaDB/MySQL)
DATABASE_URL="mysql://root:password@localhost:3306/sauroraa_pro"

# Authentication
JWT_SECRET="change-this-secret-key-in-production-min-32-chars"
JWT_EXPIRES_IN="7d"

# Application
NEXT_PUBLIC_APP_URL="http://your-domain.com"
NODE_ENV="production"
EOF
        print_warning "Please edit .env file with your actual values!"
    else
        print_status ".env file already exists"
    fi
}

# Setup database
setup_database() {
    print_step "Setting up database..."
    
    cd "$DEPLOY_DIR"
    
    # Create database and user if not exists
    print_status "Creating database and user..."
    $SUDO mysql << 'EOSQL'
CREATE DATABASE IF NOT EXISTS sauroraa_pro CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS 'sauroraa'@'localhost' IDENTIFIED BY 'sauroraa_password';
GRANT ALL PRIVILEGES ON sauroraa_pro.* TO 'sauroraa'@'localhost';
FLUSH PRIVILEGES;
EOSQL
    
    # Generate Prisma client
    print_status "Generating Prisma client..."
    npx prisma generate
    
    # Run migrations
    print_status "Running database migrations..."
    npx prisma db push
    
    print_status "Database setup complete"
}

# Build application
build_app() {
    print_step "Building application..."
    
    cd "$DEPLOY_DIR"
    
    npm run build
    
    print_status "Application built successfully"
}

# Create systemd service
create_service() {
    print_step "Creating systemd service..."
    
    cat > /tmp/${SERVICE_NAME}.service << EOF
[Unit]
Description=Sauroraa Pro - Next.js Application
After=network.target mariadb.service

[Service]
Type=simple
User=www-data
Group=www-data
WorkingDirectory=$DEPLOY_DIR
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=10
Environment=NODE_ENV=production
EnvironmentFile=$DEPLOY_DIR/.env

# Logging
StandardOutput=append:/var/log/${PROJECT_NAME}/stdout.log
StandardError=append:/var/log/${PROJECT_NAME}/stderr.log

# Security
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=true
ReadWritePaths=$DEPLOY_DIR
EOF

    $SUDO cp /tmp/${SERVICE_NAME}.service /etc/systemd/system/
    $SUDO systemctl daemon-reload
    
    print_status "Systemd service created"
}

# Start/restart service
manage_service() {
    print_step "Managing service..."
    
    $SUDO systemctl enable $SERVICE_NAME
    
    if systemctl is-active --quiet $SERVICE_NAME; then
        print_warning "Restarting service..."
        $SUDO systemctl restart $SERVICE_NAME
    else
        print_warning "Starting service..."
        $SUDO systemctl start $SERVICE_NAME
    fi
    
    sleep 3
    
    if systemctl is-active --quiet $SERVICE_NAME; then
        print_status "Service is running"
        print_status "Application URL: http://localhost:3000"
    else
        print_error "Service failed to start"
        $SUDO systemctl status $SERVICE_NAME --no-pager
        exit 1
    fi
}

# Setup nginx reverse proxy
setup_nginx() {
    print_step "Setting up Nginx..."
    
    if ! command -v nginx &> /dev/null; then
        print_warning "Installing Nginx..."
        $SUDO apt-get update && $SUDO apt-get install -y nginx
    fi
    
    # Create nginx config
    cat > /tmp/${SERVICE_NAME}.conf << EOF
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

    $SUDO cp /tmp/${SERVICE_NAME}.conf /etc/nginx/sites-available/${SERVICE_NAME}
    $SUDO ln -sf /etc/nginx/sites-available/${SERVICE_NAME} /etc/nginx/sites-enabled/
    $SUDO rm -f /etc/nginx/sites-enabled/default
    
    # Test nginx config
    $SUDO nginx -t
    
    $SUDO systemctl restart nginx
    
    print_status "Nginx configured"
}

# Setup firewall
setup_firewall() {
    print_step "Configuring firewall..."
    
    if command -v ufw &> /dev/null; then
        $SUDO ufw allow OpenSSH
        $SUDO ufw allow 'Nginx Full'
        $SUDO ufw --force enable
        print_status "UFW firewall configured"
    else
        print_warning "UFW not found, skipping firewall setup"
    fi
}

# Secure MariaDB
secure_mariadb() {
    print_step "Securing MariaDB..."
    
    print_warning "Run 'sudo mysql_secure_installation' manually to secure your database"
}

# Verify deployment
verify_deployment() {
    print_step "Verifying deployment..."
    
    # Check service status
    if systemctl is-active --quiet $SERVICE_NAME; then
        print_status "Application service: Running"
    else
        print_error "Application service: Not running"
        return 1
    fi
    
    # Check nginx status
    if systemctl is-active --quiet nginx; then
        print_status "Nginx: Running"
    else
        print_warning "Nginx: Not running"
    fi
    
    # Check MariaDB status
    if systemctl is-active --quiet mariadb; then
        print_status "MariaDB: Running"
    else
        print_warning "MariaDB: Not running"
    fi
    
    # Check ports
    if command -v ss &> /dev/null; then
        if ss -tuln | grep -q ':3000'; then
            print_status "Port 3000: Listening"
        fi
        if ss -tuln | grep -q ':80'; then
            print_status "Port 80: Listening"
        fi
    fi
    
    print_status "Deployment verification complete"
}

# Display summary
display_summary() {
    echo ""
    echo "========================================================================"
    echo -e "${GREEN}Deployment Complete!${NC}"
    echo "========================================================================"
    echo ""
    echo "Application: $PROJECT_NAME"
    echo "Directory: $DEPLOY_DIR"
    echo "Database: MariaDB (sauroraa_pro)"
    echo ""
    echo "Useful commands:"
    echo -e "  ${BLUE}View logs:${NC}    sudo journalctl -u $SERVICE_NAME -f"
    echo -e "  ${BLUE}Restart app:${NC}  sudo systemctl restart $SERVICE_NAME"
    echo -e "  ${BLUE}Stop app:${NC}     sudo systemctl stop $SERVICE_NAME"
    echo -e "  ${BLUE}App status:${NC}   sudo systemctl status $SERVICE_NAME"
    echo ""
    echo "Database commands:"
    echo -e "  ${BLUE}Connect DB:${NC}   sudo mysql -u root -p"
    echo ""
    echo "Configuration:"
    echo -e "  ${BLUE}Edit .env:${NC}    sudo nano $DEPLOY_DIR/.env"
    echo -e "  ${BLUE}Edit nginx:${NC}   sudo nano /etc/nginx/sites-available/$SERVICE_NAME"
    echo ""
    echo "========================================================================"
}

# ============================================================================
# Main Execution
# ============================================================================

main() {
    echo ""
    echo "========================================================================"
    echo -e "${BLUE}Sauroraa Pro - VPS Deployment Script (MariaDB)${NC}"
    echo "========================================================================"
    echo ""
    
    check_root
    check_prerequisites
    setup_directories
    deploy_code
    install_dependencies
    setup_env
    setup_database
    build_app
    create_service
    manage_service
    setup_nginx
    setup_firewall
    verify_deployment
    display_summary
}

# Run main function
main "$@"
