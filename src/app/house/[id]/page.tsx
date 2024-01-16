import { getListingById } from '@/services/listing'
import { redirect } from 'next/navigation'
import { getProfileCurrentUser } from '@/services/user'
import CardDetails from '@/components/CardDetails'
import BoardingHeader from '@/components/BoardingHeader'
import OwnerInfo from '@/components/OwnerInfo'
import TypeComment from '@/components/TypeComment'
import Comments from '@/components/Comments'

export default async function ListingIdPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  const listing = await getListingById(id)
  const user = await getProfileCurrentUser()

  if (listing === null) {
    return redirect('/404')
  }

  return (
    <section className="relative w-full pt-14 md:pt-[72px]">
      <BoardingHeader role={user?.role} />
      <CardDetails
        photo={listing.photos?.[0] ?? '../no-image.jpg'}
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
        userName={user?.name}
        photo={user?.avatar_url}
      />
    </section>
  )
}
