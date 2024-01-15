import Button from './Button'

export default function OwnerInfo(Props: {
  photo: string | null | undefined
  userName: string | null | undefined
  contact: number | undefined
}) {
  const { photo, userName, contact } = Props
  return (
    <section>
      <article>
        <section>
          <figure>
            <img src={photo ?? '/no-image.png'} alt="Foto del propietario" />
          </figure>
          <section>
            <h4>{userName}</h4>
            <small>Propietario</small>
          </section>
        </section>
        <Button
          type="primary"
          size="regular"
          hasText="yes"
          text="Contactar"
          contact={contact}
        />
      </article>
    </section>
  )
}
