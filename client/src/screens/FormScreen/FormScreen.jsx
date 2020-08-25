import React, { useState } from 'react'
import VolunteerForm from '../../components/Form/VolunteerForm.jsx'
import Confirmation from '../../components/Form/Confirmation.jsx'
import HeroForm from '../../components/Form/HeroForm'
function FormScreen() {
  const [formStatus, setFormStatus] = useState('')
  const [volunteerId, setVolunteerId] = useState('')

  if (!formStatus) {
    return (
      <div>
        <HeroForm />
        <VolunteerForm setFormStatus={setFormStatus} setVolunteerId={setVolunteerId} />
      </div>
    )
  } else if (formStatus === 'submitted') {
    return (
      <div>
        <HeroForm />
        <Confirmation
          volunteerId={volunteerId}
          setFormStatus={setFormStatus}
        />
      </div>
    )
  } else if (formStatus === 'edit') {
    return (
      <div>
        <HeroForm />
        <VolunteerForm formStatus={formStatus} setFormStatus={setFormStatus} volunteerId={volunteerId} setVolunteerId={setVolunteerId}/>
      </div>
    )
  }
}

export default FormScreen
