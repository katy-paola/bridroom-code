import HouseHeader from '@/components/HouseHeader'
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
  const currentUser = await getProfileCurrentUser()
  const role = currentUser?.role

  const listings = await getAllListings({
    price: priceNumber,
    search,
    role,
    idCurrentUser: currentUser?.id,
  })

  // filtrar por rol, vamos a tener en cuenta que si no hay sesión también deben mostrarse todas
  const filteredListings = listings?.filter(
    (listing) =>
      role === 'student' ||
      currentUser === null ||
      currentUser?.id === listing.owner?.id,
  )
  return (
    <section className="flex w-full flex-col gap-6 bg-neutral-secondary-bg px-4 pb-8 pt-22 xs:px-8 xs:pt-24 sm:px-12">
      <HouseHeader role={role} />

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
            listings={filteredListings}
            currentUser={currentUser}
          />
        </Suspense>
      </main>
    </section>
  )
}
