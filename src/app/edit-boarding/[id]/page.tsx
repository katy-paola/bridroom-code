import Button from '@/components/Button'
import InputForm from '@/components/InputForm'
import { getListingById } from '@/services/listing'
import { redirect } from 'next/navigation'

export default async function EditBoardingIdPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  const listing = await getListingById(id)
  if (listing === null) {
    return redirect('/404')
  }
  return (
    <section className="w-full pt-14 md:pt-[72px]">
      <h2>Editar pensión</h2>
      <form>
        <fieldset>
          <label>
            Título de la publicación:
            <InputForm
              type="text"
              placeholder="Ej.: Pensión disponible en Urbanización Sevilla."
              hasIcon={false}
              isRadio={false}
              value={listing.title}
            />
          </label>
          <label>
            Descripción:
            <InputForm
              type="text"
              placeholder="Agrega información sobre tu pensión, como servicios, puntos de referencia, etc."
              hasIcon={false}
              isRadio={false}
            />
          </label>
          <label>
            Precio:
            <InputForm
              type="number"
              placeholder="Ej.: 500000"
              hasIcon={false}
              isRadio={false}
            />
          </label>
          <label className="flex flex-col">
            Dirección:
            <InputForm
              type="text"
              placeholder="Ej.: Urbanización Sevilla mz 5 lt 6"
              hasIcon={false}
              isRadio={false}
            />
            <a
              href="#"
              className="text-paragraph-xsmall text-neutral-paragraph underline"
            >
              Seleccionar ubicación en el mapa
            </a>
          </label>
          <label>
            Agregar fotos:
            <img src="/upload-photo.svg" alt="" />
            <input
              className="sr-only"
              type="file"
              accept="image/*"
              capture="environment"
              multiple
            />
          </label>
        </fieldset>
        <Button
          type="primary"
          size="regular"
          hasText="yes"
          text="Publicar"
          width="w-full"
        />
      </form>
    </section>
  )
}
