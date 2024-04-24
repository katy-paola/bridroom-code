import { type TComment } from '@/services/comments'
import Comment from './Comment'

export default function ListComments(Props: {
  isOwner: boolean
  comments: TComment[] | null
}) {
  const { isOwner, comments } = Props
  /* const createResponse = async (formData: FormData, idComment: string) => {
    'use server'
    const getComment = await getCommentById(idComment)
    const responses = []
    const getResponses = formData.get('responses') as string
    responses.push(getResponses)
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    if (getComment !== null) {
      console.log('getComment', getComment)
      const { error } = await supabase
        .from('comments')
        .insert({ responses })
        .eq('id', getComment.id)

      if (error !== null) {
        return redirect(
          `/?message='Debes iniciar sesión para responder un comentario'&error=true`,
        )
      }
    }

    return redirect('/?message=Welcome back!')
  } */
  return (
    <section
      className={`flex flex-col gap-4 p-4 xs:px-8 sm:p-0 ${
        !isOwner && 'lg:pb-8'
      } ${isOwner ? 'flex-1' : 'lg:max-w-sm'} ${
        isOwner ? 'lg:max-h-[360px]' : 'lg:max-h-60'
      }`}
    >
      {comments?.length === 0 ? (
        <h6 className="text-paragraph-regular font-normal text-neutral-title">
          No hay comentarios
        </h6>
      ) : (
        <h6 className="text-paragraph-regular font-normal text-neutral-title">
          Comentarios
        </h6>
      )}

      <ul className="custom-scrollbar relative flex flex-col gap-4 overflow-y-auto lg:pr-2">
        {comments?.map((comment, index) => {
          if (comment.message === null) return null

          return (
            <div key={index} className="flex flex-col gap-4">
              <Comment
                avatarUrl={comment.profiles.avatar_url ?? '/no-image.jpg'}
                name={comment.profiles.name}
                rating={comment.rating}
                message={comment.message}
                id={comment.id}
              />
            </div>
          )
        })}
      </ul>
    </section>
  )
}
