export default function Carousel(Props: { photos: string[] | null }) {
  const { photos } = Props

  return (
    <ul className="flex h-52 w-full snap-x snap-mandatory gap-3 overflow-x-scroll xs:h-64 sm:h-80 md:h-96 lg:h-[480px] xl:h-[560px]">
      {photos?.map((photo, index) => (
        <li
          key={index}
          className="w-4/5 shrink-0 grow-0 basis-4/5 snap-center sm:basis-3/4"
        >
          <img className="h-full w-full object-cover" src={photo} />
        </li>
      ))}
    </ul>
  )
}
