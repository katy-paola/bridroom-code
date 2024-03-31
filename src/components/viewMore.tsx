'use client'
import More from '@/svg/More'
import Button from './Button'
import { redirect } from 'next/navigation'

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
