import React from 'react'
import NewsItem from '../../components/HomePage/NewsItem'
import copyJSON from '../../assets/Homepage/copy.json'
import Pride from '../../assets/Homepage/photo-1573225063823-21ec7ba08e64.jpeg'
import Cook from '../../assets/Homepage/ND5_0344_cropped.jpg'
import Grad from '../../assets/Homepage/Graduate.jpg'
import './MissionNewsPage.css'
import Flower1 from '../../assets/Homepage/flower1.svg'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import Flower5 from '../../assets/mobile/flower5.svg'

const MissionNewsPage = (card) => {
  return (
    <div className='news-div'>
      <div
        className='flower5'
        style={{ backgroundImage: `url(${Flower5})` }}
      ></div>
      <div
        className='flower1'
        style={{ backgroundImage: `url(${Flower1})` }}
      ></div>
      <div className='mission-triangle'></div>
      <main className='mission-main'></main>
      <p className='home-mission'>
        The Door's mission is to{' '}
        <span className='empower'>
          empower young people<br></br>
        </span>{' '}
        to reach their potential by providing<br></br>{' '}
        <span className='youth'>
          comprehensive youth development services<br></br>
        </span>{' '}
        in a diverse and caring environment.
      </p>
      <hr className='line' />
      <div className='Rectangle1'>
        <span className='news-text'>News Corner</span>
      </div>

      <div className='news-items'>
        <div className='left-arrow'>
          <DoubleArrowIcon
            style={{ color: 'white', transform: 'scaleX(-1)' }}
          />
        </div>
        <NewsItem image={Pride} card={copyJSON.NewsItem1} />
        <div className='news-card2'>
          <NewsItem card={copyJSON.NewsItem2} image={Cook} />
        </div>
        <div className='news-card3'>
          <NewsItem card={copyJSON.NewsItem3} image={Grad} />
        </div>
        <div className='right-arrow'>
          <DoubleArrowIcon style={{ color: 'white' }} />
        </div>

        <div className='triangle'></div>
      </div>
    </div>
  )
}

export default MissionNewsPage
