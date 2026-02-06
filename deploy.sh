#!/bin/bash

# ============================================================================
# Sauroraa Pro - Docker VPS Deployment Script
# ============================================================================
# This script deploys the application using Docker Compose
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
COMPOSE_FILE="docker-compose.yml"

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
    
    # Check Docker
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    print_status "Docker version: $(docker --version)"
    
    # Check Docker Compose
    if ! command -v docker compose &> /dev/null; then
        print_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi
    print_status "Docker Compose version: $(docker compose version)"
    
    # Check Git
    if ! command -v git &> /dev/null; then
        $SUDO apt-get update && $SUDO apt-get install -y git
    fi
    print_status "Git is available"
}

# Create deployment directory
setup_directories() {
    print_step "Setting up directories..."
    
    $SUDO mkdir -p "$DEPLOY_DIR"
    $SUDO chown -R $(whoami):$(whoami) "$DEPLOY_DIR" 2>/dev/null || true
    
    print_status "Directories created"
}

# Clone or update repository
deploy_code() {
    print_step "Deploying code from GitHub..."
    
    cd "$DEPLOY_DIR"
    
    if [[ -d ".git" ]]; then
        print_warning "Repository already exists. Pulling latest changes..."
        git fetch origin
        git reset --hard "origin/main"
    else
        print_status "Cloning repository..."
        git clone https://github.com/Sauroraa/sauroraa-pro.git "$DEPLOY_DIR"
    fi
    
    print_status "Code deployed successfully"
}

# Build and start containers
start_containers() {
    print_step "Building and starting containers..."
    
    cd "$DEPLOY_DIR"
    
    # Stop existing containers
    print_warning "Stopping existing containers..."
    $SUDO docker compose down 2>/dev/null || true
    
    # Build and start
    print_status "Building Docker images..."
    $SUDO docker compose build --no-cache
    
    print_status "Starting containers..."
    $SUDO docker compose up -d
    
    print_status "Containers started"
}

# Wait for database to be ready
wait_for_db() {
    print_step "Waiting for database to be ready..."
    
    max_attempts=30
    attempt=0
    
    while [[ $attempt -lt $max_attempts ]]; do
        if $SUDO docker compose exec -T db mysqladmin ping -h localhost --silent 2>/dev/null; then
            print_status "Database is ready!"
            return 0
        fi
        attempt=$((attempt + 1))
        echo -n "."
        sleep 2
    done
    
    print_error "Database failed to start"
    return 1
}

# Setup database
setup_database() {
    print_step "Setting up database..."
    
    cd "$DEPLOY_DIR"
    
    # Wait for database
    wait_for_db
    
    # Run schema if needed
    print_status "Running database schema..."
    $SUDO docker compose exec -T db mysql -u sauroraa -psauroraa_password sauroraa_pro < database/schema.sql 2>/dev/null || \
    $SUDO docker compose exec -T db mysql -u root -proot_password sauroraa_pro < database/schema.sql 2>/dev/null || \
    print_warning "Schema may already exist or needs manual setup"
    
    print_status "Database setup complete"
}

# Verify deployment
verify_deployment() {
    print_step "Verifying deployment..."
    
    cd "$DEPLOY_DIR"
    
    # Check container status
    if $SUDO docker compose ps | grep -q "Up"; then
        print_status "Application container: Running"
    else
        print_error "Application container may not be running"
        $SUDO docker compose logs --tail=20
    fi
    
    if $SUDO docker compose ps | grep "db" | grep -q "Up"; then
        print_status "Database container: Running"
    else
        print_warning "Database container may not be running"
    fi
    
    # Check ports
    if ss -tuln | grep -q ':3000'; then
        print_status "Port 3000: Listening"
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
    echo ""
    echo "Useful commands:"
    echo -e "  ${BLUE}View logs:${NC}    cd $DEPLOY_DIR && sudo docker compose logs -f"
    echo -e "  ${BLUE}Restart:${NC}     cd $DEPLOY_DIR && sudo docker compose restart"
    echo -e "  ${BLUE}Stop:${NC}         cd $DEPLOY_DIR && sudo docker compose down"
    echo -e "  ${BLUE}Status:${NC}      cd $DEPLOY_DIR && sudo docker compose ps"
    echo ""
    echo "URLs:"
    echo -e "  ${BLUE}App:${NC}         http://localhost:3000"
    echo -e "  ${BLUE}phpMyAdmin:${NC}  (not installed, use CLI below)"
    echo ""
    echo "Database access:"
    echo -e "  ${BLUE}Connect:${NC}     cd $DEPLOY_DIR && sudo docker compose exec db mysql -u sauroraa -psauroraa_password sauroraa_pro"
    echo ""
    echo "========================================================================"
}

# ============================================================================
# Main Execution
# ============================================================================

main() {
    echo ""
    echo "========================================================================"
    echo -e "${BLUE}Sauroraa Pro - Docker VPS Deployment Script${NC}"
    echo "========================================================================"
    echo ""
    
    check_root
    check_prerequisites
    setup_directories
    deploy_code
    start_containers
    wait_for_db
    setup_database
    verify_deployment
    display_summary
}

# Run main function
main "$@"
