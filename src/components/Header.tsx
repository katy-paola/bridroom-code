import Link from 'next/link'
import Logo from '@/svg/Logo'
import Menu from '@/svg/Menu'
import Nav from './Nav'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-neutral-secondary-bg p-4 text-neutral-title xs:px-8 sm:px-12">
      <Link href="/" className="flex items-center gap-2">
        <Logo />
      </Link>
      <section className="md:hidden">
        <Menu />
      </section>
      <Nav />
    </header>
  )
}
