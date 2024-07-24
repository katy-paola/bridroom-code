'use client'

import ZoomIn from '@/svg/ZoomIn'
import ZoomOut from '@/svg/ZoomOut'
import { Icon, latLng, type Map } from 'leaflet'
import { useMemo, useRef } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'

const zoom = 16.5

function MyZoomControl() {
  const zoomMap = useMap()
  const zoomIn = () => {
    zoomMap.setZoom(zoomMap.getZoom() + 1)
  }
  const zoomOut = () => {
    zoomMap.setZoom(zoomMap.getZoom() - 1)
  }
  return (
    <div className="absolute right-4 top-4 z-[400] flex flex-col gap-2">
      <button
        title="Acercar"
        onClick={(e) => {
          e.preventDefault()
          zoomIn()
        }}
        className="flex size-8 items-center justify-center rounded-lg bg-neutral-main-bg p-2 text-heading-medium leading-none text-neutral-paragraph shadow-md hover:bg-neutral-active"
      >
        <ZoomIn />
      </button>
      <button
        title="Alejar"
        onClick={(e) => {
          e.preventDefault()
          zoomOut()
        }}
        className="flex size-8 items-center justify-center rounded-lg bg-neutral-main-bg p-2 text-heading-medium leading-none text-neutral-paragraph shadow-md hover:bg-neutral-active"
      >
        <ZoomOut />
      </button>
    </div>
  )
}

const MapIconLeaflet = new Icon({
  iconUrl: '../icons/map-marker.svg',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
})

export function ViewLocationMap({ lat, lng }: { lat: number; lng: number }) {
  const map = useRef<Map>(null)

  const displayMap = useMemo(
    () => (
      <div className="relative z-10 h-96 w-full">
        <MapContainer
          center={latLng(lat, lng)}
          style={{ height: '100%', width: '100%' }}
          zoom={zoom}
          scrollWheelZoom={false}
          ref={map}
          maxBounds={[
            [10.267611, -75.578984],
            [10.537838, -75.390558],
          ]}
          zoomControl={false}
        >
          <MyZoomControl />
          <Marker position={latLng(lat, lng)} icon={MapIconLeaflet} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    ),
    [],
  )
  if (typeof window !== 'undefined') {
    return <div>{displayMap}</div>
  }

  // if window is undefined, return null

  return null
}
