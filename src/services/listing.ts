import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export const getAllListings = async ({
  price = undefined,
  search = undefined,
}: {
  price?: number
  search?: string
}) => {
  const cookieStore = cookies()

  const supabase = createClient(cookieStore)

  const { data } = await supabase
    .from('listings')
    .select('*, owner:profiles(*)')

  if (data === null) return []

  if (price === undefined && search === undefined) return data

  if (search !== undefined) {
    return data.filter((listing) =>
      listing.title.toLowerCase().includes(search.toLowerCase()),
    )
  }

  if (price === undefined) return data

  return data.filter((listing: any) => listing.price <= price)
}

export const getFavoriteListings = async () => {
  const cookieStore = cookies()

  const supabase = createClient(cookieStore)

  const { data: dataSession } = await supabase.auth.getSession()

  if (dataSession === null) return []
  if (dataSession.session === null) return []

  const { data } = await supabase
    .from('favorites')
    .select('listings(*)')
    .eq('user_id', dataSession.session?.user.id)

  if (data === null) return []

  const listings = data.map((favorite: any) => favorite.listings)

  return listings
}

export const getListingById = async (id: string) => {
  const cookieStore = cookies()

  const supabase = createClient(cookieStore)

  const { data } = await supabase
    .from('listings')
    .select('*, owner:profiles(*)')
    .eq('id', id)
    .single()

  return data
}
