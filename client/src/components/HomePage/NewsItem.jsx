import React from 'react'
import Pride from '../../assets/Homepage/photo-1573225063823-21ec7ba08e64.jpeg'
import Cook from '../../assets/Homepage/ND5_0344_cropped.jpg'
import Grad from '../../assets/Homepage/Graduate.jpg'
 

function NewsItem() {
  return (
    <div>

        <img className='card1' src={Pride} alt='pride parade'  />
        <img className='card2' src={Cook} alt='cooking'  />
        <img className='card3' src={Grad} alt='graduation'  />
      
    </div>
  )
}

export default NewsItem
