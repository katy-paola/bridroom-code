import Button from '@/components/Button'
import { getProfileCurrentUser, getUserById } from '@/services/user'
import { getAllListings } from '@/services/listing'
import ImgFavorites from '@/svg/ImgFavorites'
import ImgEmptyFavorites from '@/svg/ImgEmptyFavorites'
import Link from 'next/link'

export default async function Profile({ params }: { params: { id: string } }) {
  const { id } = params
  const userProfile = await getUserById(id)
  const listings = await getAllListings()
  const currentUser = await getProfileCurrentUser()
  const favoritePensions = true

  return (
    <section className="flex w-full flex-col pt-14 md:pt-[72px]">
      <section className="flex flex-col gap-8 p-4 pb-8 xs:p-8 sm:px-44 md:px-72 lg:flex-row lg:px-36 lg:py-10 xl:px-40">
        <section className="flex flex-col gap-8 ">
          <section className="flex flex-col gap-4">
            <header className="flex items-center gap-4">
              <figure className="h-14 w-14 lg:hidden">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src={userProfile?.avatar_url ?? '/no-image.jpg'}
                  alt=""
                />
              </figure>
              <section className="flex flex-col">
                <h3 className="text-paragraph-medium font-medium text-neutral-title">
                  {userProfile?.name}
                </h3>
                <small className="text-paragraph-small font-normal text-neutral-title">
                  {userProfile?.role === 'student'
                    ? 'Estudiante'
                    : 'Propietario'}
                </small>
              </section>
            </header>
            <p className="text-paragraph-small font-normal text-neutral-paragraph lg:max-w-xl">
              {userProfile?.about}
            </p>
            <p className="text-paragraph-small font-normal text-neutral-paragraph">
              {userProfile?.university}
            </p>
            <a
              className="text-paragraph-small font-normal text-neutral-paragraph underline"
              href={`mailto:${userProfile?.email}`}
            >
              {userProfile?.email ?? ''}
            </a>
          </section>
          {currentUser?.id === id && (
            <Link href={`/profile/${id}/edit`}>
              <Button
                type="secondary"
                size="small"
                hasText="yes"
                text="Editar perfil"
                width="w-auto"
              />
            </Link>
          )}
        </section>
        <figure className="hidden h-96 w-96 lg:block">
          <img
            className="h-full w-full object-cover"
            src={userProfile?.avatar_url ?? '/no-image.jpg'}
            alt=""
          />
        </figure>
      </section>
      <section className="flex flex-col gap-8 bg-neutral-secondary-bg px-4 py-8">
        <h3 className="text-paragraph-regular font-medium text-neutral-title">
          Pensiones favoritas
        </h3>
        {!favoritePensions ? (
          <>
            <p className="text-paragraph-small font-normal text-neutral-paragraph">
              Actualmente no tienes pensiones guardadas.
            </p>
            <figure className="w-72 self-center">
              <ImgEmptyFavorites />
            </figure>
          </>
        ) : (
          <>
            <figure className="w-72 self-center">
              <ImgFavorites />
            </figure>
            <ul className="flex w-full snap-x snap-mandatory gap-2 overflow-x-scroll py-2">
              {listings?.map((listing) => (
                <li
                  className="flex h-full flex-col rounded-lg bg-neutral-main-bg shadow-md"
                  key={listing.id}
                >
                  <figure className="flex h-20 w-32">
                    <img
                      className="h-full w-full rounded-t-lg object-cover"
                      src={listing.photos?.[0] ?? '/no-image.jpg'}
                      alt=""
                    />
                  </figure>
                  <section className="flex px-3 py-2">
                    <a
                      className="text-paragraph-small text-neutral-title underline"
                      href={`/house/${listing.id}`}
                    >
                      Ver más...
                    </a>
                  </section>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </section>
  )
}
