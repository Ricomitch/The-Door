import React from 'react'
import Rectangle143 from '../shared/Rectangle143/Rectangle143'
import HeroFormPhoto from '../../assets/Form/photo-1582213782179-e0d53f98f2ca.jpeg'  
import copyJSON from '../../assets/Form/form.json'
import './HeroForm.css'

function HeroForm() {
  return (
    <div className="HeroForm">
      <div className="heroFormRectangle143">
        <Rectangle143 copy={copyJSON.FormHeroRectangle143} />
        </div>
      <div
            className='img-wrapper-2'
            style={{
              backgroundImage: `url(${HeroFormPhoto})`,
              backgroundSize: 'cover',
              width: '1201px',
              height: '470px',
              zIndex: '0',
              backgroundPositionY: '50%'
            }}
      ></div>
     
    </div>
  )
}

export default HeroForm
