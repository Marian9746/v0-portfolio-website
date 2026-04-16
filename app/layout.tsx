import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: 'Portfolio | Software Engineer',
  description: 'Personal portfolio showcasing my experience, skills, and professional journey as a software engineer.',
  generator: 'v0.app',
  keywords: ['software engineer', 'developer', 'portfolio', 'full stack', 'react', 'typescript'],
  authors: [{ name: 'Tu Nombre' }],
  icons: {
    icon: [
      {
        url: '/MD-favicon-3.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/MD-favicon-3.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased overflow-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
