import Button from '@/components/Button'
import InputForm from '@/components/InputForm'
import ImgAddBoarding from '@/svg/ImgAddBoarding'

export default function AddBoarding() {
  return (
    <section className="mt-14 flex w-full flex-col gap-8 p-4 xs:p-8 sm:px-44 md:mt-[72px] md:px-72 lg:flex-row lg:items-center lg:gap-16 lg:px-36 lg:py-16 xl:px-60">
      <section className="contents w-full flex-col gap-8 lg:flex">
        <h2 className="text-paragraph-medium font-medium text-neutral-title md:text-paragraph-large">
          Agregar pensión
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
              />
            </label>
            <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
              Descripción:
              <InputForm
                type="text"
                placeholder="Agrega información sobre tu pensión, como servicios, puntos de referencia, etc."
                hasIcon={false}
                isRadio={false}
              />
            </label>
            <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
              Precio:
              <InputForm
                type="number"
                placeholder="Ej.: 500000"
                hasIcon={false}
                isRadio={false}
              />
            </label>
            <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
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
            <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
              Agregar fotos:
              <figure className="h-32 w-32">
                <img
                  className="h-full w-full object-cover"
                  src="/upload-photo.svg"
                  alt=""
                />
              </figure>
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
            disabled={true}
          />
        </form>
      </section>
      <section className="flex justify-center">
        <figure className="w-72 md:w-96 lg:w-[480px]">
          <ImgAddBoarding />
        </figure>
      </section>
    </section>
  )
}
