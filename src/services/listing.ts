import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export const getAllListings = async ({
  price = undefined,
  search = undefined,
  role = 'student',
  idCurrentUser = '',
}: {
  price?: number
  search?: string
  role?: string
  idCurrentUser?: string
}) => {
  const cookieStore = cookies()

  const supabase = createClient(cookieStore)

  const { data } = await supabase
    .from('listings')
    .select('*, owner:profiles(*)')

  if (data === null) return []

  if (price === 0 && search === undefined) return data

  const normalizeString = (str: string) =>
    str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()

  let tempData = data

  if (search !== undefined) {
    const normalizedSearch = normalizeString(search)
    tempData = tempData.filter(
      (listing) =>
        normalizeString(listing.title).includes(normalizedSearch) ||
        normalizeString(listing.description).includes(normalizedSearch) ||
        normalizeString(listing.location.neigh ?? '').includes(
          normalizedSearch,
        ),
    )
  }

  if (price !== undefined) {
    tempData = tempData.filter((listing: any) => listing.price <= price)
  }

  if (role === 'owner') {
    if (idCurrentUser === '') return []

    tempData = tempData.filter((listing) => idCurrentUser === listing.user_id)
  }

  // Ordenar los resultados por precio ascendente
  tempData.sort((a, b) => a.price - b.price)

  return tempData
}

export const getFavoriteListings = async () => {
  const cookieStore = cookies()

  const supabase = createClient(cookieStore)

  const { data: dataSession } = await supabase.auth.getSession()

  if (dataSession === null) return []
  if (dataSession.session === null) return []

  const { data } = await supabase
    .from('favorites')
    .select('listings(*, owner:profiles(*))')
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
