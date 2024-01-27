'use client'

import Show from '../svg/Show'
import Hide from '../svg/Hide'
import { useState } from 'react'

export default function InputForm({
  type,
  placeholder,
  hasIcon,
  isRadio,
  isFocus,
  value,
}: {
  type?: string
  placeholder?: string
  hasIcon: boolean
  isRadio: boolean
  isFocus?: boolean
  value?: string | number | null
}) {
  const [show, setShow] = useState(false)

  return (
    <>
      {!isRadio ? (
        <div className="flex justify-between border-b border-solid border-neutral-paragraph px-2 py-3 focus-within:border-primary-default">
          <input
            className={`flex w-full text-paragraph-small ${
              value === ''
                ? 'text-neutral-placeholder'
                : 'text-neutral-paragraph'
            } outline-none`}
            type={type}
            placeholder={placeholder}
            value={value ?? ''}
          />
          {hasIcon && (
            <button
              onClick={() => {
                setShow(!show)
              }}
            >
              {show ? <Hide /> : <Show />}
            </button>
          )}
        </div>
      ) : (
        <input
          type="radio"
          name="rol"
          className="sr-only"
          autoFocus={isFocus}
        />
      )}
    </>
  )
}
