import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export default async function ListingIdPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  const cookieStore = cookies()

  const supabase = createClient(cookieStore)

  const { data } = await supabase
    .from('listings')
    .select('*, profiles(*)')
    .eq('id', id)

  return (
    <div>
      <h1>ListingIdPage {id}</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
