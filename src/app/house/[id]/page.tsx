import { getListingById } from '@/services/listing'
import FillStar from '@/svg/FillStar'
import { redirect } from 'next/navigation'

export default async function ListingIdPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  const listing = await getListingById(id)

  if (listing === null) {
    return redirect('/404')
  }

  return (
    <section className="rounded-lg bg-gray-100 p-6 shadow-md">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">{listing.title}</h1>
      <img
        src={listing.photos?.[0] ?? '/no-image.png'}
        alt={listing.title ?? 'No image'}
        className="mb-4 h-64 w-full object-cover"
      />

      <p className="mb-4 text-gray-600">{listing.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-2">
            <img
              src={listing.owner?.avatar_url ?? '/no-image.png'}
              alt={listing.owner?.name ?? 'No image'}
              className="h-8 w-8 rounded-full"
            />
          </div>
          <p className="text-gray-700">{listing.owner?.name}</p>
        </div>
        <p className="text-lg font-semibold text-green-600">${listing.price}</p>
      </div>

      <div className="mt-4">
        <span className="text-gray-600">Rating:</span>
        <div className="flex items-center">
          {Array.from({ length: listing.rating ?? 0 }, (_, index) => (
            <FillStar key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
