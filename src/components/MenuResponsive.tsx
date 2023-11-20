'use client'

import Menu from '@/svg/Menu'
import Close from '@/svg/Close'
import { useState } from 'react'
import Button from './Button'
import { type Session } from '@supabase/supabase-js'
import { type User } from '../types/types'

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
      <div>{session !== null && <p>{user?.name}</p>}</div>
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen)
        }}
        className="md:hidden"
      >
        {isMenuOpen ? <Close /> : <Menu />}
      </button>

      <nav
        className={`fixed bottom-0 right-0 top-14 z-10 w-4/5 bg-neutral-main-bg shadow-md ${
          isMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        {/* Menú para usuarios sin autenticar */}
        {session === null && (
          <ul className="flex w-full flex-col">
            <li className="p-2">
              <Button
                type="primary"
                size="small"
                hasText="yes"
                text="Iniciar sesión"
                width="w-full md:auto"
              />
            </li>
            <li className="p-2">
              <Button
                type="secondary"
                size="small"
                hasText="yes"
                text="Registrarme"
                width="w-full md:auto"
              />
            </li>
          </ul>
        )}

        {/* Menú para usuarios autenticados */}
        {session !== null && (
          <ul className="flex w-full flex-col md:gap-8">
            {role === 'owner' && (
              <li className="p-2">
                <Button
                  type="tab"
                  size="small"
                  hasText="yes"
                  text="Agregar pensión"
                  width="w-full md:auto"
                />
              </li>
            )}
            <li className="p-2">
              <Button
                type="tab"
                size="small"
                hasText="yes"
                text="Mi perfil"
                width="w-full md:auto"
              />
            </li>
            <li className="p-2">
              <Button
                type="tertiary"
                size="small"
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
