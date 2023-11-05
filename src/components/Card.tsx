import FillStar from '@/svg/FillStar'
import Button from './Button'

export default function Card(Props: {
  photo: string | undefined
  title: string | null
  name: string | null | undefined
  rating: number | null
  price: number | null
}) {
  const { photo, title, name, rating, price } = Props

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-neutral-main-bg shadow-md">
      <figure>
        <img src={photo} alt="" />
      </figure>
      <section className="flex flex-col gap-4 p-4">
        <section className="flex flex-col gap-1">
          <h3 className="text-paragraph-regular font-semibold text-neutral-title">
            {title}
          </h3>
          <p className="text-paragraph-small text-neutral-title">{name}</p>
          {rating === null ? (
            <p className="text-paragraph-regular leading-4 text-neutral-title">
              No hay valoraciones
            </p>
          ) : (
            <section className="flex items-center">
              <p className="text-paragraph-regular leading-4 text-neutral-title">
                {rating}
              </p>
              <FillStar />
            </section>
          )}
        </section>
        <section className="flex items-center justify-between">
          <p className="text-paragraph-regular font-semibold text-neutral-title">
            ${price}/mes
          </p>
          <Button
            type="primary"
            size="small"
            hasText="yes"
            text="Ver detalles"
          />
        </section>
      </section>
    </article>
  )
}
