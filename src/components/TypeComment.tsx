import { createClient } from '@/lib/supabase/server'
import { getListingById } from '@/services/listing'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Button from './Button'
import Rating from './Rating'

export default function TypeComment({ listingId }: { listingId: string }) {
  const insertComment = async (formData: FormData) => {
    'use server'
    const message = formData.get('message') as string
    const rating = formData.get('rating') as string

    const listing = await getListingById(listingId)

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const user = await supabase.auth.getUser()

    if (user.error !== null) {
      return redirect(
        '/add-boarding?message=You must be logged in to comment&error=true',
      )
    }
    const { error } = await supabase.from('comments').insert({
      user_id: user.data.user?.id,
      listing_id: listingId,
      message,
      rating: parseFloat(rating),
    })

    const { error: errorUpdate } = await supabase
      .from('listings')
      .update({
        rating:
          (parseFloat(rating) + (listing?.rating ?? parseFloat(rating))) / 2,
      })
      .eq('id', listingId)

    if (errorUpdate !== null) {
      return redirect(
        `/house/${listingId}?message=Hubo un error al publicar tu comentario`,
      )
    }

    if (error !== null) {
      return redirect(
        `/house/${listingId}?message=Hubo un error al publicar tu comentario`,
      )
    }

    return redirect(`/house/${listingId}?message=Comentario publicado`)
  }

  return (
    <section className="flex flex-col items-end gap-4 bg-neutral-active px-4 py-8 xs:px-8 lg:h-fit lg:flex-1">
      <form className="contents" action={insertComment}>
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
