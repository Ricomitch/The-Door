import React, { useState } from 'react'
import InstaIcon from '../../../assets/Nav/insta-nav.jpeg'
import FacebookIcon from '../../../assets/Nav/fb-nav.jpg'
import TwitterIcon from '../../../assets/Nav/twitter-nav.jpeg'
import YoutubeIcon from '../../../assets/Nav/youtube-nav.jpeg'
import BurgerMenu from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  const burgerStyles = {
    height: '40px',
    width: '35px',
    alignSelf: 'center'
  }

  const [burgerHidden, updateBurgerClass] = useState(true)
  function burgerClick() {
    updateBurgerClass(!burgerHidden)
  }
  function burgerByeBye() {
    updateBurgerClass(true)
  }

  return (
    <div className='nav'>
      <div className='top-nav'>
        <div className='nav-icons'>
          <a href='https://www.instagram.com/door_nyc/' target='_blank'>
            <img className='insta-icon' src={InstaIcon} alt='' />
          </a>
          <a href='https://www.facebook.com/TheDoorNYC/' target='_blank'>
            <img className='fb-icon' src={FacebookIcon} alt='' />
          </a>
          <a href='https://twitter.com/Door_NYC' target='_blank'>
            <img className='twitter-icon' src={TwitterIcon} alt='' />
          </a>
          <a
            href='https://www.youtube.com/channel/UCTI_X7wHcmfmb4_Fec0WYvQ'
            target='_blank'
          >
            <img className='youtube-icon' src={YoutubeIcon} alt='' />
          </a>
        </div>
      </div>

      <nav className='main-nav'>
        <BurgerMenu
          className='nav-burger'
          style={burgerStyles}
          onClick={burgerClick}
        />
        <Link to='/' onClick={burgerByeBye}>
          <img
            id='door-logo'
            src='https://door.org/wp-content/uploads/2018/09/img_logo.png'
            alt='The Door logo'
          />
        </Link>
        <div className='about-the-door-nav-div'>
          <Link className='about-the-door-nav' to='/'>
            About the Door
          </Link>
          <div className='about-the-door-drop-down'>
            <div className='option1-1'>COVID-19 Updates</div>
            <div className='option1'>Our Mission</div>
            <div className='option1'>What We Do</div>
            <div className='option1'>Our History</div>
            <div className='option1'>Staff & Board</div>
            <div className='option1'>Annual Report & Financials</div>
            <div className='option1'>Our Family of Organizations</div>
            <div className='option1'>Employment</div>
            <div className='option1'>Staff Alumni</div>
            <div className='option1'>Visit & Outreach</div>
          </div>
        </div>
        <div className='programs-services-nav-div'>
          <Link className='programs-services-nav' to='/'>
            Programs & Services
          </Link>
          <div className='programs-services-drop-down'>
            <div className='option11-11'>Daily Activity Schedule</div>
            <div className='option11'>Bronx Youth Center</div>
            <div className='option11'>College Advisment & Tutoring</div>
            <div className='option11'>Counseling</div>
            <div className='option11'>Food & Nutrition Services</div>
            <div className='option11'>Foster Care</div>
            <div className='option11'>HSE (High School Equivalency)</div>
            <div className='option11'>Health Services</div>
            <div className='option11'>Jobs & Internships</div>
            <div className='option11'>Leadership</div>
            <div className='option11'>Legal & Immigration Services</div>
            <div className='option11'>LGBTQ</div>
            <div className='option11'>Recreation</div>
            <div className='option11'>Runaway & Homless Youth</div>
          </div>
        </div>
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
          Contact
        </Link>

        <Link className='nav-donate-link' to='/'>
          <div className='donate-nav'>Donate</div>
        </Link>
        <div
          className={
            burgerHidden
              ? 'hamburger-drop-down burger-hidden'
              : 'hamburger-drop-down burger-visible'
          }
        >
          <div className='option-burger' onClick={burgerByeBye}>
            About the Door
          </div>
          <div className='option-burger' onClick={burgerByeBye}>
            Program & Services
          </div>
          <div className='option-burger' onClick={burgerByeBye}>
            Membership
          </div>
          <div className='option-burger' onClick={burgerByeBye}>
            News
          </div>
          <Link
            to='/get-involved'
            className='option-burger'
            onClick={burgerByeBye}
          >
            Get Involved
          </Link>
          <Link to='/sign-up' className='option-burger' onClick={burgerByeBye}>
            Volunteer
          </Link>
          <div className='option-burger' onClick={burgerByeBye}>
            Contact
          </div>
          <div className='option-burger burger-donate' onClick={burgerByeBye}>
          
              Donate
              
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
