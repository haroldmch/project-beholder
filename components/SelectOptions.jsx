import React from 'react'

export default function SelectOptions({ items, callback, title, placeholder, name }) {
  return (
    <>
      <label>
          <p>{ title }</p>
          <select onChange={({target}) => {callback(target.value)}} defaultValue="" name="race">
            <option value="" disabled>{ placeholder }</option>
            {
              items.map( ({ id, name }) => (
                <option key={name} value={id}>{name}</option>
              ))
            }
          </select>
        </label>
    </>
  )
}
