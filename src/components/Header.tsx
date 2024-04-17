import { getProfileCurrentUser, getSession } from '@/services/user'
import Logo from '@/svg/Logo'
import Link from 'next/link'
import MenuResponsive from './MenuResponsive'

export default async function Header() {
  const user = await getProfileCurrentUser()
  const session = await getSession()

  return (
    <header className="fixed z-[1000] flex w-full items-center justify-between bg-neutral-secondary-bg p-4 text-neutral-title shadow-sm xs:px-8 sm:px-12">
      <Link href="/" className="h-6 md:h-8">
        <Logo />
      </Link>
      <MenuResponsive session={session} user={user} />
    </header>
  )
}
