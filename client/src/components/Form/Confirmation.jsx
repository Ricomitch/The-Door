import React from 'react'
import { Link } from 'react-router-dom'

function Confirmation({ setFormStatus }) {
  return (
    <div>
      <h2>Confirmation</h2>
      <Link to={`/sign-up/${process.env.REACT_APP_VOLUNTEER_TEST_ID}`}>
        <button onClick={()=>setFormStatus('confirmed')}>Edit</button>
      </Link>
    </div>
  )
}

export default Confirmation
