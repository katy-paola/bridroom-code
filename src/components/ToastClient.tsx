'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { Toaster, toast } from 'sonner'

export default function ToastClient() {
  const searchParams = useSearchParams()

  const message = searchParams.get('message')
  const error = searchParams.get('error') === 'true'

  useEffect(() => {
    if (message !== null) {
      if (error) {
        toast.error(message)
      } else {
        toast.success(message)
      }
    }

    return () => {
      toast.dismiss()
    }
  }, [message])

  return <Toaster position="top-center" expand richColors />
}
