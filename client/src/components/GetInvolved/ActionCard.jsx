import React from 'react'
import './ActionCard.css'
import { Link } from 'react-router-dom'

function ActionCard({ image, card, text }) {
  return (
    <>
      {card === 'action-volunteer' ? (
        <Link to='/sign-up'>
          <div className='action-card'>
            <img src={image} alt={card} className={`action-image ${card}`} />

            <div className='action-card-banner'>
              <h2 className='action-text'>{text.title}</h2>
              <p className='action-hover-text'>{text.content}</p>
            </div>
          </div>
        </Link>
      ) : (
        <div className='action-card'>
          <img src={image} alt={card} className={`action-image ${card}`} />

          <div className='action-card-banner'>
            <h2 className='action-text'>{text.title}</h2>
            <p className='action-hover-text'>{text.content}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ActionCard
