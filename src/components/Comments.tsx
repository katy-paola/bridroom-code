'use client'

import { useState } from 'react'
import Rating from './Rating'
import Button from './Button'
import { type Comment } from '@/services/comments'

export default function Comments(Props: {
  isOwner: boolean
  comments: Comment[] | null
}) {
  const { isOwner, comments } = Props
  const [showInput, setShowInput] = useState(-1)

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
      <ul className="custom-scrollbar relative flex flex-col gap-4 overflow-y-auto lg:pr-2">
        {comments?.map((comment, index) => (
          <div key={index} className="flex flex-col gap-4">
            <li>
              <article className="flex flex-col gap-2 bg-neutral-active p-4">
                <section className="flex gap-2">
                  <figure className="flex h-10 w-10 overflow-hidden rounded-3xl">
                    <img
                      className="h-full w-full object-cover"
                      src={comment.profiles.avatar_url ?? '/no-image.jpg'}
                      alt=""
                    />
                  </figure>
                  <section className="flex flex-col">
                    <h4 className="text-paragraph-small font-medium text-neutral-title">
                      {comment.profiles.name}
                    </h4>
                    <Rating numberOfStars={comment.rating} />
                  </section>
                </section>
                <section className="flex flex-col gap-1">
                  <p className="text-paragraph-small font-normal text-neutral-paragraph lg:max-w-prose">
                    {comment.message}
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
          </div>
        ))}
      </ul>
    </section>
  )
}
