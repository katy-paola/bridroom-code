import { getListingById } from '@/services/listing'
import { redirect } from 'next/navigation'
import CardDetails from '@/components/CardDetails'
import { getProfileCurrentUser } from '@/services/user'
import EmptyStar from '@/svg/EmptyStar'
import BoardingHeader from '@/components/BoardingHeader'
import OwnerInfo from '@/components/OwnerInfo'
import TypeComment from '@/components/TypeComment'

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
      <OwnerInfo
        photo={listing.owner?.avatar_url}
        userName={listing.owner?.name}
        contact={listing.owner?.contact}
      />
      <TypeComment />
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
