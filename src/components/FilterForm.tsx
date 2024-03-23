'use client'
import Button from './Button'
import InputSearch from './InputSearch'

export default function FilterForm() {
  return (
    <form className="right-0 top-12 flex flex-col gap-8 sm:absolute sm:gap-8 sm:bg-neutral-main-bg sm:p-8 sm:shadow-md">
      <fieldset className="flex flex-col gap-6">
        <label className="flex flex-col gap-3 text-paragraph-regular font-medium text-neutral-title">
          Filtrar por precio
          <input
            className="flex h-0.5 w-full cursor-pointer appearance-none flex-wrap content-center rounded-full bg-neutral-paragraph accent-primary-default outline-none"
            type="range"
            min={200}
            max={800}
            step={50}
            list="range"
          />
          <datalist id="range" className="flex justify-between">
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="200"
              label="200"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="250"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="300"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="350"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="400"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="450"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="500"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="550"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="600"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="650"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="700"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="750"
            ></option>
            <option
              className="text-paragraph-xsmall text-neutral-title"
              value="800"
              label="800"
            ></option>
          </datalist>
        </label>
        <label className="flex flex-col gap-3 text-paragraph-regular font-medium text-neutral-title">
          Filtrar por palabra clave
          <InputSearch placeholder="Ingresa la palabra que deseas buscar" />
        </label>
      </fieldset>
      <section className="flex justify-end sm:justify-center">
        <Button
          variant="cuaternary"
          size="small"
          hasText="yes"
          text="Aplicar"
          width="w-auto"
        />
      </section>
    </form>
  )
}
