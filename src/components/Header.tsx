import Link from 'next/link'
import Logo from '@/svg/Logo'
import Nav from './Nav'
import MenuResponsive from './MenuResponsive'

export default function Header() {
  return (
    <header className="fixed z-10 flex w-full items-center justify-between bg-neutral-secondary-bg p-4 text-neutral-title xs:px-8 sm:px-12">
      <Link href="/" className="flex items-center gap-2">
        <Logo />
      </Link>
      <MenuResponsive />
      <Nav />
    </header>
  )
}
