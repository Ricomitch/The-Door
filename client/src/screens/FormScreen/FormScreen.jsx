import React, { useState } from 'react'
import VolunteerForm from '../../components/Form/VolunteerForm.jsx'
import Confirmation from '../../components/Form/Confirmation.jsx'

function FormScreen() {
  const [formStatus, setFormStatus] = useState('')
  const [volunteerId, setVolunteerId] = useState('')
  console.log('formStatus', formStatus)

  
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
