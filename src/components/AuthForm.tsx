'use client'
import { useSearchParams } from 'next/navigation'
import Button from './Button'
import InputForm from './InputForm'

export default function AuthForm(Props: { typeAction: string; action: any }) {
  const { typeAction, action } = Props
  const role = useSearchParams().get('role') ?? 'student'
  const ownerChecked = role === 'owner'
  const studentChecked = role !== 'owner'

  return (
    <form
      action={action}
      className="flex w-full flex-col gap-8 sm:max-w-sm md:max-w-md"
    >
      <fieldset className="flex flex-col gap-8">
        <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
          Correo electrónico
          <InputForm
            type="email"
            name="email"
            placeholder="Ingresa tu correo electrónico"
            hasIcon={false}
            isRadio={false}
          />
        </label>
        <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
          Contraseña
          <InputForm
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            hasIcon={true}
            isRadio={false}
          />
          {typeAction === 'login' && (
            <a
              href="/login/reset-password"
              className="self-end text-paragraph-xsmall text-neutral-paragraph underline"
            >
              Olvidé mi contraseña
            </a>
          )}
        </label>
        {typeAction === 'register' && (
          <>
            <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
              Confirmar contraseña
              <InputForm
                type="password"
                placeholder="Confirma tu contraseña"
                hasIcon={true}
                isRadio={false}
              />
            </label>

            <label
              id="rol"
              className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph"
            >
              Elige tu rol
              <ul className="flex gap-5">
                <li>
                  <input
                    type="radio"
                    name="role"
                    id="student"
                    value="student"
                    className="peer hidden"
                    required
                    defaultChecked={studentChecked}
                  />
                  <label
                    htmlFor="student"
                    className="cursor-pointer border border-solid border-neutral-placeholder px-2 py-1 text-paragraph-small peer-checked:border-primary-disabled peer-checked:bg-primary-disabled"
                  >
                    Estudiante
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="role"
                    value="owner"
                    id="owner"
                    required
                    className="peer hidden"
                    defaultChecked={ownerChecked}
                  />
                  <label
                    htmlFor="owner"
                    className="cursor-pointer border border-solid border-neutral-placeholder px-2 py-1 text-paragraph-small peer-checked:border-primary-disabled peer-checked:bg-primary-disabled"
                  >
                    Propietario
                  </label>
                </li>
              </ul>
            </label>
          </>
        )}
      </fieldset>
      <section className="flex flex-col gap-4">
        <Button
          type="submit"
          variant="primary"
          size="regular"
          hasText="yes"
          text={typeAction === 'login' ? 'Iniciar sesión' : 'Registrarme'}
          width="w-full md:w-auto"
        />
      </section>
    </form>
  )
}
