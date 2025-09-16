'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import WaitlistForm from './waitlist-form'
import { useLanguage } from '@/lib/language-context'

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    // Afficher le popup après 3 secondes
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY
      
      // Lock body scroll
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      
      return () => {
        // Restore scroll position when popup closes
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="relative bg-black rounded-2xl p-4 sm:p-8 max-w-sm sm:max-w-md mx-2 sm:mx-4 border border-gray-800 shadow-2xl max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500">
        {/* Bouton fermer X en blanc */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer z-10 bg-black/50 rounded-full p-1"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Logo de la bouche en haut */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <Image 
            src="/logo-mordu-bouche.png" 
            alt="Mordu Sport Logo" 
            width={80} 
            height={80} 
            className="h-16 sm:h-20 w-auto"
          />
        </div>

        {/* Titre principal */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-good-brush tracking-wide">
            {t('popup.title')}
          </h2>
        </div>

        {/* Contenu */}
        <div className="text-center">
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-league-spartan">
          {t('popup.subtitle')}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 font-league-spartan">
          {t('popup.desc')}
          </p>
          
          <WaitlistForm />
          
          <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4 font-league-spartan">
          {t('popup.limited')}
          </p>
          
          {/* Texte de désabonnement */}
          <p className="text-xs text-gray-500 mt-4 sm:mt-6 font-league-spartan leading-relaxed max-w-sm mx-auto">
            {t('popup.disclaimer')}
          </p>
          
          {/* Liens légaux */}
          <div className="flex justify-center gap-4 mt-4 text-xs text-gray-500">
            <a 
              href="/politique-de-confidentialite" 
              className="hover:text-gray-300 transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Politique de confidentialité
            </a>
            <span>•</span>
            <a 
              href="/mentions-legales" 
              className="hover:text-gray-300 transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
