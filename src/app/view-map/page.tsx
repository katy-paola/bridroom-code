import { getAllListings } from '@/services/listing'
import { MapLeaflet } from './map'

export default async function ViewMap() {
  const listings = await getAllListings()

  return <MapLeaflet listings={listings} />
}
