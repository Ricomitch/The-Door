import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <nav className='main-nav'>
      <Link to='/'>About the Door </Link>
      <Link to='/'>Programs & Services </Link>
      <Link to='/'>Membership </Link>
      <Link to='/'>News </Link>
      <Link to='/get-involved'>Get Involved </Link>
      <Link to='/'>Contact </Link>
      <Link to='/'>Donate </Link>
    </nav>
  )
}

export default Nav
