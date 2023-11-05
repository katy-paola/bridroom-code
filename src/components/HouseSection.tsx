import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Filter from '@/svg/Filter'
import More from '@/svg/More'
import Button from './Button'
import Card from './Card'

export default async function HouseSection() {
  const cookieStore = cookies()

  const supabase = createClient(cookieStore)

  const { data } = await supabase.from('listings').select('*, profiles(*)')
  return (
    <section className="flex flex-col gap-6 bg-neutral-secondary-bg px-4 py-8">
      <header className="flex items-center justify-between">
        <h2 className="text-paragraph-medium font-medium text-neutral-title">
          Encuentra aquí tu pensión
        </h2>
        <Button
          type="secondary"
          size="small"
          hasText="both"
          text="Filtrar"
          icon={<Filter />}
        />
      </header>
      <section className="flex flex-col gap-6">
        <ul className="grid grid-cols-auto-fill grid-rows-auto-fit items-stretch gap-6">
          {data?.map((listing) => (
            <li key={listing.id} className="contents">
              <Card
                photo={listing.photos?.[0]}
                title={listing.title}
                name={listing.profiles?.name}
                rating={listing.rating}
                price={listing.price}
              />
            </li>
          ))}
        </ul>
        <section className="flex justify-end md:justify-center">
          <Button
            type="secondary"
            size="small"
            hasText="yes"
            text="Ver más"
            icon={<More />}
          />
        </section>
      </section>
    </section>
  )
}
