export default function Button(Props: {
  type: string
  size: string
  hasText: string
  text?: string
  icon?: JSX.Element
  width?: string
}) {
  const { type, size, hasText, text, icon, width } = Props

  // const setClassName = () => {
  //   return `flex items-center gap-1 text-white ${setTypeClassName()} ${setSizeClassName()} rounded-lg ${setPadding()}`
  // }
  const setTypeClassName = () => {
    return type === 'primary'
      ? 'bg-primary-default text-neutral-main-bg'
      : type === 'secondary'
      ? 'bg-secondary-default text-neutral-main-bg'
      : type === 'tertiary'
      ? 'bg-tertiary-default text-neutral-main-bg'
      : 'bg-transparent text-neutral-title'
  }
  const setSizeClassName = () => {
    return size === 'small'
      ? 'text-paragraph-small'
      : size === 'regular'
      ? 'text-paragraph-regular'
      : 'text-paragraph-small md:text-paragraph-regular'
  }

  const setPadding = () => {
    return hasText === 'both'
      ? 'p-2 md:px-6 md:py-2'
      : hasText === 'yes'
      ? 'px-6 py-2'
      : 'p-2'
  }

  const setText = () => {
    return hasText === 'both'
      ? 'hidden md:inline-block'
      : hasText === 'no' && 'hidden'
  }

  return (
    <button
      className={`flex ${width} items-center justify-center gap-1 ${setTypeClassName()} ${setSizeClassName()} rounded-lg ${setPadding()}`}
    >
      <span className={`${setText()} font-semibold`}>{text}</span>
      <span className={`${icon === undefined && 'hidden'}`}>{icon}</span>
    </button>
  )
}
