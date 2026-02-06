-- Seed Data for sauroraa_pro
-- Test data for development

-- Users
-- Password for all users: "password123"
-- Hash generated with bcryptjs (10 rounds)
INSERT INTO users (email, password_hash, first_name, last_name, phone, role, email_verified) VALUES
('admin@sauroraa.be', '$2a$10$rQ5/8K.xEZ3xZ8mX5yU5xOFZJ3n0vQ5K4Z3J5mX5yU5xOFZJ3n0vQ', 'Admin', 'Sauroraa', '+32 123 456 789', 'admin', TRUE),
('client@example.com', '$2a$10$rQ5/8K.xEZ3xZ8mX5yU5xOFZJ3n0vQ5K4Z3J5mX5yU5xOFZJ3n0vQ', 'Jean', 'Dupont', '+32 987 654 321', 'client', TRUE),
('marie@example.com', '$2a$10$rQ5/8K.xEZ3xZ8mX5yU5xOFZJ3n0vQ5K4Z3J5mX5yU5xOFZJ3n0vQ', 'Marie', 'Martin', '+32 456 789 123', 'client', TRUE);

-- Categories
INSERT INTO categories (name, slug, description, image_url) VALUES
('Sonorisation', 'sonorisation', 'Matériel de sonorisation professionnel pour tous types d\'événements', '/images/categories/sono.jpg'),
('Éclairage', 'eclairage', 'Systèmes d\'éclairage scénique et événementiel', '/images/categories/light.jpg'),
('Scène & Structure', 'scene-structure', 'Podiums, scènes modulaires et structures porteuses', '/images/categories/scene.jpg'),
('Pagodes & Chapiteaux', 'pagodes-chapiteaux', 'Tentes, pagodes et chapiteaux pour événements extérieurs', '/images/categories/pagode.jpg'),
('Mobilier', 'mobilier', 'Tables, chaises, bars et mobilier événementiel', '/images/categories/mobilier.jpg'),
('Effets Spéciaux', 'effets-speciaux', 'Machines à fumée, lasers, projecteurs LED', '/images/categories/effets.jpg');

-- Materiel
INSERT INTO materiel (category_id, name, slug, description, technical_specs, price_per_day, price_per_weekend, price_per_week, quantity_available, images, featured, status) VALUES
-- Sonorisation
(1, 'Enceinte Line Array 2000W', 'enceinte-line-array-2000w', 'Enceinte professionnelle line array de 2000W RMS, idéale pour événements de 200-500 personnes',
  '{"puissance": "2000W RMS", "impedance": "8 ohms", "reponse": "45Hz - 20kHz", "poids": "35kg"}',
  150.00, 270.00, 450.00, 4,
  '["https://picsum.photos/seed/enceinte1/800/600", "https://picsum.photos/seed/enceinte2/800/600"]',
  TRUE, 'available'),

(1, 'Console de Mixage 32 Canaux', 'console-mixage-32-canaux', 'Console de mixage numérique 32 canaux avec effets intégrés',
  '{"canaux": "32", "effets": "reverb, delay, compresseur", "interfaces": "USB, Ethernet"}',
  120.00, 200.00, 350.00, 2,
  '["https://picsum.photos/seed/console1/800/600"]',
  TRUE, 'available'),

(1, 'Micro Sans Fil HF', 'micro-sans-fil-hf', 'Système micro sans fil HF professionnel avec récepteur',
  '{"frequence": "UHF 500-900MHz", "portee": "100m", "autonomie": "8h"}',
  35.00, 60.00, 100.00, 8,
  '["https://picsum.photos/seed/micro1/800/600"]',
  FALSE, 'available'),

-- Éclairage
(2, 'Projecteur LED PAR 64 RGB', 'projecteur-led-par-64-rgb', 'Projecteur LED PAR 64 RGBW avec DMX, consommation faible',
  '{"puissance": "200W LED", "dmx": "4 canaux", "angle": "25°"}',
  25.00, 45.00, 75.00, 20,
  '["https://picsum.photos/seed/par1/800/600"]',
  TRUE, 'available'),

(2, 'Lyre Beam 230W', 'lyre-beam-230w', 'Lyre motorisée beam 230W avec gobos et prismes',
  '{"puissance": "230W", "dmx": "16 canaux", "gobos": "14 + blanc", "prismes": "3 et 8 facettes"}',
  80.00, 140.00, 240.00, 6,
  '["https://picsum.photos/seed/lyre1/800/600", "https://picsum.photos/seed/lyre2/800/600"]',
  TRUE, 'available'),

(2, 'Barre LED Wash 12x10W RGBW', 'barre-led-wash-12x10w', 'Barre LED wash 12 LEDs de 10W RGBW avec contrôle DMX',
  '{"leds": "12x10W RGBW", "dmx": "8 canaux", "angle": "40°"}',
  30.00, 50.00, 85.00, 15,
  '["https://picsum.photos/seed/barre1/800/600"]',
  FALSE, 'available'),

-- Scène & Structure
(3, 'Podium Modulaire 2x1m', 'podium-modulaire-2x1m', 'Élément de podium modulaire 2x1m, hauteur ajustable 40-80cm',
  '{"dimensions": "200x100cm", "hauteur": "40-80cm ajustable", "charge": "750kg/m²"}',
  25.00, 40.00, 70.00, 30,
  '["https://picsum.photos/seed/podium1/800/600"]',
  FALSE, 'available'),

(3, 'Scène Mobile 6x4m', 'scene-mobile-6x4m', 'Scène mobile complète 6x4m avec toit et pieds réglables',
  '{"dimensions": "6x4m", "hauteur": "4-6m", "couverture": "avec toit"}',
  350.00, 600.00, 1000.00, 2,
  '["https://picsum.photos/seed/scene1/800/600", "https://picsum.photos/seed/scene2/800/600"]',
  TRUE, 'available'),

-- Pagodes & Chapiteaux
(4, 'Pagode 3x3m Blanche', 'pagode-3x3m-blanche', 'Pagode pliante professionnelle 3x3m avec bâches blanches',
  '{"dimensions": "3x3m", "hauteur": "2.5-3m", "couleur": "blanc", "baches": "4 côtés amovibles"}',
  45.00, 80.00, 130.00, 10,
  '["https://picsum.photos/seed/pagode1/800/600"]',
  TRUE, 'available'),

(4, 'Pagode 5x5m Premium', 'pagode-5x5m-premium', 'Grande pagode 5x5m qualité premium, structure renforcée',
  '{"dimensions": "5x5m", "hauteur": "3-3.5m", "structure": "aluminium renforcé"}',
  90.00, 160.00, 270.00, 5,
  '["https://picsum.photos/seed/pagode5/800/600", "https://picsum.photos/seed/pagode5b/800/600"]',
  TRUE, 'available'),

(4, 'Chapiteau 10x15m', 'chapiteau-10x15m', 'Grand chapiteau 10x15m pour événements jusqu\'à 150 personnes',
  '{"dimensions": "10x15m", "hauteur": "4m", "capacite": "150 personnes assises"}',
  400.00, 700.00, 1200.00, 2,
  '["https://picsum.photos/seed/chapiteau1/800/600"]',
  TRUE, 'available'),

-- Mobilier
(5, 'Table Ronde Ø120cm', 'table-ronde-120cm', 'Table ronde diamètre 120cm, capacité 8 personnes',
  '{"diametre": "120cm", "hauteur": "74cm", "capacite": "8 personnes"}',
  8.00, 14.00, 24.00, 50,
  '["https://picsum.photos/seed/table1/800/600"]',
  FALSE, 'available'),

(5, 'Chaise Pliante Blanche', 'chaise-pliante-blanche', 'Chaise pliante professionnelle blanche',
  '{"couleur": "blanc", "materiau": "résine", "pliable": "oui"}',
  2.50, 4.00, 7.00, 200,
  '["https://picsum.photos/seed/chaise1/800/600"]',
  FALSE, 'available'),

(5, 'Bar Lumineux LED RGB', 'bar-lumineux-led-rgb', 'Comptoir bar lumineux avec éclairage LED RGB intégré',
  '{"dimensions": "150x50x110cm", "led": "RGB avec télécommande"}',
  60.00, 100.00, 170.00, 8,
  '["https://picsum.photos/seed/bar1/800/600", "https://picsum.photos/seed/bar2/800/600"]',
  TRUE, 'available'),

-- Effets Spéciaux
(6, 'Machine à Fumée 1500W', 'machine-fumee-1500w', 'Machine à fumée professionnelle 1500W avec télécommande',
  '{"puissance": "1500W", "reservoir": "2.5L", "portee": "8m"}',
  35.00, 60.00, 100.00, 10,
  '["https://picsum.photos/seed/fumee1/800/600"]',
  FALSE, 'available'),

(6, 'Laser RGB 3W', 'laser-rgb-3w', 'Laser RGB 3W avec effets programmables et DMX',
  '{"puissance": "3W RGB", "dmx": "12 canaux", "effets": "50+ patterns"}',
  70.00, 120.00, 200.00, 4,
  '["https://picsum.photos/seed/laser1/800/600"]',
  TRUE, 'available');

-- Sample Reservations
INSERT INTO reservations (user_id, reservation_number, start_date, end_date, delivery_address, setup_required, status, subtotal, delivery_fee, setup_fee, total, notes) VALUES
(2, 'RES-2024-001', '2024-03-15', '2024-03-17', '123 Rue de la Fête, 1000 Bruxelles', TRUE, 'confirmed', 450.00, 50.00, 100.00, 600.00, 'Anniversaire 50 ans, montage à partir de 14h'),
(3, 'RES-2024-002', '2024-04-20', '2024-04-21', '456 Avenue du Parc, 4000 Liège', FALSE, 'pending', 180.00, 30.00, 0.00, 210.00, NULL);

-- Reservation Items
INSERT INTO reservation_items (reservation_id, materiel_id, quantity, price_per_unit, subtotal) VALUES
(1, 1, 2, 150.00, 300.00),
(1, 4, 6, 25.00, 150.00),
(2, 9, 2, 90.00, 180.00);

-- Sample Devis
INSERT INTO devis (user_id, devis_number, event_date, event_type, event_location, guest_count, services_requested, materiel_requested, status, notes) VALUES
(2, 'DEV-2024-001', '2024-05-10', 'Mariage', 'Château de Beloeil', 120,
  '["Organisation complète", "DJ", "Montage/Démontage"]',
  '["Chapiteau 10x15m", "Sonorisation", "Éclairage d\'ambiance"]',
  'sent', 'Demande urgente, réponse souhaitée sous 48h');
