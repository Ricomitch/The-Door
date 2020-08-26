import React from 'react'
import './Donate.css'
import handWorld from '../../assets/GetInvolved/Charity.png'

function Donate() {
  return (
    <div className='donate-div'>
      <div className='donate-triangle'></div>
      <h2 className='donate-heading'>LET<span className='apostrophe'>'</span>S HIT THIS<br />MONTH<span className='apostrophe'>'</span>S GOAL</h2>
      <img src={handWorld} className='donate-graphic' alt='a hand holding the world' />
      <h2 className='numbers'><span className='amt-toward'>$139,650/</span><span className='amt-of'>$200,000</span></h2>
      <div className='goal-line'></div>
      <div className='donate-button'>Donate Now</div>
    </div>
  )
}

export default Donate
