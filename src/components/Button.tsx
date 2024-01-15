export default function Button(Props: {
  type: string
  size: string
  hasText: string
  text?: string
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  width?: string
  title?: string
  contact?: number
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
    contact,
  } = Props

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
    <>
      {text === 'Contactar' ? (
        <a
          href={`tel:+57${contact}`}
          className={`flex ${width} items-center justify-center gap-1 ${setTypeClassName()} ${
            title === 'Ver mapa' && 'bg-transparent'
          } ${setSizeClassName()} rounded-lg ${setPadding()}`}
          title={title}
        >
          Contactar
        </a>
      ) : (
        <button
          className={`flex ${width} items-center justify-center gap-1 ${setTypeClassName()} ${
            title === 'Ver mapa' && 'bg-transparent'
          } ${setSizeClassName()} rounded-lg ${setPadding()}`}
          title={title}
        >
          {iconLeft !== undefined && <span>{iconLeft}</span>}
          <span className={`${setText()} font-semibold`}>{text}</span>
          {iconRight !== undefined && <span>{iconRight}</span>}
        </button>
      )}
    </>
  )
}
