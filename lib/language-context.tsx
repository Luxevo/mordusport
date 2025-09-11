'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'fr' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation keys
const translations = {
  fr: {
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
    
    // Language Selector
    'lang.fr': 'FR',
    'lang.en': 'EN',
  },
  en: {
    // Navigation
    'nav.sport': 'Your sport with bite',
    'nav.adn': 'Our DNA',
    'nav.fan': 'Are you a real fan?',
    
    // Hero Section
    'hero.title': 'THE ULTIMATE EXPERIENCE FOR REAL SPORTS FANS',
    'hero.ultime': 'ULTIMATE',
    'hero.vrais-fans': 'REAL FANS',
    
    // Sport Section
    'sport.title': 'Your sport with bite',
    'sport.subtitle': 'A new way to experience your games has arrived. Here\'s what you\'ll find in Mordu Sport.',
    
    // Carousel Features
    'carousel.fans.title': 'We bring fans together',
    'carousel.fans.desc': 'Chat before, during and after games with thousands of fans like you.',
    'carousel.leagues.title': 'All your favorite leagues in one place',
    'carousel.leagues.desc': 'NHL 🏒, NFL 🏈, NBA 🏀 and more.',
    'carousel.stats.title': 'Real-time stats',
    'carousel.stats.desc': 'Watch games live and don\'t miss any hot moments.',
    'carousel.prediction.title': 'PredictionXpert',
    'carousel.prediction.desc': '📊 The ultimate tool to help you with your sports betting. Ultra-advanced AI analysis and tracking.',
    'carousel.chat.title': 'Live Chat Benefits',
    'carousel.chat.desc': 'Customize your experience. Reduce message speed, unlock exclusive options.',
    'carousel.pip.title': 'PIP Stream',
    'carousel.pip.desc': '📺 Watch and chat at the same time. Place your stream in Picture-in-Picture mode.',
    'carousel.community.title': 'Draws and community',
    'carousel.community.desc': '🎁 Prizes to win, together. Participate in our regular draws and enjoy an active community.',
    
    // Quebec Section
    'quebec.title': 'Proudly from Quebec, designed by sports enthusiasts for sports enthusiasts.',
    'quebec.p1': 'Too often, French-speaking fans don\'t have access to a real sports app that looks like them. We wanted to change that.',
    'quebec.p2': 'Our idea is simple: bring fans together, create a place where you can follow your games live, chat before, during and after the game, and discover other enthusiasts like you.',
    'quebec.p3': 'A platform designed from A to Z to experience sports together, share the emotion of the moment and get even closer to the action.',
    
    // Fan Section
    'fan.title': 'Are you a real sports fan? Prove it:',
    'fan.subtitle': 'Sign up for our newsletter to receive your promo code and test the app in preview. You don\'t want to miss this!',
    'fan.limited': 'Limited spots and a gift awaits you at the mobile app launch.',
    
    // Footer
    'footer.instagram': 'Follow us on Instagram too',
    
    // Newsletter Popup
    'popup.title': 'BITE INTO THE GAME',
    'popup.subtitle': 'Are you a real sports addict? Prove it!',
    'popup.desc': 'Sign up for our newsletter to receive your promo code and test Mordu Sport in preview. You don\'t want to miss this!',
    'popup.limited': 'Limited spots, and an exclusive gift awaits you at the official launch.',
    'popup.disclaimer': 'By signing up, you agree to receive promotional emails with bite that can cause sports rage. You can unsubscribe at any time with the link provided for this purpose.',
    
    // Waitlist Form
    'form.email': 'your@email.com',
    'form.age.18plus': 'I am 18 years and older',
    'form.age.18minus': 'I am under 18 years old',
    'form.age.disclaimer': 'This information is only used to better adapt the newsletter and promotions according to your age.',
    'form.submit': 'I\'M ADDICTED',
    'form.submitting': 'Signing up...',
    'form.error.email': 'Email is required',
    'form.error.age': 'Please select your age group',
    'form.error.duplicate': 'This email is already on the waitlist',
    'form.error.generic': 'Failed to join waitlist. Please try again.',
    'form.success': 'Successfully joined the waitlist! We\'ll be in touch soon.',
    
    // App Store
    'appstore.alt': 'Coming soon to App Store',
    'playstore.alt': 'Coming soon to Google Play',
    
    // Language Selector
    'lang.fr': 'FR',
    'lang.en': 'EN',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('mordu-language') as Language
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('mordu-language', language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
