import { Righteous, Poppins } from 'next/font/google'

export const titleFont = Righteous({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-righteous',
})
export const bodyFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
})
