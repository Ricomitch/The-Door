import React from 'react'
import './ActionSection.css'
import ActionCard from './ActionCard'
import StandWith from '../../components/shared/StandWith/StandWith.jsx'

import actionVolunteer from '../../assets/GetInvolved/photo-1531482615713-2afd69097998.jpeg'
import flowerHands from '../../assets/GetInvolved/photo-1505455184862-554165e5f6ba.jpeg'
import calendar from '../../assets/GetInvolved/photo-1506784365847-bbad939e9335.jpeg'
import newsletter from '../../assets/GetInvolved/photo-1579332190845-76263130d826.jpeg'

import actionText from '../../assets/GetInvolved/actionCardCopy.json'


function ActionSection() {
  return (
    <div className='involved-hero2'>
      <StandWith screen='involved' />
      <div className='action-section'>
        <ActionCard
          image={actionVolunteer}
          card='action-volunteer'
          text={actionText.volunteer}
        />
        <ActionCard
          image={flowerHands}
          card='way-to-give'
          text={actionText.wayToGive}
        />
        <ActionCard
          image={calendar}
          card='events'
          text={actionText.events}
        />
        <ActionCard
          image={newsletter}
          card='newsletter'
          text={actionText.newsletter}
        />
      </div>
      <div className='action-triangle'></div>
    </div>
  )
}

export default ActionSection
