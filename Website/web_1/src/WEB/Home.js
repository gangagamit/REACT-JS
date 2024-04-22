import React from 'react'
import img1 from '../Image/banner-1.jpg';
function Home() {
  return (
    <div className=' container'>
        <div className='grid lg:grid-cols-3'>
        <div>
          </div>
          <div className='banner-1 '>
              <img src={img1} alt='banner-1'></img>  
          </div>
        </div>
    </div>
  )
}

export default Home
