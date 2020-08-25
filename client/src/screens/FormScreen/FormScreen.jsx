import React, { useState } from 'react'
import VolunteerForm from '../../components/Form/VolunteerForm.jsx'
import Confirmation from '../../components/Form/Confirmation.jsx'
import HeroForm from '../../components/Form/HeroForm'
import './FormScreen.css'
import Modal from '../../components/Form/Modal'

function FormScreen() {
  const [formStatus, setFormStatus] = useState('submitted')
  const [volunteerId, setVolunteerId] = useState('5f4413a9fe1df35bc3f8d280')
  const [modalOpen, setModalOpen] = useState(true)

  if (!formStatus) {
    return (
      <div className='form-screen'>
        <HeroForm />
        <VolunteerForm
          setFormStatus={setFormStatus}
          setVolunteerId={setVolunteerId}
        />
      </div>
    )
  } else if (formStatus === 'submitted') {
    return (
      <div className='form-screen'>
        <Modal show={modalOpen} />
        
          <HeroForm />
            <Confirmation volunteerId={volunteerId} setFormStatus={setFormStatus} setModalOpen={setModalOpen} />
        </div>
      
    )
  
  } else if (formStatus === 'edit') {
    return (
      <div className='form-screen'>
        <HeroForm />
        <VolunteerForm
          formStatus={formStatus}
          setFormStatus={setFormStatus}
          volunteerId={volunteerId}
          setVolunteerId={setVolunteerId}
        />
      </div>
    )
  }
}

export default FormScreen
