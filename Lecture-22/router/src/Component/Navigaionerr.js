import React from 'react'
import '../Naverroe.css';
import Home from '../Component/Home';
function Navigaionerr() {
  return (
    <div className='flex justify-center items-center'>
        <div>

        <p className='error font-bold text-9xl'>Oops!</p>
        <p className='text-2xl font-semibold mt-2'>404-PAGE NOT FOUND</p>
        <p className='text-2xl'>The page you are looking for might have been removed had changed or is temporarily unavailable</p>
        <button onClick={<Home/>} className='bg-blue-500 text-white font-semibold p-3 rounded-lg mt-3'>GO TO HOMEPAGE</button>
        </div>
    </div>
  )
}

export default Navigaionerr
