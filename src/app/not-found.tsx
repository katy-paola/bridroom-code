'use client'

import Button from '@/components/Button'
import Back from '@/svg/Back'
import NotFoundIllustration from '@/svg/NotFoundIllustration'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const route = useRouter()

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-between gap-8 bg-neutral-main-bg px-4 pb-8 pt-16 xs:px-8 sm:px-40 md:justify-center md:px-28 md:pt-22 lg:gap-16 lg:px-36 lg:pb-20 lg:pt-42 xl:px-60">
      <section className="flex flex-col gap-8">
        <h2 className="font-title-font text-heading-small text-primary-default md:text-heading-medium lg:text-center">
          Página no encontrada
        </h2>
        <figure className="flex h-auto w-full justify-center md:w-[400px] lg:w-[480px]">
          <NotFoundIllustration />
        </figure>
        <p className="text-paragraph-regular text-neutral-title lg:text-center">
          Lo sentimos, la página que buscas no existe.
        </p>
      </section>
      <Button
        variant="primary"
        size="regular"
        iconLeft={<Back />}
        hasText="yes"
        text="Volver"
        width="w-full md:w-auto"
        onClick={() => {
          route.back()
        }}
      />
    </section>
  )
}
