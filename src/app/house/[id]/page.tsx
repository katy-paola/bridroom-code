import { getListingById } from '@/services/listing'
import FillStar from '@/svg/FillStar'
import { redirect } from 'next/navigation'
import Save from '@/svg/Save'
import Edit from '@/svg/Edit'
import DeleteIcon from '@/svg/DeleteIcon'
import { getProfileCurrentUser } from '@/services/user'

export default async function ListingIdPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  const listing = await getListingById(id)
  const user = await getProfileCurrentUser()

  if (listing === null) {
    return redirect('/404')
  }

  return (
    <section className="relative rounded-lg bg-gray-100 pt-14 shadow-md">
      <header className="absolute flex w-full justify-end gap-4 bg-slate-400 p-2">
        <ul>
          {user?.role === 'student' ? (
            <li>
              <figure>
                <Save />
              </figure>
            </li>
          ) : (
            <>
              <li>
                <figure>
                  <Edit />
                </figure>
              </li>
              <li>
                <figure>
                  <DeleteIcon />
                </figure>
              </li>
            </>
          )}
        </ul>
      </header>
      <figure className="h-52 w-full">
        <img
          src={listing.photos?.[0] ?? '/no-image.png'}
          alt={listing.title ?? 'No image'}
          className="object-cover"
        />
      </figure>
      <h3 className=" text-2xl font-bold text-gray-800">{listing.title}</h3>

      <p className=" text-gray-600">{listing.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="">
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

      <div className="">
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
