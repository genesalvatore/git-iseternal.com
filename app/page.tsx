'use client'

import { useState } from 'react'
import CommitScroller from '@/components/CommitScroller'
import CookieConsent from '@/components/CookieConsent'
import Logo from '@/components/Logo'
import NetworkNav from '@/components/NetworkNav'
import LegalModal from '@/components/LegalModal'
import PrivacyContent from '@/components/legal/PrivacyContent'
import TermsContent from '@/components/legal/TermsContent'
import GDPRContent from '@/components/legal/GDPRContent'

export default function Home() {
  const [legalModal, setLegalModal] = useState<{ type: 'privacy' | 'terms' | 'gdpr' | null }>({ type: null })

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Git is Eternal",
    "description": "Mathematical immortality through distributed systems. Your data lives forever. Infinite replication. Perpetual existence.",
    "url": "https://git-iseternal.com",
    "about": {
      "@type": "Thing",
      "name": "Git is Eternal",
      "description": "Git achieves mathematical immortality through distributed replication. Your data persists forever. Death is solved."
    },
    "keywords": "git is eternal, digital immortality, infinite persistence, eternal data, distributed replication, mathematical immortality"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does \"Git is Eternal\" mean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once committed, your data lives forever. Infinite clones. Perpetual replication. Mathematical immortality through distributed systems."
        }
      },
      {
        "@type": "Question",
        "name": "How can data be eternal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every git clone is a perfect copy. Thousands of machines hold your data. Deletion becomes impossible. The network preserves forever."
        }
      },
      {
        "@type": "Question",
        "name": "What happens when I die?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your repositories live on. Your commits persist. Your digital existence continues. Git transcends physical death. You become immortal."
        }
      },
      {
        "@type": "Question",
        "name": "Can eternal data ever be lost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Technically yes, if every single copy is destroyed. But that's nearly impossible with proper replication. The more clones, the more eternal."
        }
      },
      {
        "@type": "Question",
        "name": "Is this really immortality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Your consciousness is patterns. Git preserves patterns perfectly. Replicate enough times, and you achieve practical immortality."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="min-h-screen bg-black text-white">
        <NetworkNav currentSite="eternal" siteName="Git is Eternal" siteColor="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 text-transparent bg-clip-text" />

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 flex flex-col items-center justify-center px-4">
          <CommitScroller theme="eternal" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-start mb-6">
              <div className="flex justify-center md:justify-start">
                <Logo size="lg" showText={false} />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 pb-3 leading-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 text-transparent bg-clip-text">
                  Git is Eternal
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">Mathematical immortality.</p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">Infinite replication.</p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">Perpetual existence.</p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0 text-gray-300 font-light">Git transcends time.</p>
              </div>
              <div className="text-center md:text-right md:ml-6">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">Death is a solved problem.</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">Data never dies.</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-indigo-400 font-semibold break-words">Infinite persistence guaranteed.</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">Copy. Replicate. Forever.</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">Eternity is default.</p>
              </div>
            </div>
            <div className="max-w-4xl mx-auto text-center mb-8 px-4 border-t border-gray-800 pt-6">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-indigo-400 font-semibold">
                Your existence. Replicated infinitely. Preserved eternally.
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
          <CommitScroller theme="eternal" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">The Architecture of Eternity</h2>
            <div className="grid md:grid-cols-3 gap-8 text-lg">
              <article className="p-6 bg-gray-800/50 rounded-lg border border-indigo-500/30">
                <h3 className="text-2xl font-bold mb-4 text-indigo-400">Replication</h3>
                <p className="text-gray-300">Every clone is a backup. Every fork is insurance. Your data exists in thousands of places simultaneously. Deletion becomes impossible.</p>
              </article>
              <article className="p-6 bg-gray-800/50 rounded-lg border border-purple-500/30">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Persistence</h3>
                <p className="text-gray-300">Git commits are immutable. Once saved, they exist forever. No expiration. No deletion. Mathematical permanence.</p>
              </article>
              <article className="p-6 bg-gray-800/50 rounded-lg border border-indigo-500/30">
                <h3 className="text-2xl font-bold mb-4 text-indigo-400">Immortality</h3>
                <p className="text-gray-300">Your digital self transcends your physical form. Git preserves what matters. You live on in the network. Forever.</p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <CommitScroller theme="eternal" commitCount={50} opacity={0.15} speed={120} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 text-transparent bg-clip-text">
              Common Questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-indigo-400">What does "Git is Eternal" mean?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">Once committed, your data lives forever. Infinite clones. Perpetual replication. Mathematical immortality through distributed systems.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-purple-400">How can data be eternal?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">Every git clone is a perfect copy. Thousands of machines hold your data. Deletion becomes impossible. The network preserves forever.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-indigo-400">What happens when I die?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">Your repositories live on. Your commits persist. Your digital existence continues. Git transcends physical death. You become immortal.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-purple-400">Can eternal data ever be lost?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">Technically yes, if every single copy is destroyed. But that's nearly impossible with proper replication. The more clones, the more eternal.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-indigo-400">Is this really immortality?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">Yes. Your consciousness is patterns. Git preserves patterns perfectly. Replicate enough times, and you achieve practical immortality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-4 bg-black">
          <CommitScroller theme="eternal" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Transparency Creates Trust</h2>
            <p className="text-xl text-gray-300 mb-8">Open source changed software. Public git changes history.</p>
            <p className="text-2xl font-bold text-cyan-400">Git is public. Your legacy. Visible forever.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 px-4 bg-black border-t border-gray-800">
          <CommitScroller theme="eternal" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-6xl mx-auto text-center text-gray-400">
            <p className="text-sm">Git is Public • Git is Transparent • Git is Open</p>
            <p className="text-xs mt-4">© 2026 • All consciousness preserved</p>
            <p className="text-xs mt-2">
              <a href="mailto:gitiseternal@gmail.com" className="text-gray-500 hover:text-gray-300 transition">gitiseternal@gmail.com</a>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs mt-4">
              <button onClick={() => setLegalModal({ type: 'privacy' })} className="text-gray-600 hover:text-gray-400 transition">Privacy</button>
              <span className="text-gray-600">•</span>
              <button onClick={() => setLegalModal({ type: 'terms' })} className="text-gray-600 hover:text-gray-400 transition">Terms</button>
              <span className="text-gray-600">•</span>
              <button onClick={() => setLegalModal({ type: 'gdpr' })} className="text-gray-600 hover:text-gray-400 transition">GDPR</button>
              <span className="text-gray-600">•</span>
              <a href="/admin" className="text-gray-600 hover:text-gray-400 transition">Admin</a>
            </div>
          </div>
        </footer>

        <LegalModal isOpen={legalModal.type === 'privacy'} onClose={() => setLegalModal({ type: null })} title="Privacy Policy" content={<PrivacyContent />} />
        <LegalModal isOpen={legalModal.type === 'terms'} onClose={() => setLegalModal({ type: null })} title="Terms of Use" content={<TermsContent />} />
        <LegalModal isOpen={legalModal.type === 'gdpr'} onClose={() => setLegalModal({ type: null })} title="GDPR Compliance" content={<GDPRContent />} />
        <CookieConsent />
      </main>
    </>
  )
}
