import React from 'react'
import './ImpactCard.css'

function ImpactCard({ text, image }) {
  
  const impactClass = text.impactClass
  
  return (
    <div className='impact-card'>
      <div className='impact-container'>
        <div className='impact-image-container'>
          <img src={image} className={`impact-card-image ${impactClass}`} alt={text.header} />
        </div>
        <div className='impact-text-container'>
          <h5 className='impact-card-header'>{text.header}</h5>
          <p className='impact-card-content'>{text.content}</p>
          <div className='impact-button'>{text.buttonValue}</div>
        </div>
      </div>
    </div>
  )
}

export default ImpactCard
