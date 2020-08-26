import React from 'react'
import './ActionCard.css'

function ActionCard({image, card, text}) {
  return (
    <div className='action-card'>
      <img src={image} alt={card} className={`action-image ${card}`}/>
      <div className='action-card-banner'>
        <h2 className='action-text'>{text.title}</h2>
        <p className='action-hover-text'>{text.content}</p>
      </div>
    </div> 
  )
}

export default ActionCard


