import { Header } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

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
      <body className='relative bg-dark-color text-light-color font-inter'>
        <Header />
        {children}
        </body>
    </html>
  )
} 
