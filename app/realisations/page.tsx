import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Nos Réalisations - Sauroraa Pro',
  description: 'Découvrez nos événements réalisés avec succès',
}

export default function RealisationsPage() {
  const realisations = [
    {
      title: 'Mariage de Sophie & Marc',
      date: 'Juin 2025',
      description: 'Organisation complète avec pagode 10x15m, éclairage d\'ambiance et sonorisation pour 120 invités',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2b7?w=800&h=600&fit=crop',
    },
    {
      title: 'Festival Music Live',
      date: 'Mai 2025',
      description: 'Location de matériel sono et éclairage professionnel pour un festival de 500 personnes',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
    },
    {
      title: 'Soirée Corporate TechCorp',
      date: 'Avril 2025',
      description: 'Événement corporate avec éclairage LED, sono et mobilier design pour 80 participants',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Nos <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Réalisations</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Découvrez quelques-uns des événements que nous avons eu le plaisir d'accompagner
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realisations.map((real, index) => (
            <Card key={index} hover className="overflow-hidden p-0">
              <div className="relative h-64">
                <img
                  src={real.image}
                  alt={real.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-2">
                    {real.date}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{real.title}</h3>
                <p className="text-gray-400">{real.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
