import './globals.css'
import Header from '@/components/Header'
import { bodyFont, titleFont } from './ui/fonts'

const defaultUrl =
  process.env.VERCEL_URL != null
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Bridroom',
  description: 'Encontrar tu pensión nunca fue tan facil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${bodyFont.variable} ${titleFont.variable}`}>
      <body className="font-body-font">
        <section className={`flex flex-col`}>
          <Header />
          <main className="flex min-h-screen flex-col items-center">
            {children}
          </main>
        </section>
      </body>
    </html>
  )
}
