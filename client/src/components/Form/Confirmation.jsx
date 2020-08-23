import React, { useState, useEffect } from 'react'
import { getVolunteer } from '../../services/formServices.js'

function Confirmation({ setFormStatus, volunteerId }) {

  const [volunteer, setVolunteer] = useState({})

  useEffect(() => {
  async function fetchVolunteer(volunteerId) {
    const volunteerGotten = await getVolunteer(volunteerId)
    console.log('volunteerGotten.programs', volunteerGotten.programs)
    setVolunteer(volunteerGotten)
  }
    fetchVolunteer(volunteerId)
  }, [])

  let programs = volunteer.programs

  if (programs) {
    return (
      <div>
        <h2>Confirmation</h2>
        <h3>{volunteer.firstName}</h3>
        <h4>{volunteer.phone}</h4>
        <h4>{volunteer.email}</h4>
        <h4>Programs</h4>
        {console.log('programs = ', programs)}
        {programs.map((program, index) => <h4 key={index}>{program}</h4>)}
        
          <button onClick={() => setFormStatus('edit')}>Edit</button>
        
      </div>
    )
  } else {
    return <h1>Loading</h1>
  }
}

export default Confirmation
