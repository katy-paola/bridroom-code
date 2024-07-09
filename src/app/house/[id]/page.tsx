import BoardingHeader from '@/components/BoardingHeader'
import CardDetails from '@/components/CardDetails'
import ListComments from '@/components/ListComments'
import OwnerInfo from '@/components/OwnerInfo'
import TypeComment from '@/components/TypeComment'
import { getComments } from '@/services/comments'
import { getListingById } from '@/services/listing'
import { getProfileCurrentUser, getSession } from '@/services/user'
import ImgComments from '@/svg/ImgComments'
import MapIcon from '@/svg/MapIcon'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function ListingIdPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  const session = await getSession()
  const listing = await getListingById(id)
  const currentUser = await getProfileCurrentUser()
  const isOwner = currentUser?.role === 'owner'
  const comments = await getComments(id)

  if (listing === null) {
    return redirect('/404')
  }
  const address =
    typeof listing.location === 'object' &&
    listing.location !== null &&
    'address' in listing.location &&
    typeof listing.location.address === 'string'
      ? listing.location.address
      : ''

  const neighborhood =
    typeof listing.location === 'object' &&
    listing.location !== null &&
    'neigh' in listing.location &&
    typeof listing.location.neigh === 'string'
      ? listing.location.neigh
      : ''
  return (
    <>
      <section className="relative mt-14 flex w-full flex-col sm:gap-8 sm:px-12 sm:pt-4 md:py-8 lg:gap-16">
        <section className="flex flex-col gap-4">
          <BoardingHeader
            role={currentUser?.role}
            id={id}
            listingTitle={listing.title}
          />
          <CardDetails
            photos={listing.photos}
            title={listing.title}
            description={listing.description}
            rating={listing.rating}
            price={listing.price}
            address={address}
            neighborhood={neighborhood}
            id={id}
          />
        </section>
        <section className="sm:hidden">
          <OwnerInfo
            photo={listing.owner?.avatar_url}
            name={listing.owner?.name ?? listing.owner?.email}
            contact={listing.owner?.contact}
            idOwner={listing.owner?.id}
            currentUser={currentUser}
          />
        </section>
        <section className={`contents w-full gap-16 ${isOwner && 'lg:flex'}`}>
          {!isOwner && currentUser !== null && <TypeComment listingId={id} />}

          <ListComments isOwner={isOwner} comments={comments} />

          {isOwner && (
            <figure className="flex justify-center">
              <ImgComments />
            </figure>
          )}
        </section>
      </section>
      {session !== null && (
        <Link href="/view-map">
          <button
            title="Ver mapa"
            className="fixed bottom-4 right-4 z-10 grid size-9 items-center rounded-lg bg-transparent p-2 text-tertiary-default outline-none hover:bg-tertiary-default hover:text-neutral-main-bg"
          >
            <MapIcon />
          </button>
        </Link>
      )}
    </>
  )
}
