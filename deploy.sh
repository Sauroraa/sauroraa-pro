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

print_status() { echo -e "${GREEN}[✓]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[!]${NC} $1"; }
print_error() { echo -e "${RED}[✗]${NC} $1"; }
print_step() { echo -e "${BLUE}[→]${NC} $1"; }

check_root() {
    [[ $EUID -eq 0 ]] && SUDO="" || SUDO="sudo"
}

check_prerequisites() {
    print_step "Checking Docker..."
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
    
    if ! command -v git &> /dev/null; then
        $SUDO apt-get update && $SUDO apt-get install -y git
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
    
    print_status "Containers started"
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
    $SUDO docker compose exec -T db mysql -u sauroraa -psauroraa_password sauroraa_pro < database/schema.sql 2>/dev/null || \
    $SUDO docker compose exec -T db mysql -u root -proot_password sauroraa_pro < database/schema.sql 2>/dev/null || \
    print_warning "Schema may already exist"
    
    print_status "Database ready"
}

verify() {
    print_step "Verifying..."
    cd "$DEPLOY_DIR"
    
    if $SUDO docker compose ps | grep -q "Up"; then
        print_status "App: Running"
    else
        print_warning "Check logs with: sudo docker compose logs"
    fi
}

main() {
    echo ""
    echo "========================================================================"
    echo -e "${BLUE}Sauroraa Pro - Docker Deployment${NC}"
    echo "========================================================================"
    echo ""
    
    check_root
    check_prerequisites
    setup_directories
    deploy_code
    start_docker
    wait_for_db
    setup_db
    verify
    
    echo ""
    echo "========================================================================"
    echo -e "${GREEN}Deployment Complete!${NC}"
    echo "========================================================================"
    echo ""
    echo "Commands:"
    echo -e "  ${BLUE}Logs:${NC}   cd $DEPLOY_DIR && sudo docker compose logs -f"
    echo -e "  ${BLUE}Restart:${NC} cd $DEPLOY_DIR && sudo docker compose restart"
    echo -e "  ${BLUE}Stop:${NC}   cd $DEPLOY_DIR && sudo docker compose down"
    echo ""
    echo "App URL: http://localhost:3000"
    echo "========================================================================"
}

main "$@"
