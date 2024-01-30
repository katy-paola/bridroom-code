import Button from '@/components/Button'
import InputForm from '@/components/InputForm'
import { getListingById } from '@/services/listing'
import ImgEditBoarding from '@/svg/ImgEditBoarding'
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
    <section className="mt-14 w-full md:mt-20">
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
              value={listing.description}
            />
          </label>
          <label>
            Precio:
            <InputForm
              type="number"
              placeholder="Ej.: 500000"
              hasIcon={false}
              isRadio={false}
              value={listing.price}
            />
          </label>
          <label className="flex flex-col">
            Dirección:
            <InputForm
              type="text"
              placeholder="Ej.: Urbanización Sevilla mz 5 lt 6"
              hasIcon={false}
              isRadio={false}
              value={listing.address}
            />
            <a
              href="#"
              className="text-paragraph-xsmall text-neutral-paragraph underline"
            >
              Modificar ubicación en el mapa
            </a>
          </label>
          <label>
            Agregar fotos:
            <ul className="flex">
              <li>
                <img src="/upload-photo.svg" alt="" />
              </li>
              {listing.photos !== null && (
                <li>
                  <img
                    src={listing.photos[0]}
                    alt=""
                    className="h-[120px] w-[120px] object-cover"
                  />
                </li>
              )}
            </ul>
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
          text="Guardar cambios"
          width="w-full"
        />
      </form>
      <ImgEditBoarding />
    </section>
  )
}
