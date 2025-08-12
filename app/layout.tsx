import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mordu Sport - L'expérience ultime pour les fans de sport",
  description:
    "Regardez vos matchs préférés et chattez en temps réel avec d'autres passionnés. Comme Twitch, mais pour le sport. NHL, NBA, NFL et plus encore.",
  keywords: "sport, streaming, chat, NHL, NBA, NFL, fans, communauté, live",
  authors: [{ name: "Mordu Sport" }],
  creator: "Mordu Sport",
  publisher: "Mordu Sport",
  openGraph: {
    title: "Mordu Sport - L'expérience ultime pour les fans de sport",
    description: "Regardez vos matchs préférés et chattez en temps réel avec d'autres passionnés.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mordu Sport - L'expérience ultime pour les fans de sport",
    description: "Regardez vos matchs préférés et chattez en temps réel avec d'autres passionnés.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
