'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Armchair, Filter } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function MobilierPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all')

  const subcategories = [
    { id: 'all', name: 'Tout afficher' },
    { id: 'tables', name: 'Tables' },
    { id: 'chaises', name: 'Chaises' },
    { id: 'bars', name: 'Bars & Comptoirs' },
    { id: 'lounge', name: 'Lounge' },
    { id: 'podium', name: 'Podium' },
    { id: 'textiles', name: 'Textiles' },
    { id: 'divers', name: 'Divers' },
  ]

  const products = [
    {
      name: 'Table Ronde Ø120cm',
      subcategory: 'tables',
      description: 'Table ronde capacité 8 personnes',
      specs: 'Ø120cm, hauteur 74cm, 8 personnes',
      priceDay: '8€',
      priceWeekend: '14€',
      priceWeek: '24€',
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Table Rectangulaire 180x75cm',
      subcategory: 'tables',
      description: 'Table rectangulaire 6-8 personnes',
      specs: '180x75cm, pliable, 6-8 personnes',
      priceDay: '10€',
      priceWeekend: '17€',
      priceWeek: '30€',
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Table Cocktail Haute',
      subcategory: 'tables',
      description: 'Table haute pour cocktail Ø80cm',
      specs: 'Ø80cm, hauteur 110cm, plateau blanc',
      priceDay: '12€',
      priceWeekend: '20€',
      priceWeek: '35€',
      image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Chaise Pliante Blanche',
      subcategory: 'chaises',
      description: 'Chaise pliante professionnelle en résine',
      specs: 'Résine blanche, pliable, empilable',
      priceDay: '2.50€',
      priceWeekend: '4€',
      priceWeek: '7€',
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Chaise Napoleon III',
      subcategory: 'chaises',
      description: 'Chaise Napoleon dorée ou argentée',
      specs: 'Métal, coussin rembourré, élégante',
      priceDay: '4€',
      priceWeekend: '7€',
      priceWeek: '12€',
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Tabouret de Bar Haut',
      subcategory: 'chaises',
      description: 'Tabouret de bar réglable en hauteur',
      specs: 'Hauteur réglable, dossier, noir/blanc',
      priceDay: '5€',
      priceWeekend: '9€',
      priceWeek: '15€',
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Bar Lumineux LED RGB',
      subcategory: 'bars',
      description: 'Comptoir bar avec éclairage LED intégré',
      specs: '150x50x110cm, LED RGB télécommande',
      priceDay: '60€',
      priceWeekend: '100€',
      priceWeek: '170€',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Comptoir Bar Droit 3m',
      subcategory: 'bars',
      description: 'Bar droit modulaire 3 mètres',
      specs: '300x60x110cm, modulaire, blanc',
      priceDay: '80€',
      priceWeekend: '140€',
      priceWeek: '240€',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Bar d\'Angle Lumineux',
      subcategory: 'bars',
      description: 'Bar d\'angle LED avec rangement',
      specs: 'Angle 90°, LED RGB, étagères',
      priceDay: '70€',
      priceWeekend: '120€',
      priceWeek: '210€',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Fauteuil Lounge Design',
      subcategory: 'lounge',
      description: 'Fauteuil lounge moderne blanc/noir',
      specs: 'Design contemporain, confortable',
      priceDay: '25€',
      priceWeekend: '45€',
      priceWeek: '75€',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Canapé 2 Places Blanc',
      subcategory: 'lounge',
      description: 'Canapé 2 places design moderne',
      specs: '140x80x75cm, similicuir blanc',
      priceDay: '45€',
      priceWeekend: '75€',
      priceWeek: '135€',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Pouf Lumineux LED',
      subcategory: 'lounge',
      description: 'Pouf cube lumineux avec LED RGB',
      specs: '40x40x40cm, LED RGB rechargeable',
      priceDay: '20€',
      priceWeekend: '35€',
      priceWeek: '60€',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Podium Modulaire 2x1m',
      subcategory: 'podium',
      description: 'Module de podium 2x1m hauteur réglable',
      specs: '200x100cm, hauteur 20-40-60cm',
      priceDay: '35€',
      priceWeekend: '60€',
      priceWeek: '105€',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Podium Scène 4x3m H60cm',
      subcategory: 'podium',
      description: 'Podium scène complet avec escalier',
      specs: '4x3m, hauteur 60cm, escalier inclus',
      priceDay: '150€',
      priceWeekend: '260€',
      priceWeek: '450€',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Nappe Blanche + Housse Chaise',
      subcategory: 'textiles',
      description: 'Pack nappe + housse de chaise blanche',
      specs: 'Pour table ronde 120cm + chaise',
      priceDay: '5€',
      priceWeekend: '8€',
      priceWeek: '14€',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Chemin de Table Satin',
      subcategory: 'textiles',
      description: 'Chemin de table en satin 30x275cm',
      specs: '30x275cm, plusieurs couleurs',
      priceDay: '3€',
      priceWeekend: '5€',
      priceWeek: '9€',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Rideaux Voilage Blanc 3x3m',
      subcategory: 'textiles',
      description: 'Voilage décoratif pour pagode',
      specs: '3x3m, blanc, ignifugé',
      priceDay: '20€',
      priceWeekend: '35€',
      priceWeek: '60€',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Tapis Rouge 10m',
      subcategory: 'divers',
      description: 'Tapis rouge événementiel',
      specs: '100x1000cm, rouge, épaisseur 3mm',
      priceDay: '35€',
      priceWeekend: '60€',
      priceWeek: '105€',
      image: 'https://images.unsplash.com/photo-1614963366795-7d51177d2b08?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Parasol Chauffant Gaz',
      subcategory: 'divers',
      description: 'Parasol chauffant pour terrasse',
      specs: '13kW, gaz propane, inox',
      priceDay: '40€',
      priceWeekend: '70€',
      priceWeek: '120€',
      image: 'https://images.unsplash.com/photo-1614963366795-7d51177d2b08?w=800&h=600&fit=crop',
      available: true,
    },
  ]

  const filteredProducts = selectedSubcategory === 'all'
    ? products
    : products.filter(p => p.subcategory === selectedSubcategory)

  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/catalogue" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour au catalogue
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
            <Armchair className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Mobilier</h1>
            <p className="text-gray-400 mt-2">{filteredProducts.length} produits disponibles</p>
          </div>
        </div>

        <p className="text-xl text-gray-300 mb-8 max-w-3xl">
          Mobilier événementiel professionnel pour vos réceptions.
          Tables, chaises, bars lumineux et mobilier design pour créer l'ambiance parfaite.
        </p>

        {/* Filtres par sous-catégorie */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-semibold text-white">Filtrer par catégorie</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {subcategories.map((subcat) => (
              <button
                key={subcat.id}
                onClick={() => setSelectedSubcategory(subcat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedSubcategory === subcat.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
                }`}
              >
                {subcat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de produits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card key={index} hover className="overflow-hidden p-0">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {product.available && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full">
                    Disponible
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{product.description}</p>
                <p className="text-gray-500 text-xs mb-4">{product.specs}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Par jour</span>
                    <span className="text-blue-400 font-bold">{product.priceDay}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Weekend</span>
                    <span className="text-purple-400 font-bold">{product.priceWeekend}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Semaine</span>
                    <span className="text-pink-400 font-bold">{product.priceWeek}</span>
                  </div>
                </div>
                <Link href="/devis">
                  <Button className="w-full" size="sm">
                    Demander un devis
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">Aucun produit trouvé dans cette catégorie.</p>
          </div>
        )}

        <div className="mt-16 bg-dark-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Location flexible</h2>
          <p className="text-gray-300 mb-4">
            Louez le mobilier dont vous avez besoin, en quantité adaptée à votre événement.
            Tarifs dégressifs pour grandes quantités.
          </p>
          <ul className="text-gray-400 space-y-2">
            <li>✓ Livraison et installation incluses</li>
            <li>✓ Mobilier propre et en excellent état</li>
            <li>✓ Tarifs dégressifs dès 50 unités</li>
            <li>✓ Formules tout compris disponibles</li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <Link href="/devis">
            <Button size="lg">Demander un devis personnalisé</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
