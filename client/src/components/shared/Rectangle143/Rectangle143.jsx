import React from 'react'
import './Rectangle143.css'

function Rectangle143({ copy }) {
  
  const addlClass = copy.subheader ? 'subheader-class' : ''

  return (
    <div className={`rectangle143 ${addlClass}`}>
      <h2 className='rectangle-header'>{copy.header}</h2>
      {copy.subheader && <h3 className='rectangle-subheading'>{copy.subheader}</h3>}
      <p className='rectangle-content'>{copy.content}</p>
      <button className='rectangle-button'><span className='button-words'>{copy.buttonValue}</span></button>
    </div>
  )
}

export default Rectangle143



