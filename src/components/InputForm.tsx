'use client'

import Show from '../svg/Show'
import Hide from '../svg/Hide'
import { type ChangeEvent, useState } from 'react'

export default function InputForm({
  type,
  placeholder,
  hasIcon,
  isRadio,
  value,
  name,
  id,
  onChange,
}: {
  type?: string
  placeholder?: string
  name?: string
  hasIcon: boolean
  isRadio: boolean
  value?: string | number | null
  id?: string
  onChange?: (e: ChangeEvent) => void
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
            defaultValue={value ?? ''}
            name={name}
            required
          />
          {hasIcon && (
            <button
              className="w-4 text-neutral-placeholder hover:text-neutral-paragraph"
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
          id={id}
          name={name}
          type="radio"
          className="sr-only"
          onChange={onChange}
          required
        />
      )}
    </>
  )
}
