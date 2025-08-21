import Image from "next/image"
import { MessageCircle, Trophy, BarChart3, Star, Tv, Gift } from "lucide-react"
import WaitlistForm from "@/components/waitlist-form"
import NewsletterPopup from "@/components/newsletter-popup"
import AnimatedElement from "@/components/animated-element"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <NewsletterPopup />
      {/* Navigation Bar */}
             <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center justify-between h-20">
                         {/* Logo */}
             <div className="flex items-center space-x-4">
               <Image 
                 src="/logo-mordu-bouche.png" 
                 alt="Mordu Sport Logo" 
                 width={120} 
                 height={48} 
                 className="h-16 w-auto"
               />
               
             </div>

                                       {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#ton-sport" className="text-gray-300 hover:text-white transition-colors duration-200 font-league-spartan">
                  Ton sport avec du mordant
                </a>
                <a href="#adn" className="text-gray-300 hover:text-white transition-colors duration-200 font-league-spartan">
                  Notre ADN
                </a>
                <a href="#fan" className="text-gray-300 hover:text-white transition-colors duration-200 font-league-spartan">
                  T'es un vrai fan ?
                </a>
              </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

             {/* Logo Section */}
       <section id="logo" className="pt-28 pb-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Logo */}
          <div className="flex justify-center ">
            <Image src="/logo-mordu-complete.svg" alt="Mordu Sport Logo" width={450} height={450} />
          </div>

                     {/* Slogan */}
           <AnimatedElement>
             <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-300 mb-16 font-league-spartan font-bold">
             L'EXPÉRIENCE ULTIME DES FANS DE SPORT 
             </p>
           </AnimatedElement>
        </div>
      </section>

                           {/* Ton sport avec du mordant Section */}
        <section id="ton-sport" className="py-16 px-4 bg-gray-900">
         <div className="max-w-6xl mx-auto">
                       <div className="text-center mb-16">
              <AnimatedElement>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-league-spartan">
                  Ton sport avec du mordant
                </h2>
              </AnimatedElement>
              <AnimatedElement delay={1}>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-league-spartan">
                  Une nouvelle façon de vivre tes matchs est arrivée. Voici ce que tu retrouveras dans Mordu Sport.
                </p>
              </AnimatedElement>
            </div>

           {/* First Row - 3 Squares */}
           <div className="grid md:grid-cols-3 gap-8 mb-16">
             {/* Square 1 */}
             <div className="bg-black rounded-2xl p-8 border border-gray-700 transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/40 hover:border-blue-500/50 cursor-pointer">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
                 <MessageCircle className="w-6 h-6 text-blue-500" />
               </div>
               <h3 className="text-xl font-semibold text-white mb-4">On rassemble les fans</h3>
               <p className="text-gray-400 leading-relaxed">
                 Discute avant, pendant et après les matchs avec des milliers de fans comme toi.
               </p>
             </div>

             {/* Square 2 */}
             <div className="bg-black rounded-2xl p-8 border border-gray-700 transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/40 hover:border-yellow-500/50 cursor-pointer">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
                 <Trophy className="w-6 h-6 text-yellow-500" />
               </div>
               <h3 className="text-xl font-semibold text-white mb-4">Toutes tes ligues préférées au même endroit</h3>
               <p className="text-gray-400 leading-relaxed">NHL 🏒, NFL 🏈, NBA 🏀 et plus encore.</p>
             </div>

             {/* Square 3 */}
             <div className="bg-black rounded-2xl p-8 border border-gray-700 transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/40 hover:border-green-500/50 cursor-pointer">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
                 <BarChart3 className="w-6 h-6 text-green-500" />
               </div>
               <h3 className="text-xl font-semibold text-white mb-4">Stats en temps réel</h3>
               <p className="text-gray-400 leading-relaxed">Vis les matchs en direct et ne manque aucun moment chaud.</p>
             </div>
           </div>

           {/* Second Row - 4 Squares (À venir) */}
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {/* PrédictionXpert */}
             <div className="bg-black rounded-2xl p-6 border border-gray-700 transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/40 hover:border-purple-500/50 cursor-pointer">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                 <BarChart3 className="w-6 h-6 text-purple-500" />
               </div>
               <h3 className="text-lg font-semibold text-white mb-2">PrédictionXpert</h3>
               <p className="text-sm text-gray-400 mb-3">📊 L'outil ultime pour t'aider dans tes paris sportifs.</p>
               <p className="text-sm text-gray-400">
                 Analyse et suivi IA ultra avancé pour prendre les meilleures décisions.
               </p>
             </div>

             {/* Avantages Live Chat */}
             <div className="bg-black rounded-2xl p-6 border border-gray-700 transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/40 hover:border-orange-500/50 cursor-pointer">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                 <Star className="w-6 h-6 text-orange-500" />
               </div>
               <h3 className="text-lg font-semibold text-white mb-2">Avantages Live Chat</h3>
               <p className="text-sm text-gray-400 mb-3">Personnalise ton expérience.</p>
               <p className="text-sm text-gray-400">
                 Réduis la vitesse des messages, débloque des options exclusives et démarque-toi dans le chat.
               </p>
             </div>

             {/* PIP Stream */}
             <div className="bg-black rounded-2xl p-6 border border-gray-700 transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/40 hover:border-cyan-500/50 cursor-pointer">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                 <Tv className="w-6 h-6 text-cyan-500" />
               </div>
               <h3 className="text-lg font-semibold text-white mb-2">PIP Stream</h3>
               <p className="text-sm text-gray-400 mb-3">📺 Regarde et discute en même temps.</p>
               <p className="text-sm text-gray-400">
                 Place ton stream en mode Picture-in-Picture et garde le chat actif pendant ton match.
               </p>
             </div>

             {/* Tirages et communauté */}
             <div className="bg-black rounded-2xl p-6 border border-gray-700 transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/40 hover:border-red-500/50 cursor-pointer">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                 <Gift className="w-6 h-6 text-red-500" />
               </div>
               <h3 className="text-lg font-semibold text-white mb-2">Tirages et communauté</h3>
               <p className="text-sm text-gray-400 mb-3">🎁 Des prix à gagner, ensemble.</p>
               <p className="text-sm text-gray-400">
                 Participe à nos tirages réguliers et profite d'une communauté active qui partage la même passion du
                 sport.
               </p>
             </div>
           </div>
         </div>
       </section>

             {/* Quebec Section */}
       <section id="adn" className="py-16 px-4 bg-black">
         <div className="max-w-4xl mx-auto text-center">
                       <AnimatedElement>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Fièrement du Québec, pensée par des passionnés de sport pour les passionnés de sport.
              </h2>
            </AnimatedElement>
           <div className="text-lg text-gray-300 leading-tight space-y-2 max-w-3xl mx-auto">
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

       {/* Call-to-Action Section */}
       <section id="fan" className="py-16 px-4 bg-gray-900">
         <div className="max-w-4xl mx-auto text-center">
                       <AnimatedElement>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">T'es un vrai fan de sport ? Prouve-le :</h2>
            </AnimatedElement>
           <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
             Inscris-toi à notre infolettre pour recevoir ton code promo et tester l'app en avant-première. Tu ne veux
             pas manquer ça !
           </p>
           <p className="text-white font-semibold mb-8">
             Places limitées et un cadeau t'attends lors de la sortie de l'application mobile.
           </p>

           <WaitlistForm />

           {/* Instagram follow section */}
           <div className="mt-8 pt-6 border-t border-gray-700">
             <p className="text-gray-300 mb-4">Suis nous aussi sur :</p>
             <div className="flex justify-center">
               <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center">
                 <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                 </svg>
               </div>
             </div>
           </div>
         </div>
       </section>

      

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-700 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo-mordu-complete.svg"
              alt="Mordu Sport Logo"
              width={48}
              height={48}
              className="w-18 h-18 opacity-60"
            />
          </div>
          <p className="text-gray-400 mb-4">© 2024 Mordu Sport. Tous droits réservés.</p>
          <p className="text-sm text-gray-500">L'expérience ultime pour les fans de sport arrive bientôt.</p>
        </div>
      </footer>
    </div>
  )
}
