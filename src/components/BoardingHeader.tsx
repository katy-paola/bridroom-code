import DeleteIcon from '@/svg/DeleteIcon'
import Edit from '@/svg/Edit'
import Save from '@/svg/Save'

export default function BoardingHeader(Props: { role: string | undefined }) {
  const { role } = Props
  return (
    <header className="absolute flex w-full justify-end gap-4 bg-slate-400 p-2">
      <ul>
        {role === 'student' ? (
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
  )
}
