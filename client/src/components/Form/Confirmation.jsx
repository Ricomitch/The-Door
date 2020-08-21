import React from 'react'
import { Link } from 'react-router-dom'

function Confirmation({ setFormStatus }) {
  return (
    <div>
      <h2>Confirmation</h2>
      <Link to='/sign-up/5f3ffbdac4c9f22ebd5eb236'>
        <button onClick={()=>setFormStatus('confirmed')}>Edit</button>
      </Link>
    </div>
  )
}

export default Confirmation
