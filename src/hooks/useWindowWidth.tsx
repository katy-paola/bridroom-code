import { useEffect, useState } from 'react'

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowWidth !== undefined &&
    ((windowWidth > 430 && windowWidth <= 744) || windowWidth >= 1280)
    ? 4
    : 3
}
