'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import Button from './Button'
import InputSearch from './InputSearch'

export default function FilterForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const price = searchParams.get('price') ?? '1000000'
  const search = searchParams.get('search')

  const [searchValue, setSearch] = useState(search ?? '')

  const handleChange = (e: any) => {
    console.log(e.target.value)

    router.push(`/house?price=${e.target.value}`)
  }

  const handleClick = () => {
    router.push(`/house?search=${searchValue}`)
  }

  return (
    <form className="right-0 top-12 flex flex-col gap-8 sm:absolute sm:gap-8 sm:bg-neutral-main-bg sm:p-8 sm:shadow-md">
      <fieldset className="flex flex-col gap-6">
        <label className="flex flex-col gap-3 text-paragraph-regular font-medium text-neutral-title">
          Filtrar por precio
          <input
            onChange={handleChange}
            className="flex h-0.5 w-full cursor-pointer appearance-none flex-wrap content-center rounded-full bg-neutral-paragraph accent-primary-default outline-none"
            type="range"
            defaultValue={price}
            min={100000}
            max={2000000}
          />
          <datalist id="range" className="flex justify-between">
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="100K"
              label="100K"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="200"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="400"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="600"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="800"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="1000"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="1200"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="1400"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="1600"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="1800"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="2000"
              label="2M"
            ></option>
          </datalist>
        </label>
        <label className="flex flex-col gap-3 text-paragraph-regular font-medium text-neutral-title">
          Filtrar por palabra clave
          <InputSearch
            placeholder="Ingresa la palabra que deseas buscar"
            value={searchValue}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
        </label>
      </fieldset>
      <section className="flex justify-end sm:justify-center">
        <Button
          variant="cuaternary"
          size="small"
          hasText="yes"
          text="Aplicar"
          width="w-auto"
          onClick={handleClick}
        />
      </section>
    </form>
  )
}
