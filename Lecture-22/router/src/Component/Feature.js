import React from 'react'

function Feature() {
  return (
    <div className='bg-green-100 h-screen flex justify-center items-center'>
        
        <div className=' container '>
            <div className='demo'>
                <h1 className='demo-text font-semibold  font-sans text-4xl m-2'>Autolist main Features</h1>
                <div className=' text-center'>
                    <h1 className='text-sm font-sans text-slate-400'>
                    Autolist admin template comes with of ready to use feature. It has lots of premade functionality which completely ready for any projects
                    </h1>
                </div>
            </div>
            <div className='grid grid-cols-3 mt-5'>
                <div className='max-w-sm shadow-lg rounded overflow-hidden h-64 text-start p-5'>
                    <h1>
                    <i class="fa-regular fa-file fa-3x text-red-400"></i>
                    </h1>
                    <h1 className='text-2xl font-semibold mt-2'>
                    Quality & Clean Code
                    </h1>
                    <p className='mt-2 font-sans font-semibold text-slate-400'>Autolist admin is well code structure as clean & commented.</p>
                </div>
                <div className='max-w-sm shadow-lg rounded overflow-hidden h-64 text-start p-5'>
                    <h1>
                    <i class="fa-solid fa-computer fa-3x text-red-400"></i>
                    </h1>
                    <h1 className='text-2xl font-semibold mt-2'>
                    Multiple Demos
                    </h1>
                    <p className='mt-2 font-sans font-semibold text-slate-400'>Multiple Demos are included in this template.</p>
                </div>
                <div className='max-w-sm shadow-lg rounded overflow-hidden h-64 text-start p-5'>
                    <h1>
                    <i class="fa-solid fa-mobile-screen fa-3x text-red-400"></i>
                    </h1>
                    <h1 className='text-2xl font-semibold mt-2'>
                    Bootstrap5 Framework
                    </h1>
                    <p className='mt-2 font-sans font-semibold text-slate-400'>Autolist is fully responsive and comes with Bootstrap5 Framework</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature
