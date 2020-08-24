import React from 'react'
import './Carousel.css'
// import ReactDOM from 'react-dom'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

// import Carousel from 'react-elastic-carousel'
import Studying from '../../assets/Homepage/photo-1571868200845-4fe0659ffd61.jpeg'
import Writing from '../../assets/Homepage/photo-1529390079861-591de354faf5.jpeg'
import Friends from '../../assets/Homepage/photo-1517486808906-6ca8b3f04846.jpeg'

function CarouselSlide() {
  return (
    <div className='container'>
      <h2>homepage</h2>
      <Carousel className='slides' autoPlay infiniteLoop
        showArrows={false}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <img className='slide studying' src={Studying} alt='studying in park' width='300px' />
        <img className='slide writing' src={Writing} alt='boy writing' width='300px' />
        <img className='slide friends' src={Friends} alt='friends hanging ' width='300px' />
      </Carousel>
    </div>
  )
}

export default CarouselSlide
