import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { createVolunteer, getVolunteer } from '../../services/formServices.js'
import { Formik, Field, Form } from 'formik'

function VolunteerForm({ mode, setFormStatus, setVolunteerId }) {
  const [volunteer, setVolunteer] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    programs: [],
    roles: [],
  })
  const { id } = useParams()

  useEffect(() => {
    if (mode === 'edit') {
      async function fetchVolunteer() {
        const volunteer = await getVolunteer(id)
        setVolunteer(volunteer)
      }
      fetchVolunteer()
    }
  }, [id])

  return (
    <>
      <h1>Sign up to Volunteer</h1>
      <Formik
        initialValues={volunteer}
        onSubmit={async (value) => {
          console.log(value)
          const volunteer = await createVolunteer(value)
          setFormStatus('submitted')
          setVolunteerId(volunteer._id)
        }}
      >
        <Form>
          <label htmlFor='firstName'>First Name</label>
          <Field id='firstName' name='firstName' placeholder='First Name' />

          <label htmlFor='lastName'>Last Name</label>
          <Field id='lastName' name='lastName' placeholder='Last Name' />

          <label htmlFor='phone'>Phone</label>
          <Field id='phone' name='phone' placeholder='(123) 456-7890' />

          <label htmlFor='email'>Email</label>
          <Field id='email' name='email' placeholder='youremail@domain.xyz' />

          <div className='checkbox-group' id='program-selection'>
            Which programs would you like to assist with?
          </div>

          <div role='group' aria-labelledby='checkbox-group' id='program-input-group'>
            <label>
              <Field type='checkbox' name='programs' value='Creative Arts' />
              Creative Arts
            </label>

            <label>
              <Field type='checkbox' name='programs' value='Career Services' />
              Career Services
            </label>

            <label>
              <Field type='checkbox' name='programs' value='LGBTQ' />
              LGBTQ
            </label>
          </div>
          
          <div className='checkbox-group' id='role-selection'>
            What roles are you interested in?
          </div>

          <div role='group' aria-labelledby='checkbox-group' id='role-input-group'>
            <label>
              <Field type='checkbox' name='roles' value='volunteer' />
              Volunteer
            </label>

            <label>
              <Field type='checkbox' name='roles' value='mentor' />
              Mentor
            </label>

            <label>
              <Field type='checkbox' name='roles' value='teach-class' />
              Teach Class
            </label>
          </div>

          <button className='submit-button' type='submit'>
            Submit
          </button>
        </Form>
      </Formik>
    </>

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
  )
}

export default VolunteerForm
