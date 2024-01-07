'use client'

import Show from '../svg/Show'
import Hide from '../svg/Hide'
import { useState } from 'react'

export default function InputForm({
  type,
  placeholder,
  hasIcon,
  isRadio,
  id,
}: {
  type?: string
  placeholder?: string
  hasIcon: boolean
  isRadio: boolean
  id?: string
}) {
  const [show, setShow] = useState(false)

  return (
    <>
      {!isRadio ? (
        <div>
          <input type={type} placeholder={placeholder} />
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
        <input type="radio" id={id} name="rol" />
      )}
    </>
  )
}
