'use client'

import { createClient } from '@/lib/supabase/client'
import Add from '@/svg/Add'
import Close from '@/svg/Close'
import IconUser from '@/svg/IconUser'
import Menu from '@/svg/Menu'
import { type Session } from '@supabase/supabase-js'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { type User } from '../types/types'
import Button from './Button'

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
  const menuRef = useRef<HTMLDivElement>(null)

  const handleLogout = async () => {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    if (error !== null) console.error('Error logging out:', error.message)

    router.push('/login')
    router.refresh()
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current !== null &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false)
    }
  }

  const handleItemClick = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <>
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen)
        }}
        className="rounded p-1 hover:bg-neutral-hover md:hidden"
      >
        <figure className="flex size-4 items-center">
          {isMenuOpen ? <Close /> : <Menu />}
        </figure>
      </button>

      <nav
        ref={menuRef}
        className={`fixed bottom-0 right-0 top-14 z-[1000] w-64 bg-neutral-main-bg shadow-md md:w-auto md:max-w-none ${
          isMenuOpen ? 'flex' : 'hidden'
        } md:static md:flex md:w-auto md:bg-transparent md:shadow-none`}
      >
        {/* Menú para usuarios sin autenticar */}
        {session === null && (
          <ul className="flex w-full flex-col md:flex-row md:gap-8">
            <li className="flex p-2 xs:px-4 md:p-0" onClick={handleItemClick}>
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
            <li className="flex p-2 xs:px-4 md:p-0" onClick={handleItemClick}>
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
            {role === 'owner' && user?.contact != null && (
              <li className="flex p-2 xs:px-4 md:p-0" onClick={handleItemClick}>
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

            {role === 'owner' && user?.contact == null && (
              <li className="flex p-2 xs:px-4 md:p-0" onClick={handleItemClick}>
                <Button
                  variant="tab"
                  size="both"
                  hasText="yes"
                  text="Agregar pensión"
                  iconLeft={<Add />}
                  width="w-full md:auto"
                  onClick={() => {
                    toast.custom((t) => (
                      <div className="flex flex-col gap-5 rounded-sm bg-white px-5 py-3 shadow-lg">
                        <h1 className="text-paragraph-small">
                          Para agregar una pensión necesitas agregar tu número
                          de contacto
                        </h1>
                        <Link href={`/profile/${user?.id}`}>
                          <Button
                            variant="primary"
                            size="both"
                            hasText="yes"
                            text="Agregar contacto"
                            width="w-full"
                          />
                        </Link>
                      </div>
                    ))
                  }}
                />
              </li>
            )}

            <li className="flex p-2 xs:px-4 md:p-0" onClick={handleItemClick}>
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
            <li
              className="flex p-2 xs:px-4 md:ml-8 md:p-0"
              onClick={handleItemClick}
            >
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
