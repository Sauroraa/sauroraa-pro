import Card from '@/components/ui/Card'
import { Mail, Phone, Clock, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contact - Sauroraa Pro',
  description: 'Contactez-nous pour votre projet événementiel',
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@sauroraa.be',
      link: 'mailto:contact@sauroraa.be',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '087 84 40 00',
      link: 'tel:087844000',
    },
    {
      icon: Clock,
      title: 'Horaires',
      value: 'De 09h à 20h',
    },
    {
      icon: MapPin,
      title: 'TVA',
      value: 'BE 1031.598.463',
    },
  ]

  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Contactez <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Nous</span>
          </h1>
          <p className="text-xl text-gray-300">
            Une question ? Un projet ? Nous sommes là pour vous aider
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <Card key={index} hover className="p-6 text-center">
                <Icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-300">{info.value}</p>
                )}
              </Card>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="087 84 40 00"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Sujet de votre message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Envoyer le message
              </button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Horaires de disponibilité</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-dark-600">
                  <span className="text-gray-300 font-medium">Lundi - Vendredi</span>
                  <span className="text-white">24/7</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-dark-600">
                  <span className="text-gray-300 font-medium">Samedi</span>
                  <span className="text-white">24/7</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300 font-medium">Dimanche</span>
                  <span className="text-white">24/7</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-400">
                * Nous sommes disponibles 24h/24 et 7j/7 pour répondre à vos demandes urgentes
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Besoin d'un devis rapide ?</h3>
              <p className="text-gray-300 mb-6">
                Obtenez une estimation gratuite en quelques clics pour votre événement
              </p>
              <a
                href="/devis"
                className="inline-block w-full text-center bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Demander un devis gratuit
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
