'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Lightbulb, Filter } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function EclairagePage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all')

  const subcategories = [
    { id: 'all', name: 'Tout afficher' },
    { id: 'commande', name: 'Commande' },
    { id: 'motorise', name: 'Motorisé' },
    { id: 'poursuites', name: 'Poursuites' },
    { id: 'black-light', name: 'Black-Light' },
    { id: 'decharge', name: 'Décharge' },
    { id: 'dimmer', name: 'Dimmer' },
    { id: 'exterieur', name: 'Extérieur' },
    { id: 'halogene', name: 'Halogène' },
    { id: 'lasers', name: 'Lasers' },
    { id: 'led', name: 'LED' },
    { id: 'divers', name: 'Divers' },
  ]

  const products = [
    {
      name: 'Console DMX 512 Canaux',
      subcategory: 'commande',
      description: 'Console DMX 512 canaux avec écran tactile',
      specs: '512 canaux, 12 scènes, USB',
      priceDay: '95€',
      priceWeekend: '160€',
      priceWeek: '290€',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Contrôleur DMX Portable 192 Canaux',
      subcategory: 'commande',
      description: 'Contrôleur DMX compact et portable',
      specs: '192 canaux, 12 fixtures',
      priceDay: '50€',
      priceWeekend: '85€',
      priceWeek: '150€',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Lyre Beam 230W',
      subcategory: 'motorise',
      description: 'Lyre motorisée beam avec gobos et prismes',
      specs: '230W, DMX 16 canaux, 14 gobos + blanc',
      priceDay: '80€',
      priceWeekend: '140€',
      priceWeek: '240€',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Lyre Wash LED 19x15W RGBW',
      subcategory: 'motorise',
      description: 'Lyre wash LED avec zoom motorisé',
      specs: '19x15W RGBW, zoom 7-50°',
      priceDay: '90€',
      priceWeekend: '155€',
      priceWeek: '280€',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Lyre Spot 150W',
      subcategory: 'motorise',
      description: 'Lyre spot avec roue de gobo et prisme',
      specs: '150W LED, 8 gobos, prisme 3 faces',
      priceDay: '70€',
      priceWeekend: '120€',
      priceWeek: '210€',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Poursuite HMI 575W',
      subcategory: 'poursuites',
      description: 'Poursuite professionnelle HMI 575W',
      specs: '575W HMI, portée 50m, iris/zoom',
      priceDay: '110€',
      priceWeekend: '190€',
      priceWeek: '340€',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Poursuite LED 200W',
      subcategory: 'poursuites',
      description: 'Poursuite à LED avec zoom manuel',
      specs: '200W LED blanc chaud, zoom 12-25°',
      priceDay: '85€',
      priceWeekend: '145€',
      priceWeek: '260€',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Projecteur Black Light UV 400W',
      subcategory: 'black-light',
      description: 'Projecteur UV lumière noire 400W',
      specs: '400W, angle 60°, ballast électronique',
      priceDay: '40€',
      priceWeekend: '70€',
      priceWeek: '120€',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Barre LED UV 18x3W',
      subcategory: 'black-light',
      description: 'Barre LED UV pour effet lumière noire',
      specs: '18x3W UV, DMX, angle 120°',
      priceDay: '35€',
      priceWeekend: '60€',
      priceWeek: '105€',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Stroboscope 1500W',
      subcategory: 'decharge',
      description: 'Stroboscope puissant 1500W avec DMX',
      specs: '1500W, DMX 2 canaux, 0-10 Hz',
      priceDay: '45€',
      priceWeekend: '75€',
      priceWeek: '135€',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Flash Atomic 3000W',
      subcategory: 'decharge',
      description: 'Flash très puissant effet éclair',
      specs: '3000W, DMX, télécommande',
      priceDay: '65€',
      priceWeekend: '110€',
      priceWeek: '195€',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Gradateur DMX 12 Canaux',
      subcategory: 'dimmer',
      description: 'Pack dimmer 12 canaux avec DMX',
      specs: '12x 3kW, DMX 512, rack 19"',
      priceDay: '75€',
      priceWeekend: '130€',
      priceWeek: '230€',
      image: 'https://images.unsplash.com/photo-1614963366795-7d51177d2b08?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Gradateur 4 Canaux',
      subcategory: 'dimmer',
      description: 'Gradateur 4 canaux portable',
      specs: '4x 2.3kW, DMX',
      priceDay: '40€',
      priceWeekend: '70€',
      priceWeek: '125€',
      image: 'https://images.unsplash.com/photo-1614963366795-7d51177d2b08?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Projecteur LED IP65 200W',
      subcategory: 'exterieur',
      description: 'Projecteur LED étanche pour extérieur',
      specs: '200W RGBW, IP65, DMX',
      priceDay: '55€',
      priceWeekend: '95€',
      priceWeek: '170€',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Blinder LED Outdoor IP65',
      subcategory: 'exterieur',
      description: 'Blinder LED 8x50W étanche',
      specs: '8x50W blanc chaud, IP65',
      priceDay: '70€',
      priceWeekend: '120€',
      priceWeek: '210€',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'PAR 64 Halogène 1000W',
      subcategory: 'halogene',
      description: 'Projecteur PAR 64 halogène classique',
      specs: '1000W, CP60/61/62, volets',
      priceDay: '15€',
      priceWeekend: '25€',
      priceWeek: '45€',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'PC 1000W',
      subcategory: 'halogene',
      description: 'Projecteur PC (Plano Convexe) 1000W',
      specs: '1000W, lentille PC, volets',
      priceDay: '20€',
      priceWeekend: '35€',
      priceWeek: '60€',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Laser RGB 3W',
      subcategory: 'lasers',
      description: 'Laser RGB avec effets et DMX',
      specs: '3W RGB, DMX 12 canaux, 50+ patterns',
      priceDay: '70€',
      priceWeekend: '120€',
      priceWeek: '200€',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Laser Vert 500mW',
      subcategory: 'lasers',
      description: 'Laser vert professionnel avec effets',
      specs: '500mW, effets géométriques, DMX',
      priceDay: '90€',
      priceWeekend: '155€',
      priceWeek: '280€',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Projecteur LED PAR 64 RGB',
      subcategory: 'led',
      description: 'PAR LED RGBW 200W avec DMX',
      specs: '200W LED, DMX 4 canaux, angle 25°',
      priceDay: '25€',
      priceWeekend: '45€',
      priceWeek: '75€',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Barre LED Wash 12x10W RGBW',
      subcategory: 'led',
      description: 'Barre LED wash 12 LEDs de 10W RGBW',
      specs: '12x10W RGBW, DMX 8 canaux, angle 40°',
      priceDay: '30€',
      priceWeekend: '50€',
      priceWeek: '85€',
      image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Blinder LED 8x50W',
      subcategory: 'led',
      description: 'Blinder LED blanc chaud/froid',
      specs: '8x50W 2in1, DMX, gradation',
      priceDay: '55€',
      priceWeekend: '95€',
      priceWeek: '170€',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Machine à Fumée 1500W',
      subcategory: 'divers',
      description: 'Machine à fumée avec télécommande',
      specs: '1500W, réservoir 2.5L, portée 8m',
      priceDay: '35€',
      priceWeekend: '60€',
      priceWeek: '100€',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Machine à Brouillard Lourd',
      subcategory: 'divers',
      description: 'Machine à brouillard au sol',
      specs: 'Brouillard lourd, glace carbonique',
      priceDay: '75€',
      priceWeekend: '130€',
      priceWeek: '230€',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Pack Éclairage Complet',
      subcategory: 'divers',
      description: 'Pack complet pour soirée (8 PAR + barre + console)',
      specs: '8x PAR LED + 1 barre wash + console DMX',
      priceDay: '150€',
      priceWeekend: '260€',
      priceWeek: '450€',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
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
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Éclairage</h1>
            <p className="text-gray-400 mt-2">{filteredProducts.length} produits disponibles</p>
          </div>
        </div>

        <p className="text-xl text-gray-300 mb-8 max-w-3xl">
          Solutions d'éclairage professionnel pour tous vos événements.
          Lyres, PAR LED, lasers et effets spéciaux pour créer l'ambiance parfaite.
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

        <div className="mt-16 text-center">
          <Link href="/devis">
            <Button size="lg">Demander un devis personnalisé</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
