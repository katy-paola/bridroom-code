'use client'

import { insertComment } from '@/app/house/actions/type-comment'
import { useRef } from 'react'
import Button from './Button'
import Rating from './Rating'

export default function TypeComment({ listingId }: { listingId: string }) {
  const ref = useRef<HTMLFormElement>(null)
  return (
    <section className="flex flex-col items-end gap-4 bg-neutral-active px-4 py-8 xs:px-8 lg:h-fit lg:flex-1">
      <form
        ref={ref}
        className="contents"
        action={async (formData) => {
          await insertComment({ formData, listingId })
          ref.current?.reset()
        }}
      >
        <section className="flex w-full flex-col gap-2">
          <h5 className="text-paragraph-regular font-medium text-neutral-title">
            Dejar un comentario
          </h5>
          <section className="w-max cursor-pointer">
            <Rating />
          </section>
          <textarea
            className="h-10 resize-none border border-solid border-neutral-paragraph bg-transparent p-2 text-paragraph-small outline-none sm:h-16"
            name="message"
            defaultValue=""
          ></textarea>
        </section>
        <Button
          variant="cuaternary"
          size="small"
          hasText="yes"
          text="Publicar"
          width="w-max"
          type="submit"
        />
      </form>
    </section>
  )
}
