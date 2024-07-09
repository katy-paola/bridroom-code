'use server'
import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Button from './Button'

export default async function deleteBoardingForm({ id }: { id: string }) {
  const deleteBoarding = async () => {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.from('listings').delete().eq('id', id)

    if (error !== null) {
      return redirect(`/house/${id}/edit?message=${error.message}&error=true`)
    }

    return redirect('/?message=Boarding deleted!')
  }
  return (
    <form action={deleteBoarding}>
      <Button
        variant="tertiary"
        size="small"
        hasText="yes"
        text="Sí, eliminar."
        width="w-auto"
      />
    </form>
  )
}
