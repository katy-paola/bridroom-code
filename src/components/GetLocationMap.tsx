'use client'

import { MapIconLeaflet } from '@/svg/MapIconLeaflet'
import { type LatLng, latLng, type Map } from 'leaflet'
import { useMemo, useRef, useState } from 'react'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'

const center = latLng(10.381888, -75.490358)
const zoom = 14
const minZoom = 13
const maxZoom = 16 // Ajusta este valor según el nivel de zoom que consideres adecuado

function LocationMarker() {
  const [position, setPosition] = useState<LatLng | null>(null)
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <>
      <Marker position={position} icon={MapIconLeaflet}>
        <Popup>Ubicación seleccionada</Popup>
      </Marker>
      <input
        type="text"
        name="coords"
        value={`${position.lat},${position.lng}`}
        className="sr-only"
      />
      <p className="z-10">
        latitude: {position.lat.toFixed(4)}, longitude:{' '}
        {position.lng.toFixed(4)}
      </p>
    </>
  )
}

export function GetLocationMap() {
  const map = useRef<Map>(null)

  const displayMap = useMemo(
    () => (
      <div className="relative z-10 h-96 w-full">
        <MapContainer
          center={center}
          style={{ height: '100%', width: '100%' }}
          zoom={zoom}
          scrollWheelZoom={false}
          ref={map}
          maxBounds={[
            [10.267611, -75.578984],
            [10.537838, -75.390558],
          ]}
          maxZoom={maxZoom} // Limita el zoom máximo
          minZoom={minZoom} // Limita el zoom mínimo
          zoomControl={true} // Usa los controles de zoom predeterminados
        >
          <LocationMarker />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    ),
    [],
  )

  return <div>{displayMap}</div>
}
