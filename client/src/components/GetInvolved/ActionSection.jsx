import React from 'react'
import './ActionSection.css'
import ActionCard from './ActionCard'

import actionVolunteer from '../../assets/GetInvolved/photo-1531482615713-2afd69097998.jpeg'

function ActionSection() {
  return (
    <div className='action-section'>
      <ActionCard image={actionVolunteer} card='action-volunteer' text='Volunteer' />
    </div>
  )
}

export default ActionSection
