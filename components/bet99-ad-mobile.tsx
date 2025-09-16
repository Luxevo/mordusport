'use client'

import { useState } from "react"
import { X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface Bet99AdMobileProps {
  onClose?: () => void
}

export default function Bet99AdMobile({ onClose }: Bet99AdMobileProps) {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(true)
  
  // Using French version only for now - English version hidden for later use
  const adImage = '/bet99-ad-mobile.jpg'
  const adAlt = 'BET99 - Deuxième chance jusqu\'à 800$'
  const adLink = 'https://record.canadiangamingaffiliates.com/_8eweRFtGXWkdimWE6PdS1WNd7ZgqdRLk/1/'

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsVisible(false)
    if (onClose) {
      onClose()
    }
  }

  if (!isVisible) return null

  return (
    <div className="relative group bg-black/90 backdrop-blur-sm border-t border-gray-800">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 z-50 w-6 h-6 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
        aria-label="Fermer la publicité"
      >
        <X className="w-4 h-4" />
      </button>
      
      <a 
        href={adLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block py-2"
      >
        <img 
          src={adImage} 
          alt={adAlt} 
          className="w-[320px] h-[100px] object-contain mx-auto"
        />
      </a>
    </div>
  )
}
