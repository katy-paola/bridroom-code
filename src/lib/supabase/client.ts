import { type Database } from '@/types/database.types'
import { createBrowserClient } from '@supabase/ssr'

export const createClient = () =>
  createBrowserClient<Database>(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
