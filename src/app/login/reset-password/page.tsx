import Button from '@/components/Button'
import InputForm from '@/components/InputForm'
import { createClient } from '@/lib/supabase/server'
import { getProfileCurrentUser } from '@/services/user'
import ImgLogin from '@/svg/ImgLogin'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function ResetPassword() {
  const currentUser = await getProfileCurrentUser()

  if (currentUser !== null) {
    return redirect('/')
  }

  const resetPassword = async (formData: FormData) => {
    'use server'
    const email = formData.get('email') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const redirectToUrl =
      process.env.VERCEL_URL ?? process.env.NEXT_PUBLIC_BASE_URL

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${redirectToUrl}/login/update-password`,
    })

    if (error !== null) {
      return redirect(
        `/login/reset-password?message=${error.message}&error=true`,
      )
    }

    return redirect('/login?message=Revisa tu correo')
  }

  return (
    <section className="flex min-h-screen w-full flex-col items-center gap-8 bg-neutral-main-bg px-4 pb-8 pt-16 xs:px-8 sm:justify-center sm:px-40 md:px-28 md:pt-22 lg:flex-row lg:gap-16 lg:px-36 lg:pb-20 lg:pt-42 xl:px-60">
      <section className="contents flex-col gap-8 lg:flex">
        <section className="flex w-full flex-col gap-4">
          <h2 className="font-title-font text-heading-small text-primary-default sm:text-center md:text-heading-medium lg:text-left">
            ¡Bienvenido a Bridroom!
          </h2>
          <p className="text-paragraph-regular text-neutral-title sm:text-center lg:max-w-paragraph lg:text-left">
            Restablece tu contraseña aquí:
          </p>
        </section>
        <form
          action={resetPassword}
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
          </fieldset>
          <section className="flex flex-col gap-4">
            <Button
              type="submit"
              variant="primary"
              size="regular"
              hasText="yes"
              text="Restablecer contraseña"
              width="w-full md:w-auto"
            />
          </section>
        </form>
      </section>
      <figure className="flex h-72 w-auto justify-center md:h-[400px] lg:h-[480px]">
        <ImgLogin />
      </figure>
    </section>
  )
}
