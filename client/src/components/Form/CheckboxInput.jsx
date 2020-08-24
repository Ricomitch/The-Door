import React from 'react'

function CheckboxInput({ props, type, value }) {
  return (
    <div>
      <label>
        <input
          type='checkbox'
          name={type}
          value={value}
          checked={props.values.programs.includes(value)}
          onChange={props.handleChange}
        />
        {value}
      </label>
    </div>
  )
}

export default CheckboxInput
