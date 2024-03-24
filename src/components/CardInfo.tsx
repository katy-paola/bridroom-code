'use client'

import FillStar from '@/svg/FillStar'
import { useState } from 'react'
import { GetLocationMap } from './GetLocationMap'

export default function CardInfo({
  title,
  rating,
  priceCOP,
  description,
  neighborhood,
  address,
}: {
  title: string | null
  rating: number | null
  priceCOP: number | string | null
  description: string | null
  neighborhood: string | null
  address: string | null
}) {
  const [isMapOpen, setIsMapOpen] = useState(false)
  return (
    <section className="contents w-full flex-col gap-3 sm:flex sm:justify-between">
      <section className="contents flex-col gap-3 sm:flex">
        <h3 className="text-paragraph-regular font-semibold text-neutral-title sm:hidden">
          {title}
        </h3>
        <section className="flex flex-col gap-1 sm:flex-row-reverse sm:items-center sm:justify-between">
          {rating === null ? (
            <p className="text-paragraph-small leading-4 text-neutral-title">
              No hay valoraciones
            </p>
          ) : (
            <section className="flex items-center">
              <p className="text-paragraph-small font-medium leading-4 text-neutral-title">
                {rating}
              </p>
              <FillStar />
            </section>
          )}
          <p className="text-paragraph-small font-semibold text-neutral-title md:text-paragraph-regular">
            {priceCOP}/mes
          </p>
        </section>
        <p className="text-paragraph-small font-normal text-neutral-title md:max-w-[600px] md:text-paragraph-regular xl:max-w-[720px]">
          {description}
        </p>
        <p className="text-paragraph-small font-normal text-neutral-title md:text-paragraph-regular">
          Barrio {neighborhood}
        </p>
      </section>
      <small className="bg-neutral-hover px-2 py-1 text-paragraph-small font-normal text-neutral-title sm:bg-neutral-main-bg md:text-paragraph-regular">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            setIsMapOpen(!isMapOpen)
          }}
        >
          📍 <span className="underline">{address}</span>
        </a>
      </small>
      {isMapOpen && <GetLocationMap />}
    </section>
  )
}
