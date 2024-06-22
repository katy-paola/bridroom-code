import AuthForm from '@/components/AuthForm'
import { createClient } from '@/lib/supabase/server'
import ImgRegister from '@/svg/ImgRegister'
import { cookies, headers } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function Register() {
  const signUp = async (formData: FormData) => {
    'use server'

    const origin = headers().get('origin')

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const role = formData.get('role') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error !== null) {
      return redirect(`/login?message=${error.message}&error=true`)
    }

    // add role to user
    const { error: errorRole } = await supabase
      .from('profiles')
      .update({ role })
      .match({ id: data?.user?.id })

    if (errorRole !== null) {
      console.error(errorRole)
      return redirect('/login?message=Could not assign role to user&error=true')
    }

    return redirect('/login?message=Check email to continue sign in process')
  }

  return (
    <section className="flex min-h-screen w-full flex-col items-center gap-8 bg-neutral-main-bg px-4 pb-8 pt-16 xs:px-8 sm:justify-center sm:px-40 md:px-28 md:pt-22 lg:flex-row lg:gap-16 lg:px-36 lg:pb-20 lg:pt-42 xl:px-60">
      <section className="contents flex-col gap-8 lg:flex">
        <section className="flex w-full flex-col gap-4">
          <h2 className="font-title-font text-heading-small text-primary-default sm:text-center md:text-heading-medium lg:text-left">
            ¡Bienvenido a Bridroom!
          </h2>
          <p className="text-paragraph-regular text-neutral-title sm:text-center lg:max-w-paragraph lg:text-left">
            Crea tu cuenta aquí:
          </p>
        </section>
        <AuthForm typeAction="register" action={signUp} />
        <small className="text-paragraph-small text-neutral-paragraph lg:text-center">
          ¿Ya tienes una cuenta?{' '}
          <Link
            href="/login"
            className="text-paragraph-small text-functional-info underline"
          >
            Iniciar sesión
          </Link>
          .
        </small>
      </section>
      <figure className="flex h-72 w-auto justify-center md:h-[400px] lg:h-[480px]">
        <ImgRegister />
      </figure>
    </section>
  )
}
