import { ListListings, ListListingSkeleton } from '@/components/ListListings'
import { Suspense } from 'react'
import HeaderHouse from '@/components/HouseHeader'

export default function ListingsPage() {
  return (
    <section className="flex w-full flex-col gap-6  px-4 pb-8 pt-16">
      <HeaderHouse />

      <main>
        <Suspense fallback={<ListListingSkeleton />}>
          <ListListings />
        </Suspense>
      </main>
    </section>
  )
}
