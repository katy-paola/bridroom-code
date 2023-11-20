import Link from 'next/link'
import Logo from '@/svg/Logo'
import MenuResponsive from './MenuResponsive'
import { getSession, getProfileCurrentUser } from '@/services/user'

export default async function Header() {
  const user = await getProfileCurrentUser()
  const session = await getSession()

  return (
    <header className="fixed z-10 flex w-full items-center justify-between bg-neutral-secondary-bg p-4 text-neutral-title xs:px-8 sm:px-12">
      <Link href="/" className="flex items-center gap-2">
        <Logo />
      </Link>
      <MenuResponsive session={session} user={user} />
    </header>
  )
}
