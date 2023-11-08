export default function Button(Props: {
  type: string
  size: string
  hasText: string
  text?: string
  icon?: JSX.Element
  isMobile?: boolean
}) {
  const { type, size, hasText, text, icon } = Props

  // const setClassName = () => {
  //   return `flex items-center gap-1 text-white ${setTypeClassName()} ${setSizeClassName()} rounded-lg ${setPadding()}`
  // }
  const setTypeClassName = () => {
    return type === 'primary'
      ? 'bg-primary-default'
      : type === 'secondary'
      ? 'bg-secondary-default'
      : 'bg-tertiary-default'
  }
  const setSizeClassName = () => {
    return size === 'small' ? 'text-paragraph-small' : 'text-paragraph-regular'
  }

  const setPadding = () => {
    return hasText === 'both'
      ? 'p-2 md:px-6 md:py-2'
      : hasText === 'yes'
      ? 'px-6 py-2'
      : 'p-2'
  }

  return (
    <button
      className={`flex items-center gap-1 text-white ${setTypeClassName()} ${setSizeClassName()} rounded-lg ${setPadding()}`}
    >
      <span
        className={`${
          hasText === 'both'
            ? 'hidden md:inline-block'
            : hasText === 'no' && 'hidden'
        } font-semibold`}
      >
        {text}
      </span>
      <span>{icon}</span>
    </button>
  )
}
