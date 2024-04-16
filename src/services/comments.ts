import { createClient } from '@/lib/supabase/server'
import { type Tables } from '@/types/database.types'
import { cookies } from 'next/headers'

export type Comment = Tables<'comments'> & {
  profiles: Tables<'profiles'>
}

// obtenemos los comentarios de cada pensión de la tabla de comentarios que se llama comments
export const getComments = async (id: string): Promise<Comment[] | null> => {
  const cookieStore = cookies()

  const supabase = createClient(cookieStore)

  const { data } = await supabase
    .from('comments')
    .select('*, profiles(*)')
    .eq('listing_id', id)

  return data as Comment[]
}
