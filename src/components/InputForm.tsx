'use client'

import { ChangeEvent, useState } from 'react'
import Hide from '../svg/Hide'
import Show from '../svg/Show'

export default function InputForm({
  type,
  placeholder,
  hasIcon,
  isRadio,
  value,
  name,
  id,
  isRequired = true,
  defaultValue,
  onChange,
}: {
  type?: string
  placeholder?: string
  name?: string
  hasIcon: boolean
  isRadio: boolean
  value?: string | number
  id?: string
  isRequired?: boolean
  defaultValue?: string | number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
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
            type={show ? 'text' : type}
            placeholder={placeholder}
            defaultValue={defaultValue ?? ''}
            name={name}
            onChange={onChange}
            value={value}
            required={isRequired}
          />
          {hasIcon && (
            <button
              className="w-4 text-neutral-placeholder hover:text-neutral-paragraph"
              type="button"
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
          defaultValue={defaultValue}
          value={value}
          required={isRequired}
        />
      )}
    </>
  )
}
