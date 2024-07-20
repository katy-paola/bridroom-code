'use client'

import { useWindowWidth } from '@/hooks/useWindowWidth'
import ViewMore from './viewMore'

export default function ViewMoreButton({
  listingsLength,
}: {
  listingsLength: number
}) {
  const listingsToDisplay = useWindowWidth()
  return <>{listingsLength > listingsToDisplay && <ViewMore />}</>
}
