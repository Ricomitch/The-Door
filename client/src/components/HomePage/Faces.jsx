import React from 'react'
import './Faces.css'
import Flower2 from '../../assets/Homepage/flower2.svg'
import MobileFlower from '../../assets/mobile/flower3-screenshot.png'

function Faces() {
  return (
    <div className='faces-div'>
      <div
        className='mobile-flower'
        style={{ backgroundImage: `url(${MobileFlower})` }}
      ></div>
      <div
        className='flower2'
        style={{ backgroundImage: `url(${Flower2})` }}
      ></div>
      <div className='faces-triangle'></div>
      <main className='faces-main'>
        <div className='faces-left-side'>
          <div className='Rectangle178'>
            <span className='faces-text'>Faces of The Door</span>
          </div>
          <iframe
            width='733'
            height='442.9'
            title='Meet-Our-Participants'
            src='https://www.youtube.com/embed/5xdstOwJfUk'
            className='video'
          ></iframe>
        </div>
        <div className='faces-right-side'>
          <div className='faces-back-rectangle'></div>
          <div className='faces-front-rectangle'>
            <p className='faces-front-box-text'>
              Helping nearly <span className='elevenK'>11,000</span>{' '}
              <span className='young-people'>young people</span> from
              <br />
              all over New York City{' '}
              <span className='discover-and-achieve'>
                {' '}
                discover and achieve
              </span>{' '}
              his or her{' '}
              <span className='greatest-potential'>greatest potential</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Faces
