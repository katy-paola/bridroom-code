'use client'

import Filter from '@/svg/Filter'
import Button from './Button'
import FilterForm from './FilterForm'
import { useState } from 'react'

export default function HouseHeader() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  return (
    <header className="flex flex-col">
      <section className="flex items-center justify-between">
        <h2 className="text-paragraph-medium font-medium text-neutral-title md:text-paragraph-xlarge">
          Encuentra aquí tu pensión
        </h2>

        <Button
          type="secondary"
          size="small"
          hasText="both"
          text="Filtrar"
          iconRight={<Filter />}
          width="w-auto"
          onClick={() => {
            setIsFilterOpen(!isFilterOpen)
          }}
        />
      </section>
      {isFilterOpen && <FilterForm />}
    </header>
  )
}
