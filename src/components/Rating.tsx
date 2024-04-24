import EmptyStar from '@/svg/EmptyStar'
import FillStar from '@/svg/FillStar'
import HalfStar from '@/svg/HalfStar'

export default function Rating({
  numberOfStars = 0,
}: {
  numberOfStars?: number
}) {
  const stars: JSX.Element[] = []
  const isFloat = numberOfStars % 1 !== 0
  if (isFloat) {
    const integer = Math.floor(numberOfStars)
    for (let i = 0; i < integer; i++) {
      stars.push(<FillStar />)
    }
    stars.push(<HalfStar />)
  } else {
    for (let i = 0; i < numberOfStars; i++) {
      stars.push(<FillStar />)
    }
  }
  if (stars.length < 5) {
    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<EmptyStar />)
    }
  }
  if (stars.length === 0) {
    for (let i = 0; i < 5; i++) {
      stars.push(<EmptyStar />)
    }
  }

  return (
    <ul className="flex text-functional-warning" title={`${numberOfStars}`}>
      {Array.from({ length: stars.length }, (_, index) => (
        <li key={index}>{stars[index]}</li>
      ))}
    </ul>
  )
}
