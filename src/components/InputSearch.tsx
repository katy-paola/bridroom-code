import Search from '@/svg/Search'

export default function InputSearch() {
  return (
    <form className="flex items-center justify-between rounded-lg px-2 py-3 outline outline-1 outline-neutral-paragraph focus-within:outline-neutral-title">
      <input
        className="flex-1 bg-transparent text-paragraph-small leading-4 outline-none"
        type="search"
        placeholder="Buscar"
      />
      <button>
        <Search />
      </button>
    </form>
  )
}
