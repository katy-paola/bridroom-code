'use client'

import { useState } from 'react'
import Button from './Button'
import Rating from './Rating'

export default function Comment(Props: {
  id: string
  avatarUrl: string
  name: string
  rating: number
  message: string
}) {
  const { avatarUrl, name, rating, message, id } = Props
  const [showInput, setShowInput] = useState(false)

  return (
    <li>
      <article className="flex flex-col gap-2 bg-neutral-active p-4">
        <section className="flex gap-2">
          <figure className="flex h-10 w-10 overflow-hidden rounded-3xl">
            <img
              className="h-full w-full object-cover"
              src={avatarUrl ?? '/no-image.jpg'}
              alt={`Foto de perfil de ${name}`}
            />
          </figure>
          <section className="flex flex-col">
            <h4 className="text-paragraph-small font-medium text-neutral-title">
              {name}
            </h4>
            <Rating numberOfStars={rating} />
          </section>
        </section>

        {message !== '' && (
          <section className="flex flex-col gap-1">
            <p className="text-paragraph-small font-normal text-neutral-paragraph lg:max-w-prose">
              {message}
            </p>
            <button
              id={`comment-${id}`}
              onClick={() => {
                setShowInput((prev) => !prev)
              }}
              className="self-end text-paragraph-xsmall font-normal text-neutral-paragraph underline"
            >
              Responder
            </button>
            {showInput && (
              <form className="flex flex-col items-end gap-2">
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
                    setShowInput(false)
                  }}
                />
              </form>
            )}
          </section>
        )}
      </article>
    </li>
  )
}
