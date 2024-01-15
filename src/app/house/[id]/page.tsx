import { getListingById } from '@/services/listing'
import { redirect } from 'next/navigation'
import Save from '@/svg/Save'
import Edit from '@/svg/Edit'
import DeleteIcon from '@/svg/DeleteIcon'
import CardDetails from '@/components/CardDetails'
import { getProfileCurrentUser } from '@/services/user'
import Button from '@/components/Button'

export default async function ListingIdPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  const listing = await getListingById(id)
  const user = await getProfileCurrentUser()

  if (listing === null) {
    return redirect('/404')
  }

  return (
    <section className="relative pt-14">
      <header className="absolute flex w-full justify-end gap-4 bg-slate-400 p-2">
        <ul>
          {user?.role === 'student' ? (
            <li>
              <figure>
                <Save />
              </figure>
            </li>
          ) : (
            <>
              <li>
                <figure>
                  <Edit />
                </figure>
              </li>
              <li>
                <figure>
                  <DeleteIcon />
                </figure>
              </li>
            </>
          )}
        </ul>
      </header>
      <CardDetails
        photo={listing.photos?.[0] ?? '/no-image.png'}
        title={listing.title}
        description={listing.description}
        rating={listing.rating}
        price={listing.price}
        direction={listing.direction}
      />
      <section>
        <article>
          <section>
            <figure>
              <img
                src={listing.owner?.avatar_url ?? '/no-image.png'}
                alt="Foto del propietario"
              />
            </figure>
            <section>
              <h4>{listing.owner?.name}</h4>
              <small>Propietario</small>
            </section>
          </section>
          <Button
            type="primary"
            size="regular"
            hasText="yes"
            text="Contactar"
            contact={user?.contact}
          />
        </article>
      </section>
    </section>
  )
}
