# Database Setup

## Installation

### 1. Créer la base de données

```bash
mysql -u root -p
```

```sql
CREATE DATABASE sauroraa_pro CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;
```

### 2. Importer le schéma

```bash
mysql -u root -p sauroraa_pro < database/schema.sql
```

### 3. Importer les données de test

```bash
mysql -u root -p sauroraa_pro < database/seed.sql
```

## Configuration

Assurez-vous que les variables d'environnement sont correctement configurées dans `.env.local` :

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=sauroraa_pro
```

## Utilisateurs de test

### Admin
- Email: `admin@sauroraa.be`
- Password: `password123`
- Role: Admin

### Clients
- Email: `client@example.com`
- Password: `password123`
- Role: Client

- Email: `marie@example.com`
- Password: `password123`
- Role: Client

## Schéma de la base

### Tables principales

1. **users** - Utilisateurs (clients et admins)
2. **categories** - Catégories de matériel
3. **materiel** - Équipements disponibles à la location
4. **reservations** - Réservations des clients
5. **reservation_items** - Articles dans chaque réservation
6. **devis** - Demandes de devis
7. **payments** - Paiements (Vivapayments)
8. **availability_calendar** - Disponibilité du matériel

## Commandes utiles

### Réinitialiser la base

```bash
mysql -u root -p sauroraa_pro < database/schema.sql
mysql -u root -p sauroraa_pro < database/seed.sql
```

### Exporter la base

```bash
mysqldump -u root -p sauroraa_pro > backup.sql
```

### Vérifier les données

```sql
-- Nombre d'utilisateurs
SELECT COUNT(*) FROM users;

-- Liste des catégories
SELECT * FROM categories;

-- Matériel disponible
SELECT m.name, c.name as category, m.price_per_day, m.status
FROM materiel m
JOIN categories c ON m.category_id = c.id
WHERE m.status = 'available';
```
