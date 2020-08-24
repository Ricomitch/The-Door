import React from 'react'
import Carousel from 'react-elastic-carousel'
import Studying from '../../assets/Homepage/eliott-reyna-iO2d-KYp5JU-unsplash.jpg'
import Writing from '../../assets/Homepage/photo-1529390079861-591de354faf5.jpeg'
import Friends from '../../assets/Homepage/photo-1517486808906-6ca8b3f04846.jpeg'

function Homepage() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]

  return (
    <div>
      <h2>homepage</h2>
      <Carousel breakPoints={breakPoints}>
        <img
          src={Studying}
          alt='studying in park'
          width='300px'
        />
        <img
          src={Writing}
          alt='boy writing'
          width='300px'
        />
        <img
        src={Friends}
        alt='friends hanging '
        width='300px'
      />
      </Carousel>
    </div>
  )
}

export default Homepage
