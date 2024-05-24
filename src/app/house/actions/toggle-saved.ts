'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export default async function submit(formData: FormData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const userResponse = await supabase.auth.getUser()

  if (userResponse.data === null) {
    return
  }

  const user = userResponse.data.user

  if (user === null) {
    return
  }

  const isSaved = formData.get('isSaved') === 'true'
  const id = formData.get('id') as string

  if (isSaved) {
    await supabase
      .from('favorites')
      .delete()
      .eq('listing_id', id)
      .eq('user_id', user.id)
  } else {
    await supabase
      .from('favorites')
      .insert({ listing_id: id, user_id: user.id })
  }

  revalidatePath('/house' + id)
  revalidatePath('/profile/' + user.id)
}
