'use client'
import More from '@/svg/More'
import { redirect } from 'next/navigation'
import Button from './Button'

export default function ViewMore() {
  return (
    <section className="flex justify-end sm:justify-center">
      <Button
        variant="secondary"
        size="small"
        hasText="yes"
        text="Ver más"
        iconRight={<More />}
        width="w-auto"
        onClick={() => {
          redirect('/house')
        }}
      />
    </section>
  )
}
