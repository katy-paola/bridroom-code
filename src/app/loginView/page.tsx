import ImgLogin from '@/svg/ImgLogin'
import Form from '@/components/Form'

export default function Login() {
  return (
    <section className="flex w-full flex-col items-center gap-8 bg-neutral-main-bg px-4 pb-8 pt-16 xs:px-8 sm:justify-center sm:px-12 md:px-28 md:pt-22 lg:items-start lg:gap-16 lg:px-36 lg:pb-20 lg:pt-42 xl:px-60">
      <section className="flex w-full flex-col gap-4">
        <h1 className="font-title-font text-heading-small text-primary-default sm:text-center md:text-heading-large lg:text-left lg:text-heading-xlarge">
          ¡Bienvenido a Bridroom!
        </h1>
        <p className="text-paragraph-regular text-neutral-title sm:text-center md:text-paragraph-medium lg:max-w-paragraph lg:text-left lg:text-paragraph-xlarge">
          Inicia sesión aquí:
        </p>
      </section>
      <Form typeAction="login" />
      <small className="text-paragraph-small text-neutral-paragraph">
        ¿No tienes una cuenta?{' '}
        <a
          href="#"
          className="text-paragraph-small text-functional-info underline"
        >
          Registrarme
        </a>
        .
      </small>
      <figure className="flex h-72 w-auto justify-center lg:absolute lg:bottom-6 lg:right-36 lg:h-60 xl:right-60">
        <ImgLogin />
      </figure>
    </section>
  )
}
