import { getAllListings } from '@/services/listing'
import { getProfileCurrentUser } from '@/services/user'
import { MapLeaflet } from './map'

export default async function ViewMap() {
  const currentUser = await getProfileCurrentUser()
  const role = currentUser?.role
  const listings = await getAllListings({
    role,
    idCurrentUser: currentUser?.id,
  })

  return <MapLeaflet listings={listings} />
}
