import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

// obtenemos los comentarios de cada pensión de la tabla de comentarios que se llama comments
export const getComments = async (id: string) => {
  const cookieStore = cookies()

  const supabase = createClient(cookieStore)

  const { data } = await supabase
    .from('comments')
    .select('*')
    .eq('listing_id', id)

  return data
}
