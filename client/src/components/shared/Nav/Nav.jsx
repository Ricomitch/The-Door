import React from 'react'
import InstaIcon from '../../../assets/Nav/insta-nav.jpeg'
import FacebookIcon from '../../../assets/Nav/fb-nav.jpg'
import TwitterIcon from '../../../assets/Nav/twitter-nav.jpeg'
import YoutubeIcon from '../../../assets/Nav/youtube-nav.jpeg'
import HamburgerMenu from '../../../assets/Nav/hamburger-menu.png'
import { Link } from 'react-router-dom'
import './Nav.css'


function Nav() {
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
        <div className='nav-burger' style={{backgroundImage: `url(${HamburgerMenu})`}}></div>
        <Link to='/'>
          <img
            id='door-logo'
            src='https://door.org/wp-content/uploads/2018/09/img_logo.png'
          />
        </Link>
        <div className='about-the-door-nav-div'>
          <Link className='about-the-door-nav' to='/'>About the Door
          </Link>
          <div className='about-the-door-drop-down'>
            <Link className='option1-1'>COVID-19 Updates</Link>
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
        </div>
        <div className='programs-services-nav-div'>
          <Link className='programs-services-nav' to='/'>
            Programs & Services
          </Link>
          <div className='programs-services-drop-down'>
            <Link className='option11-11'>Daily Activity Schedule</Link>
            <Link className='option11'>Bronx Youth Center</Link>
            <Link className='option11'>College Advisment & Tutoring</Link>
            <Link className='option11'>Counseling</Link>
            <Link className='option11'>Food & Nutrition Services</Link>
            <Link className='option11'>Foster Care</Link>
            <Link className='option11'>HSE (High School Equivalency)</Link>
            <Link className='option11'>Health Services</Link>
            <Link className='option11'>Jobs & Internships</Link>
            <Link className='option11'>Leadership</Link>
            <Link className='option11'>Legal & Immigration Services</Link>
            <Link className='option11'>LGBTQ</Link>
            <Link className='option11'>Recreation</Link>
            <Link className='option11'>Runaway & Homless Youth</Link>
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
          <div className='donate-nav'>
            {/* <span className='nav-donate-button-text'>Donate</span> */}
            Donate
          </div>
        </Link>
      </nav>
    </div>
  )
}

export default Nav
