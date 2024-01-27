/* import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Link from 'next/link'
import L from 'leaflet'
import { getAllListings } from '@/services/listing'

export default async function ViewMap() {
  const listings = await getAllListings()
  const createIcon = (url: string) => {
    return new L.Icon({
      iconUrl: url,
    })
  }

  const getLatitudeAndLongitudeFromString = (latLongString: string) => {
    const lat = latLongString.split(',')[0]
    const lng = latLongString.split(',')[1]
    return [lat, lng]
  }

  return (
    <MapContainer
      style={{ height: '100vh', width: '100%' }}
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
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {listings?.map((listing) => (
        <Marker
          icon={createIcon('/house-fill.svg')}
          key={listing.id}
          position={getLatitudeAndLongitudeFromString(listing.location)}
        >
          <Popup>
            {listing.title}
            <Link href={`/view-pension/${listing.id}`}>ver detalles</Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
*/
