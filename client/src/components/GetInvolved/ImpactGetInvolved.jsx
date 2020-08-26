import React from 'react'
import './ImpactGetInvolved.css'
import ImpactCard from './ImpactCard.jsx'
import impactTexts from '../../assets/GetInvolved/impactText.json'
import impactCardImage1 from '../../assets/GetInvolved/photo-1588822534638-028d5ddc07ac.jpeg'
import impactCardImage2 from '../../assets/GetInvolved/photo-1492462543947-040389c4a66c.jpeg'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'

function ImpactGetInvolved() {
  return (
    <div className='getInvolved-impact-section'>
      <div className='gradient-block-get-involved'></div>
      <h1 className='see-your-impact'>See Your Impact</h1>
      <div className='left-arrow-getInvolved'>
        <DoubleArrowIcon style={{ color: '#1C4D73', transform: 'scaleX(-1)' }} />
      </div>
      <div className='getInvolved-impact-card1'>
        <ImpactCard image={impactCardImage1} text={impactTexts.ImpactCard1} />
      </div>
      <div className='getInvolved-impact-card2'>
        <ImpactCard image={impactCardImage2} text={impactTexts.ImpactCard2} />
      </div>
      <div className='right-arrow-getInvolved'>
        <DoubleArrowIcon style={{ color: '#1C4D73'}}/>
      </div>
    </div>
  )
}

export default ImpactGetInvolved
