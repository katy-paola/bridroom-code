import { getListingById } from '@/services/listing'
import { redirect } from 'next/navigation'
import CardDetails from '@/components/CardDetails'
import { getProfileCurrentUser } from '@/services/user'
import Button from '@/components/Button'
import EmptyStar from '@/svg/EmptyStar'
import BoardingHeader from '@/components/BoardingHeader'

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
      <BoardingHeader role={user?.role} />
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
      <section>
        <section>
          <h5>Dejar un comentario</h5>
          <ul className="flex text-functional-warning">
            <li>
              <EmptyStar />
            </li>
            <li>
              <EmptyStar />
            </li>
            <li>
              <EmptyStar />
            </li>
            <li>
              <EmptyStar />
            </li>
            <li>
              <EmptyStar />
            </li>
          </ul>
          <textarea className="border"></textarea>
        </section>
        <Button type="secondary" size="small" hasText="yes" text="Publicar" />
      </section>
      <section>
        <h6>Comentarios</h6>
        <ul>
          {listing.comments?.map((comment) => (
            <li key={comment}>
              <article>
                <section>
                  <figure>
                    <img src={user?.avatar_url ?? ''} alt="" />
                  </figure>
                  <section>
                    <h4>{user?.name}</h4>
                    <ul className="flex text-functional-warning">
                      <li>
                        <EmptyStar />
                      </li>
                      <li>
                        <EmptyStar />
                      </li>
                      <li>
                        <EmptyStar />
                      </li>
                      <li>
                        <EmptyStar />
                      </li>
                      <li>
                        <EmptyStar />
                      </li>
                    </ul>
                  </section>
                </section>
                <section>
                  <p>{comment}</p>
                  <button>Responder</button>
                </section>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}
