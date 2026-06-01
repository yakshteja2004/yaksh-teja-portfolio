import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  title: 'Yaksh Teja | AI Engineer & Data Scientist',
  description: 'Building AI That Creates Real Impact. AI Engineer, Data Scientist, and Analytics Enthusiast specializing in Machine Learning, Deep Learning, and Computer Vision.',
  keywords: ['AI Engineer', 'Data Scientist', 'Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'Computer Vision'],
  authors: [{ name: 'Yaksh Teja' }],
  creator: 'Yaksh Teja',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Yaksh Teja | AI Engineer & Data Scientist',
    description: 'Building AI That Creates Real Impact',
    siteName: 'Yaksh Teja Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yaksh Teja | AI Engineer & Data Scientist',
    description: 'Building AI That Creates Real Impact',
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
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
