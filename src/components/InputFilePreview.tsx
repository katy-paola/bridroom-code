'use client'

import { createClient } from '@/lib/supabase/client' // Ajusta la importación según tu configuración
import { useState, type ChangeEvent, type MouseEvent } from 'react'

export default function InputFilePreview({
  label = 'Agregar fotos',
  multiple = true,
}: {
  label?: string
  multiple?: boolean
}) {
  const [images, setImages] = useState<string[]>([])
  const [fileObjects, setFileObjects] = useState<File[]>([]) // Para manejar los objetos de archivos

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files
    if (fileList === null) return

    const newImages: string[] = []
    const newFileObjects: File[] = []

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i]
      const reader = new FileReader()

      reader.onload = () => {
        const result = reader.result
        if (typeof result === 'string') {
          newImages.push(result)
          newFileObjects.push(file)

          if (i === fileList.length - 1) {
            // Actualiza el estado con las nuevas imágenes y archivos
            setImages((prevImages) => [...prevImages, ...newImages])
            setFileObjects((prevFiles) => [...prevFiles, ...newFileObjects])
          }
        }
      }

      reader.readAsDataURL(file)
    }
  }

  const handleImageRemove = async (
    index: number,
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()

    // Eliminar la imagen de Supabase si se ha subido
    const supabase = createClient()
    const fileName = fileObjects[index]?.name
    if (fileName !== '') {
      const { error } = await supabase.storage
        .from('your_bucket_name')
        .remove([fileName])
      if (error !== null) {
        console.error('Error removing file from Supabase:', error.message)
      }
    }

    // Eliminar la imagen de la vista previa
    const newImages = images.filter((_, i) => i !== index)
    const newFileObjects = fileObjects.filter((_, i) => i !== index)
    setImages(newImages)
    setFileObjects(newFileObjects)
  }

  return (
    <label className="flex h-auto flex-col gap-2 text-paragraph-regular text-neutral-paragraph grid-in-photos">
      {label}
      <div className="flex flex-wrap gap-2">
        <figure className="size-20">
          <img
            className="size-full cursor-pointer object-cover"
            src="/upload-photo.svg"
            alt=""
          />
        </figure>
        <input
          className="sr-only"
          type="file"
          name="photos"
          accept="image/*"
          multiple={multiple}
          onChange={handleImageChange}
        />
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative"
            style={{ width: '80px', height: '80px' }}
          >
            <img
              src={image}
              alt={`Preview ${index}`}
              className="size-full object-cover"
            />
            <button
              onClick={async (event) => {
                await handleImageRemove(index, event)
              }}
              className="absolute right-0 top-0 grid size-8 place-items-center bg-neutral-950/40 text-neutral-main-bg opacity-100 hover:bg-neutral-950/60 group-hover:opacity-100 md:opacity-0"
              style={{ transition: 'opacity 0.3s' }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="2"
                  y1="2"
                  x2="16"
                  y2="16"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="16"
                  y1="2"
                  x2="2"
                  y2="16"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </label>
  )
}
