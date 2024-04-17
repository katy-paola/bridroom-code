import { getAllListings } from '@/services/listing'
import { getProfileCurrentUser } from '@/services/user'
import { Suspense } from 'react'
import HouseHeader from './HouseHeader'
import { ListListings, Skeleton } from './ListListings'
import ViewMore from './viewMore'

export default async function HouseSection() {
  const listings = await getAllListings()
  const listingsLength = listings?.length ?? 0
  const currentUser = await getProfileCurrentUser()
  const role = currentUser?.role

  return (
    <section className="flex flex-col gap-6 bg-neutral-secondary-bg px-4 py-8 xs:px-8 sm:gap-8 sm:px-12 sm:py-10">
      <HouseHeader role={role} />
      <section className="flex flex-col gap-6">
        <Suspense fallback={<Skeleton />}>
          <ListListings section="default" listings={listings} />
        </Suspense>
        {listingsLength > 3 && <ViewMore />}
      </section>
    </section>
  )
}
