import FillStar from '@/svg/FillStar'
import { formatCurrency } from '@/utils/formatCurrency'

export default function CardDetails(Props: {
  photo: string | undefined
  title: string | null
  description: string | null
  rating: number | null
  price: number | null
  direction: string | null
}) {
  const { photo, title, description, rating, price, direction } = Props
  const priceCOP = formatCurrency(price ?? 0)

  return (
    <article className="flex flex-col overflow-hidden bg-neutral-main-bg">
      <figure className="flex h-52 w-full xs:h-80">
        <img src={photo} alt={title ?? 'No image'} className="object-cover" />
      </figure>
      <section className="flex flex-1 flex-col justify-between gap-2 p-4 xs:px-8">
        <h3 className="text-paragraph-regular font-semibold text-neutral-title">
          {title}
        </h3>
        <section>
          {rating === null ? (
            <p className="text-paragraph-regular leading-4 text-neutral-title">
              No hay valoraciones
            </p>
          ) : (
            <section className="flex items-center">
              <p className="text-paragraph-regular leading-4 text-neutral-title">
                {rating}
              </p>
              <FillStar />
            </section>
          )}
          <p className="text-paragraph-small font-semibold text-neutral-title">
            {priceCOP}/mes
          </p>
        </section>
        <p className="text-paragraph-small font-normal text-neutral-title">
          {description}
        </p>
        <small className="bg-neutral-hover px-2 py-1 text-paragraph-small font-normal text-neutral-title">
          {direction}
        </small>
      </section>
    </article>
  )
}
