import React from 'react'
import './Rectangle143.css'

function Rectangle143({copy}) {
  return (
    <div className='rectangle143'>
      <h2 className='rectangle-header'>{copy.header}</h2>
      {copy.subheader && <h3>{copy.subheader}</h3>}
      <p className='rectangle-content'>{copy.content}</p>
      <button className='rectangle-button'><span className='button-words'>{copy.buttonValue}</span></button>
    </div>
  )
}

export default Rectangle143



