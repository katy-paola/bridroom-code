'use client'
import Button from './Button'

export default function FilterForm() {
  return (
    <form>
      <fieldset>
        <label className="flex flex-col">
          Filtrar por precio
          <input
            type="range"
            min={200}
            max={800}
            step={50}
            list="range"
            onChange={(e) => {
              console.log(e.target.value)
            }}
          />
          <datalist id="range" className="flex justify-between">
            <option value="200" label="200"></option>
            <option value="250"></option>
            <option value="300"></option>
            <option value="350"></option>
            <option value="400"></option>
            <option value="450"></option>
            <option value="500"></option>
            <option value="550"></option>
            <option value="600"></option>
            <option value="650"></option>
            <option value="700"></option>
            <option value="750"></option>
            <option value="800" label="800"></option>
          </datalist>
        </label>
        <label>
          Filtrar por palabra clave
          <input
            type="search"
            placeholder="Ingresa la palabra que quieras buscar"
          />
        </label>
      </fieldset>
      <Button
        type="cuaternary"
        size="small"
        hasText="yes"
        text="Aplicar"
        width="w-auto"
      />
    </form>
  )
}
