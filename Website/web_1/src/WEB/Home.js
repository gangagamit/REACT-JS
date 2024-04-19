import React from 'react'

function Home() {
  return (
    <div>
      <section>

        <div className='grid lg:grid-cols-2 gap-4 md:grid-cols-1 p-5'>
            <div className='banner-1 p-20'>
               
                <div className='flex text-start'>
                    <p className='text-pink-600 font'>Accessories</p>
                    
                </div>
                <div className='text-start'>
                <p className=' text-5xl from-neutral-950'>Up to <span className='text-pink-600 font underline'>40% off</span> latest Creations</p>
                <button className='bg-white p-2 rounded mt-2'><span className='p-2'>Shop Now</span> <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
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
      </section>
    </div>
  )
}

export default Home
