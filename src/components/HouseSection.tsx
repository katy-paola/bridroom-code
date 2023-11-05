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
    <section>
      <header>
        <h2>Encuentra aquí tu pensión</h2>
        <Button
          type="secondary"
          size="small"
          hasText="both"
          text="Filtrar"
          icon={<Filter />}
        />
      </header>
      <ul>
        {data?.map((listing) => (
          <li key={listing.id}>
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
      <Button
        type="secondary"
        size="small"
        hasText="yes"
        text="Ver más"
        icon={<More />}
      />
    </section>
  )
}
