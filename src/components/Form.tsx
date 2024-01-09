'use client'
import InputForm from './InputForm'
import Button from './Button'
import Google from '@/svg/Google'

export default function Form({ typeAction }: { typeAction: string }) {
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
              Elige tu rol
              <section className="flex gap-5">
                <label className="cursor-pointer rounded-lg border border-solid border-neutral-placeholder px-2 py-1 text-paragraph-small focus-within:border-none focus-within:bg-primary-disabled">
                  <InputForm hasIcon={false} isRadio={true} isFocus={true} />
                  Estudiante
                </label>
                <label className="cursor-pointer rounded-lg border border-solid border-neutral-placeholder px-2 py-1 text-paragraph-small focus-within:border-none focus-within:bg-primary-disabled">
                  <InputForm hasIcon={false} isRadio={true} />
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
