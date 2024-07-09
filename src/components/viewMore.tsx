'use client'
import More from '@/svg/More'
import Link from 'next/link'
import Button from './Button'

export default function ViewMore() {
  return (
    <section className="flex justify-end sm:justify-center">
      <Link href="/house">
        <Button
          variant="secondary"
          size="small"
          hasText="yes"
          text="Ver más"
          iconRight={<More />}
          width="w-auto"
        />
      </Link>
    </section>
  )
}
