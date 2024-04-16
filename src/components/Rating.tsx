import EmptyStar from '@/svg/EmptyStar'

export default function Rating({
  numberOfStars = 5,
}: {
  numberOfStars?: number
}) {
  return (
    <ul className="flex text-functional-warning">
      {Array.from({ length: numberOfStars }, (_, index) => (
        <li key={index}>
          <EmptyStar />
        </li>
      ))}
    </ul>
  )
}
