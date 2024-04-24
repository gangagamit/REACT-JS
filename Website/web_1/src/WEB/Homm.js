import React from 'react'
import img1 from '../Image/banner-1.jpg';
import img2 from '../Image/banner-2.jpg';
import img3 from '../Image/banner-3.jpg';
const Homm = () => {
  return (
    <div className='slider_container'>
        <div className='container'>
                <div className='swiper card_slide'>
                    <div className='swiper-wrapper'>
                        <div className='swiper-slide'>
                                <div className='img'>
                                        <img src={img1} alt='image'></img>
                                        
                                </div>
                                
                        </div>
                        <div className='swiper-slide'>
                                <div className='img'>
                                        <img src={img2} alt='image'></img>
                                </div>
                        </div>
                        <div className='swiper-slide'>
                                <div className='img'>
                                        <img src={img3} alt='image'></img>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
      
    </div>
  )
}

export default Homm
