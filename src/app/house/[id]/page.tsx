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
    <section className="relative mt-14 flex w-full flex-col md:mt-[72px]">
      <BoardingHeader role={currentUser?.role} id={id} />
      <CardDetails
        photo={listing.photos?.[0]}
        title={listing.title}
        description={listing.description}
        rating={listing.rating}
        price={listing.price}
        direction={listing.direction}
      />
      <OwnerInfo
        photo={listing.owner?.avatar_url}
        userName={listing.owner?.name}
        contact={listing.owner?.contact}
      />
      <TypeComment />
      <Comments
        comments={listing.comments}
        userName={currentUser?.name}
        photo={currentUser?.avatar_url}
      />
    </section>
  )
}
