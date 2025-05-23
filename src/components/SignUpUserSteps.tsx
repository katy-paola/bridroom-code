import Code from '@/components/Code'
import Link from 'next/link'
import Step from './Step'

const create = `
create table notes (
  id serial primary key,
  title text
);

insert into notes(title)
values
  ('Today I created a Supabase project.'),
  ('I added some data and queried it from Next.js.'),
  ('It was awesome!');
`.trim()

const server = `
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: notes } = await supabase.from('notes').select()

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
`.trim()

const client = `
'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('notes').select()
      setNotes(data)
    }
    getData()
  }, [])

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
`.trim()

export default function SignUpUserSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <Step title="Sign up your first user">
        <p>
          Head over to the{' '}
          <Link
            href="/login"
            className="font-bold text-foreground/80 hover:underline"
          >
            Login
          </Link>{' '}
          page and sign up your first user. Its okay if this is just you for
          now. Your awesome idea will have plenty of users later!
        </p>
      </Step>

      <Step title="Create some tables and insert some data">
        <p>
          Head over to the{' '}
          <a
            href="https://supabase.com/dashboard/project/_/editor"
            className="font-bold text-foreground/80 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Table Editor
          </a>{' '}
          for your Supabase project to create a table and insert some example
          data. If youre stuck for creativity, you can copy and paste the
          following into the{' '}
          <a
            href="https://supabase.com/dashboard/project/_/sql/new"
            className="font-bold text-foreground/80 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            SQL Editor
          </a>{' '}
          and click RUN!
        </p>
        <Code code={create} />
      </Step>

      <Step title="Query Supabase data from Next.js">
        <p>
          To create a Supabase client and query data from an Async Server
          Component, create a new page.tsx file at{' '}
          <span className="rounded-md bg-foreground/20 px-2 py-1 text-foreground/80">
            /app/notes/page.tsx
          </span>{' '}
          and add the following.
        </p>
        <Code code={server} />
        <p>Alternatively, you can use a Client Component.</p>
        <Code code={client} />
      </Step>

      <Step title="Build in a weekend and scale to millions!">
        <p>Youre ready to launch your product to the world! 🚀</p>
      </Step>
    </ol>
  )
}
