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
  const address =
    typeof listing.location === 'object' &&
    listing.location !== null &&
    'address' in listing.location &&
    typeof listing.location.address === 'string'
      ? listing.location.address
      : ''
  return (
    <section className="mt-14 flex w-full flex-col gap-8 p-4 xs:p-8 sm:px-44 md:mt-[72px] md:px-72 lg:flex-row lg:items-center lg:gap-16 lg:px-36 lg:py-10 xl:px-60">
      <section className="contents w-full flex-col gap-8 lg:flex">
        <h2 className="text-paragraph-medium font-medium text-neutral-title md:text-paragraph-large">
          Editar pensión
        </h2>

        <form className="flex flex-col gap-8">
          <fieldset className="flex flex-col gap-8">
            <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
              Título de la publicación:
              <InputForm
                type="text"
                placeholder="Ej.: Pensión disponible en Urbanización Sevilla."
                hasIcon={false}
                isRadio={false}
                value={listing.title}
              />
            </label>
            <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
              Descripción:
              <InputForm
                type="text"
                placeholder="Agrega información sobre tu pensión, como servicios, puntos de referencia, etc."
                hasIcon={false}
                isRadio={false}
                value={listing.description}
              />
            </label>
            <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
              Precio:
              <InputForm
                type="number"
                placeholder="Ej.: 500000"
                hasIcon={false}
                isRadio={false}
                value={listing.price}
              />
            </label>
            <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
              Dirección:
              <InputForm
                type="text"
                placeholder="Ej.: Urbanización Sevilla mz 5 lt 6"
                hasIcon={false}
                isRadio={false}
                value={address}
              />
              <a
                href="#"
                className="text-paragraph-xsmall text-neutral-paragraph underline"
              >
                Modificar ubicación en el mapa
              </a>
            </label>
            <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
              Agregar fotos:
              <ul className="flex flex-wrap gap-2">
                <li className="contents">
                  <img
                    className="h-20 w-20 object-cover"
                    src="/upload-photo.svg"
                    alt=""
                  />
                </li>
                {listing.photos?.map((photo, index) => (
                  <li className="contents" key={index}>
                    <img
                      src={photo}
                      alt=""
                      className="h-20 w-20 object-cover"
                    />
                  </li>
                ))}
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
      </section>
      <section className="flex justify-center">
        <figure className="w-72 md:w-96 lg:w-[480px]">
          <ImgEditBoarding />
        </figure>
      </section>
    </section>
  )
}
