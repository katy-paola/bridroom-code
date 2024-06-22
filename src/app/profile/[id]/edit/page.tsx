import { uploadFileToSupabase } from '@/app/utils/upload-file-to-supabase'
import Button from '@/components/Button'
import InputFilePreview from '@/components/InputFilePreview'
import InputForm from '@/components/InputForm'
import { createClient } from '@/lib/supabase/server'
import { getProfileCurrentUser } from '@/services/user'
import ImgEditProfile from '@/svg/ImgEditProfile'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function ProfileEdit() {
  const currentUser = await getProfileCurrentUser()

  const updateProfile = async (formData: FormData) => {
    'use server'

    const photoToApi = formData.get('photos')
    const photoPathUrl = await uploadFileToSupabase(photoToApi as File)

    const name = formData.get('name') as string
    const about = formData.get('about') as string
    const place = formData.get('place') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const user = await supabase.auth.getUser()

    if (user.error !== null) {
      return redirect(
        `/?message=You must be logged in to edit your profile&error=true`,
      )
    }

    const { error } = await supabase
      .from('profiles')
      .update({ name, about, university: place, avatar_url: photoPathUrl })
      .eq('id', user.data.user?.id)

    if (error !== null) {
      return redirect(
        `/profile/${user.data.user?.id}/edit?message=${error.message}&error=true`,
      )
    }

    return redirect(
      '/profile/' + user.data.user?.id + '?message=Profile updated!',
    )
  }

  return (
    <section className="mt-14 flex w-full flex-col gap-8 p-4 xs:p-8 sm:px-44 md:mt-16 md:px-72 lg:min-h-main lg:flex-row lg:items-center lg:gap-16 lg:px-36 lg:py-10 xl:px-60">
      <section className="contents w-full flex-col gap-8 lg:flex">
        <h2 className="text-paragraph-medium font-medium text-neutral-title md:text-paragraph-large">
          Editar perfil
        </h2>
        <form action={updateProfile} className="flex flex-col gap-8">
          <fieldset className="flex flex-col gap-8">
            <InputFilePreview label="Foto de perfil:" multiple={false} />
            <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
              Nombre:
              <InputForm
                type="text"
                name="name"
                placeholder="Agrega tu nombre."
                hasIcon={false}
                isRadio={false}
                value={currentUser?.about}
              />
            </label>
            <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
              Descripción:
              <InputForm
                type="text"
                name="about"
                placeholder="Agrega información sobre ti, como tus gustos, hobbies, etc."
                hasIcon={false}
                isRadio={false}
                value={currentUser?.about}
              />
            </label>
            <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
              {currentUser?.role === 'student' ? 'Universidad' : 'Barrio'}
              <InputForm
                type="text"
                name="place"
                placeholder={
                  currentUser?.role === 'student'
                    ? 'Ej.: Universidad de Cartagena.'
                    : 'Ej.: San Fernando.'
                }
                hasIcon={false}
                isRadio={false}
                value={currentUser?.university}
              />
            </label>
          </fieldset>
          <Button
            variant="primary"
            size="regular"
            type="submit"
            hasText="yes"
            text="Guardar cambios"
            width="w-full"
          />
        </form>
      </section>
      <section className="flex justify-center">
        <figure className="w-72 md:w-96 lg:w-[480px]">
          <ImgEditProfile />
        </figure>
      </section>
    </section>
  )
}
