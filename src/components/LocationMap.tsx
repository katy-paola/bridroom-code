'use client'

import { useState } from 'react'
import { GetLocationMap } from './GetLocationMap'

export default function LocationMap({
  setCoords,
}: {
  setCoords: (coords: { lat: number; lng: number }) => void
}) {
  const [showMap, setShowMap] = useState(false)

  return (
    <section className="contents h-[1fr] flex-col gap-2 grid-in-map lg:flex">
      <button
        className="text-left text-paragraph-small text-neutral-paragraph underline grid-in-map"
        onClick={(e) => {
          e.preventDefault()
          setShowMap(!showMap)
        }}
      >
        Modificar ubicación en el mapa
      </button>
      {showMap && <GetLocationMap setCoords={setCoords} />}
    </section>
  )
}
