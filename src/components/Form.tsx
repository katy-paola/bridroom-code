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
    >
      <fieldset>
        <label>
          Correo electrónico
          <InputForm
            type="email"
            placeholder="Ingresa tu correo electrónico"
            hasIcon={false}
            isRadio={false}
          />
        </label>
        <label>
          Contraseña
          <InputForm
            type="password"
            placeholder="Ingresa tu contraseña"
            hasIcon={true}
            isRadio={false}
          />
          {typeAction === 'login' && <a href="#">Olvidé mi contraseña</a>}
        </label>
        {typeAction === 'register' && (
          <>
            <label>
              Confirmar contraseña
              <InputForm
                type="password"
                placeholder="Confirma tu contraseña"
                hasIcon={true}
                isRadio={false}
              />
            </label>

            <label id="rol">
              Elige tu rol
              <InputForm id="student" hasIcon={false} isRadio={true} />
              <label htmlFor="student">Estudiante</label>
              <InputForm id="owner" hasIcon={false} isRadio={true} />
              <label htmlFor="owner">Propietario</label>
            </label>
          </>
        )}
      </fieldset>
      <section>
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
            text="Registrarme"
            iconLeft={<Google />}
            width="w-full md:w-auto"
          />
        )}
      </section>
    </form>
  )
}
