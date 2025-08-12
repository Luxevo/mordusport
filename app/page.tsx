import Image from "next/image"
import { MessageCircle, Trophy, BarChart3, Star, Tv, Gift } from "lucide-react"
import WaitlistForm from "@/components/waitlist-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Logo Section */}
      <section className="pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Logo */}
          <div className="flex justify-center ">
            <Image
              src="/logo-mordu.png"
              alt="Mordu Sport Logo"
              width={500}
              height={500}
              className="w-56 h-56 sm:w-72 sm:h-72"
            />
          </div>

          {/* Brand Name */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Mordu Sport</h1>

          {/* Slogan */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-16">L'expérience ultime pour les fans de sport</p>
        </div>
      </section>

      {/* Three Squares Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Square 1 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">On rassemble les fans</h3>
              <p className="text-gray-400 leading-relaxed">
                Discute avant, pendant et après les matchs avec des milliers de fans comme toi.
              </p>
            </div>

            {/* Square 2 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Toutes tes ligues préférées au même endroit</h3>
              <p className="text-gray-400 leading-relaxed">NHL, NFL, NBA et plus encore.</p>
            </div>

            {/* Square 3 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Stats en temps réel</h3>
              <p className="text-gray-400 leading-relaxed">Vis les matchs en direct et ne manque aucun moment chaud.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Fans de sport ? Prouve-le.</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Inscris-toi à notre infolettre pour recevoir ton code promo et tester l'app en avant-première. Tu ne veux
            pas manquer ça.
          </p>
          <p className="text-white font-semibold mb-8">
            Quantité limitée : dépêche-toi ! Et en plus, tu recevras un cadeau lors de l'ouverture officielle de l'app.
          </p>

          <WaitlistForm />
        </div>
      </section>

      {/* Quebec Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Fièrement du Québec, pensée par des passionnés de sport pour les passionnés de sport.
          </h2>
          <div className="text-lg text-gray-300 leading-relaxed space-y-4 max-w-3xl mx-auto">
            <p>
              Trop souvent, les amateurs francophones n'ont pas accès à une vraie app de sport qui leur ressemble. On a
              voulu changer ça.
            </p>
            <p>
              Notre idée est simple : rassembler les fans, créer un endroit où tu peux suivre tes matchs en direct,
              discuter avant, pendant et après la partie, et découvrir d'autres passionnés comme toi.
            </p>
            <p>
              Une plateforme pensée de A à Z pour vivre le sport ensemble, partager l'émotion du moment et se rapprocher
              encore plus de l'action.
            </p>
          </div>
        </div>
      </section>

      {/* À venir Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">À venir</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* PrédictionXpert */}
            <div className="bg-black rounded-2xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">PrédictionXpert</h3>
              <p className="text-sm text-gray-400 mb-3">📊 L'outil ultime pour t'aider dans tes paris sportifs.</p>
              <p className="text-xs text-gray-500">
                Analyse et suivi IA ultra avancé pour prendre les meilleures décisions.
              </p>
            </div>

            {/* Avantages Live Chat */}
            <div className="bg-black rounded-2xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Avantages Live Chat</h3>
              <p className="text-sm text-gray-400 mb-3">Personnalise ton expérience.</p>
              <p className="text-xs text-gray-500">
                Réduis la vitesse des messages, débloque des options exclusives et démarque-toi dans le chat.
              </p>
            </div>

            {/* PIP Stream */}
            <div className="bg-black rounded-2xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                <Tv className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">PIP Stream</h3>
              <p className="text-sm text-gray-400 mb-3">📺 Regarde et discute en même temps.</p>
              <p className="text-xs text-gray-500">
                Place ton stream en mode Picture-in-Picture et garde le chat actif pendant ton match.
              </p>
            </div>

            {/* Tirages et communauté */}
            <div className="bg-black rounded-2xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Tirages et communauté</h3>
              <p className="text-sm text-gray-400 mb-3">🎁 Des prix à gagner, ensemble.</p>
              <p className="text-xs text-gray-500">
                Participe à nos tirages réguliers et profite d'une communauté active qui partage la même passion du
                sport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-700 bg-black">
        <div className="max-w-4xl mx-auto text-center">
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
