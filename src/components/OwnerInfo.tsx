import { Image } from '@/components/Image'
import { STORAGE_URL } from '@/lib/config'
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
          <figure className="flex size-12 overflow-hidden rounded-3xl">
            <Image
              src={`${STORAGE_URL}photos-listings/${photo}`}
              alt="Foto de perfil"
              className="size-full object-cover"
              fallbackSrc={`${photo}`}
            />
          </figure>
          <section className="flex flex-col">
            <Link href={`/profile/${idOwner}`}>
              <h4 className="text-paragraph-regular font-medium text-neutral-paragraph hover:underline sm:w-max">
                {name ?? 'Nombre del propietario'}
              </h4>
            </Link>
            <small className="text-paragraph-xsmall font-normal text-neutral-paragraph">
              Propietario
            </small>
          </section>
        </section>

        {currentOwner ? (
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
        ) : (
          <a
            href={link}
            className="box-border flex w-full items-center justify-center gap-1 rounded-lg border-2 border-solid border-transparent bg-secondary-default px-6 py-2 text-paragraph-small leading-none text-neutral-main-bg outline-none hover:bg-secondary-hover active:bg-secondary-active disabled:bg-secondary-disabled"
          >
            {textButton}
          </a>
        )}
      </article>
    </section>
  )
}
