import React, { useState, useEffect } from 'react'
import { createVolunteer, getVolunteer } from '../../services/formServices.js'
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
          const volunteer = await createVolunteer(value)
          await setVolunteerId(volunteer._id)
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
              <CheckboxInput props={props} type='programs' value='Health Services' />
              <CheckboxInput props={props} type='programs' value='College and Academic Supports' />
              <CheckboxInput props={props} type='programs' value='Creative Arts' /> 
              <CheckboxInput props={props} type='programs' value={'Broome Street Academy (The Door\'s charter high school)'} />
              <CheckboxInput props={props} type='programs' value='Career Services' />
              <CheckboxInput props={props} type='programs' value='Runaway and Homeless Youth' />
              <CheckboxInput props={props} type='programs' value='High School Equivalency (or GED)' />
              <CheckboxInput props={props} type='programs' value='Mental Health' />
              <CheckboxInput props={props} type='programs' value='LGBTQ' />
              <CheckboxInput props={props} type='programs' value='Legal Services' />
              <CheckboxInput props={props} type='programs' value={'Hmmm I\'m not sure yet..'} />
            </div>

            <div className='checkbox-group' id='role-selection'>
              What roles are you interested in?
            </div>

            <div
              role='group'
              aria-labelledby='checkbox-group'
              id='role-input-group'
            >
              <label>
                <input type='checkbox' name='roles' value='volunteer' />
                Volunteer
              </label>

              <label>
                <input type='checkbox' name='roles' value='mentor' />
                Mentor
              </label>

              <label>
                <input type='checkbox' name='roles' value='teach-class' />
                Teach Class
              </label>
            </div>

            <button className='submit-button' type='submit'>
              Submit
            </button>
          </form>
        )}
      </Formik>
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
