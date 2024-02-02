'use client'

import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'

interface Props {
  listings: any
}

export function MapLeaflet({ listings }: Props) {
  // if window is undefined, return null
  if (typeof window === 'undefined') {
    return null
  }

  return (
    <div className="mt-20 h-96 w-full">
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
        {/* {listings?.map((listing: any) => (
        <Marker
          icon={createIcon('/house-fill.svg')}
          key={listing.id}
          position={getLatitudeAndLongitudeFromString(
            typeof listing.location === 'object' &&
              listing.location !== null &&
              'coords' in listing.location &&
              typeof listing.location.coords === 'string'
              ? listing.location.coords
              : '',
          )}
        >
          <Popup>
            {listing.title}
            <Link href={`/view-pension/${listing.id}`}>ver detalles</Link>
          </Popup>
        </Marker>
      ))} */}
      </MapContainer>
    </div>
  )
}
