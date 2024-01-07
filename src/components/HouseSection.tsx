import Filter from '@/svg/Filter'
import More from '@/svg/More'
import Button from './Button'
import Card from './Card'
import Link from 'next/link'
import { getAllListings } from '@/services/listing'

export default async function HouseSection() {
  const listings = await getAllListings()

  return (
    <section className="flex flex-col gap-6 bg-neutral-secondary-bg px-4 py-8 xs:px-8 sm:gap-8 sm:px-12 sm:py-10">
      <header className="flex items-center justify-between">
        <h2 className="text-paragraph-medium font-medium text-neutral-title md:text-paragraph-xlarge">
          Encuentra aquí tu pensión
        </h2>

        <Button
          type="secondary"
          size="small"
          hasText="both"
          text="Filtrar"
          iconRight={<Filter />}
          width="w-auto"
        />
      </header>
      <section className="flex flex-col gap-6">
        <ul className="grid grid-cols-auto-fill grid-rows-auto-fit items-stretch gap-6">
          {listings?.map((listing) => (
            <li key={listing.id} className="contents">
              <Card
                photo={listing.photos?.[0]}
                title={listing.title}
                name={listing.owner?.name}
                rating={listing.rating}
                price={listing.price}
                id={listing.id}
              />
            </li>
          ))}
        </ul>
        <section className="flex justify-end sm:justify-center">
          <Link href="/l">
            <Button
              type="secondary"
              size="small"
              hasText="yes"
              text="Ver más"
              iconRight={<More />}
              width="w-auto"
            />
          </Link>
        </section>
      </section>
    </section>
  )
}
