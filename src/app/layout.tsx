import { Header } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import Head from 'next/head'

// const inter = Inter({ subsets: ['latin'] })

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
        {/* <Head> */}
        {/* <link rel="icon" id='favicon' href="/favicon.ico" sizes="any" /> */}
        {/* </Head> */}
      <body className='relative bg-dark-color text-light-color font-inter'>
        <Header />
        {children}
        {/* <Footer /> */}
        </body>
    </html>
  )
} 
