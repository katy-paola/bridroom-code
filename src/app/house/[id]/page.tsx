import BoardingHeader from '@/components/BoardingHeader'
import CardDetails from '@/components/CardDetails'
import Comments from '@/components/Comments'
import OwnerInfo from '@/components/OwnerInfo'
import TypeComment from '@/components/TypeComment'
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
    <section className="relative mt-14 flex w-full flex-col pt-4 sm:gap-8 sm:px-12 md:py-8 lg:gap-16">
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
          name={listing.owner?.name}
          contact={listing.owner?.contact}
          idOwner={listing.owner?.id}
          currentUser={currentUser}
        />
      </section>
      <section className="contents w-full gap-16 lg:flex">
        {!isOwner && <TypeComment />}

        <Comments
          isOwner={isOwner}
          comments={listing.comments}
          userName={currentUser?.name}
          photo={currentUser?.avatar_url}
        />
        {isOwner && <ImgComments />}
        {session !== null && (
          <Link href="/view-map">
            <button
              title="Ver mapa"
              className="fixed bottom-4 right-4 z-10 grid h-9 w-9 items-center rounded-lg bg-transparent p-2 text-tertiary-default outline-none hover:bg-tertiary-default hover:text-neutral-main-bg"
            >
              <MapIcon />
            </button>
          </Link>
        )}
      </section>
    </section>
  )
}
