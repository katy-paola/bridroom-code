import Link from 'next/link'
import Logo from '@/svg/Logo'
import Menu from '@/svg/Menu'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-neutral-secondary-bg p-4 text-neutral-title">
      <Link href="/" className="flex items-center gap-2">
        <Logo />
      </Link>
      <Menu />
    </header>
  )
}
