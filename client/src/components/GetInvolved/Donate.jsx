import React, { useState } from 'react'
import './Donate.css'
import handWorld from '../../assets/GetInvolved/Charity.png'
import Progressbar from './ProgressBar'
import { useEffect } from 'react'

function Donate() {
  const [amount, updateAmount] = useState(139650)
  
  let percent

  const commaThousands = () => {
    const amountArray = String(amount).split('')
    const start = amountArray.length - 3
    amountArray.splice(start, 0, ',')
    return amountArray.join('')
  }

  percent = (amount / 200000) * 100
  
  commaThousands()
    
  const donateIncrease = () => {
    updateAmount(prevAmount=>prevAmount+=500)
  }
  
  if (percent !== undefined) {
    return (
      <div className='donate-div'>
        <div className='donate-triangle'></div>
        <h2 className='donate-heading'>
          LET<span className='apostrophe'>'</span>S HIT THIS
        <br />
        MONTH<span className='apostrophe'>'</span>S GOAL
      </h2>
        <img
          src={handWorld}
          className='donate-graphic'
          alt='a hand holding the world'
        />
        <h2 className='numbers'>
          <span className='amt-toward'>{`${commaThousands()}`}/</span>
          <span className='amt-of'>$200,000</span>
        </h2>
        {/* <div className='goal-line'></div> */}
        <Progressbar completed={percent} />
        <div className='donate-button' onClick={donateIncrease}>Donate Now</div>
      </div>

    )
  }
  else return <h1>loading</h1>
}
export default Donate
