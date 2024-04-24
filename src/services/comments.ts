import { createClient } from '@/lib/supabase/server'
import { type Tables } from '@/types/database.types'
import { cookies } from 'next/headers'

export type TComment = Tables<'comments'> & {
  profiles: Tables<'profiles'>
}

// obtenemos los comentarios de cada pensión de la tabla de comentarios que se llama comments
export const getComments = async (id: string): Promise<TComment[] | null> => {
  const cookieStore = cookies()

  const supabase = createClient(cookieStore)

  const { data } = await supabase
    .from('comments')
    .select('*, profiles(*)')
    .eq('listing_id', id)
    .order('created_at', { ascending: false })

  return data as TComment[]
}

export const getCommentById = async (id: string): Promise<TComment | null> => {
  const cookieStore = cookies()

  const supabase = createClient(cookieStore)

  const { data } = await supabase
    .from('comments')
    .select('*, profiles(*)')
    .eq('id', id)
    .single()

  return data as TComment
}
