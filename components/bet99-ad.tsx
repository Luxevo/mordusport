import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export default function Bet99Ad() {
  const { language } = useLanguage()
  
  // Use ROC Display ads based on language
  const adImage = language === 'en' ? '/ROC-Display-160x600-EN.jpg' : '/bet99-ad-banner.png'
  const adAlt = language === 'en' ? 'ROC Display - English Ad' : 'BET99 - Deuxième chance jusqu\'à 800$'
  const adLink = language === 'en' ? '#' : 'https://record.canadiangamingaffiliates.com/_8eweRFtGXWkdimWE6PdS1WNd7ZgqdRLk/1/'

  return (
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
  )
}
