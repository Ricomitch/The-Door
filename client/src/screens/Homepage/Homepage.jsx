import React from 'react'
import Rectangle143 from '../../components/shared/Rectangle143/Rectangle143.jsx'
import copyJSON from '../../assets/Homepage/copy.json'

import CarouselSlide from '../../components/HomePage/Carousel'
import NewsCards from '../../components/HomePage/NewsItem'
function Homepage() {


  copyJSON = JSON.parse(copyJSON)
 // const rectangleProps = copyJSON.HomepageHeroRectangle143
  console.log(copyJSON)

  return (
    <div>
      <h1>homepage</h1>
      <CarouselSlide />

    </div>
  )
}

export default Homepage
