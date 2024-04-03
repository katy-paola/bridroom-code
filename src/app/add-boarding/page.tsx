import Button from '@/components/Button'
import InputForm from '@/components/InputForm'
import LocationMap from '@/components/LocationMap'
import ImgAddBoarding from '@/svg/ImgAddBoarding'

export default function AddBoarding() {
  return (
    <section className="mt-14 flex w-full flex-col gap-8 p-4 xs:p-8 sm:px-44 md:mt-16 md:px-72 lg:items-center lg:gap-16 lg:px-36 lg:py-10 xl:px-60">
      <section className="contents w-full flex-col gap-8 lg:flex">
        <h2 className="text-paragraph-medium font-medium text-neutral-title md:text-paragraph-large">
          Agregar pensión
        </h2>
        {/** Contenedor morado */}
        <form className="flex grid-cols-layout flex-col gap-8 grid-areas-layout lg:grid">
          {/** Contenedor invisible en lg */}
          <fieldset className="flex flex-col gap-8 lg:contents">
            <label className="flex h-auto flex-col gap-2 text-paragraph-regular text-neutral-paragraph grid-in-title">
              Título de la publicación:
              <InputForm
                type="text"
                name="title"
                placeholder="Ej.: Pensión disponible en Urbanización Sevilla."
                hasIcon={false}
                isRadio={false}
              />
            </label>
            <label className="flex h-auto flex-col gap-2 text-paragraph-regular text-neutral-paragraph grid-in-description">
              Descripción:
              <InputForm
                type="text"
                name="description"
                placeholder="Agrega información sobre tu pensión, como servicios, puntos de referencia, etc."
                hasIcon={false}
                isRadio={false}
              />
            </label>
            <label className="flex h-auto flex-col gap-2 text-paragraph-regular text-neutral-paragraph grid-in-price">
              Precio:
              <InputForm
                type="number"
                name="price"
                placeholder="Ej.: 500000"
                hasIcon={false}
                isRadio={false}
              />
            </label>
            <label className="flex h-auto flex-col gap-2 text-paragraph-regular text-neutral-paragraph grid-in-address">
              Dirección:
              <InputForm
                type="text"
                name="address"
                placeholder="Ej.: Urbanización Sevilla mz 5 lt 6"
                hasIcon={false}
                isRadio={false}
              />
            </label>

            <LocationMap />
            <label className="flex h-auto flex-col gap-2 text-paragraph-regular text-neutral-paragraph grid-in-photos">
              Agregar fotos:
              <figure className="h-20 w-20">
                <img
                  className="h-full w-full object-cover"
                  src="/upload-photo.svg"
                  alt=""
                />
              </figure>
              <input
                className="sr-only"
                type="file"
                name="photos"
                accept="image/*"
                multiple
              />
            </label>
          </fieldset>

          <label className="flex h-auto flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
            Barrio:
            <InputForm
              type="text"
              name="neigh"
              placeholder="Ej.: Urbanización Sevilla"
              hasIcon={false}
              isRadio={false}
            />
          </label>

          <section className="contents h-auto justify-end grid-in-button lg:flex">
            <Button
              variant="primary"
              size="regular"
              hasText="yes"
              text="Publicar"
              width="w-auto"
              disabled={true}
            />
          </section>
        </form>
      </section>
      <section className="flex justify-center">
        <figure className="w-72 md:w-96">
          <ImgAddBoarding />
        </figure>
      </section>
    </section>
  )
}
