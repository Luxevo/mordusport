'use client'

import React, { createContext, useContext } from 'react'


interface LanguageContextType {
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation keys
const translations = {
    // Navigation
    'nav.sport': 'Ton sport avec du mordant',
    'nav.adn': 'Notre ADN',
    'nav.fan': 'T\'es un vrai fan ?',
    
    // Hero Section
    'hero.title': 'L\'EXPÉRIENCE ULTIME DES VRAIS FANS DE SPORT',
    'hero.ultime': 'ULTIME',
    'hero.vrais-fans': 'VRAIS FANS',
    
    // Sport Section
    'sport.title': 'Ton sport avec du mordant',
    'sport.subtitle': 'Une nouvelle façon de vivre tes matchs est arrivée. Voici ce que tu retrouveras dans Mordu Sport.',
    
    // Carousel Features
    'carousel.fans.title': 'On rassemble les fans',
    'carousel.fans.desc': 'Discute avant, pendant et après les matchs avec des milliers de fans comme toi.',
    'carousel.leagues.title': 'Toutes tes ligues préférées au même endroit',
    'carousel.leagues.desc': 'NHL 🏒, NFL 🏈, NBA 🏀 et plus encore.',
    'carousel.stats.title': 'Stats en temps réel',
    'carousel.stats.desc': 'Vis les matchs en direct et ne manque aucun moment chaud.',
    'carousel.prediction.title': 'PrédictionXpert',
    'carousel.prediction.desc': '📊 L\'outil ultime pour t\'aider dans tes paris sportifs. Analyse et suivi IA ultra avancé.',
    'carousel.chat.title': 'Avantages Live Chat',
    'carousel.chat.desc': 'Personnalise ton expérience. Réduis la vitesse des messages, débloque des options exclusives.',
    'carousel.pip.title': 'PIP Stream',
    'carousel.pip.desc': '📺 Regarde et discute en même temps. Place ton stream en mode Picture-in-Picture.',
    'carousel.community.title': 'Tirages et communauté',
    'carousel.community.desc': '🎁 Des prix à gagner, ensemble. Participe à nos tirages réguliers et profite d\'une communauté active.',
    
    // Quebec Section
    'quebec.title': 'Fièrement du Québec, pensée par des passionnés de sport pour les passionnés de sport.',
    'quebec.p1': 'Trop souvent, les amateurs francophones n\'ont pas accès à une vraie app de sport qui leur ressemble. On a voulu changer ça.',
    'quebec.p2': 'Notre idée est simple : rassembler les fans, créer un endroit où tu peux suivre tes matchs en direct, discuter avant, pendant et après la partie, et découvrir d\'autres passionnés comme toi.',
    'quebec.p3': 'Une plateforme pensée de A à Z pour vivre le sport ensemble, partager l\'émotion du moment et se rapprocher encore plus de l\'action.',
    
    // Fan Section
    'fan.title': 'T\'es un vrai fan de sport ? Prouve-le :',
    'fan.subtitle': 'Inscris-toi à notre infolettre pour recevoir ton code promo et tester l\'app en avant-première. Tu ne veux pas manquer ça !',
    'fan.limited': 'Places limitées et un cadeau t\'attends lors de la sortie de l\'application mobile.',
    
    // Footer
    'footer.instagram': 'Suis-nous aussi sur Instagram',
    
    // Newsletter Popup
    'popup.title': 'MORDS DANS LA GAME',
    'popup.subtitle': 'T\'es un vrai mordu de sport ? Prouve-le !',
    'popup.desc': 'Inscris-toi à notre infolettre pour recevoir ton code promo et tester Mordu Sport en avant-première. Tu ne veux pas manquer ça !',
    'popup.limited': 'Places limitées, et un cadeau exclusif t\'attend au lancement officiel.',
    'popup.disclaimer': 'En t\'inscrivant, tu acceptes de recevoir des courriels promotionnels avec du mordant pouvant causer la rage de sport. Tu peux te désabonner à tout moment avec le lien prévu à cet effet.',
    
    // Waitlist Form
    'form.email': 'votre@email.com',
    'form.age.18plus': 'J\'ai 18 ans et plus',
    'form.age.18minus': 'J\'ai moins de 18 ans',
    'form.age.disclaimer': 'Cette information est uniquement utilisée pour mieux adapter l\'infolettre et les promotions selon ton âge.',
    'form.submit': 'JE SUIS MORDU',
    'form.submitting': 'Inscription en cours...',
    'form.error.email': 'Email is required',
    'form.error.age': 'Please select your age group',
    'form.error.duplicate': 'This email is already on the waitlist',
    'form.error.generic': 'Failed to join waitlist. Please try again.',
    'form.success': 'Successfully joined the waitlist! We\'ll be in touch soon.',
    
    // App Store
    'appstore.alt': 'Bientôt sur l\'App Store',
    'playstore.alt': 'Bientôt sur Google Play',
    
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const t = (key: string): string => {
    return translations[key as keyof typeof translations] || key
  }

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
