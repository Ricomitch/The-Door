import React, { useState, useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { createVolunteer, getVolunteer } from '../../services/formServices.js'
const db = require

function Form({ mode }) {

  const [volunteer, updateVolunteer] = useState({})
 
  const { id } = useParams()
  

  useEffect(() => {
    if (mode === 'edit') {
      async function fetchVolunteer() {
        const volunteer = await getVolunteer(id)
        updateVolunteer(volunteer)
      }
      fetchVolunteer()
    }
  }, [id])

 
  return (
      
      <div className='create-form'>
        <h2>{mode} form</h2>
        <h1 className='sign-up-main-heading'>Sign up to Volunteer</h1>
        <div className='upper-form-container'>
          <div className='upper-form-item'>
            <label className='sign-up-headings' htmlFor='first-name-input'>First Name</label><br />
            <input id='first-name-input' type='text' value={volunteer.firstName && volunteer.firstName}/>
          </div>
        </div>
      </div>
    )
}

export default Form
