import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Caveat, Nunito } from 'next/font/google'
import './globals.css'

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
})
const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Небольшое приключение',
  description: 'Картонная книга-приглашение для Алёны',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${caveat.variable} ${nunito.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
