import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/language-context'

export const metadata: Metadata = {
  title: 'Sunny Taxi - Albania\'s Happiest Ride',
  description: 'Experience Albania\'s most reliable and cheerful taxi service. Book your sunny ride today!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
