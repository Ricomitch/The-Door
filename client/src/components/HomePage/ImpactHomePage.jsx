import React from 'react'
import './ImpactHomePage.css'
import Rectangle143 from '../shared/Rectangle143/Rectangle143'
import ImpactImage from '../../assets/Homepage/slack-imgs.png'
import copyJSON from '../../assets/Homepage/copy.json'

function ImpactHomePage() {
  return (
    <div className='impact-home-div'>
      <div className='homePageImpactRectangle143'>
        <Rectangle143 copy={copyJSON.HomepageImpactRectangle143} />
      </div>

      <div className='gradient-block'></div>
      <div className='img-wrapper'></div>
    </div>
  )
}

export default ImpactHomePage
