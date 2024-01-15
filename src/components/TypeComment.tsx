import Rating from './Rating'
import Button from './Button'

export default function TypeComment() {
  return (
    <section className="flex flex-col items-end gap-4 bg-neutral-secondary-bg p-4">
      <section className="flex w-full flex-col gap-2">
        <h5 className="text-paragraph-regular font-medium text-neutral-title">
          Dejar un comentario
        </h5>
        <Rating />
        <textarea className="h-10 border border-solid border-neutral-paragraph bg-transparent p-2 text-paragraph-small outline-none"></textarea>
      </section>
      <Button
        type="secondary"
        size="small"
        hasText="yes"
        text="Publicar"
        width="w-max"
      />
    </section>
  )
}
