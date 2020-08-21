import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { createVolunteer } from '../../services/formServices.js'

function Form({ mode }) {
  return (
    <div>
      <h2>{mode} form</h2>
    </div>
  )
}

export default Form
