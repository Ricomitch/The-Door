import React from 'react'
import './CheckboxInput.css'

function CheckboxInput({ props, name, value }) {
  //  REACT NEWLINE HANDLING VIA <BR /> REPLACEMENT AT RENDER TIME
  // CREDIT TO DARIO GHILARDI
  //  https://darioghilardi.com/handling-newlines-with-react/

  const newlineHandler = (value) => {
    if (value.includes('\n')) {
      return value.split('\n').map((value, index) => {
        return (
          <span key={index}>
            {value}
            <br />
          </span>
        )
      })
    } else {
      return <span>{value}</span>
    }
  }

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
      <label>{newlineHandler(value)}</label>
    </div>
  )
}

export default CheckboxInput
