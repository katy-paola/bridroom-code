'use client'

import SaveStroke from '@/svg/SaveStroke'
import SaveFill from '@/svg/SaveFill'
import { useState } from 'react'

export default function SaveBoardingButton() {
  const [isSaved, setIsSaved] = useState(false)
  return (
    <button
      onClick={() => {
        setIsSaved(!isSaved)
      }}
    >
      <figure
        className={`grid items-center rounded-lg p-2 text-neutral-main-bg outline-none ${
          isSaved
            ? 'bg-primary-default hover:bg-neutral-paragraph'
            : 'bg-neutral-paragraph hover:bg-primary-default'
        }`}
      >
        {isSaved ? <SaveFill /> : <SaveStroke />}
      </figure>
    </button>
  )
}
