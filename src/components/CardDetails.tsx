import { formatCurrency } from '@/utils/formatCurrency'
import OwnerInfo from './OwnerInfo'
import { getListingById } from '@/services/listing'
import Carousel from './Carousel'
import CardInfo from './CardInfo'

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
      <section className="flex flex-1 flex-col justify-between gap-2 p-4 xs:px-8 sm:flex-row sm:gap-6 sm:bg-neutral-active sm:p-4 md:gap-8 md:p-8">
        <CardInfo
          title={title}
          rating={rating}
          priceCOP={priceCOP}
          description={description}
          neighborhood={neighborhood}
          address={address}
        />
        {listing !== null && (
          <section className="hidden w-auto sm:flex">
            <OwnerInfo
              photo={listing.owner?.avatar_url}
              name={listing.owner?.name}
              contact={listing.owner?.contact}
              idOwner={listing.owner?.id}
            />
          </section>
        )}
      </section>
    </article>
  )
}
