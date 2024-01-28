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
    <section className="relative mt-14 flex w-full flex-col sm:gap-8 sm:px-12 sm:py-8 md:mt-[72px]">
      <section className="flex flex-col gap-4">
        <BoardingHeader
          role={currentUser?.role}
          id={id}
          listingTitle={listing.title}
        />
        <CardDetails
          photo={listing.photos?.[0]}
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
          userName={listing.owner?.name}
          contact={listing.owner?.contact}
        />
      </section>
      <TypeComment />
      <Comments
        comments={listing.comments}
        userName={currentUser?.name}
        photo={currentUser?.avatar_url}
      />
    </section>
  )
}
