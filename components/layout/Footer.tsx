import Link from 'next/link'
import { Mail, Phone, Clock, Building2, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    catalogue: [
      { name: 'Sonorisation', href: '/catalogue/sonorisation' },
      { name: 'Éclairage', href: '/catalogue/eclairage' },
      { name: 'Pagodes & Scène', href: '/catalogue/pagodes' },
      { name: 'Mobilier', href: '/catalogue/mobilier' },
    ],
    company: [
      { name: 'À propos', href: '/about' },
      { name: 'Nos réalisations', href: '/realisations' },
      { name: 'Contact', href: '/contact' },
      { name: 'Devis gratuit', href: '/devis' },
    ],
    legal: [
      { name: 'Mentions légales', href: '/legal' },
      { name: 'Conditions générales', href: '/terms' },
      { name: 'Politique de confidentialité', href: '/privacy' },
    ],
  }

  const social = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-dark-900 via-dark-900 to-black border-t border-dark-700/50">
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Sauroraa Pro
                </span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Votre partenaire de confiance pour des événements exceptionnels depuis 2025.
                Expert en location de matériel événementiel professionnel.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              <a
                href="tel:087844000"
                className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50 hover:border-blue-500/50 hover:bg-dark-800 transition-all group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-0.5">Téléphone</div>
                  <div className="text-white font-medium">087 84 40 00</div>
                </div>
              </a>

              <a
                href="mailto:contact@sauroraa.be"
                className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50 hover:border-purple-500/50 hover:bg-dark-800 transition-all group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-0.5">Email</div>
                  <div className="text-white font-medium">contact@sauroraa.be</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-0.5">Horaires</div>
                  <div className="text-white font-medium">09h - 20h</div>
                </div>
              </div>
            </div>

            {/* TVA Badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">
                <span className="text-gray-500">TVA:</span>{' '}
                <span className="font-semibold text-white">BE 1031.598.463</span>
              </span>
            </div>
          </div>

          {/* Catalogue */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              Catalogue
              <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
            </h4>
            <ul className="space-y-3">
              {links.catalogue.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              Entreprise
              <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
            </h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              Informations
              <div className="h-px flex-1 bg-gradient-to-r from-pink-500/50 to-transparent" />
            </h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <h4 className="text-lg font-bold text-white mb-3">
                Un projet ?
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Obtenez un devis gratuit et personnalisé en quelques minutes
              </p>
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 w-full justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                Devis gratuit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} <span className="font-semibold text-white">Sauroraa Pro</span> · Tous droits réservés
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Conçu avec passion pour des événements exceptionnels
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className={`w-11 h-11 rounded-xl bg-dark-800 border border-dark-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-transparent transition-all hover:scale-110 ${item.color}`}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
    </footer>
  )
}
