import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Politique de Confidentialité - Sauroraa Pro',
  description: 'Protection de vos données personnelles',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Politique de <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Confidentialité</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Protection et traitement de vos données personnelles
        </p>

        <div className="space-y-8">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Sauroraa Pro (numéro d'entreprise 1031.598.463) s'engage à protéger la vie privée de ses utilisateurs.
              Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données
              personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">2. Responsable du traitement</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <span className="font-semibold text-white">Dénomination :</span> Sauroraa Pro
              </p>
              <p>
                <span className="font-semibold text-white">Numéro d'entreprise :</span> 1031.598.463
              </p>
              <p>
                <span className="font-semibold text-white">Email :</span>{' '}
                <a href="mailto:contact@sauroraa.be" className="text-blue-400 hover:underline">
                  contact@sauroraa.be
                </a>
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">3. Données collectées</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>Nous collectons les données personnelles suivantes :</p>

              <div className="ml-4">
                <p className="font-semibold text-white mb-2">3.1. Données d'identification</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale (si livraison)</li>
                </ul>
              </div>

              <div className="ml-4 mt-4">
                <p className="font-semibold text-white mb-2">3.2. Données de réservation</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Date et lieu de l'événement</li>
                  <li>Type d'événement</li>
                  <li>Matériel loué</li>
                  <li>Montant de la transaction</li>
                </ul>
              </div>

              <div className="ml-4 mt-4">
                <p className="font-semibold text-white mb-2">3.3. Données de connexion</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées</li>
                  <li>Données de cookies</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">4. Finalités du traitement</h2>
            <div className="text-gray-300 leading-relaxed">
              <p className="mb-4">Vos données personnelles sont utilisées pour :</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Traiter vos réservations et demandes de devis</li>
                <li>Vous contacter concernant vos événements</li>
                <li>Gérer les paiements et la facturation</li>
                <li>Améliorer nos services et notre site web</li>
                <li>Vous envoyer des informations marketing (avec votre consentement)</li>
                <li>Respecter nos obligations légales et comptables</li>
              </ul>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">5. Base légale du traitement</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <span className="font-semibold text-white">5.1.</span> L'exécution d'un contrat : traitement de vos réservations
              </p>
              <p>
                <span className="font-semibold text-white">5.2.</span> Votre consentement : marketing et newsletters
              </p>
              <p>
                <span className="font-semibold text-white">5.3.</span> Obligation légale : comptabilité et facturation
              </p>
              <p>
                <span className="font-semibold text-white">5.4.</span> Intérêt légitime : amélioration de nos services
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">6. Conservation des données</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <span className="font-semibold text-white">6.1.</span> Données de réservation : conservées pendant 7 ans
                (obligations comptables)
              </p>
              <p>
                <span className="font-semibold text-white">6.2.</span> Données marketing : conservées jusqu'à votre désinscription
              </p>
              <p>
                <span className="font-semibold text-white">6.3.</span> Données de navigation : conservées pendant 13 mois maximum
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">7. Partage des données</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>Vos données peuvent être partagées avec :</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <span className="font-semibold text-white">Prestataires de paiement :</span> Vivapayments (traitement sécurisé des paiements)
                </li>
                <li>
                  <span className="font-semibold text-white">Hébergeur web :</span> pour le fonctionnement du site
                </li>
                <li>
                  <span className="font-semibold text-white">Autorités :</span> en cas d'obligation légale
                </li>
              </ul>
              <p className="mt-4">
                Nous ne vendons jamais vos données à des tiers à des fins commerciales.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">8. Sécurité des données</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles :</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Chiffrement SSL/TLS pour toutes les communications</li>
                <li>Stockage sécurisé des mots de passe (hashage)</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegardes régulières</li>
                <li>Surveillance et détection des intrusions</li>
              </ul>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">9. Vos droits</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <span className="font-semibold text-white">Droit d'accès :</span> obtenir une copie de vos données
                </li>
                <li>
                  <span className="font-semibold text-white">Droit de rectification :</span> corriger vos données inexactes
                </li>
                <li>
                  <span className="font-semibold text-white">Droit à l'effacement :</span> supprimer vos données ("droit à l'oubli")
                </li>
                <li>
                  <span className="font-semibold text-white">Droit à la limitation :</span> limiter le traitement
                </li>
                <li>
                  <span className="font-semibold text-white">Droit à la portabilité :</span> recevoir vos données dans un format structuré
                </li>
                <li>
                  <span className="font-semibold text-white">Droit d'opposition :</span> vous opposer au traitement (notamment marketing)
                </li>
                <li>
                  <span className="font-semibold text-white">Droit de retirer votre consentement :</span> à tout moment
                </li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à :{' '}
                <a href="mailto:contact@sauroraa.be" className="text-blue-400 hover:underline">
                  contact@sauroraa.be
                </a>
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">10. Cookies</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>Notre site utilise des cookies pour :</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <span className="font-semibold text-white">Cookies essentiels :</span> nécessaires au fonctionnement du site
                </li>
                <li>
                  <span className="font-semibold text-white">Cookies de performance :</span> analyse du trafic (Google Analytics)
                </li>
                <li>
                  <span className="font-semibold text-white">Cookies fonctionnels :</span> mémoriser vos préférences
                </li>
              </ul>
              <p className="mt-4">
                Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">11. Modifications</h2>
            <p className="text-gray-300 leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité. Les modifications seront
              publiées sur cette page avec la date de mise à jour. Nous vous encourageons à consulter régulièrement
              cette page.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">12. Réclamation</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès
                de l'Autorité de protection des données belge :
              </p>
              <div className="ml-4 mt-4">
                <p className="font-semibold text-white">Autorité de protection des données (APD)</p>
                <p>Rue de la Presse, 35</p>
                <p>1000 Bruxelles</p>
                <p>Belgique</p>
                <p className="mt-2">
                  Site web :{' '}
                  <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    www.autoriteprotectiondonnees.be
                  </a>
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">13. Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles :
            </p>
            <div className="mt-4 text-gray-300">
              <p>
                Email :{' '}
                <a href="mailto:contact@sauroraa.be" className="text-blue-400 hover:underline">
                  contact@sauroraa.be
                </a>
              </p>
              <p>Téléphone : +32 XXX XX XX XX</p>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>Dernière mise à jour : Février 2025</p>
          <p className="mt-2">Version 1.0</p>
        </div>
      </div>
    </div>
  )
}
