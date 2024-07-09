import Edit from '@/svg/Edit'
import DeleteBoardingButton from './DeleteBoardingButton'
import SaveBoardingButton from './SaveBoardingButton'

import Link from 'next/link'
import { Suspense } from 'react'

export default function BoardingHeader(Props: {
  role: string | undefined
  id: string
  listingTitle: string | null
}) {
  const { role, id, listingTitle } = Props

  return (
    <header className="absolute flex w-full items-center justify-end sm:static sm:justify-between">
      <h3 className="hidden text-paragraph-regular font-semibold text-neutral-title sm:block md:text-paragraph-medium lg:text-paragraph-large">
        {listingTitle}
      </h3>
      <ul className="flex items-stretch gap-2 p-2 text-neutral-main-bg sm:p-0">
        {role === 'student' ? (
          <li>
            <Suspense fallback={<>Cargando...</>}>
              <SaveBoardingButton padding="p-2" id={id} />
            </Suspense>
          </li>
        ) : (
          <>
            <li className="h-max cursor-pointer rounded-lg bg-neutral-paragraph p-2 hover:bg-secondary-default sm:bg-transparent sm:text-neutral-title sm:hover:text-neutral-main-bg">
              <Link href={`/house/${id}/edit`} className="contents">
                <figure className="grid w-4 content-center sm:w-6">
                  <Edit />
                </figure>
              </Link>
            </li>
            <li className="flex items-center">
              <DeleteBoardingButton id={id} />
            </li>
          </>
        )}
      </ul>
    </header>
  )
}
