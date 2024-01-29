import FillStar from '@/svg/FillStar'
import { formatCurrency } from '@/utils/formatCurrency'
import OwnerInfo from './OwnerInfo'
import { getListingById } from '@/services/listing'
import Carousel from './Carousel'

export default async function CardDetails(Props: {
  photos: string[] | null
  title: string | null
  description: string | null
  rating: number | null
  price: number | null
  address: string | null
  id: string
}) {
  const { photos, title, description, rating, price, address, id } = Props
  const listing = await getListingById(id)
  const priceCOP = formatCurrency(price ?? 0)

  return (
    <article className="flex flex-col overflow-hidden bg-neutral-main-bg">
      <Carousel photos={photos} />

      <section className="flex flex-1 flex-col justify-between gap-2 p-4 xs:px-8 sm:flex-row sm:gap-6 sm:bg-neutral-active sm:p-4 md:gap-8 md:p-8">
        <section className="contents w-full flex-col gap-3 sm:flex sm:justify-between">
          <section className="contents flex-col gap-3 sm:flex">
            <h3 className="text-paragraph-regular font-semibold text-neutral-title sm:hidden">
              {title}
            </h3>
            <section className="flex flex-col gap-1 sm:flex-row-reverse sm:items-center sm:justify-between">
              {rating === null ? (
                <p className="text-paragraph-small leading-4 text-neutral-title">
                  No hay valoraciones
                </p>
              ) : (
                <section className="flex items-center">
                  <p className="text-paragraph-small font-medium leading-4 text-neutral-title">
                    {rating}
                  </p>
                  <FillStar />
                </section>
              )}
              <p className="text-paragraph-small font-semibold text-neutral-title md:text-paragraph-regular">
                {priceCOP}/mes
              </p>
            </section>
            <p className="text-paragraph-small font-normal text-neutral-title md:max-w-[600px] md:text-paragraph-regular xl:max-w-[720px]">
              {description}
            </p>
          </section>
          <small className="bg-neutral-hover px-2 py-1 text-paragraph-small font-normal text-neutral-title sm:bg-neutral-main-bg md:text-paragraph-regular">
            📍 {address}
          </small>
        </section>
        {listing !== null && (
          <section className="hidden w-auto sm:flex">
            <OwnerInfo
              photo={listing.owner?.avatar_url}
              userName={listing.owner?.name}
              contact={listing.owner?.contact}
            />
          </section>
        )}
      </section>
    </article>
  )
}
