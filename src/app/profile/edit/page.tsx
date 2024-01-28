import Button from '@/components/Button'
import InputForm from '@/components/InputForm'
import { getProfileCurrentUser } from '@/services/user'
import ImgEditProfile from '@/svg/ImgEditProfile'

export default async function ProfileEdit() {
  const currentUser = await getProfileCurrentUser()
  return (
    <section className="mt-14 w-full md:mt-20">
      <h2>Editar perfil</h2>
      <form>
        <fieldset>
          <label>
            Cambiar foto de perfil
            <figure>
              <img src="/upload-photo.svg" alt="" />
            </figure>
            <input
              className="sr-only"
              type="file"
              accept="image/*"
              capture="environment"
              multiple
            />
          </label>
          <label>
            Editar descripción:
            <InputForm
              type="text"
              placeholder="Agrega información sobre ti, como tus gustos, hobbies, etc."
              hasIcon={false}
              isRadio={false}
              value={currentUser?.about}
            />
          </label>
          <label>
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
      <ImgEditProfile />
    </section>
  )
}
