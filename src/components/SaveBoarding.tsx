import toggleSaved from '@/app/house/actions/toggle-saved'
import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { SaveBoardingButton } from './SaveBoardingButton'

export default async function SaveBoarding(Props: {
  padding: string
  id: string
  fromProfile?: boolean
}) {
  const { padding, id, fromProfile } = Props
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  let isSaved = false

  const userResponse = await supabase.auth.getUser()

  if (userResponse.data !== null) {
    const user = userResponse.data.user

    if (user !== null) {
      const { data, error } = await supabase
        .from('favorites')
        .select('listing_id')
        .eq('listing_id', id)
        .eq('user_id', user.id)

      if (error === null && data !== null && data.length > 0) {
        isSaved = true
      }
    }
  }

  return (
    <form action={toggleSaved}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="isSaved" value={isSaved ? 'true' : 'false'} />
      <SaveBoardingButton
        padding={padding}
        isSaved={isSaved}
        fromProfile={fromProfile}
      />
    </form>
  )
}
