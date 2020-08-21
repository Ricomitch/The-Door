import React, { useState } from 'react'
import Form from '../../components/Form/Form.jsx'
import Confirmation from '../../components/Form/Confirmation.jsx'

function FormScreen({ mode }) {

  const [formStatus, setFormStatus] = useState('')

  if (!formStatus) {
    return (
      <div>
        <Form mode={mode} setFormStatus={setFormStatus} />
      </div>
    )
  } else if (formStatus === 'submitted') {
    return (
      <div>
        <Confirmation />
      </div>
    )
  }
}

export default FormScreen
