import Image from "next/image"

export default function Bet99Ad() {
  return (
    <div className="overflow-hidden rounded-lg border border-transparent hover:border-green-500 hover:shadow-green-500/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300">
      {/* BET99 Ad Banner Image */}
      <div className="relative">
        <Image 
          src="/bet99-ad-banner.png" 
          alt="BET99 - Deuxième chance jusqu'à 800$" 
          width={300}
          height={570}
          className="w-full h-auto object-contain max-w-full"
          priority
        />
        
       
      </div>
    </div>
  )
}
