import InputSearch from './InputSearch'
import ImgLanding from '@/svg/ImgLanding'
import { titleFont } from '@/app/ui/fonts'

export default function SearchSection() {
  return (
    <section className="flex flex-col gap-8 bg-neutral-main-bg px-4 pb-8 pt-2">
      <section className="flex flex-col gap-4">
        <h1
          className={`${titleFont.className} text-heading-medium text-primary-default`}
        >
          BRIDROOM
        </h1>
        <p className="text-paragraph-regular text-neutral-paragraph">
          Tu puente para encontrar pensión en la ciudad de Cartagena
        </p>
      </section>
      <InputSearch />
      <figure className="flex justify-center">
        <ImgLanding />
      </figure>
    </section>
  )
}
