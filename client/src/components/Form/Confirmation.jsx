import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import { getVolunteer } from '../../services/formServices.js'
import flower4 from '../../assets/Form/flower4.svg'
import './Confirmation.css'

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
        <div className='shim'></div>
        <div className='confirmation-body'>
          <div
            className='flower-4'
            style={{
              backgroundImage: `url(${flower4})`,
              backgroundSize: 'cover',
              width: '100%',
              height: '100%',
              backgroundPositionY: '20%',
            }}>
            <div className='confirmation-content'>
              <h2 className='confirmation-title'>Confirmation</h2>
              <div className='confirmation-section'>
                <h2>Your Info:</h2>
                <div className='your-info'>
                  <h4>{`${volunteer.firstName} ${volunteer.lastName}`}</h4>
                  <h4>{volunteer.phone}</h4>
                  <h4>{volunteer.email}</h4>
                </div>
              </div>
              <div className='confirmation-section'>
                <h2>Programs</h2>
                <ul className='answers'>
                  {programs.map((program, index) => (
                    <li className='volunteer-li' key={index}>
                      {program}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='confirmation-section'>
                <h2>Roles</h2>
                <ul className='answers'>
                  {roles.map((role, index) => (
                    <li className='volunteer-li' key={index}>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='conf-page-buttons'>
                <button
                  className='conf-screen-button form active'
                  onClick={() => setModalOpen((prev) => !prev)}>
                  <span className="button-text">Confirm</span>
                </button>
                <button
                  className='conf-screen-button form active'
                  onClick={() => setFormStatus('edit')}>
                  <span className="button-text">Edit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <h1>Loading</h1>
  }
}

export default Confirmation
