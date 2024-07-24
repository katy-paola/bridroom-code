'use client'

import SaveFill from '@/svg/SaveFill'
import SaveStroke from '@/svg/SaveStroke'
import { useFormStatus } from 'react-dom'

export function SaveBoardingButton({
  padding,
  isSaved,
  fromProfile,
}: {
  padding: string
  isSaved: boolean
  fromProfile?: boolean
}) {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending} className="disabled:opacity-50">
      <figure
        className={`grid ${
          fromProfile ?? false ? 'w-3 sm:w-5' : 'w-8 sm:w-10'
        } items-center rounded-lg ${padding} text-neutral-main-bg outline-none ${
          isSaved
            ? padding === 'p-2'
              ? 'bg-primary-default hover:bg-neutral-paragraph'
              : 'bg-transparent text-primary-default hover:text-neutral-title'
            : padding === 'p-2'
              ? 'bg-neutral-paragraph hover:bg-primary-default sm:bg-transparent sm:text-neutral-title sm:hover:text-neutral-main-bg'
              : 'bg-transparent text-neutral-title hover:text-primary-default'
        }`}
      >
        {isSaved ? <SaveFill /> : <SaveStroke />}
      </figure>
    </button>
  )
}
