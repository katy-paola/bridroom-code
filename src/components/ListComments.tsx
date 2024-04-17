import { type TComment } from '@/services/comments'
import Comment from './Comments'

export default function ListComments(Props: {
  isOwner: boolean
  comments: TComment[] | null
}) {
  const { isOwner, comments } = Props

  return (
    <section
      className={`flex flex-col gap-4 p-4 xs:px-8 sm:p-0 ${
        !isOwner && 'lg:pb-8'
      } ${isOwner ? 'flex-1' : 'md:max-w-sm'} ${
        isOwner ? 'lg:max-h-[360px]' : 'lg:max-h-60'
      }`}
    >
      <h6 className="text-paragraph-regular font-normal text-neutral-title">
        Comentarios
      </h6>
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
