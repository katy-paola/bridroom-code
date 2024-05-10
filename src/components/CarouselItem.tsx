export default function CarouselItem(Props: { source: string; alt: string }) {
  const { source, alt } = Props
  return (
    <figure className="h-64 w-full">
      <img className="size-full object-cover" src={source} alt={alt} />
    </figure>
  )
}
