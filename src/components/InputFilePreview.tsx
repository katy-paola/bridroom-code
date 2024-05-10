'use client'

import { useState, type ChangeEvent } from 'react'

export default function InputFilePreview() {
  const [images, setImages] = useState<string[]>([])

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
      Agregar fotos:
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
        multiple
        onChange={handleImageChange}
      />
      <div className="flex flex-wrap gap-2">
        {images.map((image, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img
              src={image}
              alt={`Preview ${index}`}
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
          </div>
        ))}
      </div>
    </label>
  )
}
