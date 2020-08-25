import React from 'react'
import './CheckboxInput.css'

function CheckboxInput({ props, name, value }) {
    
  const newline = (value) => value.includes('\n')
      ? value.split('\n')
      : null
  
  newline(value)
  
  return (
    <div className='checkbox-input-area'>
      <input
        type='checkbox'
        className='checkbox'
        name={name}
        value={value}
        checked={props.values[name].includes(value)}
        onChange={props.handleChange}
      />
      <span className='custom-checkmark'></span>
      <label>{value}</label>
    </div>
  )
}

export default CheckboxInput
