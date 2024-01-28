'use client'

import DeleteIcon from '@/svg/DeleteIcon'
import Close from '@/svg/Close'
import Button from './Button'
import { useState } from 'react'

export default function DeleteBoardingButton() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setIsClicked(!isClicked)
        }}
      >
        <figure className="grid content-center rounded-lg bg-neutral-paragraph p-2 hover:bg-tertiary-default sm:bg-transparent sm:text-neutral-title sm:hover:text-neutral-main-bg">
          <DeleteIcon />
        </figure>
      </button>
      {isClicked && (
        <section className="absolute left-1/2 top-4 flex w-max -translate-x-2/4 flex-col gap-3 bg-neutral-main-bg p-4 text-neutral-title shadow-md">
          <button
            className="self-end"
            onClick={() => {
              setIsClicked(!isClicked)
            }}
          >
            <Close />
          </button>
          <section className="flex flex-col gap-2">
            <p className="max-w-[28ch]">
              ¿Está seguro que desea eliminar su pensión?
            </p>
            <small>Esta acción no se puede deshacer.</small>
          </section>
          <ul className="flex justify-between">
            <li>
              <Button
                type="secondary"
                size="small"
                hasText="yes"
                text="No, cancelar."
                width="w-auto"
              />
            </li>
            <li>
              <Button
                type="tertiary"
                size="small"
                hasText="yes"
                text="Sí, eliminar."
                width="w-auto"
              />
            </li>
          </ul>
        </section>
      )}
    </>
  )
}
