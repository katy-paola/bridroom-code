'use client'

import { useState, useCallback, useEffect, useMemo, useRef } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { type Map, latLng } from 'leaflet'
import ZoomIn from '@/svg/ZoomIn'
import ZoomOut from '@/svg/ZoomOut'

const center = latLng(10.381888, -75.490358)
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
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-main-bg p-2 text-heading-medium leading-none text-neutral-paragraph shadow-md hover:bg-neutral-active"
      >
        <ZoomIn />
      </button>
      <button
        title="Alejar"
        onClick={(e) => {
          e.preventDefault()
          zoomOut()
        }}
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-main-bg p-2 text-heading-medium leading-none text-neutral-paragraph shadow-md hover:bg-neutral-active"
      >
        <ZoomOut />
      </button>
    </div>
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
      <div className="z-10 h-96 w-full">
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
          zoomControl={false}
        >
          <MyZoomControl />
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
