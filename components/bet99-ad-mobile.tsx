import { useLanguage } from "@/lib/language-context"

export default function Bet99AdMobile() {
  const { language } = useLanguage()
  
  // Use ROC Display ads based on language
  const adImage = language === 'en' ? '/ROC-Display-320x100-EN.jpg' : '/bet99-ad-mobile.jpg'
  const adAlt = language === 'en' ? 'ROC Display - English Mobile Ad' : 'BET99 - Deuxième chance jusqu\'à 800$'
  const adLink = 'https://record.canadiangamingaffiliates.com/_8eweRFtGXWkdimWE6PdS1WNd7ZgqdRLk/1/'

  return (
    <a 
      href={adLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block"
    >
      <img 
        src={adImage} 
        alt={adAlt} 
        className="w-[320px] h-[100px] object-contain mx-auto"
      />
    </a>
  )
}
