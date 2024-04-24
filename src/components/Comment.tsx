import Rating from './Rating'

export default function Comment(Props: {
  id: string
  avatarUrl: string
  name: string
  rating: number
  message: string
  action?: any
}) {
  const { avatarUrl, name, rating, message } = Props

  return (
    <li>
      <article className="flex flex-col gap-2 bg-neutral-active p-4">
        <section className="flex gap-2">
          <figure className="flex h-10 w-10 overflow-hidden rounded-3xl">
            <img
              className="h-full w-full object-cover"
              src={avatarUrl ?? '/no-image.jpg'}
              alt={`Foto de perfil de ${name}`}
            />
          </figure>
          <section className="flex flex-col">
            <h4 className="text-paragraph-small font-medium text-neutral-title">
              {name}
            </h4>
            <Rating numberOfStars={rating} />
          </section>
        </section>

        {message !== '' && (
          <section className="flex flex-col gap-1">
            <p className="text-paragraph-small font-normal text-neutral-paragraph lg:max-w-prose">
              {message}
            </p>
          </section>
        )}
      </article>
    </li>
  )
}
