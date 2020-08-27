import React from 'react'
import HeroGetInvolved from '../../components/GetInvolved/HeroGetInvolved'
import ActionSection from '../../components/GetInvolved/ActionSection.jsx'
import ImpactGetInvolved from '../../components/GetInvolved/ImpactGetInvolved.jsx'
import Donate from '../../components/GetInvolved/Donate.jsx'

function GetInvolved() { 
  return (
    <div>
      <HeroGetInvolved />
      <ActionSection />
      <ImpactGetInvolved />
      <Donate />
    </div>
  )
}

export default GetInvolved
