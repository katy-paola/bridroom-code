import Filter from '@/svg/Filter'
import Button from './Button'

export default function HouseHeader() {
  return (
    <header className="flex items-center justify-between">
      <h2 className="text-paragraph-medium font-medium text-neutral-title md:text-paragraph-xlarge">
        Encuentra aquí tu pensión
      </h2>

      <Button
        type="secondary"
        size="small"
        hasText="both"
        text="Filtrar"
        iconRight={<Filter />}
        width="w-auto"
      />
    </header>
  )
}
