'use client'

import { useState, useCallback, useEffect, useMemo, useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { type Map, latLng } from 'leaflet'

const center = latLng(51.505, -0.09)
const zoom = 13

function DisplayPosition({ map }: { map: Map }) {
  // if window is undefined, return null
  if (typeof window === 'undefined') {
    return null
  }

  const [position, setPosition] = useState(() => map.getCenter())

  const onClick = useCallback(() => {
    map.setView(center, zoom)
  }, [map])

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  return (
    <p>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
      <button onClick={onClick}>reset</button>
    </p>
  )
}

export function GetLocationMap() {
  const map = useRef<Map>(null)

  // if window is undefined, return null
  if (typeof window === 'undefined') {
    return null
  }

  const displayMap = useMemo(
    () => (
      <div className="mt-14 h-96 w-full md:mt-16 md:h-main">
        <MapContainer
          center={center}
          style={{ height: '100%', width: '100%' }}
          zoom={zoom}
          scrollWheelZoom={false}
          ref={map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    ),
    [],
  )

  return (
    <div>
      {map.current != null ? <DisplayPosition map={map.current} /> : null}
      {displayMap}
    </div>
  )
}
