import HeaderHouse from '@/components/HouseHeader'
import { ListListings, Skeleton } from '@/components/ListListings'
import { getAllListings } from '@/services/listing'
import { getProfileCurrentUser } from '@/services/user'
import { formatCurrency } from '@/utils/formatCurrency'
import { Suspense } from 'react'

export default async function ListingsPage({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>
}) {
  const { price, search } = searchParams

  const priceNumber = price !== undefined ? parseInt(price) : 0

  const listings = await getAllListings({ price: priceNumber, search })
  const currentUser = await getProfileCurrentUser()
  return (
    <section className="flex w-full flex-col gap-6 px-4 pb-8 pt-22 xs:px-8 xs:pt-24 sm:px-12">
      <HeaderHouse role="student" />

      <main>
        {price !== undefined || search !== undefined ? (
          <h3 className="text-paragraph-medium font-medium text-neutral-title">
            {price !== undefined
              ? `Resultados para precios menores a ${formatCurrency(+price)}`
              : `Resultados para "${search}"`}
          </h3>
        ) : null}

        <Suspense fallback={<Skeleton />}>
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
