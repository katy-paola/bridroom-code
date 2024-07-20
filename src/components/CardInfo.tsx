'use client'

import { type LocationType } from '@/types/database.types'
import { type User } from '@/types/types'
import { useState } from 'react'
import OwnerInfo from './OwnerInfo'
import Rating from './Rating'
import { ViewLocationMap } from './ViewLocationMap'

export default function CardInfo({
  title,
  rating,
  priceCOP,
  description,
  neighborhood,
  address,
  photo,
  name,
  contact,
  idOwner,
  currentUser,
  location,
}: {
  title: string | null
  rating: number | null
  priceCOP: number | string | null
  description: string | null
  neighborhood: string | null
  address: string | null
  photo?: string | null
  name?: string | null
  contact?: number | undefined
  idOwner?: string | undefined
  currentUser?: User
  location: LocationType
}) {
  const [isMapOpen, setIsMapOpen] = useState(false)

  const [latResult, lngResult]: string[] = location.coord.split(',')

  const lat = parseFloat(latResult.trim())
  const lng = parseFloat(lngResult.trim())

  return (
    <section className="flex flex-col gap-2 p-4 xs:p-8 sm:gap-6 sm:bg-neutral-active md:gap-8">
      <section className="flex flex-1 flex-col justify-between gap-2 sm:flex-row sm:gap-6 sm:bg-neutral-active md:gap-8">
        <section className="contents w-full flex-col gap-3 sm:flex sm:min-h-[152px] sm:justify-between">
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
                <Rating numberOfStars={rating} />
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
        </section>
        <section className="hidden w-auto sm:flex">
          <OwnerInfo
            photo={photo}
            name={name}
            contact={contact}
            idOwner={idOwner}
            currentUser={currentUser}
          />
        </section>
      </section>
      {isMapOpen && <ViewLocationMap lat={lat} lng={lng} />}
    </section>
  )
}
