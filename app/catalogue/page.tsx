import Link from 'next/link'
import { Search, Music, Lightbulb, Home as HomeIcon, Armchair, ArrowRight } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'Catalogue - Sauroraa Pro',
  description: 'Découvrez notre catalogue complet de matériel événementiel professionnel',
}

export default function CataloguePage() {
  const categories = [
    {
      name: 'Sonorisation',
      slug: 'sonorisation',
      icon: Music,
      description: 'Enceintes, consoles de mixage, micros sans fil et tout le matériel audio professionnel',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      itemCount: 25,
    },
    {
      name: 'Éclairage',
      slug: 'eclairage',
      icon: Lightbulb,
      description: 'Lyres, PAR LED, projecteurs et effets spéciaux pour créer l\'ambiance parfaite',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      itemCount: 30,
    },
    {
      name: 'Pagodes & Chapiteaux',
      slug: 'pagodes',
      icon: HomeIcon,
      description: 'Structures modulaires de 3x3m à 10x15m pour tous vos événements extérieurs',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2b7?w=800&h=600&fit=crop',
      itemCount: 15,
    },
    {
      name: 'Mobilier',
      slug: 'mobilier',
      icon: Armchair,
      description: 'Tables, chaises, bars lumineux et mobilier design pour vos réceptions',
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=600&fit=crop',
      itemCount: 50,
    },
  ]

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/20 via-dark-900 to-purple-900/20">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Notre <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Catalogue</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Découvrez notre gamme complète de matériel événementiel professionnel.
            Plus de 120 références disponibles à la location.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher du matériel..."
                className="w-full pl-12 pr-4 py-4 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card key={index} hover className="overflow-hidden p-0 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                      {category.itemCount} articles
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{category.name}</h3>
                  <p className="text-gray-400 mb-6">{category.description}</p>
                  <Link href={`/catalogue/${category.slug}`}>
                    <Button variant="outline" className="group/btn">
                      Découvrir
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Contactez-nous pour un devis personnalisé adapté à vos besoins spécifiques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Nous contacter</Button>
            </Link>
            <Link href="/devis">
              <Button size="lg" variant="outline">Demander un devis</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
