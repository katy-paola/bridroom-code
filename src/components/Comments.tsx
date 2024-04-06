'use client'
import { useEffect, useState } from 'react'
import Rating from './Rating'
import Button from './Button'

export default function Comments(Props: {
  isOwner: boolean
  comments: any[]
  userName: string | null | undefined
  photo: string | null | undefined
}) {
  const { isOwner, comments, userName, photo } = Props
  const [showInput, setShowInput] = useState(-1)
  useEffect(() => {
    console.log('comments', comments)
    console.log('userName', userName)
  })
  return (
    <section
      className={`flex flex-col gap-4 p-4 xs:px-8 sm:p-0 ${
        !isOwner && 'lg:pb-8'
      } ${isOwner ? 'flex-1' : 'md:max-w-sm'} ${
        isOwner ? 'lg:max-h-[360px]' : 'lg:max-h-60'
      }`}
    >
      <h6 className="text-paragraph-regular font-normal text-neutral-title">
        Comentarios
      </h6>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h4>Este es el usuario {comment.user_id.name}</h4>
            <Rating />
            <p>{comment.comment}</p>
          </li>
        ))}
      </ul>
      <ul className="custom-scrollbar relative flex flex-col gap-4 overflow-y-auto lg:pr-2">
        {comments?.map((comment, index) => (
          <div key={index} className="flex flex-col gap-4">
            <li>
              <article className="flex flex-col gap-2 bg-neutral-active p-4">
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
                  <p className="text-paragraph-small font-normal text-neutral-paragraph lg:max-w-prose">
                    {comment}
                  </p>
                  <button
                    id={`comment-${index + 1}`}
                    onClick={() => {
                      console.log('showInput', showInput)
                      setShowInput(index + 1)
                    }}
                    className="self-end text-paragraph-xsmall font-normal text-neutral-paragraph underline"
                  >
                    Responder
                  </button>
                  {showInput === index + 1 && (
                    <section className="flex flex-col items-end gap-2">
                      <textarea
                        className="flex h-10 resize-none items-center self-stretch border border-solid border-neutral-paragraph bg-transparent p-2 text-paragraph-small outline-none sm:h-16"
                        placeholder="Escribe tu respuesta..."
                        required
                      ></textarea>
                      <Button
                        variant="cuaternary"
                        size="small"
                        hasText="yes"
                        text="Publicar"
                        width="w-max"
                        onClick={() => {
                          setShowInput(-1)
                        }}
                      />
                    </section>
                  )}
                </section>
              </article>
            </li>
            <li>
              <article className="flex flex-col gap-2 bg-neutral-active p-4">
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
                  <p className="text-paragraph-small font-normal text-neutral-paragraph lg:max-w-prose">
                    {comment}
                  </p>
                  <button
                    id={`comment-${index + 2}`}
                    className="self-end text-paragraph-xsmall font-normal text-neutral-paragraph underline"
                  >
                    Responder
                  </button>
                  {showInput === index + 2 && (
                    <section className="flex flex-col items-end gap-2">
                      <textarea
                        className="flex h-10 resize-none items-center self-stretch border border-solid border-neutral-paragraph bg-transparent p-2 text-paragraph-small outline-none sm:h-16"
                        placeholder="Escribe tu respuesta..."
                        required
                      ></textarea>
                      <Button
                        variant="cuaternary"
                        size="small"
                        hasText="yes"
                        text="Publicar"
                        width="w-max"
                        onClick={() => {
                          setShowInput(-1)
                        }}
                      />
                    </section>
                  )}
                </section>
              </article>
            </li>
            <li>
              <article className="flex flex-col gap-2 bg-neutral-active p-4">
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
                  <p className="text-paragraph-small font-normal text-neutral-paragraph lg:max-w-prose">
                    {comment}
                  </p>
                  <button
                    id={`comment-${index + 3}`}
                    onClick={() => {
                      console.log('showInput', showInput)
                    }}
                    className="self-end text-paragraph-xsmall font-normal text-neutral-paragraph underline"
                  >
                    Responder
                  </button>
                  {showInput === index + 3 && (
                    <section className="flex flex-col items-end gap-2">
                      <textarea
                        className="flex h-10 resize-none items-center self-stretch border border-solid border-neutral-paragraph bg-transparent p-2 text-paragraph-small outline-none sm:h-16"
                        placeholder="Escribe tu respuesta..."
                        required
                      ></textarea>
                      <Button
                        variant="cuaternary"
                        size="small"
                        hasText="yes"
                        text="Publicar"
                        width="w-max"
                        onClick={() => {
                          setShowInput(-1)
                        }}
                      />
                    </section>
                  )}
                </section>
              </article>
            </li>
          </div>
        ))}
      </ul>
    </section>
  )
}
