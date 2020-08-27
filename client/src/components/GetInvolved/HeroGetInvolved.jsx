import React from 'react'
import Rectangle143 from '../shared/Rectangle143/Rectangle143'
import HeroGetInvolvedPhoto from '../../assets/GetInvolved/photo-1560252829-804f1aedf1be.jpeg'  
import copyJSON from '../../assets/GetInvolved/getInvolved.json'
import './HeroGetInvolved.css'


function HeroGetInvolved() {
  return ( 
    <div className="HeroGet">
      <div className="HeroGetRectangle143">
        <Rectangle143 copy={copyJSON.GetInvolvedRectangle143} />
        
        </div>
      <div
            className='img-wrapper'
            style={{
              backgroundImage: `url(${HeroGetInvolvedPhoto})`,
              backgroundSize: 'cover',
              width: '1301px',
              height: '630px',
              zIndex: '0',
              backgroundPositionY: '50%'
            }}
      ></div>
     
    </div>
  )
}

export default HeroGetInvolved
