'use client'

import Menu from '@/svg/Menu'
import Close from '@/svg/Close'
import { useState } from 'react'

export default function MenuResponsive() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen)
        }}
        className="md:hidden"
      >
        {isMenuOpen ? <Close /> : <Menu />}
      </button>
    </>
  )
}
