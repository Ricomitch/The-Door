import React from 'react'
import SocialImg from '../Nav/Screen Shot 2020-07-30 at 1.59 1.jpg'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <>
      <nav className='top-nav'>
        <img className='social-img' src={SocialImg} />
      </nav>

      <nav className='main-nav'>
        <img
          id='door-logo'
          src='https://door.org/wp-content/uploads/2018/09/img_logo.png'
        />
        <Link className='about-the-door-nav' to='/'>
          About the Door{' '}
        </Link>
        <Link className='programs-services-nav' to='/'>
          Programs & Services{' '}
        </Link>
        <Link className='membership-nav' to='/'>
          Membership{' '}
        </Link>
        <Link className='news-nav' to='/'>
          News{' '}
        </Link>
        <Link className='get-involved-nav' to='/get-involved'>
          Get Involved{' '}
        </Link>
        <Link className='contact-nav' to='/'>
          Contact{' '}
        </Link>
        <Link className='donate-nav' to='/'>
          Donate{' '}
        </Link>
      </nav>
    </>
  )
}

export default Nav
