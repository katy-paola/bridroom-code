'use client'
export const getCards = () => {
  // obtener el ancho de la ventana
  const width = window.innerWidth

  if (width > 600 && width < 924) {
    return 4
  }

  return 3
}
