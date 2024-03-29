'use client'

import Card from './Card'
import { type User } from '@/types/types'

import { useEffect, useState } from 'react'
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

  const noSession = session === null || session === undefined

  const filteredListings =
    section === 'house' || noSession || currentUser?.role === 'student'
      ? listings
      : listings.filter((listing: any) => currentUser?.id === listing.owner?.id)

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : undefined,
  )

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    console.log('ventana inicial: ', windowWidth)
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <ul className="grid grid-cols-auto-fill grid-rows-auto-fit items-stretch gap-6">
      {filteredListings
        .filter(
          (listing: any) =>
            section === 'default' ||
            noSession ||
            currentUser?.role === 'student' ||
            currentUser?.id === listing.owner?.id,
        )
        .slice(
          0,
          section === 'default'
            ? windowWidth !== undefined &&
              ((windowWidth > 430 && windowWidth <= 744) || windowWidth >= 1280)
              ? 4
              : 3
            : filteredListings.length,
        )
        .map((listing: any) => (
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
