import { STORAGE_URL } from '@/lib/config'

export default function Carousel(Props: { photos: string[] | null }) {
  const { photos } = Props

  return (
    <ul className="custom-scrollbar flex h-64 w-full snap-x snap-mandatory gap-3 overflow-x-scroll xs:h-72 sm:h-80 md:h-96 lg:h-[480px] xl:h-[560px]">
      {photos?.map((photo, index) => (
        <li
          key={index}
          className="w-4/5 shrink-0 grow-0 basis-4/5 snap-center sm:basis-3/4"
        >
          <img
            className="h-full w-full object-cover"
            alt="Imagen de la pensión"
            src={`${STORAGE_URL}photos-listings/${photo}`}
          />
        </li>
      ))}
    </ul>
  )
}
