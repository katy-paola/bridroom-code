import Button from '@/components/Button'
import { getProfileCurrentUser, getUserById } from '@/services/user'
import { getAllListings } from '@/services/listing'
import ImgFavorites from '@/svg/ImgFavorites'
import ImgEmptyFavorites from '@/svg/ImgEmptyFavorites'
import Link from 'next/link'
import CardProfile from '@/components/CardProfile'

export default async function Profile({ params }: { params: { id: string } }) {
  const { id } = params
  const userProfile = await getUserById(id)
  const listings = await getAllListings()
  const currentUser = await getProfileCurrentUser()
  const favoritePensions = true

  return (
    <section className="mt-14 flex w-full flex-col md:mt-16">
      <section className="flex flex-col justify-between gap-8 p-4 pb-8 xs:p-8 sm:px-44 md:px-72 lg:flex-row lg:px-36 lg:py-10 xl:px-40">
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
                <h3 className="text-paragraph-medium font-medium text-neutral-title lg:text-paragraph-xlarge">
                  {userProfile?.name}
                </h3>
                <small className="text-paragraph-small font-normal text-neutral-title lg:text-paragraph-regular">
                  {userProfile?.role === 'student'
                    ? 'Estudiante'
                    : 'Propietario'}
                </small>
              </section>
            </header>
            <p className="max-w-lg text-paragraph-small font-normal text-neutral-paragraph lg:max-w-xl lg:text-paragraph-regular">
              {userProfile?.about}
            </p>
            <p className="text-paragraph-small font-normal text-neutral-paragraph lg:text-paragraph-regular">
              {userProfile?.university}
            </p>
            <a
              className="text-paragraph-small font-normal text-neutral-paragraph underline lg:text-paragraph-regular"
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
      <section className="flex flex-col gap-8 bg-neutral-secondary-bg px-4 py-8 xs:p-8 sm:px-44 md:px-72 lg:px-36 xl:px-40">
        <h3 className="text-paragraph-regular font-medium text-neutral-title md:text-paragraph-medium">
          {userProfile?.role === 'student'
            ? 'Pensiones guardadas'
            : 'Pensiones publicadas'}
        </h3>
        {!favoritePensions ? (
          <>
            <p className="text-paragraph-small font-normal text-neutral-paragraph md:text-paragraph-regular">
              {userProfile?.role === 'student'
                ? 'Actualmente no tienes pensiones guardadas.'
                : 'Actualmente no tienes pensiones publicadas.'}
            </p>
            <figure className="w-72 self-center">
              <ImgEmptyFavorites />
            </figure>
          </>
        ) : (
          <>
            <figure className="w-72 self-center lg:hidden">
              <ImgFavorites />
            </figure>

            <ul className="flex w-full snap-x snap-mandatory gap-2 overflow-x-scroll py-2 sm:snap-none sm:flex-col sm:overflow-visible lg:flex-row lg:flex-wrap">
              {listings?.map((listing) => (
                <li className="w-full lg:w-auto" key={listing.id}>
                  <CardProfile
                    photo={listing.photos?.[0]}
                    id={listing.id}
                    title={listing.title}
                    ownerName={listing.owner?.name ?? ''}
                    rating={listing.rating}
                    price={listing.price}
                  />
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </section>
  )
}
