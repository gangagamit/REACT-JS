import React from 'react';
import img1 from '../../Image/instagram-01.jpg';
import img2 from '../../Image/instagram-02.jpg';
import img3 from '../../Image/instagram-03.jpg';
import img4 from '../../Image/instagram-04.jpg';
import img5 from '../../Image/instagram-05.jpg';
function Follow() {
  return (
    <div className='mt-5 p-3  container mx-auto'>
        <div className=' grid grid-cols-1'>
        <h1 className='text-pink-500 text-lg'>Follow On</h1>
        <p><i class="fa-brands fa-instagram fa-2x"></i> <span className='text-3xl font-bold'>ninico-shop</span></p>
        </div>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-3'>
            <div className='img-1'>
                <img src={img1} alt='image' className='rounded'></img>
            </div>
            <div className='img-2'>
                <img src={img2} alt='image' className='rounded'></img>
            </div>
            <div className='img-3'>
                <img src={img3} alt='image' className='rounded'></img>
            </div>
            <div className='img-4'>
                <img src={img4} alt='image' className='rounded'></img>
            </div>
            <div className='img-5'>
                <img src={img5} alt='image' className='rounded'></img>
            </div>
        </div>
    </div>
  )
}

export default Follow
