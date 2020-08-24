import React from 'react'
import moduleName from 'react-router-dom'

function Modal({ show, onClose }) {
  if (!show) {
    return null
  }
  return (
    <div className='backdrop'>
      <div className='modal'>
        <h1 className='submission-received'>Submission Received</h1>
        <p className='p-line1'>
          Thank you so much for expressing your interest in supporting The Door.
        </p>
        <p className='p-line2'>
          Your support helps to make our mission possible as we strive to help
          all youth realize, and reach their fullest potential.
        </p>
        <p className='p-line-3'>
          A member of our staff will contact you personally to discuss next
          steps!
        </p>
        <button id='modal-return-home' onClick={onClose}>Return Home</button>
      </div>
    </div>
  )
}

export default Modal
