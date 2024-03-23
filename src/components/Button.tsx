export default function Button(Props: {
  id?: string
  variant: string
  size: string
  type?: 'button' | 'submit' | 'reset'
  hasText: string
  text?: string
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  width?: string
  title?: string
  onClick?: () => void
  disabled?: boolean
}) {
  const {
    id,
    variant,
    type = 'button',
    size,
    hasText,
    text,
    iconLeft,
    iconRight,
    width,
    title,
    onClick,
    disabled,
  } = Props

  const setClassName = () => {
    return `flex ${width} box-border items-center justify-center gap-2 leading-none outline-none ${setTypeClassName()} ${
      id === 'view-map' && 'bg-transparent'
    } ${setSizeClassName()} ${
      variant !== 'tab' && 'rounded-lg'
    } ${setPadding()}`
  }
  const setTypeClassName = () => {
    return variant === 'primary'
      ? 'bg-primary-default border-solid border-transparent border-2 text-neutral-main-bg hover:bg-primary-hover active:bg-primary-active disabled:bg-primary-disabled'
      : variant === 'secondary'
      ? 'bg-secondary-default border-solid border-transparent border-2 text-neutral-main-bg hover:bg-secondary-hover active:bg-secondary-active disabled:bg-secondary-disabled'
      : variant === 'tertiary'
      ? id === 'view-map'
        ? 'bg-transparent text-tertiary-default hover:text-neutral-main-bg hover:bg-tertiary-default'
        : 'bg-tertiary-default border-solid border-transparent border-2 text-neutral-main-bg hover:bg-tertiary-hover active:bg-tertiary-active disabled:bg-tertiary-disabled'
      : variant === 'cuaternary'
      ? 'bg-transparent border-solid border-secondary-default border-2 text-secondary-default hover:bg-secondary-default hover:text-neutral-main-bg active:bg-secondary-hover active:text-neutral-main-bg active:border-secondary-hover disabled:bg-secondary-disabled disabled:text-neutral-main-bg'
      : 'bg-transparent text-neutral-title border-transparent border-2 border-solid hover:bg-neutral-hover active:bg-neutral-active disabled:text-neutral-placeholder hover:border-l-primary-default md:hover:border-l-transparent md:hover:border-b-primary-default'
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
      ? variant === 'tab'
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
      className={setClassName()}
      title={title}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {iconLeft !== undefined && (
        <figure className={`${hasText === 'no' ? 'w-6' : 'w-3'}`}>
          {iconLeft}
        </figure>
      )}
      <span className={`${setText()} font-semibold`}>{text}</span>
      {iconRight !== undefined && (
        <figure className={`${hasText === 'no' ? 'w-6' : 'w-3'}`}>
          {iconRight}
        </figure>
      )}
    </button>
  )
}
