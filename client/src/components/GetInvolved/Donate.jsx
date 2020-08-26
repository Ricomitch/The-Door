import React from 'react'
import './Donate.css'
import handWorld from '../../assets/GetInvolved/Charity.png'

function Donate() {
  return (
    <div className='donate-div'>
      <div className='donate-triangle'></div>
      <h2 className='donate-heading'>LET<span className='apostrophe'>'</span>S HIT THIS<br />MONTH<span className='apostrophe'>'</span>S GOAL</h2>
      <img src={handWorld} className='donate-graphic' alt='a hand holding the world'/>
    </div>
  )
}

export default Donate
