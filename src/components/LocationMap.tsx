'use client'

import { useState } from 'react'
import { GetLocationMap } from './GetLocationMap'

export default function LocationMap() {
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
        Obtén tu ubicación actual en el mapa
      </button>
      {showMap && <GetLocationMap />}
    </section>
  )
}
