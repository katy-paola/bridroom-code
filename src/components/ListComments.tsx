import { type TComment } from '@/services/comments'
import Comment from './Comment'

export default async function ListComments(Props: {
  isOwner: boolean
  comments: TComment[] | null
}) {
  const { isOwner, comments } = Props

  return (
    <section
      className={`flex flex-col gap-4 p-4 xs:px-8 sm:p-0 sm:pb-4 ${
        isOwner ? 'flex-1' : 'lg:max-w-full'
      } ${isOwner ? 'lg:max-h-[360px]' : 'lg:max-h-[232px]'} lg:pb-0`}
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
