import Button from '@/components/Button'
import InputForm from '@/components/InputForm'
import { getProfileCurrentUser } from '@/services/user'
import ImgEditProfile from '@/svg/ImgEditProfile'

export default async function ProfileEdit() {
  const currentUser = await getProfileCurrentUser()
  return (
    <section className="mt-14 flex w-full flex-col gap-8 p-4 xs:p-8 sm:px-44 md:mt-16 md:px-72 lg:min-h-main lg:flex-row lg:items-center lg:gap-16 lg:px-36 lg:py-10 xl:px-60">
      <section className="contents w-full flex-col gap-8 lg:flex">
        <h2 className="text-paragraph-medium font-medium text-neutral-title md:text-paragraph-large">
          Editar perfil
        </h2>
        <form className="flex flex-col gap-8">
          <fieldset className="flex flex-col gap-8">
            <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
              Cambiar foto de perfil
              <figure>
                <img src="/upload-photo.svg" alt="" />
              </figure>
              <input className="sr-only" type="file" accept="image/*" />
            </label>
            <label className="flex flex-col gap-2 text-paragraph-regular text-neutral-paragraph">
              Editar descripción:
              <InputForm
                type="text"
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
                placeholder={
                  currentUser?.role === 'student'
                    ? 'Ej.: Universidad de Cartagena'
                    : 'Ej.: San Fernando'
                }
                hasIcon={false}
                isRadio={false}
                value={currentUser?.university}
              />
            </label>
          </fieldset>
          <Button
            type="primary"
            size="regular"
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
