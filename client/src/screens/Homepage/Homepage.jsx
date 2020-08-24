import React from 'react'
import CarouselSlide from '../../components/HomePage/Carousel'
import MissionNewsPage from '../../components/HomePage/MissionNewsPage'
import Rectangle143 from '../../components/shared/Rectangle143/Rectangle143.jsx'
import copyJSON from '../../assets/Homepage/copy.json'


function Homepage() {

  return (
    <div>
      <h1>homepage</h1>
      <CarouselSlide />
      <Rectangle143 copy={copyJSON.HomepageHeroRectangle143p1} />

      <MissionNewsPage />
      
    </div>
  )
}

export default Homepage

