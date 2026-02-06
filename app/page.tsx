import Link from 'next/link'
import { Sparkles, Music, Lightbulb, Home, Users, Award, ArrowRight, Check, Zap, Shield, Clock, TrendingUp } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function HomePage() {
  const services = [
    {
      icon: Music,
      title: 'Sonorisation',
      description: 'Systèmes audio professionnels pour événements de toutes tailles',
      features: ['Enceintes Line Array', 'Consoles numériques', 'Micros sans fil'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lightbulb,
      title: 'Éclairage',
      description: 'Solutions d\'éclairage scénique et d\'ambiance sur mesure',
      features: ['Lyres motorisées', 'LED RGB', 'Effets spéciaux'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Home,
      title: 'Pagodes & Scène',
      description: 'Location et montage de structures pour événements extérieurs',
      features: ['Pagodes 3x3 à 10x15m', 'Montage inclus', 'Chapiteaux'],
      gradient: 'from-orange-500 to-red-500'
    },
  ]

  const stats = [
    { number: '15+', label: 'Événements réalisés', icon: TrendingUp },
    { number: '20+', label: 'Clients satisfaits', icon: Users },
    { number: '1 an', label: 'D\'expérience', icon: Award },
    { number: '24/7', label: 'Support disponible', icon: Clock },
  ]

  const advantages = [
    {
      icon: Shield,
      title: 'Matériel Premium',
      description: 'Équipement professionnel récent et entretenu régulièrement'
    },
    {
      icon: Users,
      title: 'Équipe Expérimentée',
      description: 'Techniciens qualifiés pour l\'installation et le support'
    },
    {
      icon: Zap,
      title: 'Service Rapide',
      description: 'Livraison, montage et démontage inclus dans nos prestations'
    },
    {
      icon: Clock,
      title: 'Disponibilité 24/7',
      description: 'Support technique disponible à tout moment pour vos urgences'
    },
  ]

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-dark-900 to-dark-900" />
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full mb-8 hover:border-blue-500/40 transition-all">
              <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
              <span className="text-sm text-blue-400 font-semibold tracking-wide">Expert en événementiel depuis 2025</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 animate-slide-up leading-tight">
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transformez vos
            </span>
            <span className="block text-white mt-2">événements en</span>
            <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mt-2">
              expériences inoubliables
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Location de matériel événementiel professionnel · Sonorisation · Éclairage · Structures
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link href="/catalogue">
              <Button size="lg" className="group shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40">
                Découvrir notre catalogue
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/devis">
              <Button size="lg" variant="outline" className="border-2">
                Devis gratuit
              </Button>
            </Link>
          </div>

          {/* Stats - Premium Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-dark-800/80 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:transform hover:scale-105">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-transparent rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Section - Premium Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold">
                Nos Services
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Solutions{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Premium
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des équipements professionnels et un service d'excellence pour tous vos événements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />

                {/* Card */}
                <div className="relative h-full bg-gradient-to-b from-dark-800 to-dark-900 border border-dark-700/50 rounded-3xl p-8 hover:border-dark-600 transition-all">
                  {/* Icon with gradient */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-50`} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    href={`/catalogue/${service.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-')}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold group/link"
                  >
                    Découvrir
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section - Bento Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-blue-950/10 to-dark-900" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-semibold">
                  Pourquoi nous choisir
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">L'excellence au</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  service de vos événements
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Plus qu'un simple fournisseur, nous sommes votre partenaire pour créer des moments exceptionnels.
              </p>

              {/* Advantages Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                      <advantage.icon className="w-10 h-10 text-blue-400 mb-4" />
                      <h3 className="text-lg font-bold text-white mb-2">{advantage.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Feature Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700/50 rounded-3xl p-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Certifié Pro</h3>
                    <p className="text-gray-400">Excellence garantie</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  Notre expertise reconnue dans le secteur événementiel nous permet de vous offrir des prestations de qualité supérieure avec un service client irréprochable.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-dark-900/50 rounded-2xl p-6 text-center border border-dark-700/50">
                    <Users className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                      20+
                    </div>
                    <div className="text-sm text-gray-400">Clients satisfaits</div>
                  </div>
                  <div className="bg-dark-900/50 rounded-2xl p-6 text-center border border-dark-700/50">
                    <Sparkles className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                      15+
                    </div>
                    <div className="text-sm text-gray-400">Événements</div>
                  </div>
                </div>

                <Link href="/devis">
                  <Button className="w-full" size="lg">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-xl border border-dark-700/50 rounded-3xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center p-12 sm:p-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full mb-8">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-blue-400 font-semibold">Réponse en moins de 24h</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Prêt à créer un</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  événement mémorable ?
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit.
                Notre équipe est à votre écoute pour réaliser vos projets les plus ambitieux.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/devis">
                  <Button size="lg" className="shadow-2xl shadow-blue-500/25">
                    Demander un devis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/catalogue">
                  <Button size="lg" variant="outline" className="border-2">
                    Explorer le catalogue
                  </Button>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Devis gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Réponse rapide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
