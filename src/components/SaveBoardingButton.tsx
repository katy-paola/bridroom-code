import toggleSaved from '@/app/house/actions/toggle-saved'
import { createClient } from '@/lib/supabase/server'
import SaveFill from '@/svg/SaveFill'
import SaveStroke from '@/svg/SaveStroke'
import { cookies } from 'next/headers'

export default async function SaveBoardingButton(Props: {
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
      <button type="submit">
        <figure
          className={`grid ${
            fromProfile ?? false ? 'w-3 sm:w-5' : 'w-8 sm:w-10'
          } items-center rounded-lg ${padding} text-neutral-main-bg outline-none ${
            isSaved
              ? padding === 'p-2'
                ? 'bg-primary-default hover:bg-neutral-paragraph'
                : 'bg-transparent text-primary-default hover:text-neutral-title'
              : padding === 'p-2'
                ? 'bg-neutral-paragraph hover:bg-primary-default sm:bg-transparent sm:text-neutral-title sm:hover:text-neutral-main-bg'
                : 'bg-transparent text-neutral-title hover:text-primary-default'
          }`}
        >
          {isSaved ? <SaveFill /> : <SaveStroke />}
        </figure>
      </button>
    </form>
  )
}
