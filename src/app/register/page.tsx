import ImgRegister from '@/svg/ImgRegister'
import AuthForm from '@/components/AuthForm'

export default function Register() {
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
        <AuthForm typeAction="register" />
        <small className="text-paragraph-small text-neutral-paragraph lg:text-center">
          ¿Ya tienes una cuenta?{' '}
          <a
            href="#"
            className="text-paragraph-small text-functional-info underline"
          >
            Iniciar sesión
          </a>
          .
        </small>
      </section>
      <figure className="flex h-72 w-auto justify-center md:h-[400px] lg:h-[480px]">
        <ImgRegister />
      </figure>
    </section>
  )
}
