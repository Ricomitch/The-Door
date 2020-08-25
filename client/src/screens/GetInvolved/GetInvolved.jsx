import React from 'react'
import HeroGetInvolved from '../../components/GetInvolved/HeroGetInvolved'
import StandWith from '../../components/shared/StandWith/StandWith.jsx'
import ActionSection from '../../components/GetInvolved/ActionSection.jsx'

function GetInvolved() {
  return (
    <div>
      <HeroGetInvolved />
      <StandWith screen='involved' />
      <ActionSection />
    </div>
  )
}

export default GetInvolved
