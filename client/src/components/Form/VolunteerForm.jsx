import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  createVolunteer,
  updateVolunteer,
  getVolunteer,
  deleteVolunteer
} from '../../services/formServices.js'
import { Formik } from 'formik'
import CheckboxInput from './CheckboxInput'

function VolunteerForm({
  formStatus,
  setFormStatus,
  setVolunteerId,
  volunteerId,
}) {
  const [volunteer, setVolunteer] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    programs: [],
    roles: [],
  })
  
  const history = useHistory()
  
  useEffect(() => {
    if (formStatus === 'edit') {
      async function fetchVolunteer() {
        const volunteer = await getVolunteer(volunteerId)
        setVolunteer(volunteer)
      }
      fetchVolunteer()
    }
  }, [volunteerId])

  return (
    <>
      <h1>{volunteer._id}</h1>
      <h1>Sign up to Volunteer</h1>

      <Formik
        initialValues={volunteer}
        enableReinitialize
        onSubmit={async (value) => {
          console.log(value)
          let response
          if (formStatus === 'edit') {
            response = await updateVolunteer(volunteerId, value)
          } else {
            response = await createVolunteer(value)
          }
          await setVolunteerId(response._id)
          setFormStatus('submitted')
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='First Name'
              onChange={props.handleChange}
              value={props.values.firstName}
            />

            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Last Name'
              onChange={props.handleChange}
              value={props.values.lastName}
            />

            <label htmlFor='phone'>Phone</label>
            <input
              type='text'
              id='phone'
              name='phone'
              placeholder='(123) 456-7890'
              onChange={props.handleChange}
              value={props.values.phone}
            />

            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='youremail@domain.xyz'
              onChange={props.handleChange}
              value={props.values.email}
            />

            <div className='checkbox-group' id='program-selection'>
              Which programs would you like to assist with?
            </div>

            <div
              role='group'
              aria-labelledby='checkbox-group'
              id='program-input-group'
            >
              <CheckboxInput
                props={props}
                name='programs'
                value='Health Services'
              />
              <CheckboxInput
                props={props}
                name='programs'
                value='College and Academic Supports'
              />
              <CheckboxInput
                props={props}
                name='programs'
                value='Creative Arts'
              />
              <CheckboxInput
                props={props}
                name='programs'
                value={"Broome Street Academy (The Door's charter high school)"}
              />
              <CheckboxInput
                props={props}
                name='programs'
                value='Career Services'
              />
              <CheckboxInput
                props={props}
                name='programs'
                value='Runaway and Homeless Youth'
              />
              <CheckboxInput
                props={props}
                name='programs'
                value='High School Equivalency (or GED)'
              />
              <CheckboxInput
                props={props}
                name='programs'
                value='Mental Health'
              />
              <CheckboxInput props={props} name='programs' value='LGBTQ' />
              <CheckboxInput
                props={props}
                name='programs'
                value='Legal Services'
              />
              <CheckboxInput
                props={props}
                name='programs'
                value={"Hmmm I'm not sure yet.."}
              />
            </div>

            <div className='checkbox-group' id='role-selection'>
              What roles are you interested in?
            </div>

            <div
              role='group'
              aria-labelledby='checkbox-group'
              id='role-input-group'
            >
              <CheckboxInput props={props} name='roles' value='Volunteer' />
              <CheckboxInput props={props} name='roles' value='Advocate' />
              <CheckboxInput props={props} name='roles' value='Mentor' />
              <CheckboxInput props={props} name='roles' value='Fundraiser' />
              <CheckboxInput props={props} name='roles' value='Teach Class' />
              <CheckboxInput
                props={props}
                name='roles'
                value={"Hmmm I'm not sure yet.."}
              />
            </div>

            <button className='submit-button' type='submit'>
              {formStatus === 'edit' ? 'Update' : 'Submit'}
            </button>
          </form>
        )}
      </Formik>
      {formStatus === 'edit' && (
        <button onClick={() => {
          deleteVolunteer(volunteerId)
          history.push('/')
        }}>I changed my mind.</button>
      )}
    </>
  )
  // <div className='create-form'>
  //   <h2>{mode} form</h2>
  //   <h1 className='sign-up-main-heading'>Sign up to Volunteer</h1>
  //   <div className='upper-form-container'>
  //     <form onSubmit={(e)=>handleSubmit(e)}>
  //       <div className='upper-form-item'>
  //         <label className='sign-up-headings' htmlFor='first-name-input'>
  //           First Name
  //         </label>
  //         <br />
  //         <input
  //           id='first-name-input'
  //           name='firstName'
  //           type='text'
  //           value={volunteer.firstName && volunteer.firstName}
  //           onChange={(e) => handleChange(e)}
  //         />
  //       </div>
  //       <input type='submit' value='Submit' />
  //     </form>
  //   </div>
  // </div>
}

export default VolunteerForm
