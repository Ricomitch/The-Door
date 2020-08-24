import React from 'react'
import './ImpactHomePage.css'
import ImpactImage from '../../assets/Homepage/slack-imgs.png'

function ImpactHomePage() {
  return (
    <div className='impact-home-div'>
      <div className="see-your-impact">
        <div className='gradient-block'>
          <div
            className='img-wrapper'
            style={{
              backgroundImage: `url(${ImpactImage})`,
              backgroundSize: 'auto',
              width: '1201px',
              height: '583px',
              zIndex: '1',
            }}
          ></div>
    
        </div>
      </div>
    </div>
  )
}

export default ImpactHomePage
