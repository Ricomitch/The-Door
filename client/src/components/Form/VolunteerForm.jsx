import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  createVolunteer,
  updateVolunteer,
  getVolunteer,
  deleteVolunteer,
} from '../../services/formServices.js'
import { Formik } from 'formik'
import CheckboxInput from './CheckboxInput'
import flower4 from '../../assets/Form/flower4.svg'
import './VolunteerForm.css'

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
      <div className='shim'></div>
      <div className='form-body'>
        <div
          className='flower-4'
          style={{
            backgroundImage: `url(${flower4})`,
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            backgroundPositionY: '20%',
          }}
        >
          <div className='form-content'>
            <h1 className='volunteer-title'>Sign up to Volunteer</h1>
            
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
                  <div className='primary-data-section'>
                    <div className='primary-data-field'>
                      <label htmlFor='firstName'>First Name</label>
                      <input
                        type='text'
                        className='text'
                        id='firstName'
                        name='firstName'
                        onChange={props.handleChange}
                        value={props.values.firstName}
                      />
                    </div>

                    <div className='primary-data-field'>
                      <label htmlFor='lastName'>Last Name</label>
                      <input
                        type='text'
                        className='text'
                        id='lastName'
                        name='lastName'
                        onChange={props.handleChange}
                        value={props.values.lastName}
                      />
                    </div>

                    <div className='primary-data-field'>
                      <label htmlFor='phone'>Phone</label>
                      <input
                        type='text'
                        className='text'
                        id='phone'
                        name='phone'
                        onChange={props.handleChange}
                        value={props.values.phone}
                      />
                    </div>

                    <div className='primary-data-field'>
                      <label htmlFor='email'>Email</label>
                      <input
                        type='text'
                        className='text'
                        id='email'
                        name='email'
                        onChange={props.handleChange}
                        value={props.values.email}
                      />
                    </div>
                  </div>

                  <div className='checkbox-group' id='program-selection'>
                    <h2>Which programs would you like to assist with?</h2>
                  

                  <div
                    role='group'
                    className='checkbox-input-group'
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
                        value={
                          "Broome Street Academy \n (The Door's charter high school)"
                      }
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
                    <CheckboxInput
                      props={props}
                      name='programs'
                      value='LGBTQ'
                    />

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
                    </div>

                  <div className='checkbox-group' id='role-selection'>
                    <h2>What roles are you interested in?</h2>
                  </div>

                  <div
                    role='group'
                    aria-labelledby='checkbox-group'
                    id='role-input-group'
                  >
                    <CheckboxInput
                      props={props}
                      name='roles'
                      value='Volunteer'
                    />
                    <CheckboxInput
                      props={props}
                      name='roles'
                      value='Advocate'
                    />
                    <CheckboxInput props={props} name='roles' value='Mentor' />
                    <CheckboxInput
                      props={props}
                      name='roles'
                      value='Fundraiser'
                    />
                    <CheckboxInput
                      props={props}
                      name='roles'
                      value='Teach Class'
                    />
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
              <button
                onClick={() => {
                  deleteVolunteer(volunteerId)
                  history.push('/')
                }}
              >
                I changed my mind.
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default VolunteerForm
