'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import WaitlistForm from './waitlist-form'

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Afficher le popup après 3 secondes
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="relative bg-black rounded-2xl p-8 max-w-md mx-4 border border-gray-800 shadow-2xl">
        {/* Bouton fermer X en blanc */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Logo de la bouche en haut */}
        <div className="flex justify-center mb-6">
          <Image 
            src="/logo-mordu-bouche.png" 
            alt="Mordu Sport Logo" 
            width={80} 
            height={80} 
            className="h-20 w-auto"
          />
        </div>

        {/* Titre principal */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white font-league-spartan tracking-wide">
            MORDS DANS LA GAME
          </h2>
        </div>

        {/* Contenu */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4 font-league-spartan">
          T'es un vrai mordu de sport ? Prouve-le !
          </h3>
          <p className="text-gray-300 mb-6 font-league-spartan">
          Inscris-toi à notre infolettre pour recevoir ton code promo et tester Mordu Sport en avant-première. Tu ne veux pas manquer ça !
          </p>
          
          <WaitlistForm />
          
          <p className="text-sm text-gray-400 mt-4 font-league-spartan">
          Places limitées, et un cadeau exclusif t'attend au lancement officiel.
          </p>
          
          {/* Texte de désabonnement */}
          <p className="text-xs text-gray-500 mt-6 font-league-spartan leading-relaxed max-w-sm mx-auto">
            En t'inscrivant, tu acceptes de recevoir des courriels promotionnels avec du mordant pouvant causer la rage de sport. Tu peux te désabonner à tout moment avec le lien prévu à cet effet.
          </p>
        </div>
      </div>
    </div>
  )
}
