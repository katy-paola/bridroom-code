'use server'

import { createClient } from '@/lib/supabase/server'
import { getListingById } from '@/services/listing'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const insertComment = async ({
  formData,
  listingId,
}: {
  formData: FormData
  listingId: string
}) => {
  const message = formData.get('message') as string
  const rating = formData.get('rating') as string

  const listing = await getListingById(listingId)
  let totalRating = listing?.rating

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const user = await supabase.auth.getUser()

  if (user.error !== null) {
    return redirect(
      '/add-boarding?message=You must be logged in to comment&error=true',
    )
  }
  const { error: errorInsert } = await supabase.from('comments').insert({
    user_id: user.data.user?.id,
    listing_id: listingId,
    message,
    rating: parseFloat(rating),
  })

  const { data, error: errorSelect } = await supabase
    .from('comments')
    .select('rating')
    .eq('listing_id', listingId)

  if (errorSelect !== null) {
    return redirect(
      `/house/${listingId}?message=Hubo un error al actualizar la calificación`,
    )
  }

  totalRating =
    data.length > 0
      ? data.reduce((acc, curr) => acc + curr.rating, 0) / data.length
      : null

  const { error: errorUpdate } = await supabase
    .from('listings')
    .update({
      rating: totalRating,
    })
    .eq('id', listingId)

  if (errorUpdate !== null) {
    return redirect(
      `/house/${listingId}?message=Hubo un error al publicar tu comentario`,
    )
  }

  if (errorInsert !== null) {
    return redirect(
      `/house/${listingId}?message=Hubo un error al publicar tu comentario`,
    )
  }

  return redirect(`/house/${listingId}?message=Comentario publicado`)
}
