import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Mentions Légales - Sauroraa Pro',
  description: 'Informations légales et mentions obligatoires',
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Mentions <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Légales</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Informations légales et mentions obligatoires
        </p>

        <div className="space-y-8">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Identification de l'entreprise</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <span className="font-semibold text-white">Dénomination sociale :</span> SAURORAA
              </div>
              <div>
                <span className="font-semibold text-white">Numéro d'entreprise :</span> 1031.598.463
              </div>
              <div>
                <span className="font-semibold text-white">Numéro de TVA :</span> BE 1031.598.463
              </div>
              <div>
                <span className="font-semibold text-white">Email :</span>{' '}
                <a href="mailto:contact@sauroraa.be" className="text-blue-400 hover:underline">
                  contact@sauroraa.be
                </a>
              </div>
              <div>
                <span className="font-semibold text-white">Téléphone :</span> 087 84 40 00
              </div>
              <div>
                <span className="font-semibold text-white">Horaires :</span> De 09h à 20h
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Objet social</h2>
            <p className="text-gray-300 leading-relaxed">
              SAURORAA est spécialisée dans l'organisation d'événements et la location de matériel événementiel :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
              <li>Location de matériel de sonorisation professionnel</li>
              <li>Location de matériel d'éclairage et effets lumineux</li>
              <li>Location et montage de pagodes et chapiteaux</li>
              <li>Location de mobilier événementiel</li>
              <li>Organisation complète d'événements</li>
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Hébergement du site</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <span className="font-semibold text-white">Hébergeur :</span> LordHosting
              </div>
              <div>
                <span className="font-semibold text-white">Association RNA :</span> W941016871
              </div>
              <div>
                <span className="font-semibold text-white">Site web :</span>{' '}
                <a href="https://lordhosting.fr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  lordhosting.fr
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Propriété intellectuelle</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                L'ensemble de ce site relève de la législation belge et internationale sur le droit d'auteur et la propriété intellectuelle.
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique ou autre quel qu'il soit est formellement interdite
                sauf autorisation expresse du directeur de publication.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Protection des données personnelles</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès,
                de rectification et de suppression des données vous concernant.
              </p>
              <p>
                Pour exercer ce droit, vous pouvez nous contacter à l'adresse suivante :{' '}
                <a href="mailto:contact@sauroraa.be" className="text-blue-400 hover:underline">
                  contact@sauroraa.be
                </a>
              </p>
              <p>
                Pour plus d'informations, consultez notre{' '}
                <a href="/privacy" className="text-blue-400 hover:underline">
                  Politique de confidentialité
                </a>
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Cookies</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic du site.
                En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Limitation de responsabilité</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                Les informations contenues sur ce site sont aussi précises que possible. Toutefois, Sauroraa Pro ne pourra être tenue
                responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait
                des tiers partenaires qui lui fournissent ces informations.
              </p>
              <p>
                Tous les informations indiquées sur le site sont données à titre indicatif et sont susceptibles d'évoluer. Par ailleurs,
                les renseignements figurant sur le site ne sont pas exhaustifs.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Litiges</h2>
            <div className="text-gray-300 leading-relaxed">
              <p>
                Les présentes conditions sont régies par les lois belges et toute contestation ou litiges qui pourraient naître
                de l'interprétation ou de l'exécution de celles-ci seront de la compétence exclusive des tribunaux de Belgique.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>Dernière mise à jour : Février 2025</p>
        </div>
      </div>
    </div>
  )
}
