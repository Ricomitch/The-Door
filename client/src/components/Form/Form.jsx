import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { createVolunteer, getVolunteer } from '../../services/formServices.js'

function Form({ mode, setFormStatus }) {
  const [volunteerGet, setVolunteerGet] = useState({})
  const [volunteerCreate, setVolunteerCreate] = useState({
    firstName: 'k',
    lastName: 'l',
    phone: 'm',
    email: 'n',
    programs: { volunteer: true },
    roles: { mentor: true }
  })
  //const [isCreated, setIsCreated] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    if (mode === 'edit') {
      async function fetchVolunteer() {
        const volunteer = await getVolunteer(id)
        setVolunteerGet(volunteer)
      }
      fetchVolunteer()
    }
  }, [id])

  function handleChange(event) {
    const { name, value } = event.target
    setVolunteerCreate({
      ...volunteerCreate,
      [name]: value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    console.log(volunteerCreate)
    const created = await createVolunteer(volunteerCreate)
    //setIsCreated({created})
    setFormStatus('submitted')
  }

  // if (isCreated) {
  //   return <Redirect to=
  // }

  return (
    <div className='create-form'>
      <h2>{mode} form</h2>
      <h1 className='sign-up-main-heading'>Sign up to Volunteer</h1>
      <div className='upper-form-container'>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className='upper-form-item'>
            <label className='sign-up-headings' htmlFor='first-name-input'>
              First Name
            </label>
            <br />
            <input
              id='first-name-input'
              name='firstName'
              type='text'
              value={volunteerGet.firstName && volunteerGet.firstName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  )
}

export default Form
