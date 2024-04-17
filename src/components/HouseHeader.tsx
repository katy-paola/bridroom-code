'use client'

import Filter from '@/svg/Filter'
import { useState } from 'react'
import Button from './Button'
import FilterForm from './FilterForm'

export default function HouseHeader({ role }: { role: string | undefined }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const isOwner = role === 'owner'
  return (
    <header className="relative flex flex-col gap-6">
      <section className="flex items-center justify-between">
        <h2 className="text-paragraph-medium font-medium text-neutral-title md:text-paragraph-xlarge">
          {isOwner ? 'Mis pensiones' : 'Encuentra aquí tu pensión'}
        </h2>

        <Button
          variant="secondary"
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
