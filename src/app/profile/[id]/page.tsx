import Button from '@/components/Button'
import { getUserById } from '@/services/user'
import { getAllListings } from '@/services/listing'
import ImgFavorites from '@/svg/ImgFavorites'
import ImgEmptyFavorites from '@/svg/ImgEmptyFavorites'
import Link from 'next/link'

export default async function Profile({ params }: { params: { id: string } }) {
  const { id } = params
  const userProfile = await getUserById(id)
  const listings = await getAllListings()
  const favoritePensions = true

  return (
    <section className="flex w-full flex-col pt-14">
      <section>
        <section className="flex flex-col">
          <header>
            <figure>
              <img
                className="w-10"
                src={userProfile?.avatar_url ?? '/no-image.jpg'}
                alt=""
              />
            </figure>
            <section>
              <h3>{userProfile?.name}</h3>
              <small>{userProfile?.role}</small>
            </section>
          </header>
          <p>{userProfile?.about}</p>
          <p>{userProfile?.university}</p>
          <a href={`mailto:${userProfile?.email}`}>
            {userProfile?.email ?? ''}
          </a>
        </section>
        <Link href={`/profile/${id}/edit`}>
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
