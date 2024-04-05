'use server'

import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export async function uploadFileToSupabase(file: File) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const normalizeNameFile = file.name.replace(/\s/g, '_')
  const nameToUploadWithTimestamp = `${Date.now()}_${normalizeNameFile}`

  const { data, error } = await supabase.storage
    .from('photos-listings')
    .upload(nameToUploadWithTimestamp, file, {
      cacheControl: '3600',
      upsert: false,
    })

  if (error !== null) {
    console.log('error', error)
  }

  return data?.path
}
