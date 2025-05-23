import Search from '@/svg/Search'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
}

export default function InputSearch(Props: InputProps) {
  const { placeholder, ...rest } = Props

  return (
    <form
      action="/house"
      method="get"
      className="flex w-full max-w-sm items-center justify-between rounded-lg pl-2 outline outline-1 outline-neutral-paragraph focus-within:outline-neutral-title lg:max-w-md lg:p-3"
    >
      <input
        className="flex-1 bg-transparent text-paragraph-small leading-4 outline-none focus-within:placeholder:text-opacity-0 lg:text-paragraph-regular"
        type="search"
        name="search"
        placeholder={placeholder}
        {...rest}
      />
      <button className="w-8 bg-transparent p-2 text-neutral-paragraph hover:text-neutral-title">
        <Search />
      </button>
    </form>
  )
}
