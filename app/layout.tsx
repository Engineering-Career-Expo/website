import './globals.css'
import type { Metadata } from 'next'
import { Inter, Varela_Round } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-inter'
})
const varela_round = Varela_Round({ 
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-varela-round'
})

export const metadata: Metadata = {
  title: 'ECX website',
  description: 'This is the official ECX website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${varela_round.variable}`}>{children}</body>
    </html>
  )
}
