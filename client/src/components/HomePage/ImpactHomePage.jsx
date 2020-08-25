import React from 'react'
import './ImpactHomePage.css'
import Rectangle143 from '../shared/Rectangle143/Rectangle143'
import ImpactImage from '../../assets/Homepage/slack-imgs.png'
import copyJSON from '../../assets/Homepage/copy.json'

function ImpactHomePage() {
  return (
    <div className='impact-home-div'>
      
        <Rectangle143 copy={copyJSON.HomepageImpactRectangle143} />
        
        <div className='gradient-block'>
        </div> 
        <div
            className='img-wrapper'
            style={{
              backgroundImage: `url(${ImpactImage})`,
              backgroundSize: 'cover',
              width: '1201px',
              height: '583px',
              zIndex: '1',
              backgroundPositionY: '50%'
            }}
      >
          </div>
        </div>
  )
}

export default ImpactHomePage
