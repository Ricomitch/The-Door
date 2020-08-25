import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import { getVolunteer } from '../../services/formServices.js'

function Confirmation({ setFormStatus, volunteerId, setModalOpen }) {
  const [volunteer, setVolunteer] = useState({})
  

  useEffect(() => {
    async function fetchVolunteer(volunteerId) {
      const volunteerGotten = await getVolunteer(volunteerId)
      setVolunteer(volunteerGotten)
    }
    fetchVolunteer(volunteerId)
  }, [])

  let programs = volunteer.programs
  let roles = volunteer.roles

  if (programs) {
    return (
      <div className='confirmation-component'>
        {/* <Modal show={modalOpen}
        // onClose={() => setModalOpen(prev => !prev)}
        /> */}
        
        <h2>Confirmation</h2>
        <h3>{volunteer.firstName}</h3>
        <h4>{volunteer.phone}</h4>
        <h4>{volunteer.email}</h4>
        <h4>Programs</h4>
        {programs.map((program, index) => (
          <h4 key={index}>{program}</h4>
        ))}
        <h4>Roles</h4>
        {roles.map((role, index) => (
          <h4 key={index}>{role}</h4>
        ))}

        <button onClick={() => setModalOpen(prev => !prev)}>Confirm</button>
        <button onClick={() => setFormStatus('edit')}>Edit</button>
      </div>
    )
  } else {
    return <h1>Loading</h1>
  }
}

export default Confirmation
