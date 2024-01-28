import DeleteBoardingButton from './DeleteBoardingButton'
import Edit from '@/svg/Edit'
import SaveBoardingButton from './SaveBoardingButton'

import Link from 'next/link'

export default function BoardingHeader(Props: {
  role: string | undefined
  id: string
  listingTitle: string | null
}) {
  const { role, id, listingTitle } = Props
  return (
    <header className="absolute flex w-full items-center justify-end sm:static sm:justify-between">
      <h3 className="hidden text-paragraph-regular font-semibold text-neutral-title sm:block">
        {listingTitle}
      </h3>
      <ul className="flex gap-4 p-2 text-neutral-main-bg sm:p-0">
        {role === 'student' ? (
          <li>
            <SaveBoardingButton />
          </li>
        ) : (
          <>
            <li>
              <Link href={`/edit-boarding/${id}`}>
                <figure className="grid content-center rounded-lg bg-neutral-paragraph p-2 hover:bg-secondary-default sm:bg-transparent sm:text-neutral-title sm:hover:text-neutral-main-bg">
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
