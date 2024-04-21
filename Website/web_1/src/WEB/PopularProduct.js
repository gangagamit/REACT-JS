import React from 'react'
import img1 from '../Image/product-1.jpg';
import img2 from '../Image/product-3.jpg';
import img3 from '../Image/product-5.jpg';
import img4 from '../Image/product-7.jpg';
import img5 from '../Image/product-9.jpg';
import img6 from '../Image/product-11.jpg';
import img7 from '../Image/product-13.jpg';
import img8 from '../Image/product-15.jpg';
import img9 from '../Image/product-17.jpg';
import img10 from '../Image/product-19.jpg';
const PopularProduct = () => {
  return (
    <div className='main p-5'>
        <div className='container flex justify-between'>
            <div className='flex gap-2'>
                <h1 className=' font-sans text-2xl font-bold'>
                Popular
                </h1>
                <h2 className=' font-sans text-2xl text-pink-500 underline'>
                Products
                </h2>
            </div>
            <div>
                <ul>
                    <li><a href='#' className='text-pink-500 underline'>All</a></li>
                    <li><a href='#' className='font-bold font-sans'>Popular</a></li>
                    <li><a href='#' className='font-bold font-sans'>On Sale</a></li>
                    <li><a href='#' className='font-bold font-sans'>Best Rated</a></li>
                </ul>
            </div>
        </div>
        {/* grid-1 start */}
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3'>
            <div className='card-1'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img1} alt='image'></img>
                        <p className='text-start p-1'>Bradley Burgess 2</p>
                        <p className='font-bold text-start p-1'>$20.00</p>
                </div>
            </div>
            <div className='card-2'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img2} alt='image'></img>
                        <p className='text-start p-1'>Allie Sharp</p>
                        <p className='font-bold text-start p-1'>$30.00</p>
                </div>
            </div>
            <div className='card-3'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img3} alt='image'></img>
                        <p className='text-start p-1'>Nathaniel Baldwin</p>
                        <p className='font-bold text-start p-1'>$40.00</p>
                </div>
            </div>
            <div className='card-3'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img4} alt='image'></img>
                        <p className='text-start p-1'>Effie Rios</p>
                        <p className='font-bold text-start p-1'>$40.00</p>
                </div>
            </div>
        </div>  {/* grid-1 end */}

                {/* grid-2 start */}
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3 mt-5'>
            <div className='card-1'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img5} alt='image'></img>
                        <p className='text-start p-1'>Carolyn Goodwin</p>
                        <p className='font-bold text-start p-1'>$50.00</p>
                </div>
            </div>
            <div className='card-2'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img6} alt='image'></img>
                        <p className='text-start p-1'>Evelyn Patton</p>
                        <p className='font-bold text-start p-1'>$60.00</p>
                </div>
            </div>
            <div className='card-3'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img7} alt='image'></img>
                        <p className='text-start p-1'>Sally Ray</p>
                        <p className='font-bold text-start p-1'>$70.00</p>
                </div>
            </div>
            <div className='card-4'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img8} alt='image'></img>
                        <p className='text-start p-1'>Ora Bowman</p>
                        <p className='font-bold text-start p-1'>$80.00</p>
                </div>
            </div>
        </div>    {/* grid-2 end */}
        {/* grid-3 start */}

        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5'>
            <div className='card-1'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img9} alt='image'></img>
                        <p className='text-start p-1'>Frederick Valdez</p>
                        <p className='font-bold text-start p-1'>$90.00</p>
                </div>
            </div>
            <div className='card-2'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img10} alt='image'></img>
                        <p className='text-start p-1'>Terry Byrd</p>
                        <p className='font-bold text-start p-1'>$100.00</p>
                </div>
            </div>
          
          
        </div>    

        {/* grid-3 end */}
     
    </div> // main div end
    
  )
}

export default PopularProduct
