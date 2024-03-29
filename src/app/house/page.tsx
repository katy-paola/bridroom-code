import { ListListings, ListListingSkeleton } from '@/components/ListListings'
import { Suspense } from 'react'
import HeaderHouse from '@/components/HouseHeader'
import { getAllListings } from '@/services/listing'
import { getProfileCurrentUser } from '@/services/user'

export default async function ListingsPage() {
  const listings = await getAllListings()
  const currentUser = await getProfileCurrentUser()
  return (
    <section className="flex w-full flex-col gap-6 px-4 pb-8 pt-22 xs:px-8 xs:pt-24 sm:px-12">
      <HeaderHouse role="student" />

      <main>
        <Suspense fallback={<ListListingSkeleton />}>
          <ListListings
            section="house"
            listings={listings}
            currentUser={currentUser}
          />
        </Suspense>
      </main>
    </section>
  )
}
