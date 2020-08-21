import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { createVolunteer } from '../../services/formServices.js'

function Form({ mode }) {
  if (mode === 'sign-up') {
    return (
      <div className='create-form'>
        <h2>{mode} form</h2>
        <h1 className='sign-up-main-heading'>Sign up to Volunteer</h1>
        <div className='upper-form-container'>
          <div className='upper-form-item'>
            <label className='sign-up-headings' for='first-name-input'>First Name</label><br />
            <input id='first-name-input' type='text' />
          </div>
        </div>
      </div>
    )
  } else if (mode === 'edit') {
    return (
      <div>
        <h2>{mode} form</h2>
      </div>
    )
  }

  return <h2>Error</h2>
}

export default Form
