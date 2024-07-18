import { STORAGE_URL } from '@/lib/config'
import { formatCurrency } from '@/utils/formatCurrency'
import Link from 'next/link'
import Button from './Button'
import Rating from './Rating'
import SaveBoardingButton from './SaveBoardingButton'

export default function CardProfile(Props: {
  photo: string | undefined
  id: string
  title: string | null
  ownerName: string | null
  rating: number | null
  price: number | null
  role: string | undefined
}) {
  const { photo, id, title, ownerName, rating, price, role } = Props
  const priceCOP = formatCurrency(price ?? 0)
  return (
    <>
      <article className="rounded-b-lg bg-neutral-main-bg shadow-md sm:hidden lg:block">
        <figure className="flex h-20 w-32 lg:h-40 lg:w-60">
          <img
            className="size-full rounded-t-lg object-cover"
            src={`${STORAGE_URL}photos-listings/${photo}`}
            alt=""
          />
        </figure>
        <section className="flex flex-col justify-between gap-2 px-3 py-2">
          <p>{title}</p>
          <Link href={`/house/${id}`} className="self-end">
            <button className="text-paragraph-small text-neutral-title underline md:text-paragraph-regular">
              Ver más
            </button>
          </Link>
          {role === 'student' && (
            <SaveBoardingButton padding="p-0" id={id} fromProfile={true} />
          )}
        </section>
      </article>
      <article className="hidden gap-3 rounded-2xl bg-neutral-main-bg p-3 shadow-md sm:flex lg:hidden">
        <section className="flex flex-col gap-2">
          <figure className="h-24 w-36">
            <img
              className="size-full object-cover"
              src={`${STORAGE_URL}photos-listings/${photo}`}
              alt=""
            />
          </figure>
          <Link href={`/house/${id}`}>
            <Button
              variant="cuaternary"
              size="small"
              hasText="yes"
              text="Ver detalles"
              width="w-full"
            />
          </Link>
        </section>
        <section className="flex flex-1 flex-col justify-between">
          <section className="flex flex-col gap-1">
            <section className="flex items-start justify-between">
              <h3 className="text-paragraph-small font-semibold text-neutral-title">
                {title}
              </h3>
              {role === 'student' && (
                <SaveBoardingButton padding="p-0" id={id} fromProfile={true} />
              )}
            </section>
            <p className="text-paragraph-xsmall font-normal text-neutral-title">
              {ownerName}
            </p>
            {rating === null ? (
              <p className="text-paragraph-small leading-4 text-neutral-title">
                No hay valoraciones
              </p>
            ) : (
              <section className="flex items-center">
                <Rating numberOfStars={rating} />
              </section>
            )}
          </section>
          <p className="self-end text-paragraph-small font-semibold text-neutral-title">
            {priceCOP}/mes
          </p>
        </section>
      </article>
    </>
  )
}
