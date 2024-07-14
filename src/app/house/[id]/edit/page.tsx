import { uploadFileToSupabase } from '@/app/utils/upload-file-to-supabase'
import Button from '@/components/Button'
import InputFilePreview from '@/components/InputFilePreview'
import InputForm from '@/components/InputForm'
import LocationMap from '@/components/LocationMap'
import { createClient } from '@/lib/supabase/server'
import { getListingById } from '@/services/listing'
import ImgEditBoarding from '@/svg/ImgEditBoarding'
import { cookies } from 'next/headers'

import { redirect } from 'next/navigation'

export default async function EditBoardingIdPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  const listing = await getListingById(id)
  if (listing === null) {
    return redirect('/404')
  }
  const address =
    typeof listing.location === 'object' &&
    listing.location !== null &&
    'address' in listing.location &&
    typeof listing.location.address === 'string'
      ? listing.location.address
      : ''

  const updateListing = async (formData: FormData) => {
    'use server'

    const photoToApi = formData.get('photos')
    const photoPathUrl = await uploadFileToSupabase(photoToApi as File)
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const price = Number(formData.get('price'))
    const coords = formData.get('coords') as string
    const address = formData.get('address') as string

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const location = {
      coord: coords,
      neigh: '',
      address,
    }
    const user = await supabase.auth.getUser()

    if (user.error !== null) {
      return redirect(
        '/add-boarding?message=You must be logged in to add a boarding&error=true',
      )
    }
    const { error } = await supabase
      .from('listings')
      .update({
        title,
        description,
        price,
        avatar_url: photoPathUrl,
        location,
      })
      .eq('id', listing.id)

    if (error !== null) {
      return redirect(
        `/house/${listing.id}/edit?message=${error.message}&error=true`,
      )
    }

    return redirect('/house/' + listing.id + '?message=Listing updated!')
  }

  return (
    <section className="mt-14 flex w-full flex-col gap-8 p-4 xs:p-8 sm:px-44 md:mt-16 md:px-72 lg:items-center lg:gap-16 lg:px-36 lg:py-10 xl:px-60">
      <section className="contents w-full flex-col gap-8 lg:flex">
        <h2 className="text-paragraph-medium font-medium text-neutral-title md:text-paragraph-large">
          Editar pensión
        </h2>
        <form
          action={updateListing}
          className="flex grid-cols-layout flex-col gap-8 grid-areas-layout lg:grid"
        >
          <fieldset className="flex flex-col gap-8 lg:contents">
            <label className="flex h-auto flex-col gap-2 text-paragraph-regular text-neutral-paragraph grid-in-title">
              Título de la publicación:
              <InputForm
                type="text"
                name="title"
                placeholder="Ej.: Pensión disponible en Urbanización Sevilla."
                hasIcon={false}
                isRadio={false}
                value={listing.title}
              />
            </label>
            <label className="flex h-auto flex-col gap-2 text-paragraph-regular text-neutral-paragraph grid-in-description">
              Descripción:
              <InputForm
                type="text"
                name="description"
                placeholder="Agrega información sobre tu pensión, como servicios, puntos de referencia, etc."
                hasIcon={false}
                isRadio={false}
                value={listing.description}
              />
            </label>
            <label className="flex h-auto flex-col gap-2 text-paragraph-regular text-neutral-paragraph grid-in-price">
              Precio:
              <InputForm
                type="number"
                name="price"
                placeholder="Ej.: 500000"
                hasIcon={false}
                isRadio={false}
                value={listing.price}
              />
            </label>
            <label className="flex h-auto flex-col gap-2 text-paragraph-regular text-neutral-paragraph grid-in-address">
              Dirección:
              <InputForm
                type="text"
                name="address"
                placeholder="Ej.: Urbanización Sevilla mz 5 lt 6"
                hasIcon={false}
                isRadio={false}
                value={address}
              />
            </label>
            <LocationMap />
            <InputFilePreview />
          </fieldset>
          <section className="contents h-auto justify-end grid-in-button lg:flex">
            <Button
              variant="primary"
              size="regular"
              hasText="yes"
              type="submit"
              text="Guardar cambios"
              width="w-auto"
            />
          </section>
        </form>
      </section>
      <section className="flex justify-center">
        <figure className="w-72 md:w-96">
          <ImgEditBoarding />
        </figure>
      </section>
    </section>
  )
}
