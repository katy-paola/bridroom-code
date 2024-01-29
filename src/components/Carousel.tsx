'use client'

import { useState } from 'react'

export default function Carousel(Props: { photos: string[] | null }) {
  const { photos } = Props
  const [active, setActive] = useState(0)
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
            className={`flex h-5 w-5 items-center justify-center rounded-3xl hover:bg-secondary-disabled hover:text-neutral-main-bg sm:h-7 sm:w-7 ${
              active === index
                ? 'bg-secondary-default text-neutral-main-bg'
                : 'bg-neutral-main-bg text-secondary-default'
            } text-paragraph-xsmall sm:text-paragraph-regular`}
          >
            <a
              onClick={() => {
                setActive(--index)
              }}
              href={`#${index}`}
            >
              {++index}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
