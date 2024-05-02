
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../WEB/Sliderhome/Sliderstyle.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import img1 from '../Image/banner-1.jpg';
// import img2 from '../Image/banner-2.jpg';
// import img3 from '../Image/banner-3.jpg';
import '../Sliderhome/Sliderstyle.css';
const Home = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className=' container-1'>
          <div>

            <div className='slider-bg'>
              <div className='slider_container gap-5'>
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


                  <SwiperSlide >
                    <div className='bg-1'>
                      <div className='mt-8 p-5'>

                        <h1 className='text-2xl text-pink-600 font-medium  text-start'>Accessories</h1>
                      </div>
                      <div className='mt-5 text-5xl p-3'>

                        <p className='text-start'>Up to <span className='text-red-600'>45% off</span> latest Creations</p>
                      </div>
                      <div className='mt-3 text-start p-3'>
                        <button className='bg-white  text-xl font-medium h-16 w-48 rounded-md'>Shop Now <i class="fa-solid fa-arrow-right"></i></button>
                      </div>
                    </div>


                  </SwiperSlide>

                  <SwiperSlide>
                  <div className='bg-2'>
                      <div className='mt-8 p-5'>

                        <h1 className='text-2xl text-pink-600 font-medium  text-start'>Accessories</h1>
                      </div>
                      <div className='mt-5 text-5xl p-3'>

                        <p className='text-start'>Up to <span className='text-red-600'>45% off</span> latest Creations</p>
                      </div>
                      <div className='mt-3 text-start p-3'>
                        <button className='bg-white  text-xl font-medium h-16 w-48 rounded-md'>Shop Now <i class="fa-solid fa-arrow-right"></i></button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='bg-3'>
                      <div className='mt-8 p-5'>

                        <h1 className='text-2xl text-pink-600 font-medium  text-start'>Accessories</h1>
                      </div>
                      <div className='mt-5 text-5xl p-3'>

                        <p className='text-start'>Up to <span className='text-red-600'>45% off</span> latest Creations</p>
                      </div>
                      <div className='mt-3 text-start p-3'>
                        <button className='bg-white  text-xl font-medium h-16 w-48 rounded-md'>Shop Now <i class="fa-solid fa-arrow-right"></i></button>
                      </div>
                    </div>
                  </SwiperSlide>

                </Swiper>

                <div className='slider-bg1'>
                  <div className='ban'>
                    <p className='text-start p-3 text-pink-600 font-medium'>Hand made</p>
                    <p className='text-start font-sans font-semibold p-2'>New modern Stylist Crafts</p>
                  </div>
                  <div className='bann'>
                    <p className='text-start p-3 text-pink-600 font-medium'>Popular</p>
                    <p className='text-start font-sans font-semibold p-3'>Energy with our newest collection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{/* main-conatiner */}
      </div>







    </>
  )
}

export default Home


