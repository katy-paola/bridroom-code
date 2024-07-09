'use client'

import Close from '@/svg/Close'
import DeleteIcon from '@/svg/DeleteIcon'
import { useState } from 'react'
import Button from './Button'
import DeleteBoardingForm from './deleteBoardingForm'

export default function DeleteBoardingButton({ id }: { id: string }) {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      <button
        className="rounded-lg bg-neutral-paragraph p-2 hover:bg-tertiary-default sm:bg-transparent sm:text-neutral-title sm:hover:text-neutral-main-bg"
        onClick={() => {
          setIsClicked(!isClicked)
        }}
      >
        <figure className="grid h-auto w-4 content-center sm:w-6">
          <DeleteIcon />
        </figure>
      </button>
      {isClicked && (
        <section className="fixed left-1/2 top-16 z-[1005] flex w-max -translate-x-2/4 flex-col bg-neutral-main-bg p-5 text-neutral-title shadow-md">
          <section className="relative w-full">
            <button
              className="absolute -right-5 -top-5 w-6 bg-neutral-hover p-1 text-neutral-title hover:bg-tertiary-disabled"
              onClick={() => {
                setIsClicked(!isClicked)
              }}
            >
              <Close />
            </button>
          </section>
          <section className="flex flex-col gap-3">
            <section className="flex flex-col gap-2">
              <p className="max-w-[28ch]">
                ¿Está seguro que desea eliminar su pensión?
              </p>
              <small>Esta acción no se puede deshacer.</small>
            </section>
            <ul className="flex justify-between">
              <li>
                <Button
                  variant="cuaternary"
                  size="small"
                  hasText="yes"
                  text="No, cancelar."
                  width="w-auto"
                  onClick={() => {
                    setIsClicked(!isClicked)
                  }}
                />
              </li>
              <li>
                <DeleteBoardingForm id={id} />
              </li>
            </ul>
          </section>
        </section>
      )}
    </>
  )
}
