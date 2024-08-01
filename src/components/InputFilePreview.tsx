'use client'

import { STORAGE_URL } from '@/lib/config'
import { useState, type ChangeEvent } from 'react'

export default function InputFilePreview({
  label = 'Agregar fotos',
  multiple = true,
  previusImages = [],
}: {
  label?: string
  multiple?: boolean
  previusImages?: string[]
}) {
  const [images, setImages] = useState<string[]>([])
  const [previusImagesLocal, setPreviusImagesLocal] =
    useState<string[]>(previusImages)

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files
    if (fileList === null) return

    const imagesArray: string[] = []

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i]
      const reader = new FileReader()

      reader.onload = () => {
        const result = reader.result
        if (typeof result === 'string') {
          imagesArray.push(result)
          if (imagesArray.length === fileList.length) {
            setImages([...imagesArray])
          }
        }
      }

      reader.readAsDataURL(file)
    }
  }

  return (
    <label className="flex h-auto flex-col gap-2 text-paragraph-regular text-neutral-paragraph grid-in-photos">
      {label}
      <div className="flex flex-wrap gap-2">
        <figure className="size-20">
          <img
            className="size-full object-cover"
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

        {previusImagesLocal.map((image, index) => (
          <div key={index}>
            <img
              src={`${STORAGE_URL}photos-listings/${image}`}
              alt={`Preview ${index}`}
              style={{ width: '80px', height: '80px' }}
              className="hover:opacity-50"
              onClick={(e) => {
                e.preventDefault()
                setPreviusImagesLocal((previusImagesLocal) =>
                  previusImagesLocal.filter((_, i) => i !== index),
                )
              }}
            />
          </div>
        ))}

        <input
          type="hidden"
          name="previusImages"
          value={previusImagesLocal.join(',')}
        />

        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Preview ${index}`}
              style={{ width: '80px', height: '80px' }}
              className="hover:opacity-50"
              onClick={(e) => {
                e.preventDefault()
                setImages((images) => images.filter((_, i) => i !== index))
              }}
            />
          </div>
        ))}
      </div>
    </label>
  )
}
