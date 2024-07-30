import { getAllListings } from '@/services/listing'
import { getProfileCurrentUser, getSession } from '@/services/user'
import { redirect } from 'next/navigation'
import { MapLeaflet } from './map'

export default async function ViewMap() {
  const currentUser = await getProfileCurrentUser()
  const session = await getSession()

  if (session === null) {
    return redirect('/login')
  }

  const role = currentUser?.role
  const listings = await getAllListings({
    role,
    idCurrentUser: currentUser?.id,
  })

  return <MapLeaflet listings={listings} />
}
