import React from 'react'
import './Carousel.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Studying from '../../assets/Homepage/photo-1571868200845-4fe0659ffd61.jpeg'
import Writing from '../../assets/Homepage/photo-1529390079861-591de354faf5.jpeg'
import Friends from '../../assets/Homepage/photo-1517486808906-6ca8b3f04846.jpeg'
import Art from '../../assets/Homepage/Screen Shot 2020-08-24 at 9.13.26 AM.png'

import Rectangle143 from '../shared/Rectangle143/Rectangle143.jsx'
import copyJSON from '../../assets/Homepage/copy.json'

function CarouselSlide() {
  return (
    <div className='container'>
      <Carousel
        className='slides'
        autoPlay
        interval={5000}
        infiniteLoop
        showArrows={false}
      >
        <div className='slide1'>
          <div className='rectangle1'>
            <Rectangle143 copy={copyJSON.HomepageHeroRectangle143p1} />
          </div>
          <img
            className='slide studying'
            src={Studying}
            alt='studying in park'
            width='300px'
          />
        </div>
        <div className='slide2'>
          <div className='rectangle2'>
            <Rectangle143 copy={copyJSON.HomepageHeroRectangle143p2} />
          </div>
          <img
            className='slide writing'
            src={Writing}
            alt='boy writing'
            width='300px'
          />
        </div>
        <div className='slide3'>
          <div className='rectangle3'>
            <Rectangle143 copy={copyJSON.HomepageHeroRectangle143p3} />
          </div>
          <img
            className='slide friends'
            src={Friends}
            alt='friends hanging '
            width='300px'
          />
        </div>
        <div className='slide4'>
          <div className='rectangle4'>
            <Rectangle143 copy={copyJSON.HomepageHeroRectangle143p4} />
          </div>
          <img className='slide art' src={Art} alt='art ' width='300px' />
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselSlide
