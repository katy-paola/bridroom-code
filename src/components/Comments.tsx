import Rating from './Rating'

export default function Comments(Props: {
  comments: string[] | null
  userName: string | null | undefined
  photo: string | null | undefined
}) {
  const { comments, userName, photo } = Props
  return (
    <section>
      <h6>Comentarios</h6>
      <ul>
        {comments?.map((comment) => (
          <li key={comment}>
            <article>
              <section>
                <figure>
                  <img src={photo ?? ''} alt="" />
                </figure>
                <section>
                  <h4>{userName}</h4>
                  <Rating />
                </section>
              </section>
              <section>
                <p>{comment}</p>
                <button>Responder</button>
              </section>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
