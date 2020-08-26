import React from 'react'
import './NewsItem.css'
 

function NewsItem({card, image}) {
  return (
    <div className='news-cards'>

      <img className='card-image' src={image} /> 
      <div className='card-items'>
      <h2 className='card-header'>{card.header}</h2>
        <p className='card-content'>{card.content}</p>
        {/* <div className='cardb'> */}
          <h3 className='card-button'>{card.buttonValue}</h3>
          {/* </div> */}
      </div>
    </div>
  )
}

export default NewsItem
