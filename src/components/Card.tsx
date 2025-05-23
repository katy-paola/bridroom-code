import { STORAGE_URL } from '@/lib/config'
import { formatCurrency } from '@/utils/formatCurrency'
import Link from 'next/link'
import Button from './Button'
import Rating from './Rating'

export default function Card(Props: {
  photo: string | undefined
  title: string | null
  name: string | null | undefined
  rating: number | null
  price: number | null
  id: string
}) {
  const { photo, title, name, rating, price, id } = Props
  const priceCOP = formatCurrency(price ?? 0)

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-neutral-main-bg shadow-md">
      <figure className="h-48 w-full">
        <img
          className="size-full object-cover"
          src={`${STORAGE_URL}photos-listings/${photo}`}
          alt="Imagen de la pensión"
        />
      </figure>
      <section className="flex flex-1 flex-col justify-between gap-4 p-4">
        <section className="flex flex-col gap-1">
          <h3 className="text-paragraph-regular font-semibold text-neutral-title">
            {title}
          </h3>
          <p className="text-paragraph-small text-neutral-title">{name}</p>
          {rating === null ? (
            <p className="text-paragraph-regular leading-4 text-neutral-title">
              No hay valoraciones
            </p>
          ) : (
            <section className="flex items-center">
              <Rating numberOfStars={rating} />
            </section>
          )}
        </section>
        <section className="flex items-center justify-between">
          <p className="text-paragraph-small font-semibold text-neutral-title">
            {priceCOP}/mes
          </p>
          <Link href={`/house/${id}`}>
            <Button
              variant="primary"
              size="small"
              hasText="yes"
              text="Ver detalles"
              width="w-auto"
            />
          </Link>
        </section>
      </section>
    </article>
  )
}
