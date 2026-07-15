import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: 'Portfolio | Software Engineer',
  description: 'Personal portfolio showcasing my experience, skills, and professional journey as a software engineer.',
  generator: 'v0.app',
  keywords: ['software engineer', 'developer', 'portfolio', 'full stack', 'react', 'typescript'],
  authors: [{ name: 'Marian Díaz Romero' }],
  icons: {
    icon: '/MD-favicon-5.png',
    shortcut: '/MD-favicon-5.png',
    apple: '/MD-favicon-5.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f0f0f0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
