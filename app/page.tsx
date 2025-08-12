import Image from "next/image"
import { Play, MessageCircle, Trophy, Users, Smartphone, TrendingUp } from "lucide-react"
import WaitlistForm from "@/components/waitlist-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center">
              <Image
                src="/logo-mordu.png"
                alt="Mordu Sport Logo"
                width={400}
                height={400}
              />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">Mordu Sport</h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              L'expérience ultime pour les fans de sport
            </p>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Regardez vos matchs préférés et chattez en temps réel avec d'autres passionnés. Comme Twitch, mais pour le
              sport.
            </p>

            {/* Key Features Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white border border-gray-600 rounded-full px-4 py-2 text-black">
                <MessageCircle className="w-4 h-4 text-black" />
                <span className="text-sm font-medium">Chat en Temps Réel</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-gray-600 rounded-full px-4 py-2 text-black">
                <Trophy className="w-4 h-4 text-black" />
                <span className="text-sm font-medium">NHL • NBA • NFL</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 no-underline"
              >
                Rejoindre la Liste d'Attente
              </a>
              <p className="text-sm text-gray-400">Soyez parmi les premiers à découvrir Mordu Sport</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Pourquoi Mordu Sport ?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Une expérience révolutionnaire qui transforme la façon dont vous vivez le sport
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Real-time Chat */}
            <div className="bg-black rounded-2xl p-8 border border-gray-700 hover:border-gray-500 transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Chat Communautaire</h3>
              <p className="text-gray-400 leading-relaxed">
                Échangez avec des milliers de fans pendant les matchs. Partagez vos émotions et analyses en direct.
              </p>
            </div>

            {/* Multi-Leagues Support */}
            <div className="bg-black rounded-2xl p-8 border border-gray-700 hover:border-gray-500 transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Toutes les Ligues</h3>
              <p className="text-gray-400 leading-relaxed">
                NHL, NBA, NFL et plus encore. Suivez tous vos sports favoris depuis une seule application.
              </p>
            </div>

            {/* User Profiles */}
            <div className="bg-black rounded-2xl p-8 border border-gray-700 hover:border-gray-500 transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Profils Personnalisés</h3>
              <p className="text-gray-400 leading-relaxed">
                Créez votre profil de fan, suivez vos équipes favorites et construisez votre réputation dans la
                communauté.
              </p>
            </div>

            {/* Mobile First */}
            <div className="bg-black rounded-2xl p-8 border border-gray-700 hover:border-gray-500 transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Mobile-First</h3>
              <p className="text-gray-400 leading-relaxed">
                Optimisé pour mobile avec une expérience fluide, que vous soyez chez vous ou en déplacement.
              </p>
            </div>

            {/* Betting Integration */}
            <div className="bg-black rounded-2xl p-8 border border-gray-700 hover:border-gray-500 transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Cotes en Direct</h3>
              <p className="text-gray-400 leading-relaxed">
                Consultez les cotes et analyses en temps réel pour enrichir votre expérience de visionnage.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-black rounded-3xl p-8 sm:p-12 border border-gray-700 shadow-sm">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">10K+</div>
                <div className="text-gray-400">Fans Inscrits</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">Matchs Diffusés</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Support Communauté</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Prêt à Révolutionner Votre Expérience Sport ?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Rejoignez des milliers de fans qui attendent déjà Mordu Sport. Soyez averti dès le lancement !
            </p>
          </div>

          <WaitlistForm />

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <span>Accès anticipé gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <span>Mises à jour exclusives</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <span>Communauté VIP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo-mordu.png"
              alt="Mordu Sport Logo"
              width={48}
              height={48}
              className="w-12 h-12 opacity-60"
            />
          </div>
          <p className="text-gray-400 mb-4">© 2024 Mordu Sport. Tous droits réservés.</p>
          <p className="text-sm text-gray-500">L'expérience ultime pour les fans de sport arrive bientôt.</p>
        </div>
      </footer>
    </div>
  )
}
