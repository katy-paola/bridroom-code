import Button from '@/components/Button'
import InputFilePreview from '@/components/InputFilePreview'
import InputForm from '@/components/InputForm'
import LocationMap from '@/components/LocationMap'
import { createClient } from '@/lib/supabase/server'
import ImgAddBoarding from '@/svg/ImgAddBoarding'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { uploadFileToSupabase } from '../utils/upload-file-to-supabase'

export default function AddBoarding() {
  const addListingAction = async (formData: FormData) => {
    'use server'

    console.log('formData', formData)

    const photosToApi = formData.getAll('photos')
    const photosPathUrls: string[] = []

    for await (const photo of photosToApi) {
      const response = await uploadFileToSupabase(photo as File)
      if (response !== undefined) photosPathUrls.push(response)
    }

    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const price = Number(formData.get('price'))
    const address = formData.get('address') as string
    const neigh = formData.get('neigh') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const user = await supabase.auth.getUser()

    if (user.error !== null) {
      return redirect(
        '/add-boarding?message=You must be logged in to add a boarding&error=true',
      )
    }

    const { error } = await supabase.from('listings').insert([
      {
        title,
        description,
        price,
        location: {
          address,
          coord: '10.403931, -75.470382',
          neigh,
        },
        photos: photosPathUrls,
        user_id: user.data.user?.id,
      },
    ])

    if (error !== null) {
      return redirect(`/add-boarding?message=${error.message}&error=true`)
    }

    return redirect('/?message=Boarding added!')
  }

  return (
    <section className="mt-14 flex w-full flex-col gap-8 p-4 xs:p-8 sm:px-44 md:mt-16 md:px-72 lg:items-center lg:gap-16 lg:px-36 lg:py-10 xl:px-60">
      <section className="contents w-full flex-col gap-8 lg:flex">
        <h2 className="text-paragraph-medium font-medium text-neutral-title md:text-paragraph-large">
          Agregar pensión
        </h2>
        {/** Contenedor morado */}
        <form
          action={addListingAction}
          className="flex grid-cols-layout flex-col gap-8 grid-areas-layout lg:grid"
        >
          {/** Contenedor invisible en lg */}
          <fieldset className="flex flex-col gap-8 lg:contents">
            <label className="flex h-auto flex-col gap-2 text-paragraph-regular text-neutral-paragraph grid-in-title">
              Título de la publicación:
              <InputForm
                type="text"
                name="title"
                placeholder="Ej.: Pensión disponible en Urbanización Sevilla."
                hasIcon={false}
                isRadio={false}
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
              />
            </label>

            <LocationMap />
            <InputFilePreview />
          </fieldset>

          <section className="contents h-auto justify-end grid-in-button lg:flex">
            <Button
              variant="primary"
              type="submit"
              size="regular"
              hasText="yes"
              text="Publicar"
              width="w-auto"
            />
          </section>
        </form>
      </section>
      <section className="flex justify-center">
        <figure className="w-72 md:w-96">
          <ImgAddBoarding />
        </figure>
      </section>
    </section>
  )
}
