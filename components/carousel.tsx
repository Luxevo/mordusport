"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, MessageCircle, Trophy, BarChart3, Star, Tv, Gift } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface CarouselProps {
  autoPlay?: boolean
  interval?: number
}

export default function Carousel({ autoPlay = true, interval = 5000 }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()

  const slides = [
    {
      icon: MessageCircle,
      iconColor: "text-blue-500",
      title: t('carousel.fans.title'),
      description: t('carousel.fans.desc'),
      borderColor: "hover:border-blue-500/50",
      shadowColor: "hover:shadow-blue-500/40"
    },
    {
      icon: Trophy,
      iconColor: "text-yellow-500",
      title: t('carousel.leagues.title'),
      description: t('carousel.leagues.desc'),
      borderColor: "hover:border-yellow-500/50",
      shadowColor: "hover:shadow-yellow-500/40"
    },
    {
      icon: BarChart3,
      iconColor: "text-green-500",
      title: t('carousel.stats.title'),
      description: t('carousel.stats.desc'),
      borderColor: "hover:border-green-500/50",
      shadowColor: "hover:shadow-green-500/40"
    },
    {
      icon: BarChart3,
      iconColor: "text-purple-500",
      title: t('carousel.prediction.title'),
      description: t('carousel.prediction.desc'),
      borderColor: "hover:border-purple-500/50",
      shadowColor: "hover:shadow-purple-500/40"
    },
    {
      icon: Star,
      iconColor: "text-orange-500",
      title: t('carousel.chat.title'),
      description: t('carousel.chat.desc'),
      borderColor: "hover:border-orange-500/50",
      shadowColor: "hover:shadow-orange-500/40"
    },
    {
      icon: Tv,
      iconColor: "text-cyan-500",
      title: t('carousel.pip.title'),
      description: t('carousel.pip.desc'),
      borderColor: "hover:border-cyan-500/50",
      shadowColor: "hover:shadow-cyan-500/40"
    },
    {
      icon: Gift,
      iconColor: "text-red-500",
      title: t('carousel.community.title'),
      description: t('carousel.community.desc'),
      borderColor: "hover:border-red-500/50",
      shadowColor: "hover:shadow-red-500/40"
    }
  ]

  // Créer une vraie boucle infinie avec des clones
  const totalSlides = slides.length
  const clonedSlides = [...slides, ...slides, ...slides, ...slides, ...slides] // 5 copies pour une vraie infinité

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      // Si on arrive à la fin des clones, on recommence au début des clones
      if (prev >= clonedSlides.length - 2) {
        return 0
      }
      return prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      // Si on arrive au début, on va à la fin des clones
      if (prev <= 0) {
        return clonedSlides.length - 2
      }
      return prev - 1
    })
  }

  // Fonctions pour mobile (1 slide à la fois)
  const nextSlideMobile = () => {
    setCurrentSlide((prev) => {
      if (prev >= clonedSlides.length - 1) {
        return 0
      }
      return prev + 1
    })
  }

  const prevSlideMobile = () => {
    setCurrentSlide((prev) => {
      if (prev <= 0) {
        return clonedSlides.length - 1
      }
      return prev - 1
    })
  }

  // Fonction pour aller à un slide spécifique
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, currentSlide])

  // Calculer l'index réel pour l'affichage
  const getRealIndex = (index: number) => {
    return index % totalSlides
  }

  // Gérer la transition infinie avec reset invisible
  useEffect(() => {
    // Reset invisible quand on arrive aux limites (desktop)
    if (currentSlide >= clonedSlides.length - 2) {
      const timer = setTimeout(() => {
        setCurrentSlide(0)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentSlide, clonedSlides.length])

  // Gérer la transition infinie pour mobile
  useEffect(() => {
    // Reset invisible quand on arrive aux limites (mobile)
    if (currentSlide >= clonedSlides.length - 1) {
      const timer = setTimeout(() => {
        setCurrentSlide(0)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentSlide, clonedSlides.length])

  return (
    <>
      {/* Version Mobile - Carrousel 1 slide */}
      <div className="sm:hidden w-full max-w-6xl mx-auto px-4">
        {/* Navigation Arrows Mobile */}
        <div className="relative">
          <button
            onClick={prevSlideMobile}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
            aria-label="Slide précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlideMobile}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
            aria-label="Slide suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel Container Mobile */}
          <div className="relative overflow-hidden rounded-2xl py-8 px-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {clonedSlides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className={`bg-black rounded-2xl p-6 border border-gray-700 transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl ${slide.shadowColor} ${slide.borderColor} cursor-pointer h-[280px] flex flex-col`}>
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4">
                      <slide.icon className={`w-5 h-5 ${slide.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{slide.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed flex-grow">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators Mobile */}
          <div className="flex justify-center mt-4 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === getRealIndex(currentSlide)
                    ? "bg-white scale-125" 
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Version Desktop - Carrousel */}
      <div className="hidden sm:block relative w-full max-w-4xl mx-auto px-8">
        {/* Navigation Arrows - Positionnées en dehors du carousel */}
        <button
          onClick={prevSlide}
          className="absolute -left-12 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
          aria-label="Slide précédent"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-12 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
          aria-label="Slide suivant"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-2xl py-12 px-4">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100/2)}%)` }}
          >
            {clonedSlides.map((slide, index) => (
              <div key={index} className="w-1/2 flex-shrink-0 px-4">
                <div className={`bg-black rounded-2xl p-8 border border-gray-700 transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl ${slide.shadowColor} ${slide.borderColor} cursor-pointer h-[320px] flex flex-col`}>
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
                    <slide.icon className={`w-6 h-6 ${slide.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{slide.title}</h3>
                  <p className="text-gray-400 leading-relaxed flex-grow">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === getRealIndex(currentSlide)
                  ? "bg-white scale-125" 
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}
