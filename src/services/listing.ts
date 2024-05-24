import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export const getAllListings = async () => {
  const cookieStore = cookies()

  const supabase = createClient(cookieStore)

  const { data } = await supabase
    .from('listings')
    .select('*, owner:profiles(*)')

  return data
}

export const getFavoriteListings = async () => {
  const cookieStore = cookies()

  const supabase = createClient(cookieStore)

  const { data } = await supabase.from('favorites').select('listings(*)')

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
