import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Button from './Button'

export default function deleteBoardingForm({ id }: { id: string }) {
  const router = useRouter()

  const deleteBoarding = async () => {
    const supabase = createClient()

    const { error } = await supabase.from('listings').delete().eq('id', id)

    if (error !== null) {
      router.push(`/house/${id}/edit?message=${error.message}&error=true`)
    }

    router.push('/?message=Boarding deleted!')
  }

  return (
    <Button
      variant="tertiary"
      size="small"
      hasText="yes"
      text="Sí, eliminar."
      width="w-auto"
      onClick={deleteBoarding}
    />
  )
}
