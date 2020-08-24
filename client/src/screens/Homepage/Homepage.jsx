import React from 'react'
import CarouselSlide from '../../components/HomePage/Carousel'
import NewsItem from '../../components/HomePage/NewsItem'
import Rectangle143 from '../../components/shared/Rectangle143/Rectangle143.jsx'
import copyJSON from '../../assets/Homepage/copy.json'

function Homepage() {
  return (
    <div>
      <h1>homepage</h1>
      <CarouselSlide />
      <Rectangle143 copy={copyJSON.HomepageHeroRectangle143} />

      <NewsItem copy={copyJSON.NewsItem1} />
      
    </div>
  )
}

export default Homepage

