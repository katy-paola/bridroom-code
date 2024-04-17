'use client'

import SaveFill from '@/svg/SaveFill'
import SaveStroke from '@/svg/SaveStroke'
import { useState } from 'react'

export default function SaveBoardingButton(Props: { padding: string }) {
  const { padding } = Props
  const [isSaved, setIsSaved] = useState(false)
  return (
    <button
      onClick={() => {
        setIsSaved(!isSaved)
      }}
    >
      <figure
        className={`grid w-3 items-center rounded-lg sm:w-5 ${padding} text-neutral-main-bg outline-none ${
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
