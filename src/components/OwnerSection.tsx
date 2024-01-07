import Link from 'next/link'
import ImgOwner from '@/svg/ImgOwner'

export default function OwnerSection() {
  return (
    <section className="flex flex-col items-center gap-6 bg-secondary-default px-4 py-8 text-neutral-secondary-bg xs:px-8 sm:px-12 sm:py-10 md:flex-row-reverse md:justify-center md:gap-8 md:px-28 md:py-4 lg:px-36 xl:px-60">
      <section className="flex flex-col gap-6 sm:items-center md:w-max">
        <h2 className="text-paragraph-medium font-medium md:w-max md:text-paragraph-large">
          ¿Eres propietario y buscas inquilinos?
        </h2>
        <p className="text-paragraph-regular sm:text-center md:w-max">
          Bridroom te conecta con tus posibles clientes.
          <Link href="#" className="ml-1 text-paragraph-regular underline">
            Regístrate ahora
          </Link>
        </p>
      </section>
      <figure className="flex w-72 items-center justify-center self-center md:w-80">
        <ImgOwner />
      </figure>
    </section>
  )
}
