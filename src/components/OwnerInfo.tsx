import Button from './Button'

export default function OwnerInfo(Props: {
  photo: string | null | undefined
  userName: string | null | undefined
  contact: number | undefined
}) {
  const { photo, userName, contact } = Props
  return (
    <section className="p-4">
      <article className="flex flex-col gap-4 rounded-lg bg-neutral-secondary-bg p-2 shadow-md">
        <section className="flex gap-2">
          <figure className="flex h-10 w-10 overflow-hidden rounded-3xl">
            <img
              className="h-full w-full object-cover"
              src={photo ?? '/no-image.jpg'}
              alt="Foto del propietario"
            />
          </figure>
          <section className="flex flex-col">
            <h4 className="text-paragraph-regular font-semibold text-neutral-title">
              {userName}
            </h4>
            <small className="text-paragraph-xsmall font-normal text-neutral-title">
              Propietario
            </small>
          </section>
        </section>
        <Button
          type="primary"
          size="regular"
          hasText="yes"
          text="Contactar"
          width="w-full"
          contact={contact}
        />
      </article>
    </section>
  )
}
