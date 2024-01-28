export default function Button(Props: {
  type: string
  size: string
  hasText: string
  text?: string
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  width?: string
  title?: string
  onClick?: () => void
}) {
  const {
    type,
    size,
    hasText,
    text,
    iconLeft,
    iconRight,
    width,
    title,
    onClick,
  } = Props

  // const setClassName = () => {
  //   return `flex items-center gap-1 text-white ${setTypeClassName()} ${setSizeClassName()} rounded-lg ${setPadding()}`
  // }
  const setTypeClassName = () => {
    return type === 'primary'
      ? 'bg-primary-default text-neutral-main-bg hover:bg-primary-hover active:bg-primary-active disabled:bg-primary-disabled'
      : type === 'secondary'
      ? 'bg-secondary-default text-neutral-main-bg hover:bg-secondary-hover active:bg-secondary-active disabled:bg-secondary-disabled'
      : type === 'tertiary'
      ? 'bg-tertiary-default text-neutral-main-bg hover:bg-tertiary-hover active:bg-tertiary-active disabled:bg-tertiary-disabled'
      : type === 'cuaternary'
      ? 'bg-transparent border-solid border-secondary-default border-2 text-secondary-default hover:bg-secondary-default hover:text-neutral-main-bg active:bg-secondary-hover active:text-neutral-main-bg active:border-secondary-hover disabled:bg-secondary-disabled disabled:text-neutral-main-bg'
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
    return hasText === 'yes'
      ? type === 'tab'
        ? 'px-6 py-2 md:px-4'
        : 'px-6 py-2'
      : hasText === 'both'
      ? 'p-2 md:px-6'
      : 'p-2'
  }

  const setText = () => {
    return hasText === 'both'
      ? 'hidden md:inline-block'
      : hasText === 'no' && 'hidden'
  }

  return (
    <button
      className={`flex ${width} items-center justify-center gap-1 leading-none outline-none ${setTypeClassName()} ${
        title === 'Ver mapa' && 'bg-transparent'
      } ${setSizeClassName()} rounded-lg ${setPadding()}`}
      title={title}
      onClick={onClick}
    >
      {iconLeft !== undefined && <span>{iconLeft}</span>}
      <span className={`${setText()} font-semibold`}>{text}</span>
      {iconRight !== undefined && <span>{iconRight}</span>}
    </button>
  )
}
