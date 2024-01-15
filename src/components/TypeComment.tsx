import Rating from './Rating'
import Button from './Button'

export default function TypeComment() {
  return (
    <section>
      <section>
        <h5>Dejar un comentario</h5>
        <Rating />
        <textarea className="border"></textarea>
      </section>
      <Button type="secondary" size="small" hasText="yes" text="Publicar" />
    </section>
  )
}
