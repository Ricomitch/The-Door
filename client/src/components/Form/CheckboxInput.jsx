import React from 'react'

function CheckboxInput({ props, name, value }) {
  return (
    <div>
      <label>
        <input
          type='checkbox'
          className='checkbox'
          name={name}
          value={value}
          checked={props.values[name].includes(value)}
          onChange={props.handleChange}
        />
        {value}
      </label>
    </div>
  )
}

export default CheckboxInput
