"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Apple, Play } from "lucide-react"
import WaitlistForm from "@/components/waitlist-form"
import NewsletterPopup from "@/components/newsletter-popup"
import AnimatedElement from "@/components/animated-element"
import Carousel from "@/components/carousel"
import Bet99Ad from "@/components/bet99-ad"
import Bet99AdMobile from "@/components/bet99-ad-mobile"
import { useLanguage } from "@/lib/language-context"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isRightAdVisible, setIsRightAdVisible] = useState(true)
  const [isLeftAdVisible, setIsLeftAdVisible] = useState(true)
  const [isMobileAdVisible, setIsMobileAdVisible] = useState(true)
  const { t } = useLanguage()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-black">
      <NewsletterPopup />
      

      {/* Main Content */}
      {/* Navigation Bar */}
             <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center justify-between h-20">
                         {/* Logo */}
             <div className="flex items-center space-x-4">
               <a href="#" className="cursor-pointer">
                 <Image 
                   src="/logo-mordu-bouche.png" 
                   alt="Mordu Sport Logo" 
                   width={120} 
                   height={48} 
                   className="h-16 w-auto hover:opacity-80 transition-opacity duration-200"
                 />
               </a>
               
             </div>

             {/* App Store & Google Play - Coming Soon */}
             <div className="hidden lg:flex items-center space-x-6">
               <div >
                 <Image 
                   src="/app-store.png" 
                   alt={t('appstore.alt')} 
                   width={100} 
                   height={32} 
                   className="h-8 w-auto"
                 />
               </div>
               <div>
                 <Image 
                   src="/playstore.png" 
                   alt={t('playstore.alt')} 
                   width={100} 
                   height={32} 
                   className="h-8 w-auto"
                 />
               </div>
             </div>

             {/* App Store & Google Play - Mobile */}
             <div className="lg:hidden flex items-center space-x-4">
               <div>
                 <Image 
                   src="/app-store.png" 
                   alt={t('appstore.alt')} 
                   width={80} 
                   height={26} 
                   className="h-6 w-auto"
                 />
               </div>
               <div>
                 <Image 
                   src="/playstore.png" 
                   alt={t('playstore.alt')} 
                   width={80} 
                   height={26} 
                   className="h-6 w-auto"
                 />
               </div>
             </div>

              
                                       {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#ton-sport" className="text-gray-300 hover:text-white transition-colors duration-200 font-league-spartan">
                  {t('nav.sport')}
                </a>
                <a href="#adn" className="text-gray-300 hover:text-white transition-colors duration-200 font-league-spartan">
                  {t('nav.adn')}
                </a>
                <a href="#fan" className="text-gray-300 hover:text-white transition-colors duration-200 font-league-spartan">
                  {t('nav.fan')}
                </a>
                
                {/* Language Selector - Hidden since site is French-only */}
                {/* <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => setLanguage('fr')}
                    className={`px-2 py-1 text-sm font-league-spartan transition-colors duration-200 ${
                      language === 'fr' 
                        ? 'text-white bg-gray-700 rounded' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {t('lang.fr')}
                  </button>
                  <span className="text-gray-500">|</span>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-1 text-sm font-league-spartan transition-colors duration-200 ${
                      language === 'en' 
                        ? 'text-white bg-gray-700 rounded' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {t('lang.en')}
                  </button>
                </div> */}
              </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:text-white p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <a 
                href="#ton-sport" 
                className="block text-gray-300 hover:text-white transition-colors duration-200 font-league-spartan"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.sport')}
              </a>
              <a 
                href="#adn" 
                className="block text-gray-300 hover:text-white transition-colors duration-200 font-league-spartan"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.adn')}
              </a>
              <a 
                href="#fan" 
                className="block text-gray-300 hover:text-white transition-colors duration-200 font-league-spartan"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.fan')}
              </a>
              
              {/* Liens légaux */}
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <Link 
                  href="/politique-de-confidentialite"
                  className="block text-gray-400 hover:text-gray-300 text-sm font-league-spartan transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Politique de confidentialité
                </Link>
                <Link 
                  href="/mentions-legales"
                  className="block text-gray-400 hover:text-gray-300 text-sm font-league-spartan transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mentions légales
                </Link>
              </div>
              
            </div>
          </div>
        )}
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
               L'EXPÉRIENCE <span style={{ color: '#00C4FF' }} className="font-good-brush">ULTIME</span> DES <span style={{ color: '#00C4FF' }} className="font-good-brush">VRAIS FANS</span> DE SPORT
             </p>
           </AnimatedElement>
        </div>
      </section>

                           {/* Ton sport avec du mordant Section */}
        <section id="ton-sport" className="py-16 px-4 bg-black">
         <div className="max-w-6xl mx-auto">
                       <div className="text-center mb-16">
              <AnimatedElement>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-good-brush">
                  {t('sport.title')}
                </h2>
              </AnimatedElement>
              <AnimatedElement delay={1}>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-league-spartan">
                  {t('sport.subtitle')}
                </p>
              </AnimatedElement>
            </div>

                       {/* Carousel - Tous les 7 carrés */}
            <div className="mb-16">
              <Carousel autoPlay={true} interval={5000} />
            </div>
         </div>
       </section>

      {/* Separator */}
      <div role="separator" aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />

             {/* Quebec Section */}
       <section id="adn" className="py-16 px-4 bg-black">
         <div className="max-w-4xl mx-auto text-center">
                       <AnimatedElement>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-good-brush">
                {t('quebec.title')}
              </h2>
            </AnimatedElement>
           <div className="text-lg text-gray-300 leading-tight space-y-2 max-w-3xl mx-auto">
             <p>
               {t('quebec.p1')}
             </p>
             <p>
               {t('quebec.p2')}
             </p>
             <p>
               {t('quebec.p3')}
             </p>
           </div>
         </div>
       </section>

      {/* Separator */}
      <div role="separator" aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />

       {/* Call-to-Action Section */}
       <section id="fan" className="py-16 px-4 bg-black">
         <div className="max-w-4xl mx-auto text-center">
                       <AnimatedElement>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-good-brush">{t('fan.title')}</h2>
            </AnimatedElement>
           <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
             {t('fan.subtitle')}
           </p>
           <p className="text-white font-semibold mb-8">
             {t('fan.limited')}
           </p>

           <WaitlistForm />
           
           {/* Texte places limitées */}
           <p className="text-white font-semibold mt-6 mb-4">
             Places limitées, et un cadeau exclusif t'attend au lancement officiel.
           </p>
           
           {/* Texte disclaimer */}
           <p className="text-xs text-gray-500 mt-4 font-league-spartan leading-relaxed max-w-lg mx-auto">
             En t'inscrivant, tu acceptes de recevoir des courriels promotionnels avec du mordant pouvant causer la rage de sport. Tu peux te désabonner à tout moment avec le lien prévu à cet effet.
           </p>
         </div>
       </section>     

          {/* Footer */}
          <footer className="py-12 px-4 pb-20 xl:pb-12 border-t border-gray-700 bg-black">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-300 mb-4 font-league-spartan">{t('footer.instagram')}</p>
              <div className="flex justify-center pb-10">
                <a 
                  href="https://www.instagram.com/mordusport/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  aria-label="Suivez-nous sur Instagram @mordusport"
                >
                 <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" >
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z" />
                 </svg>
                </a>
              </div>
              
              {/* Liens légaux - Desktop seulement */}
              <div className="hidden md:flex justify-center items-center gap-6 pt-4 border-t border-gray-800">
                <Link 
                  href="/politique-de-confidentialite"
                  className="text-gray-400 hover:text-gray-300 text-sm font-league-spartan transition-colors"
                >
                  Politique de confidentialité
                </Link>
                <span className="text-gray-600">•</span>
                <Link 
                  href="/mentions-legales"
                  className="text-gray-400 hover:text-gray-300 text-sm font-league-spartan transition-colors"
                >
                  Mentions légales
                </Link>
              </div>
            </div>
          </footer>

      {/* BET99 Ad - Sticky Image Right */}
      {isRightAdVisible && (
        <div className="hidden xl:block fixed right-4 top-24 z-48">
          <Bet99Ad onClose={() => setIsRightAdVisible(false)} />
        </div>
      )}

      {/* BET99 Ad - Sticky Image Left */}
      {isLeftAdVisible && (
        <div className="hidden xl:block fixed left-4 top-24 z-48">
          <Bet99Ad onClose={() => setIsLeftAdVisible(false)} />
        </div>
      )}

      {/* BET99 Ad - Mobile/Tablet Sticky Bottom */}
      {isMobileAdVisible && (
        <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 flex justify-center">
          <Bet99AdMobile onClose={() => setIsMobileAdVisible(false)} />
        </div>
      )}
    </div>
  )
}
