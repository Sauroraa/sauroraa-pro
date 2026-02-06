'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Home as HomeIcon, Filter } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function PagodesPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all')

  const subcategories = [
    { id: 'all', name: 'Tout afficher' },
    { id: 'structure', name: 'Structure' },
    { id: 'levage', name: 'Levage' },
    { id: 'accessoires', name: 'Accessoires' },
  ]

  const products = [
    {
      name: 'Pagode 3x3m Blanche',
      subcategory: 'structure',
      description: 'Pagode pliante professionnelle avec bâches',
      specs: '3x3m, hauteur 2.5-3m, 4 côtés amovibles',
      priceDay: '45€',
      priceWeekend: '80€',
      priceWeek: '130€',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2b7?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Pagode 4x4m',
      subcategory: 'structure',
      description: 'Pagode intermédiaire pour événements moyens',
      specs: '4x4m, hauteur 2.8m, structure renforcée',
      priceDay: '65€',
      priceWeekend: '110€',
      priceWeek: '190€',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Pagode 5x5m Premium',
      subcategory: 'structure',
      description: 'Grande pagode qualité premium renforcée',
      specs: '5x5m, hauteur 3-3.5m, structure aluminium',
      priceDay: '90€',
      priceWeekend: '160€',
      priceWeek: '270€',
      image: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Chapiteau 6x6m',
      subcategory: 'structure',
      description: 'Chapiteau compact pour 40 personnes',
      specs: '6x6m, hauteur 3m, capacité 40 personnes',
      priceDay: '150€',
      priceWeekend: '260€',
      priceWeek: '450€',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Chapiteau 10x15m',
      subcategory: 'structure',
      description: 'Grand chapiteau pour événements jusqu\'à 150 personnes',
      specs: '10x15m, hauteur 4m, capacité 150 personnes',
      priceDay: '400€',
      priceWeekend: '700€',
      priceWeek: '1200€',
      image: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Pack Pagodes 3x 3x3m',
      subcategory: 'structure',
      description: 'Pack de 3 pagodes 3x3m pour grand événement',
      specs: '3x pagodes 3x3m, montage inclus',
      priceDay: '120€',
      priceWeekend: '210€',
      priceWeek: '360€',
      image: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Palan Électrique 500kg',
      subcategory: 'levage',
      description: 'Palan électrique professionnel avec chaîne',
      specs: '500kg, hauteur 6m, télécommande',
      priceDay: '85€',
      priceWeekend: '145€',
      priceWeek: '260€',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Palan Électrique 1000kg',
      subcategory: 'levage',
      description: 'Palan électrique haute capacité',
      specs: '1000kg, hauteur 8m, vitesse variable',
      priceDay: '120€',
      priceWeekend: '200€',
      priceWeek: '360€',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Treuil Manuel 1000kg',
      subcategory: 'levage',
      description: 'Treuil manuel avec câble acier',
      specs: '1000kg, câble 20m, robuste',
      priceDay: '45€',
      priceWeekend: '75€',
      priceWeek: '135€',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Poids de Lestage 25kg (x4)',
      subcategory: 'accessoires',
      description: 'Lot de 4 poids de lestage pour pagodes',
      specs: '4x 25kg, plastique remplissable',
      priceDay: '20€',
      priceWeekend: '35€',
      priceWeek: '60€',
      image: 'https://images.unsplash.com/photo-1614963366795-7d51177d2b08?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Kit Ancrage Sol',
      subcategory: 'accessoires',
      description: 'Kit d\'ancrage avec piquets et sangles',
      specs: '8 piquets + 4 sangles renforcées',
      priceDay: '15€',
      priceWeekend: '25€',
      priceWeek: '45€',
      image: 'https://images.unsplash.com/photo-1614963366795-7d51177d2b08?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Parois Transparentes (x4)',
      subcategory: 'accessoires',
      description: 'Lot de 4 parois transparentes pour pagode 3x3m',
      specs: 'PVC transparent, fermetures éclair',
      priceDay: '30€',
      priceWeekend: '50€',
      priceWeek: '90€',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2b7?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Éclairage LED Guirlande 20m',
      subcategory: 'accessoires',
      description: 'Guirlande LED pour décoration pagode',
      specs: '20m, blanc chaud, IP44',
      priceDay: '25€',
      priceWeekend: '45€',
      priceWeek: '75€',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
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
            <HomeIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Pagodes & Scène</h1>
            <p className="text-gray-400 mt-2">{filteredProducts.length} produits disponibles</p>
          </div>
        </div>

        <p className="text-xl text-gray-300 mb-8 max-w-3xl">
          Structures modulaires pour tous vos événements extérieurs.
          Pagodes de 3x3m à 10x15m avec montage et démontage inclus.
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
          <h2 className="text-2xl font-bold text-white mb-4">Montage inclus</h2>
          <p className="text-gray-300 mb-4">
            Tous nos chapiteaux et pagodes sont livrés avec montage et démontage par nos équipes techniques.
            Nous nous occupons de tout !
          </p>
          <ul className="text-gray-400 space-y-2">
            <li>✓ Livraison et montage inclus</li>
            <li>✓ Démontage et enlèvement</li>
            <li>✓ Structures conformes aux normes</li>
            <li>✓ Assurance tous risques</li>
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
