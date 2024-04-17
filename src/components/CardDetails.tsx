import { getListingById } from '@/services/listing'
import { getProfileCurrentUser } from '@/services/user'
import { formatCurrency } from '@/utils/formatCurrency'
import CardInfo from './CardInfo'
import Carousel from './Carousel'

export default async function CardDetails(Props: {
  photos: string[] | null
  title: string | null
  description: string | null
  rating: number | null
  price: number | null
  address: string | null
  neighborhood: string | null
  id: string
}) {
  const {
    photos,
    title,
    description,
    rating,
    price,
    address,
    id,
    neighborhood,
  } = Props
  const listing = await getListingById(id)
  const priceCOP = formatCurrency(price ?? 0)

  return (
    <article className="flex flex-col overflow-hidden bg-neutral-main-bg">
      <Carousel photos={photos} />
      {listing !== null && (
        <CardInfo
          title={title}
          rating={rating}
          priceCOP={priceCOP}
          description={description}
          neighborhood={neighborhood}
          address={address}
          photo={listing.owner?.avatar_url}
          name={listing.owner?.name}
          contact={listing.owner?.contact}
          idOwner={listing.owner?.id}
          currentUser={await getProfileCurrentUser()}
        />
      )}
    </article>
  )
}
