import React from 'react'
import './ProgressBar.css'
import '../GetInvolved/Donate.css'

const Progressbar = (props) => {
  const { completed } = props

  return (
    <div className='progress-bar-container'>
      <div
        className='filler'
        style={{ width: `${completed}%`, backgroundColor: 'black' }}></div>
    </div>
  )
}

export default Progressbar
