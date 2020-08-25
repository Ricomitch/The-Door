import React from 'react'
import NewsItem from '../../components/HomePage/NewsItem'
import copyJSON from '../../assets/Homepage/copy.json'
import Pride from '../../assets/Homepage/photo-1573225063823-21ec7ba08e64.jpeg'
import Cook from '../../assets/Homepage/ND5_0344_cropped.jpg'
import Grad from '../../assets/Homepage/Graduate.jpg'
import './MissionNewsPage.css'

const MissionNewsPage = (card) => {
  return (
    <div news-div>
      <h2>mission page starts</h2>

      <h2><NewsItem card={copyJSON.HomepageHeroBanner} /></h2>

      <div className='Rectangle1'><span className='news-text'>News Corner</span></div>
      <NewsItem image={Pride} card={copyJSON.NewsItem1}  />
      <NewsItem card={copyJSON.NewsItem2} image={Cook} />
      <NewsItem card={copyJSON.NewsItem3} image={Grad} />
      <div className='triangle'></div>
      <h2>mission page ends</h2>
    </div>
  )
}

export default MissionNewsPage
