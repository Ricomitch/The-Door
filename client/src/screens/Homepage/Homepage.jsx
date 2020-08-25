import React from 'react'
import CarouselSlide from '../../components/HomePage/Carousel'
import MissionNewsPage from '../../components/HomePage/MissionNewsPage'
import Faces from '../../components/HomePage/Faces.jsx'

function Homepage() {
  return (
    <div>
      <CarouselSlide />
      {/* <MissionNewsPage /> */}
      <Faces />
    </div>
  )
}

export default Homepage
