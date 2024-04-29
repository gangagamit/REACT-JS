import React from 'react'
import Welcome from '../../WEB/Welcome'
import Header from '../../WEB/Header'
import Header_2 from '../../WEB/Header_2'

function Contact() {
    return (
        <>
            <Welcome />
            <div className=' container mx-auto mt-6'>
                <Header />
                <Header_2 />
                <div className='conatct flex justify-around'>
                    <div className='get h-[400px] w-[400px] border-2 rounded mt-8'>
                        <h1 className='text-2xl font-medium'>Get In Touch</h1>
                        <div className='location flex  justify-center items-center p-3 gap-1'>
                            <div className='location-1 text-slate-400'>
                                <i class="ri-map-pin-line"></i>
                            </div>
                            <div className='location-2 mt-3 text-slate-400'>
                                24/26 strait Bargate, Boston,
                                <pre>PE21, United Kingdom</pre>
                            </div>
                        </div>

                        <div className='phone flex  justify-center items-center p-3 gap-1'>
                            <div className='phone-1 text-slate-400'>
                                <i class="ri-phone-line"></i>
                            </div>
                            <div className='phone-2 mt-3 text-slate-400'>
                                +098 (905) 7868978
                                <pre>6-146-389-5748</pre>
                            </div>
                        </div>
                        <div className='time flex  justify-center items-center p-3 gap-1'>
                            <div className='time-1 text-slate-400 '>
                                <i class="ri-time-line"></i>
                            </div>
                            <div className='time-2 mt-3 text-slate-400 text-start'>
                                store Hours:
                                <pre>10am-10pm EST,7 days a week</pre>
                            </div>
                        </div>
                    </div>{/* get close */}
                    <div className='make w-[600px]'>
                        <div>

                            <h1 className='text-3xl font-medium text-start'>Make Custom Request</h1>
                            <p className='text-sm text-start'>Must-have pieces selected every month want style Ideas and Treats?</p>
                        </div>
                        <div className='grid grid-cols-2 gap-3 mt-5'>
                            <div >
                                
                                <input type="email" placeholder='Full name' id="email" className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div>
                                
                                <input type="email" placeholder='Email address' id="email" className="bg-gray-50  outline-none border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-3 mt-5'>
                            <div >
                                
                                <input type="email" placeholder='Phone Number' id="email" className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div>
                                
                                <input type="email" placeholder='Subject' id="email" className="bg-gray-50  outline-none border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <textarea rows={10} cols={79} className='border-2 rounded'></textarea>
                        </div>
                        <div className='text-start'>
                            <button className='bg-red-600 text-white p-3 font-medium text-start'> Get A Quote <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>{/*make close */}
                </div>


            </div>
        </>
    )
}

export default Contact

