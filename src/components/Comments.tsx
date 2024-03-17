import Rating from './Rating'

export default function Comments(Props: {
  isOwner: boolean
  comments: string[] | null
  userName: string | null | undefined
  photo: string | null | undefined
}) {
  const { isOwner, comments, userName, photo } = Props
  return (
    <section
      className={`flex flex-col gap-4 overflow-auto p-4 xs:px-8 sm:p-0 ${
        isOwner && 'flex-1'
      } ${isOwner ? 'lg:max-h-[360px]' : 'lg:max-h-60'}`}
    >
      <h6 className="text-paragraph-regular font-normal text-neutral-title">
        Comentarios
      </h6>
      <ul className="flex flex-col gap-4">
        {comments?.map((comment, index) => (
          <div key={index} className="flex flex-col gap-4">
            <li>
              <article className="flex flex-col gap-2 bg-neutral-active p-2">
                <section className="flex gap-2">
                  <figure className="flex h-10 w-10 overflow-hidden rounded-3xl">
                    <img
                      className="h-full w-full object-cover"
                      src={photo ?? '/no-image.jpg'}
                      alt=""
                    />
                  </figure>
                  <section className="flex flex-col">
                    <h4 className="text-paragraph-small font-medium text-neutral-title">
                      {userName}
                    </h4>
                    <Rating />
                  </section>
                </section>
                <section className="flex flex-col gap-1">
                  <p className="text-paragraph-small font-normal text-neutral-paragraph lg:max-w-paragraph">
                    {comment}
                  </p>
                  <button className="self-end text-paragraph-xsmall font-normal text-neutral-paragraph underline">
                    Responder
                  </button>
                </section>
              </article>
            </li>
            <li>
              <article className="flex flex-col gap-2 bg-neutral-active p-2">
                <section className="flex gap-2">
                  <figure className="flex h-10 w-10 overflow-hidden rounded-3xl">
                    <img
                      className="h-full w-full object-cover"
                      src={photo ?? '/no-image.jpg'}
                      alt=""
                    />
                  </figure>
                  <section className="flex flex-col">
                    <h4 className="text-paragraph-small font-medium text-neutral-title">
                      {userName}
                    </h4>
                    <Rating />
                  </section>
                </section>
                <section className="flex flex-col gap-1">
                  <p className="text-paragraph-small font-normal text-neutral-paragraph lg:max-w-paragraph">
                    {comment}
                  </p>
                  <button className="self-end text-paragraph-xsmall font-normal text-neutral-paragraph underline">
                    Responder
                  </button>
                </section>
              </article>
            </li>
          </div>
        ))}
      </ul>
    </section>
  )
}
