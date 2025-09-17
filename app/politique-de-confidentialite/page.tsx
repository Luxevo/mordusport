'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PolitiqueConfidentialite() {

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Bouton retour */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        {/* Titre principal */}
        <h1 className="text-3xl md:text-4xl font-bold font-league-spartan mb-8" style={{ color: '#00C4FF' }}>
          Politique de confidentialité
        </h1>

        {/* Contenu */}
        <div className="prose prose-invert max-w-none font-league-spartan">
          <p className="text-gray-300 leading-relaxed mb-8">
            Votre vie privée est importante pour nous. La présente politique explique quelles données nous recueillons, comment nous les utilisons et quels sont vos droits.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Responsable du traitement</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Le site Mordu du Sport (accessible à l'adresse{' '}
              <a href="https://mordusport.ca" style={{ color: '#00C4FF' }} className="hover:opacity-80 transition-opacity">
                https://mordusport.ca
              </a>
              ) est exploité par son propriétaire.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Pour toute question concernant cette politique, vous pouvez nous écrire à :{' '}
              <a href="mailto:info@mordusport.com" style={{ color: '#00C4FF' }} className="hover:opacity-80 transition-opacity">
                info@mordusport.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Données que nous collectons</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nous collectons uniquement les données que vous choisissez de nous transmettre :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>Adresse courriel :</strong> lors de votre inscription à notre infolettre</li>
              <li><strong>Nom (facultatif) :</strong> si vous le fournissez</li>
              <li><strong>Confirmation d'âge (18+) :</strong> simple case à cocher pour valider votre admissibilité</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Aucune autre donnée personnelle n'est collectée automatiquement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Utilisation de vos données</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Vos données sont utilisées uniquement pour :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Vous inscrire à notre infolettre</li>
              <li>Vous envoyer des courriels d'information et de promotion liés à Mordu du Sport</li>
              <li>Vérifier votre admissibilité (18 ans et plus)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Vous pouvez vous désabonner à tout moment en cliquant sur le lien de désinscription présent dans chaque courriel que nous envoyons.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Stockage et sécurité des données</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Les données collectées sont stockées de manière sécurisée dans notre base de données gérée via Supabase.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nous prenons des mesures raisonnables pour protéger vos renseignements contre tout accès non autorisé, perte ou divulgation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Utilisation des cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Notre site utilise uniquement des cookies techniques strictement nécessaires :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>Cookies d'authentification Supabase :</strong> utilisés pour gérer les sessions des utilisateurs connectés (si applicable)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ces cookies ne collectent aucune donnée personnelle à des fins publicitaires ou analytiques.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Aucun cookie publicitaire, de suivi ou d'analyse n'est utilisé.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Partage de vos données</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nous ne partageons, vendons ni louons vos données personnelles à aucun tiers.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nous utilisons uniquement vos données pour les besoins décrits ci-dessus.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Vos droits</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Vous avez les droits suivants concernant vos données :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Droit d'accès et de rectification</li>
              <li>Droit de demander la suppression de vos données</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Pour exercer vos droits, contactez-nous à :{' '}
              <a href="mailto:info@mordusport.com" style={{ color: '#00C4FF' }} className="hover:opacity-80 transition-opacity">
                info@mordusport.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Modifications de cette politique</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nous pouvons modifier cette politique de confidentialité à tout moment.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Toute mise à jour sera publiée sur cette page avec la date de dernière mise à jour.
            </p>
          </section>

          {/* Navigation vers les autres pages légales */}
          <div className="border-t border-gray-700 pt-6 mt-8">
            <p className="text-gray-400 text-sm mb-4">Voir aussi :</p>
            <Link 
              href="/mentions-legales" 
              style={{ color: '#00C4FF' }}
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity text-sm font-medium"
            >
              Mentions légales
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
