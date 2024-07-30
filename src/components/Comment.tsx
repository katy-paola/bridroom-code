import Rating from './Rating'

export default function Comment(Props: {
  id: string
  avatarUrl: string
  name: string
  rating: number
  message: string
  action?: any
}) {
  const { id, avatarUrl, name, rating, message } = Props

  return (
    <li>
      <article className="flex flex-col gap-2 bg-neutral-active p-4">
        <section className="flex gap-2">
          <figure className="flex size-10 overflow-hidden rounded-3xl">
            <img
              className="size-full object-cover"
              src={avatarUrl ?? '/no-image.jpg'}
              alt={`Foto de perfil de ${name}`}
            />
          </figure>
          <section className="flex flex-col">
            <a href={`/profile/${id}`}>
              <h4 className="text-paragraph-small font-medium text-neutral-title">
                {name}
              </h4>
            </a>
            <Rating numberOfStars={rating} onlyRead />
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
