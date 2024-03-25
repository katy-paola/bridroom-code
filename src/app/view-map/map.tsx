'use client'

import { MapIconLeaflet } from '@/svg/MapIconLeaflet'
import { latLng } from 'leaflet'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import ZoomIn from '@/svg/ZoomIn'
import ZoomOut from '@/svg/ZoomOut'
import Back from '@/svg/Back'

interface Props {
  listings: any
}

function MyZoomControl() {
  const map = useMap()
  const zoomIn = () => {
    map.setZoom(map.getZoom() + 1)
  }
  const zoomOut = () => {
    map.setZoom(map.getZoom() - 1)
  }
  return (
    <div className="absolute right-4 top-4 z-[400] flex flex-col gap-2">
      <button
        title="Acercar"
        onClick={zoomIn}
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-main-bg p-2 text-heading-medium leading-none text-neutral-paragraph shadow-md hover:bg-neutral-active"
      >
        <ZoomIn />
      </button>
      <button
        title="Alejar"
        onClick={zoomOut}
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-main-bg p-2 text-heading-medium leading-none text-neutral-paragraph shadow-md hover:bg-neutral-active"
      >
        <ZoomOut />
      </button>
    </div>
  )
}
export function MapLeaflet({ listings }: Props) {
  // if window is undefined, return null
  if (typeof window === 'undefined') {
    return null
  }

  const getLatitudeAndLongitudeFromString = (coord: string) => {
    const [latitude, longitude] = coord.split(',')
    return latLng(parseFloat(latitude), parseFloat(longitude))
  }

  const router = useRouter()

  return (
    <div className="relative z-[1] mt-14 h-main-responsive w-full md:mt-[76px] md:h-main">
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        center={[10.381888, -75.490358]}
        zoom={13}
        scrollWheelZoom={false}
        minZoom={12}
        dragging={true}
        maxBounds={[
          [10.267611, -75.578984],
          [10.537838, -75.390558],
        ]}
        zoomControl={false}
      >
        <button
          title="Volver"
          onClick={() => {
            router.back()
          }}
          className="absolute left-4 top-4 z-[400] flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-paragraph p-2 text-neutral-main-bg hover:bg-secondary-default"
        >
          <Back />
        </button>
        <MyZoomControl />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {listings.map(
          (listing: {
            id: string
            title: string
            location: {
              coord: string
            }
          }) => (
            <Marker
              icon={MapIconLeaflet}
              key={listing.id}
              position={getLatitudeAndLongitudeFromString(
                listing.location.coord,
              )}
            >
              <Popup>
                <span className="flex flex-col gap-2">
                  {' '}
                  {listing.title}
                  <Link href={`/house/${listing.id}`}>ver detalles</Link>
                </span>
              </Popup>
            </Marker>
          ),
        )}
      </MapContainer>
    </div>
  )
}
