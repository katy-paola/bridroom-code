import Link from 'next/link'
import ImgOwner from '@/svg/ImgOwner'

export default function OwnerSection() {
  return (
    <section className="flex flex-col gap-6 bg-secondary-default px-4 py-8 text-neutral-secondary-bg">
      <section className="flex flex-col gap-6">
        <h2 className="text-paragraph-medium font-medium">
          ¿Eres propietario y buscas inquilinos?
        </h2>
        <p className="text-paragraph-regular">
          Bridroom te conecta con tus posibles clientes.
          <Link href="#" className="ml-1 text-paragraph-regular underline">
            Regístrate ahora
          </Link>
        </p>
      </section>
      <figure className="flex items-center justify-center">
        <ImgOwner />
      </figure>
    </section>
  )
}
