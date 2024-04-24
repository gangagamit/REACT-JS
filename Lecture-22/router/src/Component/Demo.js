import React from 'react'
import img1 from '../Image/featured-image-1024x595.jpg';
import img2 from '../Image/img2.png';
import img3 from '../Image/img3.jpg';
function Demo() {
  return (
    <div className='bg-green-100 h-screen flex justify-center items-center'>
        <div className=' container'>
            <div className='demo'>
                <h1 className='demo-text font-semibold  font-sans text-4xl m-2'>Autolist Modern Demo Pages</h1>
                <div className=' text-center'>
                    <h1 className=' font-sans text-lg text-slate-400'>
                        Autolist - Responsive Classified Ads Bootstrap 5 HTML 5 Listing Template is available with 8 home pages . So that users can choose their best theme and customize the Autolist Listing template according to their choice.
                    </h1>
                </div>
            </div>
            <div className='grid grid-cols-3 mt-2'>
                <div className='max-w-sm shadow rounded overflow-hidden h-96'>
                    <img src={img1} alt='image'/>
                </div>
                <div className='max-w-sm shadow rounded overflow-hidden h-96'>
                    <img src={img2} alt='image'/>
                </div>
                <div className='max-w-sm shadow rounded overflow-hidden h-96'>
                    <img src={img3} alt='image'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Demo
