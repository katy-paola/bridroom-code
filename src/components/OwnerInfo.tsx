import IconUser from '@/svg/IconUser'
import { type User } from '@/types/types'
import Link from 'next/link'
import Button from './Button'

export default function OwnerInfo(Props: {
  photo: string | null | undefined
  name: string | null | undefined
  contact: number | undefined
  idOwner: string | undefined
  currentUser?: User
}) {
  const { photo, name, contact, idOwner, currentUser } = Props

  const isOwner = currentUser?.role === 'owner'
  const currentOwner = isOwner && currentUser?.id === idOwner
  const link = currentOwner ? `/profile/${idOwner}` : `tel:+57${contact}`
  const textButton = currentOwner ? 'Mi perfil' : 'Contactar'

  return (
    <section className="p-4 xs:px-8 sm:p-0">
      <article className="flex flex-col gap-10 rounded-lg bg-neutral-secondary-bg p-2 shadow-md xs:p-4">
        <section className="flex items-center gap-2">
          <figure className="flex h-12 w-12 overflow-hidden rounded-3xl">
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
            variant="secondary"
            size="small"
            hasText="yes"
            text={textButton}
            iconLeft={currentOwner ? <IconUser /> : undefined}
            width="w-full"
          />
        </Link>
      </article>
    </section>
  )
}
