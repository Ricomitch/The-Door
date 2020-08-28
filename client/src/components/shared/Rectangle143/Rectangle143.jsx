import React from 'react'
import './Rectangle143.css'
import { Link } from 'react-router-dom'

function Rectangle143({ copy }) {
  const addlClass = copy.subheader ? 'subheader-class' : ''
  const addlButtonClass = copy.subheader ? 'subheader-button' : ''
  const addlHeadingClass = copy.subheader ? 'subheader-heading' : ''
  const noButtonClass = copy.buttonValue === null ? 'no-button' : ''
  let volunteerButton = null
  if (typeof copy.buttonValue === 'string') {
    volunteerButton = copy.buttonValue.includes('Volunteer')
  }
  let getInvolvedHeading
  let getInvolvedContent
  if (copy.content.includes('blessed')) {
    getInvolvedHeading = 'get-involved-heading'
    getInvolvedContent = 'get-involved-content'
  }

  return (
    <div className={`rectangle143 ${addlClass}`}>
      <h2
        className={`rectangle-header ${addlHeadingClass} ${getInvolvedHeading}`}>
        {copy.header}
      </h2>
      {copy.subheader && (
        <h3 className='rectangle-subheading'>{copy.subheader}</h3>
      )}
      <p className={`rectangle-content ${getInvolvedContent}`}>
        {copy.content}
      </p>
      {volunteerButton ? (
        <Link to='/sign-up' className='rectangle-link'>
          <div
            className={`rectangle-button  ${addlButtonClass} ${noButtonClass}`}>
            <span className='button-words'>{copy.buttonValue}</span>
          </div>
        </Link>
      ) : (
        <div className={`rectangle-button ${addlButtonClass} ${noButtonClass}`}>
          <span className='button-words'>{copy.buttonValue}</span>
        </div>
      )}
    </div>
  )
}

export default Rectangle143
