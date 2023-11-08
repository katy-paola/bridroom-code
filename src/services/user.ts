import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export const getUser = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user
}

export const getSession = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return session
}

export const getProfileCurrentUser = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const session = await getSession()

  if (session === null) return null

  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single()

  return data
}
