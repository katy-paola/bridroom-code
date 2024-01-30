import BoardingHeader from '@/components/BoardingHeader'
import CardDetails from '@/components/CardDetails'
import Comments from '@/components/Comments'
import OwnerInfo from '@/components/OwnerInfo'
import TypeComment from '@/components/TypeComment'
import { getListingById } from '@/services/listing'
import { getProfileCurrentUser } from '@/services/user'
import { redirect } from 'next/navigation'

export default async function ListingIdPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  const listing = await getListingById(id)
  const currentUser = await getProfileCurrentUser()

  if (listing === null) {
    return redirect('/404')
  }

  return (
    <section className="relative flex w-full flex-col pb-8 pt-14 sm:gap-8 sm:px-12 md:pt-[104px] lg:gap-16">
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
          address={listing.address}
          id={id}
        />
      </section>
      <section className="sm:hidden">
        <OwnerInfo
          photo={listing.owner?.avatar_url}
          name={listing.owner?.name}
          contact={listing.owner?.contact}
          idOwner={listing.owner?.id}
        />
      </section>
      <section className="contents w-full gap-16 lg:flex">
        <TypeComment />
        <Comments
          comments={listing.comments}
          userName={currentUser?.name}
          photo={currentUser?.avatar_url}
        />
      </section>
    </section>
  )
}
