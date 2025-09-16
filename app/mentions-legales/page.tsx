'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function MentionsLegales() {

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
        <h1 className="text-3xl md:text-4xl font-bold font-league-spartan mb-8">
          Mentions légales
        </h1>

        {/* Contenu */}
        <div className="prose prose-invert max-w-none font-league-spartan">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Informations sur l'éditeur</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Le site web et l'application Mordu Sport sont édités par <strong>Prédiction EXPERT inc.</strong>, société enregistrée au Québec (NEQ : 1180819444).
            </p>
            <div className="text-gray-300 leading-relaxed space-y-2 mb-4">
              <p><strong>Siège social :</strong></p>
              <p className="ml-4">
                3626 Rue Adam<br />
                Montréal (Québec)<br />
                H1W 1Y9<br />
                Canada
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <strong>Courriel de contact :</strong>{' '}
              <a href="mailto:info@mordusport.ca" className="text-blue-400 hover:text-blue-300">
                info@mordusport.ca
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Responsable de la publication</h2>
            <p className="text-gray-300 leading-relaxed">
              <strong>Responsable légal et de la publication :</strong><br />
              William Foucault Sourdif –{' '}
              <a href="mailto:info@mordusport.ca" className="text-blue-400 hover:text-blue-300">
                info@mordusport.ca
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Hébergement</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Le site web est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis –{' '}
              <a href="https://vercel.com" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                https://vercel.com
              </a>
            </p>
            <p className="text-gray-300 leading-relaxed">
              L'application mobile est distribuée via Google Play Store et Apple App Store.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Propriété intellectuelle</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              L'ensemble des éléments présents sur le site et dans l'application Mordu Sport (textes, contenus éditoriaux, fonctionnalités, design, graphismes, logos, images, vidéos, structure technique, etc.) est la propriété exclusive de Prédiction EXPERT inc., sauf indication contraire.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Les marques, logos, visuels publicitaires et contenus appartenant à des partenaires ou annonceurs restent la propriété de leurs détenteurs respectifs et sont utilisés avec leur autorisation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Toute reproduction, représentation, diffusion, modification ou exploitation, totale ou partielle, du contenu de Mordu Sport sans autorisation écrite préalable de Prédiction EXPERT inc. est interdite et pourrait constituer une violation des droits de propriété intellectuelle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Utilisation du site et de l'application</h2>
            <p className="text-gray-300 leading-relaxed">
              Les utilisateurs s'engagent à accéder au site et à l'application uniquement à des fins légales et dans le respect des présentes mentions légales. Toute utilisation abusive, frauduleuse ou contraire à l'ordre public pourra entraîner la suspension ou la suppression du compte utilisateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Protection des données personnelles</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Mordu Sport collecte et traite certaines données personnelles dans le cadre de l'inscription, de la gestion des comptes utilisateurs, et de l'utilisation des services (ex. envoi de notifications, emails, suivi d'activité).
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Conformément aux lois applicables au Québec et au Canada, les utilisateurs disposent d'un droit d'accès, de rectification et de suppression de leurs données personnelles. Ces droits peuvent être exercés en écrivant à :{' '}
              <a href="mailto:info@mordusport.ca" className="text-blue-400 hover:text-blue-300">
                info@mordusport.ca
              </a>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Pour plus d'informations, veuillez consulter notre{' '}
              <Link href="/politique-de-confidentialite" className="text-blue-400 hover:text-blue-300">
                Politique de confidentialité
              </Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Liens externes et publicités</h2>
            <p className="text-gray-300 leading-relaxed">
              Mordu Sport peut contenir des liens vers d'autres sites ou diffuser du contenu publicitaire fourni par des partenaires. Prédiction EXPERT inc. décline toute responsabilité quant au contenu, à la disponibilité ou à l'exactitude des informations présentes sur ces sites tiers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Publicité et contenu lié aux paris sportifs</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Mordu Sport n'est pas un casino en ligne ni un site de paris. L'application et le site diffusent du contenu à caractère informatif et promotionnel en lien avec des partenaires tiers, notamment des opérateurs de paris sportifs légalement autorisés.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ce contenu peut inclure, sans s'y limiter :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4 ml-4">
              <li>des cotes en direct,</li>
              <li>des offres promotionnelles,</li>
              <li>des codes affiliés,</li>
              <li>des publicités ou liens vers des sites tiers.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              Prédiction EXPERT inc. décline toute responsabilité quant à :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4 ml-4">
              <li>l'exactitude, l'actualité ou la disponibilité des cotes affichées,</li>
              <li>la validité des promotions proposées par les partenaires,</li>
              <li>les pertes financières encourues par les utilisateurs ayant choisi de parier via ces partenaires.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-6">
              Les utilisateurs reconnaissent que toute participation à des activités de paris sportifs se fait uniquement via les sites tiers partenaires et sous leur entière responsabilité.
            </p>
            
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-bold text-white mb-3">18 ans et + – Jeu responsable</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Les informations et promotions liées aux paris sportifs sont strictement réservées aux personnes âgées de 18 ans et plus.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                Nous encourageons la pratique d'un jeu responsable. Pour obtenir de l'aide ou du soutien en cas de problème de jeu, vous pouvez contacter :
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Jeu : aide et référence au Québec :</strong> 1-800-461-0140 ou{' '}
                <a href="https://aidejeu.ca" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                  https://aidejeu.ca
                </a>
              </p>
              <p className="text-gray-300 leading-relaxed mt-2">
                Ou toute ressource locale dédiée au jeu responsable.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Responsabilité</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Prédiction EXPERT inc. met tout en œuvre pour assurer l'exactitude et la mise à jour des informations diffusées sur Mordu Sport. Toutefois, aucune garantie n'est donnée quant à l'exactitude, la complétude ou la pertinence des informations fournies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              La responsabilité de Prédiction EXPERT inc. ne saurait être engagée en cas de dommages directs ou indirects résultant de l'utilisation du site ou de l'application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Droit applicable</h2>
            <p className="text-gray-300 leading-relaxed">
              Les présentes mentions légales sont régies par les lois du Québec et du Canada. Tout litige relatif à l'utilisation de Mordu Sport relève de la compétence exclusive des tribunaux du district judiciaire du siège social de Prédiction EXPERT inc.
            </p>
          </section>

          {/* Navigation vers les autres pages légales */}
          <div className="border-t border-gray-700 pt-6 mt-8">
            <p className="text-gray-400 text-sm mb-4">Voir aussi :</p>
            <Link 
              href="/politique-de-confidentialite" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
            >
              Politique de confidentialité
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
