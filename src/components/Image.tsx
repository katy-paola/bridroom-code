'use client'

import { useState } from 'react'

interface ImageProps {
  className: string
  src: string
  alt: string
  fallbackSrc: string
}

export function Image({ className, src, alt, fallbackSrc }: ImageProps) {
  const [source, setSource] = useState(src)
  const [fallback, setFallback] = useState(false)

  const onError = () => {
    if (!fallback) {
      setSource(fallbackSrc)
      setFallback(true)
    }
  }

  return <img className={className} src={source} alt={alt} onError={onError} />
}
