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
      <article className="flex w-full flex-1 flex-col rounded-b-lg bg-neutral-main-bg shadow-md sm:hidden lg:flex">
        <figure className="flex h-32 w-full lg:h-48">
          <img
            className="size-full rounded-t-lg object-cover"
            src={`${STORAGE_URL}photos-listings/${photo}`}
            alt=""
          />
        </figure>
        <section className="flex w-max flex-1 flex-col justify-between gap-2 px-3 py-2 lg:w-full">
          <section className="flex flex-col gap-1">
            <section className="flex w-48 items-start justify-between">
              <h3 className="max-w-[24ch] text-paragraph-small font-semibold text-neutral-title lg:max-w-none lg:text-base">
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
          <Link href={`/house/${id}`} className="self-end">
            <Button
              variant="primary"
              size="small"
              hasText="yes"
              text="Ver detalles"
              width="w-full"
            />
          </Link>
          {role === 'student' && (
            <SaveBoardingButton padding="p-0" id={id} fromProfile={true} />
          )}
        </section>
      </article>
      <article className="hidden w-full gap-3 rounded-2xl bg-neutral-main-bg p-3 shadow-md sm:flex lg:hidden">
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
              variant="primary"
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
