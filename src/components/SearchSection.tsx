import InputSearch from './InputSearch'
import ImgLanding from '@/svg/ImgLanding'

export default function SearchSection() {
  return (
    <section className="relative flex flex-col items-center gap-8 bg-neutral-main-bg px-4 pb-8 pt-16 xs:px-8 sm:justify-center sm:px-12 md:px-28 md:pt-4 lg:items-start lg:gap-16 lg:px-36 lg:py-20 xl:px-60">
      <section className="flex flex-col gap-4">
        <h1 className="font-title-font text-heading-medium text-primary-default sm:text-center md:text-heading-large lg:text-left lg:text-heading-xlarge">
          BRIDROOM
        </h1>
        <p className="text-paragraph-regular text-neutral-paragraph sm:text-center md:text-paragraph-medium lg:max-w-paragraph lg:text-left lg:text-paragraph-xlarge">
          Tu puente para encontrar pensión en la ciudad de Cartagena
        </p>
      </section>
      <InputSearch />
      <figure className="flex h-32 w-auto justify-center lg:absolute lg:bottom-6 lg:right-36 lg:h-60 xl:right-60">
        <ImgLanding />
      </figure>
    </section>
  )
}
