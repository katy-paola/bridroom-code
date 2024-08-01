import Button from '@/components/Button'
import InputForm from '@/components/InputForm'
import { createClient } from '@/lib/supabase/server'
import ImgLogin from '@/svg/ImgLogin'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function UpdatePassword({
  searchParams,
}: {
  searchParams: { code?: string }
}) {
  const code = searchParams.code ?? ''

  if (code === '') {
    return redirect(
      '/login?message=No se ha encontrado el código de verificación&error=true',
    )
  }

  const updatePassword = async (formData: FormData) => {
    'use server'

    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    console.log('code', code)

    const data = await supabase.auth.exchangeCodeForSession(code)

    console.log('data', data)

    const { error } = await supabase.auth.updateUser({
      password,
    })

    console.log('error', error)

    if (error !== null) {
      return redirect(
        `/login/update-password?message=${error.message}&error=true`,
      )
    }

    return redirect('/?message=Tu contraseña ha sido actualizada')
  }

  return (
    <section className="flex min-h-screen w-full flex-col items-center gap-8 bg-neutral-main-bg px-4 pb-8 pt-16 xs:px-8 sm:justify-center sm:px-40 md:px-28 md:pt-22 lg:flex-row lg:gap-16 lg:px-36 lg:pb-20 lg:pt-42 xl:px-60">
      <section className="contents flex-col gap-8 lg:flex">
        <section className="flex w-full flex-col gap-4">
          <h2 className="font-title-font text-heading-small text-primary-default sm:text-center md:text-heading-medium lg:text-left">
            ¡Bienvenido a Bridroom!
          </h2>
          <p className="text-paragraph-regular text-neutral-title sm:text-center lg:max-w-paragraph lg:text-left">
            Actualiza tu contraseña:
          </p>
        </section>
        <form
          action={updatePassword}
          className="flex w-full flex-col gap-8 sm:max-w-sm md:max-w-md"
        >
          <fieldset className="flex flex-col gap-8">
            <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
              Nueva contraseña
              <InputForm
                type="password"
                name="password"
                placeholder="Ingresa tu nueva contraseña"
                hasIcon={true}
                isRadio={false}
              />
            </label>
          </fieldset>
          <Button
            variant="primary"
            type="submit"
            size="regular"
            hasText="yes"
            text="Guardar cambios"
            width="w-full lg:w-auto"
          />
        </form>
      </section>
      <figure className="flex h-72 w-auto justify-center md:h-[400px] lg:h-[480px]">
        <ImgLogin />
      </figure>
    </section>
  )
}
