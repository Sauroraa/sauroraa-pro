import Card from '@/components/ui/Card'
import { Calendar, Users, MapPin, MessageSquare } from 'lucide-react'

export const metadata = {
  title: 'Devis Gratuit - Sauroraa Pro',
  description: 'Demandez votre devis personnalisé gratuit',
}

export default function DevisPage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Devis <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Gratuit</span>
          </h1>
          <p className="text-xl text-gray-300">
            Obtenez une estimation personnalisée pour votre événement
          </p>
        </div>

        <Card className="p-8">
          <form className="space-y-8">
            {/* Informations personnelles */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Vos informations</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="+32 XXX XX XX XX"
                  />
                </div>
              </div>
            </div>

            {/* Informations sur l'événement */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-blue-400" />
                Votre événement
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-300 mb-2">
                    Type d'événement *
                  </label>
                  <select
                    id="eventType"
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="mariage">Mariage</option>
                    <option value="anniversaire">Anniversaire</option>
                    <option value="corporate">Événement corporate</option>
                    <option value="festival">Festival / Concert</option>
                    <option value="communion">Communion / Baptême</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-300 mb-2">
                    Date de l'événement *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="guestCount" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    Nombre d'invités *
                  </label>
                  <input
                    type="number"
                    id="guestCount"
                    required
                    min="1"
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Ex: 100"
                  />
                </div>
                <div>
                  <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    Lieu de l'événement *
                  </label>
                  <input
                    type="text"
                    id="eventLocation"
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Ville ou adresse"
                  />
                </div>
              </div>
            </div>

            {/* Services demandés */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Services souhaités</h2>
              <div className="space-y-4">
                <label className="flex items-center gap-3 p-4 bg-dark-800 rounded-lg cursor-pointer hover:bg-dark-700 transition-colors">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 bg-dark-700 border-dark-600 rounded focus:ring-blue-500" />
                  <div>
                    <div className="text-white font-medium">Sonorisation</div>
                    <div className="text-sm text-gray-400">Système audio professionnel</div>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 bg-dark-800 rounded-lg cursor-pointer hover:bg-dark-700 transition-colors">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 bg-dark-700 border-dark-600 rounded focus:ring-blue-500" />
                  <div>
                    <div className="text-white font-medium">Éclairage</div>
                    <div className="text-sm text-gray-400">Jeux de lumière et ambiance</div>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 bg-dark-800 rounded-lg cursor-pointer hover:bg-dark-700 transition-colors">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 bg-dark-700 border-dark-600 rounded focus:ring-blue-500" />
                  <div>
                    <div className="text-white font-medium">Pagode / Chapiteau</div>
                    <div className="text-sm text-gray-400">Location et montage</div>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 bg-dark-800 rounded-lg cursor-pointer hover:bg-dark-700 transition-colors">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 bg-dark-700 border-dark-600 rounded focus:ring-blue-500" />
                  <div>
                    <div className="text-white font-medium">Mobilier</div>
                    <div className="text-sm text-gray-400">Tables, chaises, bars</div>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 bg-dark-800 rounded-lg cursor-pointer hover:bg-dark-700 transition-colors">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 bg-dark-700 border-dark-600 rounded focus:ring-blue-500" />
                  <div>
                    <div className="text-white font-medium">Montage / Installation</div>
                    <div className="text-sm text-gray-400">Service de montage professionnel</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                Message complémentaire
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors resize-none"
                placeholder="Décrivez plus en détail vos besoins et attentes..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 w-5 h-5 text-blue-600 bg-dark-700 border-dark-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-400">
                J'accepte que mes données soient utilisées pour traiter ma demande de devis conformément à la{' '}
                <a href="/privacy" className="text-blue-400 hover:underline">
                  politique de confidentialité
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Envoyer ma demande de devis
            </button>

            <p className="text-center text-sm text-gray-400">
              Nous vous répondrons dans les plus brefs délais (généralement sous 24h)
            </p>
          </form>
        </Card>
      </div>
    </div>
  )
}
