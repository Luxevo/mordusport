'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
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
      <div className="relative bg-gray-900 rounded-2xl p-8 max-w-md mx-4 border border-gray-700 shadow-2xl">
        {/* Bouton fermer */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Contenu */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4 font-league-spartan">
            🏆 T'es un vrai fan de sport ?
          </h3>
          <p className="text-gray-300 mb-6 font-league-spartan">
            Inscris-toi à notre infolettre et reçois ton code promo exclusif pour tester l'app en avant-première !
          </p>
          
          <WaitlistForm />
          
          <p className="text-sm text-gray-400 mt-4 font-league-spartan">
            Places limitées • Cadeau offert à la sortie
          </p>
        </div>
      </div>
    </div>
  )
}
