import React from 'react'
import './ImpactGetInvolved.css'
import ImpactCard from './ImpactCard.jsx'
import impactTexts from '../../assets/GetInvolved/impactText.json'
import impactCardImage1 from '../../assets/GetInvolved/photo-1588822534638-028d5ddc07ac.jpeg'
import impactCardImage2 from '../../assets/GetInvolved/photo-1492462543947-040389c4a66c.jpeg'


function ImpactGetInvolved() {
  return (
    <div className='impact-get-involved-div'>
      <ImpactCard image={impactCardImage1} text={impactTexts.ImpactCard1} />
    </div>
  )
}

export default ImpactGetInvolved
