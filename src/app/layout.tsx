import { Header } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CarpTravel',
  description: 'unforgettable trips to the most beautiful parts of the Carpathians',
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://carp-travel-nu.vercel.app/',
    title: 'CarpTravel',
    description: 'Uncover secrets of the Carpatian mountains',
    siteName: 'CarpTravel',
    images: [{url: '/logo.png'}],
  },
  applicationName: 'CarpTravel',
  referrer: 'origin-when-cross-origin',
  keywords: ['Travel', 'Tourism', 'Adrenaline'],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
    category: 'tourism',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative bg-dark-color text-light-color font-inter'>
        <Header />
        {children}
        </body>
    </html>
  )
} 
