import React from 'react'
import './ProgressBar.css'

const Progressbar = (props) => {
  const { completed } = props;

  return (
    <div className= 'progress-bar-container'>
      <div className='filler' style={{ width: `${completed}%`, backgroundColor: "black" }}>
        {/* <span className= 'labelStyles'>{`${completed}`} </span> */}
      </div>
    </div>
  )
}

export default Progressbar

