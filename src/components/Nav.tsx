import Button from './Button'

export default function Nav() {
  return (
    <nav className="hidden md:flex">
      <ul className="flex gap-8">
        <li>
          <Button
            type="primary"
            size="regular"
            hasText="yes"
            text="Iniciar sesión"
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
    </nav>
  )
}
