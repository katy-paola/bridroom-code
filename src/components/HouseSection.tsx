import More from '@/svg/More'
import Button from './Button'
import HouseHeader from './HouseHeader'
import Link from 'next/link'
import { ListListings, ListListingSkeleton } from './ListListings'
import { Suspense } from 'react'
import { getProfileCurrentUser } from '@/services/user'

export default async function HouseSection() {
  const currentUser = await getProfileCurrentUser()
  const role = currentUser?.role

  return (
    <section className="flex flex-col gap-6 bg-neutral-secondary-bg px-4 py-8 xs:px-8 sm:gap-8 sm:px-12 sm:py-10">
      <HouseHeader role={role} />
      <section className="flex flex-col gap-6">
        <Suspense fallback={<ListListingSkeleton />}>
          <ListListings />
        </Suspense>

        <section className="flex justify-end sm:justify-center">
          <Link href="/house">
            <Button
              type="secondary"
              size="small"
              hasText="yes"
              text="Ver más"
              iconRight={<More />}
              width="w-auto"
            />
          </Link>
        </section>
      </section>
    </section>
  )
}
