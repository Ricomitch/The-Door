import React from 'react'
import NewsItem from '../../components/HomePage/NewsItem'
import copyJSON from '../../assets/Homepage/copy.json'



const MissionNewsPage = () => {
  return (
    <div>

      <NewsItem copy={copyJSON.NewsItem1} />
      <NewsItem copy={copyJSON.NewsItem2} />
      <NewsItem copy={copyJSON.NewsItem3} />
      
    </div>
  )
}

export default MissionNewsPage
