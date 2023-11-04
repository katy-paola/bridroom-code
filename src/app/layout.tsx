import { GeistSans } from 'geist/font'
import './globals.css'
import Header from '@/components/Header'
import { bodyFont } from './ui/fonts'

const defaultUrl =
  process.env.VERCEL_URL != null
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <section className={`flex flex-col ${bodyFont.className}`}>
          <Header />
          <main className="flex min-h-screen flex-col items-center">
            {children}
          </main>
        </section>
      </body>
    </html>
  )
}
