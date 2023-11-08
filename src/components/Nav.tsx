import { getSession } from '@/services/user'
import Button from './Button'

export default async function Nav() {
  const session = await getSession()

  return (
    <nav className="flex">
      {/* Menú para usuarios sin autenticar */}
      {session === null && (
        <ul className="hidden gap-8 md:flex">
          <li>
            <Button
              type="primary"
              size="regular"
              hasText="yes"
              text="Iniciar sesión"
              isMobile
            />
          </li>
          <li>
            <Button
              type="secondary"
              size="regular"
              hasText="yes"
              text="Registrarme"
            />
          </li>
        </ul>
      )}

      {/* Menú para usuarios autenticados */}
      {session !== null && (
        <ul className="flex flex-col gap-8">
          <li>
            <Button
              type="primary"
              size="regular"
              hasText="yes"
              text="Crear post"
            />
          </li>
          <li>
            <Button
              type="secondary"
              size="regular"
              hasText="yes"
              text="Cerrar sesión"
            />
          </li>
        </ul>
      )}
    </nav>
  )
}
