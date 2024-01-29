export default function Carousel(Props: { photos: string[] | null }) {
  return (
    <section className="container relative">
      <ul className="relative h-52 w-full sm:h-80 md:h-[480px]">
        <li
          id="slide1"
          className="absolute left-0 top-0 h-[inherit] w-[inherit] opacity-100"
        >
          <img
            className="h-full w-full object-cover"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3947459/car.jpg"
          />
        </li>
        <li
          className="absolute left-0 top-0 h-[inherit] w-[inherit] opacity-0 target:opacity-100"
          id="slide2"
        >
          <img
            className="h-full w-full object-cover"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3947459/sunset.jpg"
          />
        </li>
        <li
          className="absolute left-0 top-0 h-[inherit] w-[inherit] opacity-0 target:opacity-100"
          id="slide3"
        >
          <img
            className="h-full w-full object-cover"
            src="https://www.cocinassantosdc.com/wp-content/uploads/2022/07/decoracion-iluminacion-coicnas-lujo-1024x715.jpg"
            alt=""
          />
        </li>
      </ul>

      <ul className="absolute bottom-1 left-2/4 flex -translate-x-1/2 gap-2">
        <li className="flex h-5 w-5 items-center justify-center rounded-3xl bg-neutral-title text-paragraph-xsmall text-neutral-main-bg">
          <a href="#slide1">1</a>
        </li>
        <li className="flex h-5 w-5 items-center justify-center rounded-3xl bg-neutral-title text-paragraph-xsmall text-neutral-main-bg">
          <a href="#slide2">2</a>
        </li>
        <li className="flex h-5 w-5 items-center justify-center rounded-3xl bg-neutral-title text-paragraph-xsmall text-neutral-main-bg">
          <a href="#slide3">3</a>
        </li>
      </ul>
    </section>
  )
}
