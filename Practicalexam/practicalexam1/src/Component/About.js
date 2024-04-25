import React from 'react'
import img1 from '../Image/about.jpg';
function About() {
    return (
        <>
            <div >
                <div className='  container mx-auto flex justify-center items-center bg-gray-100 shadow-md hover:bg-gray-200 hover:shadow-xl h-[500px] w-[100%]'>
                    <div className='grid grid-cols-2 gap-5'>
                        <div >
                            <img src={img1}  className='rounded'/>
                        </div>
                        <div className='text-start'>
                            <h1 className='text-4xl font-bold'>About Us</h1>
                            <h1 className='text-lg font-semibold'>Sample Headline</h1>
                            <div className='mt-2'>
                                <p className='text-start line-clamp-4'>
                                    Artical evident arrived express highest men did boy.Mistress sensible
                                    Admitro– Are You hunt for a set of best Bootstrap Laravel templates ends with us at Admitro . We provide you highly flexible and fully customizable designs that would elevate your amazing projects. Packed with powers of PHP, Bootstrap 4 and SASS, Admitro lets you fit into anything, anywhere Mobile, Desktop, Tablets.
                                </p>
                                <button className='bg-black text-lg p-2 font-semibold rounded-lg w-44 mt-2 text-white'>Contact Us</button>
                            </div>
                        </div>

                    <div className=' container mx-auto'>
                        <div className='grid grid-cols-3 gap-[400px]'>

                            <div className=' bg-orange-500 text-white rounded-lg p-5 shadow-lg w-96'>
                                <p className=' font-semibold'><span><i class="fa-solid fa-phone"></i></span> Call Us</p>
                                <p>1 (234)584-891</p>
                                <p>1 (234)584-891</p>
                            </div>
                            <div className=' bg-orange-500 text-white rounded-lg p-5 shadow-lg w-96'>
                                <p className=' font-semibold'><span><i class="fa-solid fa-location-dot"></i></span> location</p>
                                <p>121 Rock Sreet, 21 Avenue, New york </p>

                            </div>
                            <div className=' bg-orange-500 text-white rounded-lg p-5 shadow-lg w-96'>
                                <p className=' font-semibold'><span><i class="fa-solid fa-clock"></i></span> Hours</p>
                                <p>Mon-Fri......10am - 6pm, Sat-sun... 7am - 7pm</p>
                                <p>1 (234)584-891</p>
                            </div>
                        </div>
                    </div>

                    </div>     
                </div>
                            
            </div>
        </>
    )
}

export default About
