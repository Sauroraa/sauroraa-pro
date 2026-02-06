import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Conditions Générales - Sauroraa Pro',
  description: 'Conditions générales de vente et de location',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Conditions <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Générales</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Conditions générales de vente et de location
        </p>

        <div className="space-y-8">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">1. Objet</h2>
            <p className="text-gray-300 leading-relaxed">
              Les présentes conditions générales régissent les relations contractuelles entre Sauroraa Pro
              (ci-après "le Prestataire") et ses clients (ci-après "le Client") dans le cadre de la location
              de matériel événementiel et de l'organisation d'événements.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">2. Réservation</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <span className="font-semibold text-white">2.1.</span> Toute réservation ne devient définitive qu'après
                réception d'un acompte de 30% du montant total.
              </p>
              <p>
                <span className="font-semibold text-white">2.2.</span> Le solde doit être réglé au plus tard 48 heures
                avant la date de l'événement.
              </p>
              <p>
                <span className="font-semibold text-white">2.3.</span> Le Client s'engage à fournir toutes les informations
                nécessaires à la bonne exécution de la prestation.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">3. Tarifs et Paiement</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <span className="font-semibold text-white">3.1.</span> Les tarifs sont exprimés en euros, TVA comprise.
              </p>
              <p>
                <span className="font-semibold text-white">3.2.</span> Les modes de paiement acceptés sont :
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Virement bancaire</li>
                <li>Carte bancaire via Vivapayments</li>
                <li>Espèces (jusqu'à 3.000€)</li>
              </ul>
              <p>
                <span className="font-semibold text-white">3.3.</span> En cas de retard de paiement, des pénalités de 10%
                du montant dû seront appliquées automatiquement.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">4. Livraison et Installation</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <span className="font-semibold text-white">4.1.</span> Les frais de livraison et d'installation sont calculés
                en fonction de la distance et de la complexité de l'installation.
              </p>
              <p>
                <span className="font-semibold text-white">4.2.</span> Le Client doit s'assurer que les lieux sont accessibles
                et adaptés à l'installation du matériel.
              </p>
              <p>
                <span className="font-semibold text-white">4.3.</span> Toute difficulté d'accès non signalée pourra entraîner
                des frais supplémentaires.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">5. Utilisation du Matériel</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <span className="font-semibold text-white">5.1.</span> Le Client s'engage à utiliser le matériel loué de manière
                conforme et raisonnable.
              </p>
              <p>
                <span className="font-semibold text-white">5.2.</span> Le Client est responsable de tout dommage causé au matériel
                durant la période de location.
              </p>
              <p>
                <span className="font-semibold text-white">5.3.</span> Il est formellement interdit de sous-louer le matériel
                à des tiers.
              </p>
              <p>
                <span className="font-semibold text-white">5.4.</span> Le Client doit signaler immédiatement toute panne ou
                dysfonctionnement.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">6. Responsabilités</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <span className="font-semibold text-white">6.1.</span> Le Prestataire s'engage à fournir du matériel en bon
                état de fonctionnement.
              </p>
              <p>
                <span className="font-semibold text-white">6.2.</span> Le Prestataire ne saurait être tenu responsable des
                dommages indirects résultant d'un dysfonctionnement du matériel.
              </p>
              <p>
                <span className="font-semibold text-white">6.3.</span> Le Client doit souscrire une assurance couvrant les
                dommages au matériel loué.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">7. Annulation et Modification</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <span className="font-semibold text-white">7.1.</span> Toute annulation doit être notifiée par écrit.
              </p>
              <p>
                <span className="font-semibold text-white">7.2.</span> Conditions d'annulation :
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Plus de 30 jours avant l'événement : remboursement de 80% de l'acompte</li>
                <li>Entre 15 et 30 jours : remboursement de 50% de l'acompte</li>
                <li>Entre 7 et 15 jours : remboursement de 25% de l'acompte</li>
                <li>Moins de 7 jours : aucun remboursement</li>
              </ul>
              <p>
                <span className="font-semibold text-white">7.3.</span> Les modifications de date sont possibles sous réserve
                de disponibilité et peuvent entraîner des frais supplémentaires.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">8. Force Majeure</h2>
            <p className="text-gray-300 leading-relaxed">
              En cas de force majeure (intempéries extrêmes, catastrophe naturelle, etc.), le Prestataire et le Client
              pourront convenir d'un report ou d'une annulation sans pénalités. Les acomptes versés seront alors remboursés
              ou reportés sur une nouvelle date.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">9. Litiges</h2>
            <p className="text-gray-300 leading-relaxed">
              En cas de litige, les parties s'engagent à rechercher une solution amiable. À défaut, les tribunaux belges
              seront seuls compétents.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">10. Acceptation</h2>
            <p className="text-gray-300 leading-relaxed">
              Le fait de passer commande implique l'acceptation pleine et entière des présentes conditions générales.
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>Conditions applicables à compter du 1er février 2025</p>
          <p className="mt-2">Version 1.0</p>
        </div>
      </div>
    </div>
  )
}
