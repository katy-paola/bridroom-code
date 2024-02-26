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

export default function MenuResponsive({
  session,
  user,
}: {
  session: Session | null
  user: User | null
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const role = user?.role
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
        className={`fixed bottom-0 right-0 top-[57px] z-[1000] w-64 bg-neutral-main-bg shadow-md md:w-auto md:max-w-none ${
          isMenuOpen ? 'flex' : 'hidden'
        } md:static md:flex md:w-auto md:bg-transparent md:shadow-none`}
      >
        {/* Menú para usuarios sin autenticar */}
        {session !== null && (
          <ul className="flex w-full flex-col md:flex-row md:gap-8">
            <li className="p-2 xs:px-4 md:p-0">
              <Link href="/loginView">
                <Button
                  type="primary"
                  size="both"
                  hasText="yes"
                  text="Iniciar sesión"
                  width="w-full md:auto"
                />
              </Link>
            </li>
            <li className="p-2 xs:px-4 md:p-0">
              <Link href="/register">
                <Button
                  type="secondary"
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
        {session === null && (
          <ul className="flex w-full flex-col md:flex-row">
            {role !== 'owner' && (
              <li className="p-2 xs:px-4 md:p-0">
                <Link href="/add-boarding">
                  <Button
                    type="tab"
                    size="both"
                    hasText="yes"
                    text="Agregar pensión"
                    iconLeft={<Add />}
                    width="w-full md:auto"
                  />
                </Link>
              </li>
            )}
            <li className="p-2 xs:px-4 md:p-0">
              <Link href={`/profile/${user?.id}`}>
                <Button
                  type="tab"
                  size="both"
                  hasText="yes"
                  text="Mi perfil"
                  iconLeft={<IconUser />}
                  width="w-full md:auto"
                />
              </Link>
            </li>
            <li className="p-2 xs:px-4 md:ml-8 md:p-0">
              <Button
                type="tertiary"
                size="both"
                hasText="yes"
                text="Cerrar sesión"
                width="w-full md:auto"
              />
            </li>
          </ul>
        )}
      </nav>
    </>
  )
}
