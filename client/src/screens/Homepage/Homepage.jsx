import React from 'react'
import CarouselSlide from '../../components/HomePage/Carousel'
import MissionNewsPage from '../../components/HomePage/MissionNewsPage'
import ImpactHomePage from '../../components/HomePage/ImpactHomePage'
import Faces from '../../components/HomePage/Faces.jsx'

function Homepage() {
  return (
    <div>
      <CarouselSlide />
      <MissionNewsPage />
      <ImpactHomePage />
      <Faces />
    </div>
  )
}

export default Homepage
