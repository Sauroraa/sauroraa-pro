import Card from '@/components/ui/Card'
import { Users, Award, Target, Zap } from 'lucide-react'

export const metadata = {
  title: 'À Propos - Sauroraa Pro',
  description: 'Expert en événementiel depuis 2025',
}

export default function AboutPage() {
  const stats = [
    { icon: Users, label: 'Clients Satisfaits', value: '20+' },
    { icon: Award, label: 'Événements Réalisés', value: '15+' },
    { icon: Target, label: 'Taux de Satisfaction', value: '100%' },
    { icon: Zap, label: 'Disponibilité', value: '24/7' },
  ]

  const values = [
    {
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque détail de nos prestations',
    },
    {
      title: 'Fiabilité',
      description: 'Du matériel professionnel et un service sur lequel vous pouvez compter',
    },
    {
      title: 'Innovation',
      description: 'Nous restons à la pointe des tendances et technologies événementielles',
    },
    {
      title: 'Proximité',
      description: 'Une équipe à votre écoute pour réaliser vos projets sur mesure',
    },
  ]

  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            À Propos de <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Sauroraa Pro</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert en événementiel depuis 2025, nous mettons notre expertise au service de vos événements exceptionnels
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center p-6 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </Card>
            )
          })}
        </div>

        {/* Notre Histoire */}
        <div className="mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Notre Histoire</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Sauroraa Pro est née d'une passion pour l'événementiel et d'une volonté de proposer des solutions
                complètes et professionnelles pour tous types d'événements.
              </p>
              <p>
                Que vous organisiez un mariage, une soirée d'entreprise, un festival ou tout autre événement,
                nous mettons à votre disposition notre expertise et notre matériel haut de gamme pour garantir
                le succès de votre événement.
              </p>
              <p>
                Notre équipe de professionnels passionnés vous accompagne de A à Z, de la conception à la
                réalisation, en passant par le montage et le démontage. Nous nous adaptons à vos besoins et
                votre budget pour créer des événements mémorables.
              </p>
            </div>
          </Card>
        </div>

        {/* Nos Valeurs */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nos Valeurs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} hover className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600">
            <h2 className="text-3xl font-bold text-white mb-4">Prêt à créer quelque chose d'exceptionnel ?</h2>
            <p className="text-white/90 mb-6">
              Contactez-nous dès aujourd'hui pour discuter de votre projet
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Nous Contacter
            </a>
          </Card>
        </div>
      </div>
    </div>
  )
}
