import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CarpTravel',
  description: 'unforgettable trips to the most beautiful parts of the Carpathians',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <Head>
            
        </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
