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
    <article>
      <figure>
        <img src={photo} alt="" />
      </figure>
      <section>
        <section>
          <h3>{title}</h3>
          <p>{name}</p>

          {rating === null ? (
            <p>No hay valoraciones</p>
          ) : (
            <section>
              <p>{rating}</p>
              <FillStar />
            </section>
          )}
        </section>
        <section>
          <p>${price}/mes</p>
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
