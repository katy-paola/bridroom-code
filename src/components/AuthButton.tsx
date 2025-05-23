import { createClient } from '@/lib/supabase/server'
import { getUser } from '@/services/user'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function AuthButton() {
  const user = await getUser()

  const signOut = async () => {
    'use server'

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/login')
  }

  return user != null ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        <button className="rounded-md bg-btn-background px-4 py-2 no-underline hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="flex rounded-md bg-btn-background px-3 py-2 no-underline hover:bg-btn-background-hover"
    >
      Login
    </Link>
  )
}
