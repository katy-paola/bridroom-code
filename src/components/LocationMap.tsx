'use client'

import { useState } from 'react'
import { GetLocationMap } from './GetLocationMap'

const InfoIcon = () => (
  <svg
    className="size-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 512"
    strokeWidth={2}
  >
    <path
      d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z"
      fill="currentColor"
    />
  </svg>
)

export default function LocationMap() {
  const [showMap, setShowMap] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  return (
    <section className="contents h-[1fr] flex-col gap-2 grid-in-map lg:flex">
      <div className="flex items-center gap-2">
        <button
          className="text-left text-paragraph-regular text-neutral-paragraph underline grid-in-map"
          onClick={(e) => {
            e.preventDefault()
            setShowMap(!showMap)
          }}
        >
          Seleccionar ubicación en el mapa
        </button>
        <a
          href="#"
          className="flex items-center justify-center rounded-full border-2 border-solid border-neutral-paragraph p-0.5"
          onClick={(e) => {
            e.preventDefault()
            setShowInfo(!showInfo)
          }}
          aria-label="Información"
        >
          <InfoIcon />
        </a>
      </div>
      {showInfo && (
        <p className="mt-2 text-paragraph-small text-neutral-paragraph">
          Para obtener la ubicación más precisa, acerca el mapa antes de hacer
          clic para seleccionar la ubicación.
        </p>
      )}
      {showMap && <GetLocationMap />}
    </section>
  )
}
