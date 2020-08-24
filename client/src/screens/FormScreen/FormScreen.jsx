import React, { useState } from 'react'
import VolunteerForm from '../../components/Form/VolunteerForm.jsx'
import Confirmation from '../../components/Form/Confirmation.jsx'

function FormScreen() {
  const [formStatus, setFormStatus] = useState('submitted')
  const [volunteerId, setVolunteerId] = useState('5f4413a9fe1df35bc3f8d280')
  
  // ATTENTION LINE S6 & 7HARD - CODED FOR DEV PURPOSES
  // REVERT TO EMPTY STRING ('')

  if (!formStatus) {
    return (
      <div>
        <VolunteerForm setFormStatus={setFormStatus} setVolunteerId={setVolunteerId} />
      </div>
    )
  } else if (formStatus === 'submitted') {
    return (
      <div>
        <Confirmation
          volunteerId={volunteerId}
          setFormStatus={setFormStatus}
        />
      </div>
    )
  } else if (formStatus === 'edit') {
    return (
      <div>
        <VolunteerForm formStatus={formStatus} setFormStatus={setFormStatus} volunteerId={volunteerId} setVolunteerId={setVolunteerId}/>
      </div>
    )
  }
}

export default FormScreen
