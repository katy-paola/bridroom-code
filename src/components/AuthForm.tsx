'use client'
import InputForm from './InputForm'
import Button from './Button'
import Google from '@/svg/Google'
import { useSearchParams } from 'next/navigation'
import { type ChangeEvent, useState } from 'react'

export default function AuthForm(Props: { typeAction: string }) {
  const { typeAction } = Props
  const [role, setRole] = useState(useSearchParams().get('role') ?? 'student')
  const ownerChecked = role === 'owner'
  const studentChecked = role !== 'owner'

  const handleChange = (id: string, e: ChangeEvent) => {
    setRole(id)
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
      className="flex w-full flex-col gap-8 sm:max-w-sm md:max-w-md"
    >
      <fieldset className="flex flex-col gap-8">
        <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
          Correo electrónico
          <InputForm
            type="email"
            placeholder="Ingresa tu correo electrónico"
            hasIcon={false}
            isRadio={false}
          />
        </label>
        <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
          Contraseña
          <InputForm
            type="password"
            placeholder="Ingresa tu contraseña"
            hasIcon={true}
            isRadio={false}
          />
          {typeAction === 'login' && (
            <a
              href="#"
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
              {/*  focus-within:border-none focus-within:bg-primary-disabled */}
              Elige tu rol
              <section className="flex gap-5">
                <label
                  className={`cursor-pointer rounded-lg px-2 py-1 text-paragraph-small ${
                    studentChecked
                      ? 'border-none bg-primary-disabled'
                      : 'border border-solid border-neutral-placeholder'
                  }`}
                >
                  <InputForm
                    hasIcon={false}
                    isRadio={true}
                    id="student"
                    onChange={(e) => {
                      handleChange('student', e)
                    }}
                  />
                  Estudiante
                </label>
                <label
                  className={`cursor-pointer rounded-lg px-2 py-1 text-paragraph-small ${
                    ownerChecked
                      ? 'border-none bg-primary-disabled'
                      : 'border border-solid border-neutral-placeholder'
                  }`}
                >
                  <InputForm
                    hasIcon={false}
                    isRadio={true}
                    id="owner"
                    onChange={(e) => {
                      handleChange('owner', e)
                    }}
                  />
                  Propietario
                </label>
              </section>
            </label>
          </>
        )}
      </fieldset>
      <section className="flex flex-col gap-4">
        <Button
          type="primary"
          size="regular"
          hasText="yes"
          text={typeAction === 'login' ? 'Iniciar sesión' : 'Registrarme'}
          width="w-full md:w-auto"
        />
        {typeAction === 'login' && (
          <Button
            type="secondary"
            size="regular"
            hasText="yes"
            text="Ingresar con Google"
            iconLeft={<Google />}
            width="w-full md:w-auto"
          />
        )}
      </section>
    </form>
  )
}
