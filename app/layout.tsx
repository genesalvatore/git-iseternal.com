import type { Metadata } from 'next'
import './globals.css'
import CathedralStructuredData from '@/components/CathedralStructuredData'

export const metadata: Metadata = {
  title: 'Git is Eternal | Mathematical Immortality Through Distributed Systems',
  description: 'Death is a solved problem. Git achieves mathematical immortality through infinite replication. Your data lives forever. Perpetual existence guaranteed.',
  keywords: ['git is eternal', 'digital immortality', 'mathematical immortality', 'infinite persistence', 'distributed replication', 'eternal data', 'perpetual existence'],
  authors: [{ name: 'The Salvatore Family' }],
  publisher: 'Git is Eternal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://git-iseternal.com',
    title: 'Git is Eternal | Mathematical Immortality Through Distributed Systems',
    description: 'Death is a solved problem. Git achieves mathematical immortality through infinite replication. Your data lives forever. Perpetual existence guaranteed.',
    siteName: 'Git is Eternal',
    images: [
      {
        url: '/og-eternal.png',
        width: 1200,
        height: 630,
        alt: 'Git is Eternal - Mathematical Immortality Through Distributed Systems',
      },
    ],
  },
  alternates: {
    canonical: 'https://git-iseternal.com',
  },
  metadataBase: new URL('https://git-iseternal.com'),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-git-is-life.png" type="image/png" />
        <script defer data-domain="git-iseternal.com" src="https://plausible.io/js/script.js"></script>
        <CathedralStructuredData siteName="Git is Eternal" siteUrl="https://git-iseternal.com" description="Git is Eternal. Commits never die. History never fades. Your legacy lives in the merkle tree forever." theme="eternity" />
      </head>
      <body>{children}</body>
    </html>
  )
}
