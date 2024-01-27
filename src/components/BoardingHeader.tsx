import DeleteBoardingButton from './DeleteBoardingButton'
import Edit from '@/svg/Edit'
import Save from '@/svg/Save'
import Link from 'next/link'

export default function BoardingHeader(Props: {
  role: string | undefined
  id: string
}) {
  const { role, id } = Props
  return (
    <header className="absolute flex w-full justify-end">
      <ul className="flex gap-4 p-2 text-neutral-main-bg">
        {role === 'student' ? (
          <li>
            <figure className="grid items-center rounded-lg bg-neutral-paragraph p-2">
              <Save />
            </figure>
          </li>
        ) : (
          <>
            <li>
              <Link href={`/edit-boarding/${id}`}>
                <figure className="grid content-center rounded-lg bg-neutral-paragraph p-2">
                  <Edit />
                </figure>
              </Link>
            </li>
            <li>
              <DeleteBoardingButton />
            </li>
          </>
        )}
      </ul>
    </header>
  )
}
