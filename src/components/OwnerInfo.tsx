import Link from 'next/link'
import Button from './Button'
import { getProfileCurrentUser } from '@/services/user'

export default async function OwnerInfo(Props: {
  photo: string | null | undefined
  name: string | null | undefined
  contact: number | undefined
  idOwner: string | undefined
}) {
  const { photo, name, contact, idOwner } = Props

  const currentUser = await getProfileCurrentUser()
  const isOwner = currentUser?.role === 'owner'
  const currentOwner = isOwner && currentUser?.id === idOwner
  const link = currentOwner ? `/profile/${idOwner}` : `tel:+57${contact}`
  const textButton = currentOwner ? 'Mi perfil' : 'Contactar'

  return (
    <section className="p-4 xs:px-8 sm:p-0">
      <article className="flex flex-col gap-4 rounded-lg bg-neutral-secondary-bg p-2 shadow-md xs:p-4">
        <section className="flex gap-2">
          <figure className="flex h-10 w-10 overflow-hidden rounded-3xl">
            <img
              className="h-full w-full object-cover"
              src={photo ?? '/no-image.jpg'}
              alt="Foto del propietario"
            />
          </figure>
          <section className="flex flex-col">
            <Link href={`/profile/${idOwner}`}>
              <h4 className="text-paragraph-regular font-medium text-neutral-paragraph hover:underline sm:w-max">
                {name}
              </h4>
            </Link>
            <small className="text-paragraph-xsmall font-normal text-neutral-paragraph">
              Propietario
            </small>
          </section>
        </section>
        <Link href={link}>
          <Button
            type="secondary"
            size="small"
            hasText="yes"
            text={textButton}
            width="w-full"
          />
        </Link>
      </article>
    </section>
  )
}
