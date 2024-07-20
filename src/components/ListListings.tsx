'use client'

import { useWindowWidth } from '@/hooks/useWindowWidth'
import { type User } from '@/types/types'
import Card from './Card'

export function ListListings({
  section,
  listings,
  currentUser,
  session,
}: {
  section?: 'default' | 'house'
  listings?: any
  currentUser?: User
  session?: any
}) {
  if (listings === null) return <p>Aún no hay pensiones</p>

  const listingsLength = useWindowWidth()
  const noSession = session === null || session === undefined

  const filteredListings =
    section === 'house' || noSession || currentUser?.role === 'student'
      ? listings
      : listings.filter((listing: any) => currentUser?.id === listing.owner?.id)

  return (
    <ul className="grid grid-cols-auto-fill grid-rows-auto-fit items-stretch gap-8 sm:gap-12 sm:gap-y-14">
      {filteredListings.length === 0 && (
        <p className="text-paragraph-medium font-medium text-neutral-title">
          Aún no hay pensiones
        </p>
      )}
      {filteredListings
        .filter(
          (listing: any) =>
            noSession ||
            currentUser?.role === 'student' ||
            currentUser?.id === listing.owner?.id,
        )
        .slice(
          0,
          section === 'default' ? listingsLength : filteredListings.length,
        )
        .map((listing: any) => (
          <li key={listing.id} className="contents">
            <Card
              photo={listing.photos?.[0]}
              title={listing.title}
              name={listing.owner?.name ?? listing.owner?.email}
              rating={listing.rating}
              price={listing.price}
              id={listing.id}
            />
          </li>
        ))}
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
export function Skeleton() {
  return (
    <ul className="grid grid-cols-auto-fill grid-rows-auto-fit items-stretch gap-6">
      {Array.from({ length: useWindowWidth() }).map((_, index) => (
        <li key={index} className="contents">
          <article className="flex flex-col overflow-hidden rounded-2xl bg-neutral-hover">
            <figure className="h-48 w-full"></figure>
            <section className="flex flex-1 flex-col justify-between gap-4 bg-neutral-active p-4">
              <section className="flex flex-col gap-2">
                <h3 className="h-4 bg-neutral-hover text-paragraph-regular font-semibold text-neutral-title"></h3>
                <p className="h-3 w-2/5 bg-neutral-hover text-paragraph-small text-neutral-title"></p>

                <p className="h-4 w-6 bg-neutral-hover text-paragraph-regular leading-4 text-neutral-title"></p>
              </section>
              <section className="flex items-center justify-between">
                <p className="h-4 w-1/3 bg-neutral-hover text-paragraph-small font-semibold text-neutral-title"></p>
                <span className="h-8 w-32 rounded-lg bg-neutral-hover"></span>
              </section>
            </section>
          </article>
        </li>
      ))}
    </ul>
  )
}
