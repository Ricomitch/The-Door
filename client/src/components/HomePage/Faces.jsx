import React from 'react'
import './Faces.css'
import Flower2 from '../../assets/Homepage/flower2.svg'

function Faces() {
  return (
    <div className='faces-div'>
      <div className='flower2' style={{backgroundImage: `url(${Flower2})`}}></div>
      <main className='faces-main'>
        <h2>this is Faces start</h2>
        <div className='Polygon1'></div>
        <div className='faces-left-side'>
          <div className='Rectangle178'>
            <span className='faces-text'>Faces of The Door</span>
          </div>
          <iframe
            width='733'
            height='442.9'
            title='Meet-Our-Participants'
            src='https://www.youtube.com/embed/5xdstOwJfUk'
            className='video'></iframe>
        </div>
        <h2>this is Faces end</h2>
      </main>
    </div>
  )
}

// <iframe width="560" height="315" src="https://www.youtube.com/embed/5xdstOwJfUk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

export default Faces
