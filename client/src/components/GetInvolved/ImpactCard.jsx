import React from 'react'
import './ImpactCard.css'

function ImpactCard({ text, image }) {
  return (
    <div className='impact-card'>
      <div className='impact-image-container'>
        <img src={image} className='impact-card-image' />
      </div>
      <div className='impact-text-container'>
        <h5 className='impact-card-header'>{text.header}</h5>
        <p className='impact-card-content'>{text.content}</p>
        <div className='impact-button'>{text.buttonValue}</div>
      </div>
    </div>
  )
}

export default ImpactCard
