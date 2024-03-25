import { ListListings, ListListingSkeleton } from '@/components/ListListings'
import { Suspense } from 'react'
import HeaderHouse from '@/components/HouseHeader'

export default function ListingsPage() {
  return (
    <section className="flex w-full flex-col gap-6 px-4 pb-8 pt-22 xs:px-8 xs:pt-24 sm:px-12">
      <HeaderHouse role="student" />

      <main>
        <Suspense fallback={<ListListingSkeleton />}>
          <ListListings showAllListings={true} />
        </Suspense>
      </main>
    </section>
  )
}
