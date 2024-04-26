
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Sliderstyle.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../Image/banner-1.jpg';
import img2 from '../Image/banner-2.jpg';
import img3 from '../Image/banner-3.jpg';
import '../HomeStyle.css';
const Home = () => {
  return (
    <div>

      <div className='slider_container'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"

        >


          <SwiperSlide>

            <img src={img1} />

          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} />
          </SwiperSlide>

        </Swiper>
        <div className='banner-2'>
          <div className='ban'>
            <p className='text-start p-3 text-pink-600'>Hand made</p>
            <p className='text-start font-sans font-semibold p-2'>New modern Stylist Crafts</p>
          </div>
          <div className='bann'>
            <p className='text-start p-3 text-pink-600'>Popular</p>
            <p className='text-start font-sans font-semibold p-3'>Energy with our newest collection</p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Home


