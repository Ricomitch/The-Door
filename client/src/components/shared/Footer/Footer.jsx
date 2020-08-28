import React from 'react'
import InstaIcon from '../../../assets/Footer/insta-footer.png'
import FacebookIcon from '../../../assets/Footer/fb-footer.png'
import TwitterIcon from '../../../assets/Footer/twitter-footer.png'
import YoutubeIcon from '../../../assets/Footer/youtube-footer.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='address'>
        <p> The Door-A Center of Alternatives </p>
        <p>121 Avenue of the Americas, Suite 506</p>
        <p>New York, NY 10013 US</p> <p>212-453-0274</p>
      </div>
      <div className='footer-icons'>
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
          target='_blank'>
          <img className='youtube-icon' src={YoutubeIcon} alt='' />
        </a>
      </div>
      <p className='copyright'>© 2020 The Door | Terms of Use | Employment</p>
      <p className='ending'>
        The Door is an Equal Opportunity Employer/Program. Auxiliary aids and
        services are available upon request to individuals with disabilities.
      </p>
    </div>
  )
}

export default Footer
