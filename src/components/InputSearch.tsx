import Search from '@/svg/Search'

export default function InputSearch() {
  return (
    <form className="flex w-full max-w-sm items-center justify-between rounded-lg px-2 py-3 outline outline-1 outline-neutral-paragraph focus-within:outline-neutral-title lg:max-w-md lg:p-3">
      <input
        className="flex-1 bg-transparent text-paragraph-small leading-4 outline-none focus-within:placeholder:text-opacity-0 lg:text-paragraph-regular"
        type="search"
        placeholder="Buscar"
      />
      <button>
        <Search />
      </button>
    </form>
  )
}
