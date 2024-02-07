'use client'

import { MapIconLeaflet } from '@/svg/MapIconLeaflet'
import { latLng } from 'leaflet'
import Link from 'next/link'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

interface Props {
  listings: any
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

  return (
    <div className="mt-16 h-main w-full">
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        center={[10.4002813, -75.5435449]}
        zoom={13}
        scrollWheelZoom={false}
        minZoom={12}
        dragging={true}
        maxBounds={[
          [10.267611, -75.578984],
          [10.537838, -75.390558],
        ]}
      >
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
