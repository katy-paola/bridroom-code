import Button from '@/components/Button'
import CardProfile from '@/components/CardProfile'
import { Image } from '@/components/Image'
import { STORAGE_URL } from '@/lib/config'
import { getAllListings, getFavoriteListings } from '@/services/listing'
import { getProfileCurrentUser, getUserById } from '@/services/user'
import ImgEmptyFavorites from '@/svg/ImgEmptyFavorites'
import ImgFavorites from '@/svg/ImgFavorites'
import Link from 'next/link'

export default async function Profile({ params }: { params: { id: string } }) {
  const { id } = params

  let listings = []

  const userProfile = await getUserById(id)

  if (userProfile?.role === 'student') {
    listings = await getFavoriteListings()
  } else {
    const role = userProfile?.role
    listings = await getAllListings({
      role,
      idCurrentUser: userProfile?.id,
    })
  }

  const currentUser = await getProfileCurrentUser()

  return (
    <section className="mt-14 flex w-full flex-col md:mt-16">
      <section className="flex flex-col justify-between gap-8 bg-profile bg-contain bg-center bg-no-repeat p-4 pb-8 xs:p-8 sm:px-44 md:px-72 lg:flex-row lg:px-36 lg:py-10 xl:px-40">
        <section className="flex flex-1 flex-col gap-8 rounded-xl bg-opacity  p-4 shadow-md backdrop-blur-10 lg:rounded-3xl">
          <section className="flex flex-col gap-4">
            <header className="flex items-center gap-4">
              <figure className="size-14 lg:hidden">
                <Image
                  src={`${STORAGE_URL}photos-listings/${userProfile?.avatar_url}`}
                  alt="Foto de perfil"
                  className="size-full rounded-full object-cover"
                  fallbackSrc="/no-image.jpg"
                />
              </figure>
              <section className="flex flex-col">
                <h3 className="text-paragraph-medium font-medium text-neutral-title lg:text-paragraph-xlarge">
                  {userProfile?.name ?? userProfile?.email}
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
                variant="secondary"
                size="small"
                hasText="yes"
                text="Editar perfil"
                width="w-auto"
              />
            </Link>
          )}
        </section>
        <figure className="hidden size-96 lg:block">
          <Image
            src={`${STORAGE_URL}photos-listings/${userProfile?.avatar_url}`}
            alt="Foto de perfil"
            className="size-full rounded-3xl object-cover"
            fallbackSrc="/no-image.jpg"
          />
        </figure>
      </section>
      <section className="flex flex-col gap-8 bg-neutral-secondary-bg px-4 py-8 xs:p-8 sm:px-44 md:px-72 lg:px-36 xl:px-40">
        <h3 className="text-paragraph-regular font-medium text-neutral-title md:text-paragraph-medium">
          {userProfile?.role === 'student'
            ? 'Pensiones guardadas'
            : 'Pensiones publicadas'}
        </h3>
        {listings.length !== 0 && (
          <figure className="w-72 self-center lg:hidden">
            <ImgFavorites />
          </figure>
        )}

        <ul className="flex w-full snap-x snap-mandatory gap-2 overflow-x-scroll py-2 sm:snap-none sm:flex-col sm:gap-6 sm:overflow-visible lg:grid lg:grid-cols-auto-fill lg:grid-rows-auto-fit">
          {listings?.length === 0 && (
            <div className="flex flex-col gap-5">
              <p className="text-paragraph-small font-normal text-neutral-paragraph md:text-paragraph-regular">
                {userProfile?.role === 'student'
                  ? 'Actualmente no hay pensiones guardadas.'
                  : 'Actualmente no hay pensiones publicadas.'}
              </p>
              <figure className="w-72 self-center">
                <ImgEmptyFavorites />
              </figure>
            </div>
          )}

          {listings?.map((listing) => (
            <li className="flex w-full" key={listing.id}>
              <CardProfile
                photo={listing.photos?.[0]}
                id={listing.id}
                title={listing.title}
                ownerName={listing.owner?.name ?? ''}
                rating={listing.rating}
                price={listing.price}
                role={currentUser?.role}
              />
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}
