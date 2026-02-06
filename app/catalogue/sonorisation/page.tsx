'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Music, Filter } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function SonorisationPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all')

  const subcategories = [
    { id: 'all', name: 'Tout afficher' },
    { id: 'amplificateurs', name: 'Amplificateurs' },
    { id: 'enceintes', name: 'Enceintes' },
    { id: 'kits', name: 'Kits' },
    { id: 'mixage', name: 'Mixage' },
    { id: 'effets', name: 'Effets' },
    { id: 'cablage', name: 'Câblage' },
    { id: 'public-address', name: 'Public Address (100V)' },
    { id: 'divers', name: 'Divers' },
    { id: 'sources', name: 'Sources' },
  ]

  const products = [
    {
      name: 'Amplificateur QSC GX5',
      subcategory: 'amplificateurs',
      description: 'Amplificateur de puissance professionnel stéréo',
      specs: '2x700W @ 4Ω, XLR, Speakon',
      priceDay: '90€',
      priceWeekend: '150€',
      priceWeek: '280€',
      image: 'https://images.unsplash.com/photo-1614963366795-7d51177d2b08?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Amplificateur Crown XLS 2502',
      subcategory: 'amplificateurs',
      description: 'Amplificateur classe D haute performance',
      specs: '2x775W @ 4Ω, DSP intégré',
      priceDay: '110€',
      priceWeekend: '180€',
      priceWeek: '330€',
      image: 'https://images.unsplash.com/photo-1614963366795-7d51177d2b08?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Enceinte Line Array 2000W',
      subcategory: 'enceintes',
      description: 'Enceinte professionnelle line array de 2000W RMS',
      specs: '2000W RMS, 8Ω, 45Hz - 20kHz',
      priceDay: '150€',
      priceWeekend: '270€',
      priceWeek: '450€',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Enceinte HK Audio L5 112 XA',
      subcategory: 'enceintes',
      description: 'Enceinte active bi-amplifiée 12 pouces',
      specs: '2000W, DSP, Bluetooth',
      priceDay: '80€',
      priceWeekend: '140€',
      priceWeek: '240€',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Caisson de Basses 18" 1000W',
      subcategory: 'enceintes',
      description: 'Subwoofer puissant pour basses profondes',
      specs: '1000W, 18", 30Hz - 150Hz',
      priceDay: '80€',
      priceWeekend: '140€',
      priceWeek: '240€',
      image: 'https://images.unsplash.com/photo-1614942118692-4e3e6f44f488?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Retour de Scène Actif',
      subcategory: 'enceintes',
      description: 'Moniteur de scène actif 500W',
      specs: '500W, angle 60°, XLR/Jack',
      priceDay: '40€',
      priceWeekend: '70€',
      priceWeek: '120€',
      image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Pack Sono Complet 1000W',
      subcategory: 'kits',
      description: 'Kit complet: 2 enceintes, 1 caisson, console, micros et câbles',
      specs: 'Système complet clé en main',
      priceDay: '250€',
      priceWeekend: '420€',
      priceWeek: '750€',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Pack DJ Complet',
      subcategory: 'kits',
      description: 'Contrôleur DJ + platines + casque',
      specs: 'Pioneer DDJ-400, 2 platines virtuelles',
      priceDay: '60€',
      priceWeekend: '100€',
      priceWeek: '180€',
      image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Pack 4 Micros HF Sennheiser',
      subcategory: 'kits',
      description: 'Pack 4 micros HF avec récepteur et malette',
      specs: '4 micros UHF + rack récepteur',
      priceDay: '200€',
      priceWeekend: '340€',
      priceWeek: '600€',
      image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Console de Mixage 32 Canaux',
      subcategory: 'mixage',
      description: 'Console numérique 32 canaux avec effets intégrés',
      specs: '32 canaux, USB, Ethernet, effets reverb/delay',
      priceDay: '120€',
      priceWeekend: '200€',
      priceWeek: '350€',
      image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Console Yamaha MG16XU',
      subcategory: 'mixage',
      description: 'Table de mixage analogique 16 canaux',
      specs: '16 canaux, USB, effets intégrés',
      priceDay: '70€',
      priceWeekend: '120€',
      priceWeek: '210€',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Processeur de Signal DBX DriveRack',
      subcategory: 'effets',
      description: 'Processeur audio avec égaliseur, compresseur et limiteur',
      specs: 'EQ 31 bandes, comp/lim, crossover',
      priceDay: '75€',
      priceWeekend: '130€',
      priceWeek: '220€',
      image: 'https://images.unsplash.com/photo-1614963366795-7d51177d2b08?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Réverb/Delay TC Electronic M350',
      subcategory: 'effets',
      description: 'Processeur d\'effets stéréo avec réverbération et delay',
      specs: 'Reverb, delay, chorus, flanger',
      priceDay: '60€',
      priceWeekend: '100€',
      priceWeek: '180€',
      image: 'https://images.unsplash.com/photo-1614963366795-7d51177d2b08?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Câbles XLR Pro (Lot de 10)',
      subcategory: 'cablage',
      description: 'Lot de 10 câbles XLR professionnels de 10 mètres',
      specs: '10m, neutrik, blindés',
      priceDay: '30€',
      priceWeekend: '50€',
      priceWeek: '90€',
      image: 'https://images.unsplash.com/photo-1614963366795-7d51177d2b08?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Snake Audio 24 Canaux',
      subcategory: 'cablage',
      description: 'Multipaire 24 canaux XLR, longueur 30m',
      specs: '30m, 24x XLR, stage box',
      priceDay: '85€',
      priceWeekend: '145€',
      priceWeek: '250€',
      image: 'https://images.unsplash.com/photo-1614963366795-7d51177d2b08?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Système Public Address 100V',
      subcategory: 'public-address',
      description: 'Système de sonorisation ligne 100V pour grandes surfaces',
      specs: '240W, 4 zones, 6 HP plafond',
      priceDay: '150€',
      priceWeekend: '260€',
      priceWeek: '450€',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Amplificateur 100V 360W',
      subcategory: 'public-address',
      description: 'Amplificateur ligne 100V avec 5 zones',
      specs: '360W, 5 zones, USB/SD/FM',
      priceDay: '90€',
      priceWeekend: '150€',
      priceWeek: '270€',
      image: 'https://images.unsplash.com/photo-1614963366795-7d51177d2b08?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Micro Sans Fil HF',
      subcategory: 'divers',
      description: 'Système micro sans fil HF professionnel',
      specs: 'UHF 500-900MHz, portée 100m, autonomie 8h',
      priceDay: '35€',
      priceWeekend: '60€',
      priceWeek: '100€',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Pied de Micro Pro (Lot de 6)',
      subcategory: 'divers',
      description: 'Lot de 6 pieds de micro professionnels télescopiques',
      specs: 'Télescopique, socle lourd',
      priceDay: '25€',
      priceWeekend: '40€',
      priceWeek: '75€',
      image: 'https://images.unsplash.com/photo-1614963366795-7d51177d2b08?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Lecteur CD/USB Pioneer DJ',
      subcategory: 'sources',
      description: 'Lecteur CD/USB/SD professionnel avec pitch control',
      specs: 'CD/USB/SD, pitch ±16%, loop',
      priceDay: '95€',
      priceWeekend: '160€',
      priceWeek: '290€',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      available: true,
    },
    {
      name: 'Platine Vinyle Technics SL-1200',
      subcategory: 'sources',
      description: 'Platine vinyle DJ professionnelle légendaire',
      specs: 'Entraînement direct, pitch variable',
      priceDay: '120€',
      priceWeekend: '200€',
      priceWeek: '360€',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
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
            <Music className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Sonorisation</h1>
            <p className="text-gray-400 mt-2">{filteredProducts.length} produits disponibles</p>
          </div>
        </div>

        <p className="text-xl text-gray-300 mb-8 max-w-3xl">
          Découvrez notre gamme complète de matériel de sonorisation professionnel.
          Enceintes, consoles, micros et accessoires pour tous vos événements.
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
