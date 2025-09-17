'use client'

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface Bet99AdProps {
  onClose?: () => void
}

export default function Bet99Ad({ onClose }: Bet99AdProps) {
  const [isVisible, setIsVisible] = useState(true)
  
  // Configuration de la publicité
  const adImage = '/bet99-ad-banner.png'
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
    <div className="relative group">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 z-50 w-6 h-6 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
        aria-label="Fermer la publicité"
      >
        <X className="w-4 h-4" />
      </button>
      
      <a 
        href={adLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-lg border border-transparent hover:border-green-500 hover:shadow-green-500/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300"
      >
        {/* Ad Banner Image */}
        <div className="relative">
          <Image 
            src={adImage} 
            alt={adAlt} 
            width={160}
            height={600}
            className="w-[160px] h-[600px] object-contain"
            priority
            unoptimized
          />
        </div>
      </a>
    </div>
  )
}
