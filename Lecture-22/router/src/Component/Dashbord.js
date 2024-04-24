import React from 'react'
import img1 from '../Image/main1.png';
function Dashbord() {
  return (
    <div className='flex justify-center items-center bg-green-100 h-screen'>
        <div className='container'>
            <div className='grid grid-cols-1 mt-5'>
                    <img src={img1} alt='image'/>
            </div>
            <div className='grid grid-cols-1 mt-4'>
            <h1 className='text-3xl font-semibold'>Autolist Dashboard Demos</h1>
                <p className='mt-3 text-lg text-slate-400 font-bold'>Autolist is available in both LTR & RTL versions and comes with 3 types of themes. So that users can choose their best theme and customize the Autolist Listing template according to their choice.</p>
            </div>
            <div className='button gap-8 flex justify-center items-center mt-5'>
                <button className='text-white bg-red-500 font-semibold rounded p-3'>Default Theme</button>
                <button className='text-black bg-gray-200 font-semibold rounded p-3'>Default Theme</button>
                <button className='text-black bg-gray-200 font-semibold rounded p-3'>Default Theme</button>
            </div>
        </div>
    </div>
  )
}

export default Dashbord
