import { getAllListings } from '@/services/listing'
import Card from './Card'
import { getProfileCurrentUser, getSession } from '@/services/user'

export async function ListListings() {
  const listings = await getAllListings()
  const currentUser = await getProfileCurrentUser()
  const session = await getSession()

  if (listings === null) return <p>Aún no hay pensiones</p>

  return (
    <ul className="grid grid-cols-auto-fill grid-rows-auto-fit items-stretch gap-6">
      {listings?.map((listing) =>
        session === null || currentUser?.role !== 'student' ? (
          <li key={listing.id} className="contents">
            <Card
              photo={listing.photos?.[0]}
              title={listing.title}
              name={listing.owner?.name}
              rating={listing.rating}
              price={listing.price}
              id={listing.id}
            />
          </li>
        ) : (
          currentUser?.id === listing.owner?.id && (
            <li key={listing.id} className="contents">
              <Card
                photo={listing.photos?.[0]}
                title={listing.title}
                name={listing.owner?.name}
                rating={listing.rating}
                price={listing.price}
                id={listing.id}
              />
            </li>
          )
        ),
      )}
    </ul>
  )
}

export function ListListingSkeleton() {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-2.5 h-2 max-w-[330px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-2.5 h-2 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
