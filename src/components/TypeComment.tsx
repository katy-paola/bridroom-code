import { createClient } from '@/lib/supabase/server'
import { getProfileCurrentUser } from '@/services/user'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Button from './Button'
import Rating from './Rating'

export default function TypeComment({ listingId }: { listingId: string }) {
  const insertComment = async (formData: FormData) => {
    'use server'
    const message = formData.get('message') as string

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const currentUser = await getProfileCurrentUser()

    const { error } = await supabase.from('comments').insert({
      user_id: currentUser?.id,
      listing_id: listingId,
      message,
      rating: 5,
    })

    if (error !== null) {
      return redirect(`/login?message=${error.message}&error=true`)
    }

    return redirect('/?message=Welcome back!')
  }

  return (
    <section className="flex flex-col items-end gap-4 bg-neutral-active px-4 py-8 xs:px-8 lg:h-fit lg:flex-1">
      <form className="contents" action={insertComment}>
        <section className="flex w-full flex-col gap-2">
          <h5 className="text-paragraph-regular font-medium text-neutral-title">
            Dejar un comentario
          </h5>
          <Rating />
          <textarea
            className="h-10 resize-none border border-solid border-neutral-paragraph bg-transparent p-2 text-paragraph-small outline-none sm:h-16"
            name="message"
            required
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
