import Button from '@/components/Button'
import { getProfileCurrentUser } from '@/services/user'
import { getAllListings } from '@/services/listing'
import ImgFavorites from '@/svg/ImgFavorites'
import ImgEmptyFavorites from '@/svg/ImgEmptyFavorites'
import Link from 'next/link'

export default async function Profile() {
  const currentUser = await getProfileCurrentUser()
  const listings = await getAllListings()
  const source = currentUser?.avatar_url
  const name = currentUser?.name
  const role = currentUser?.role
  const about = currentUser?.about
  const university = currentUser?.university
  const email = currentUser?.email
  const favoritePensions = true

  return (
    <section className="flex w-full flex-col pt-14">
      <section>
        <section className="flex flex-col">
          <header>
            <figure>
              <img className="w-10" src={source ?? '/no-image.jpg'} alt="" />
            </figure>
            <section>
              <h3>{name}</h3>
              <small>{role}</small>
            </section>
          </header>
          <p>{about}</p>
          <p>{university}</p>
          <a href={`mailto:${email}`}>{email ?? ''}</a>
        </section>
        <Link href="/profile/edit">
          <Button
            type="secondary"
            size="small"
            hasText="yes"
            text="Editar perfil"
            width="w-auto"
          />
        </Link>
      </section>
      <section>
        <h3>Pensiones favoritas</h3>
        {!favoritePensions ? (
          <section>
            <p>Actualmente no tienes pensiones guardadas.</p>
            <ImgEmptyFavorites />
          </section>
        ) : (
          <section>
            <ImgFavorites />
            <ul className="flex">
              {listings?.map((listing) => (
                <li className="flex-1" key={listing.id}>
                  <figure className="flex">
                    <img
                      className="w-32"
                      src={listing.photos?.[0] ?? '/no-image.jpg'}
                      alt=""
                    />
                  </figure>
                  <section className="w-max">
                    <a href={`/house/${listing.id}`}>Ver más...</a>
                  </section>
                </li>
              ))}
            </ul>
          </section>
        )}
      </section>
    </section>
  )
}
