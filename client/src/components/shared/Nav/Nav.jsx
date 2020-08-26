import React, { useState } from 'react'

import SocialImg from '../Nav/Screen Shot 2020-07-30 at 1.59 1.jpg'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  // const [hidden, updateHidden] = useState('hidden')
  // const menuClick = () => {
  //   updateHidden('')
  // }
  // const optionClick = () => {
  //   updateHidden('hidden')
  // }

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
          About the Door
        </Link>
        <div className='about-the-door-drop-down'>
          <Link className='option1'>COVID-19 Updates</Link>
          <Link className='option1'>Our Mission</Link>
          <Link className='option1'>What We Do</Link>
          <Link className='option1'>Our History</Link>
          <Link className='option1'>Staff & Board</Link>
          <Link className='option1'>Annual Report & Financials</Link>
          <Link className='option1'>Our Family of Organizations</Link>
          <Link className='option1'>Employment</Link>
          <Link className='option1'>Staff Alumni</Link>
          <Link className='option1'>Visit & Outreach</Link>
        </div>

        <Link className='programs-services-nav' to='/'>
          Programs & Services
        </Link>
        <Link className='membership-nav' to='/'>
          Membership
        </Link>
        <Link className='news-nav' to='/'>
          News
        </Link>
        <div className='get-involved-nav-div'>
          <Link className='get-involved-nav' to='/get-involved'>
            Get Involved
          </Link>
          <div className='get-involved-drop-down'>
            <Link className='volunteer-option' to='/sign-up'>
              Volunteer
            </Link>
            <Link className='ways-to-give-option' to='/'>
              Ways To Give
            </Link>
            <Link className='events-option' to='/'>
              Events
            </Link>
            <Link className='email-newsletter-option' to='/'>
              Email Newsletter
            </Link>
          </div>
        </div>

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
