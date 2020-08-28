import React from 'react'
import './StandWith.css'

function StandWith({ screen }) {
  const addlStandWithClass =
    screen === 'involved' ? 'sw-involved' : 'sw-volunteer'

  return (
    <div className={`stand-with-box ${addlStandWithClass}`}>
      <h2 className='stand-with-text'>#STANDWITHTHEDOOR</h2>
    </div>
  )
}

export default StandWith
