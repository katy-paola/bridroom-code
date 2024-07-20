/* import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import Header from '@/components/HeaderPrueba'
import { cookies } from 'next/headers'
import { titleFont } from './ui/fonts' */
import HouseHeader from '@/components/HouseHeader'
import HouseSection from '@/components/HouseSection'
import { Skeleton } from '@/components/ListListings'
import OwnerSection from '@/components/OwnerSection'
import SearchSection from '@/components/SearchSection'
import { getProfileCurrentUser, getSession } from '@/services/user'
import MapIcon from '@/svg/MapIcon'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function Index() {
  const session = await getSession()

  let currentUser = null
  let role
  if (session !== null && session !== undefined) {
    currentUser = await getProfileCurrentUser()
    role = currentUser?.role
  }
  // const cookieStore = cookies()

  // const supabase = createClient(cookieStore)

  // const { data } = await supabase.from('listings').select('*, profiles(*)')

  return (
    <section className="flex w-full flex-col">
      <SearchSection />
      <Suspense
        fallback={
          <section className="flex flex-col gap-6 bg-neutral-secondary-bg px-4 py-8 xs:px-8 sm:gap-8 sm:px-12 sm:py-10">
            <HouseHeader role={role} />
            <Skeleton />
          </section>
        }
      >
        <HouseSection />
      </Suspense>
      {session === null && <OwnerSection />}
      {session !== null && (
        <Link
          href="/view-map"
          title="Ver mapa"
          className="fixed bottom-4 right-4 z-10 grid size-9
          items-center rounded-lg bg-transparent p-2 text-tertiary-default
          outline-none hover:bg-tertiary-default hover:text-neutral-main-bg"
        >
          <MapIcon />
        </Link>
      )}
    </section>
  )
}
