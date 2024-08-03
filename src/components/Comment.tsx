import { Image } from '@/components/Image'
import { STORAGE_URL } from '@/lib/config'
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
            <Image
              src={`${STORAGE_URL}photos-listings/${avatarUrl}`}
              alt="Foto de perfil"
              className="size-full object-cover"
              fallbackSrc="/no-image.jpg"
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
