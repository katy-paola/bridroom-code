import Button from '@/components/Button'
import { ListListings, ListListingSkeleton } from '@/components/ListListings'
import Filter from '@/svg/Filter'
import { Suspense } from 'react'

export default function ListingsPage() {
  return (
    <section className="flex w-full flex-col gap-6  px-4 pb-8 pt-16">
      <header className="flex items-center justify-between">
        <h2 className="text-paragraph-medium font-medium text-neutral-title">
          Encuentra aquí tu pensión
        </h2>
        <Button
          type="secondary"
          size="small"
          hasText="both"
          text="Filtrar"
          iconLeft={<Filter />}
        />
      </header>

      <main>
        <Suspense fallback={<ListListingSkeleton />}>
          <ListListings />
        </Suspense>
      </main>
    </section>
  )
}
