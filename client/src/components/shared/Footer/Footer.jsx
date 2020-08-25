import React from 'react'
import FooterIcons from '../Footer/Screen Shot 2020-07-30 at 2.31 1.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='address'>
        <p> The Door-A Center of Alternatives </p>
        <p>121 Avenue of the Americas, Suite 506</p>
        <p>New York, NY 10013 US</p> <p>212-453-0274</p>
      </div>
      <img className='footer-icons' src={FooterIcons} alt='' />
      <p className='copyright'>© 2020 The Door | Terms of Use | Employment</p>
      <p className='ending'>
        The Door is an Equal Opportunity Employer/Program. Auxiliary aids and
        services are available upon request to individuals with disabilities.
      </p>
    </div>
  )
}

export default Footer
