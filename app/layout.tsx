import type React from "react"
import type { Metadata } from "next"
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
  font-family: 'League Spartan', sans-serif;
}
        `}</style>
      </head>
      <body className="font-league-spartan">{children}</body>
    </html>
  )
}
