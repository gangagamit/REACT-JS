import React from 'react'

function Welcome() {
  return (
    <div className='w-full mx-auto bg-orange-50  text-wrap h-16 p-2 sm:block lg:block md:block xl:block lg:h-[100%] lg:w-[100%]'>
        <div >
            <p className='text-md font-semibold text-start'>Welcome to our international shop! Enjoy free shipping on orders $100 up.<span className='text-red-500 underline text-md font-semibold'>Shop Now</span> <i class="fa-solid fa-arrow-right text-red-500"></i></p>
        </div>
    </div>
  )
}

export default Welcome
