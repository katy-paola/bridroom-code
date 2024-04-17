import Header from '@/components/Header'
import ToastClient from '@/components/ToastClient'
import 'leaflet/dist/leaflet.css'
import './globals.css'
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
    <html
      lang="es"
      className={`${bodyFont.variable} ${titleFont.variable} custom-scrollbar`}
    >
      <body className="w-full font-body-font">
        <section className="flex w-full flex-col bg-neutral-main-bg">
          <Header />
          <main className="flex min-h-screen w-full flex-col items-center bg-neutral-main-bg">
            {children}
          </main>
        </section>

        <ToastClient />
      </body>
    </html>
  )
}
