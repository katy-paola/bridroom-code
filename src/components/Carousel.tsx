export default function Carousel(Props: { photos: string[] | null }) {
  const { photos } = Props

  return (
    <section className="container relative">
      <ul className="relative h-52 w-full sm:h-80 md:h-[480px]">
        {photos?.map((photo, index) => (
          <li
            key={index}
            id={index.toString()}
            className={`absolute left-0 top-0 h-[inherit] w-[inherit] ${
              index === 0 ? 'opacity-100' : 'opacity-0 target:opacity-100'
            }`}
          >
            <img className="h-full w-full object-cover" src={photo} />
          </li>
        ))}
      </ul>

      <ul className="absolute bottom-1 left-2/4 flex -translate-x-1/2 gap-2">
        {photos?.map((photo, index) => (
          <li
            key={index}
            className="flex h-5 w-5 items-center justify-center rounded-3xl bg-neutral-title text-paragraph-xsmall text-neutral-main-bg"
          >
            <a href={`#${index}`}>{++index}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
