import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Header from './components/Layout/Header'
import { ThemeProvider } from 'next-themes'
import Footer from './components/Layout/Footer'
import ScrollToTop from './components/ScrollToTop'
import Script from 'next/script'

const DMSans = DM_Sans({
  variable: '--font-DM-Sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://calcverse.site'),
  title: {
    default: 'CalcVerse | Professional Financial Calculators & Planning Tools',
    template: '%s | CalcVerse'
  },
  description: 'CalcVerse offers accurate financial calculators for loans, mortgages, investments, and taxes. Plan your financial future with our free, professional-grade tools.',
  keywords: ['financial calculator', 'loan calculator', 'mortgage calculator', 'EMI calculator', 'investment calculator', 'compound interest calculator', 'salary calculator', 'tax calculator', 'budgeting tools'],
  authors: [{ name: 'CalcVerse Team' }],
  creator: 'CalcVerse',
  publisher: 'CalcVerse',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CalcVerse | Professional Financial Calculators',
    description: 'Accurate financial calculators for loans, investments, and taxes.',
    url: 'https://calcverse.site',
    siteName: 'CalcVerse',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CalcVerse | Financial Calculators',
    description: 'Plan your financial future with our free, professional-grade tools.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* Google AdSense Script Placeholder */}
        {/* Replace 'ca-pub-0000000000000000' with your actual AdSense Publisher ID */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0000000000000000"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${DMSans.variable} antialiased dark:bg-darkmode`}>
        <ThemeProvider
          attribute='class'
          enableSystem={false}
          defaultTheme='light'>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
