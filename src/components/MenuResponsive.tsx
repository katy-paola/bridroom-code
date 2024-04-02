'use client'

import Menu from '@/svg/Menu'
import Close from '@/svg/Close'
import Add from '@/svg/Add'
import IconUser from '@/svg/IconUser'
import { useState } from 'react'
import Button from './Button'
import { type Session } from '@supabase/supabase-js'
import { type User } from '../types/types'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function MenuResponsive({
  session,
  user,
}: {
  session: Session | null
  user: User | null
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const role = user?.role
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    if (error !== null) console.error('Error logging out:', error.message)

    router.push('/login')
    router.refresh()
  }

  return (
    <>
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen)
        }}
        className="rounded p-1 hover:bg-neutral-hover md:hidden"
      >
        <figure className="flex h-4 w-4 items-center">
          {isMenuOpen ? <Close /> : <Menu />}
        </figure>
      </button>

      <nav
        className={`fixed bottom-0 right-0 top-14 z-[1000] w-64 bg-neutral-main-bg shadow-md md:w-auto md:max-w-none ${
          isMenuOpen ? 'flex' : 'hidden'
        } md:static md:flex md:w-auto md:bg-transparent md:shadow-none`}
      >
        {/* Menú para usuarios sin autenticar */}
        {session === null && (
          <ul className="flex w-full flex-col md:flex-row md:gap-8">
            <li className="flex p-2 xs:px-4 md:p-0">
              <Link href="/login" className="contents">
                <Button
                  variant="primary"
                  size="both"
                  hasText="yes"
                  text="Iniciar sesión"
                  width="w-full md:auto"
                />
              </Link>
            </li>
            <li className="flex p-2 xs:px-4 md:p-0">
              <Link href="/register" className="contents">
                <Button
                  variant="secondary"
                  size="both"
                  hasText="yes"
                  text="Registrarme"
                  width="w-full md:auto"
                />
              </Link>
            </li>
          </ul>
        )}

        {/* Menú para usuarios autenticados */}
        {session !== null && (
          <ul className="flex w-full flex-col md:flex-row">
            {role === 'owner' && (
              <li className="flex p-2 xs:px-4 md:p-0">
                <Link href="/add-boarding" className="contents">
                  <Button
                    variant="tab"
                    size="both"
                    hasText="yes"
                    text="Agregar pensión"
                    iconLeft={<Add />}
                    width="w-full md:auto"
                  />
                </Link>
              </li>
            )}
            <li className="flex p-2 xs:px-4 md:p-0">
              <Link href={`/profile/${user?.id}`} className="contents">
                <Button
                  variant="tab"
                  size="both"
                  hasText="yes"
                  text="Mi perfil"
                  iconLeft={<IconUser />}
                  width="w-full md:auto"
                />
              </Link>
            </li>
            <li className="flex p-2 xs:px-4 md:ml-8 md:p-0">
              <Button
                variant="tertiary"
                size="both"
                hasText="yes"
                text="Cerrar sesión"
                onClick={handleLogout}
                width="w-full md:auto"
              />
            </li>
          </ul>
        )}
      </nav>
    </>
  )
}
