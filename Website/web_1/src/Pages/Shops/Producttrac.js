import React from 'react'
import '../Shops/Track.css';
import Footer from '../../WEB/Footer';
import img1 from '../../Image/track-bg.jpg';
function Producttrac() {
  return (
    <div className='container mx-auto'>
            <div className='grid grid-cols-1 place-content-center place-items-center'>
                    <div className='track p-2'>
                        <div className='flex'>

                            <div>
                                <p>Home</p>
                            </div>
                            <div className='hr mt-3'>

                            </div>
                            <div className='trck'>
                                    <p>Track</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-2xl font-semibold text-start'>Track</p>
                        </div>
                    </div>
                   
            </div>
            <div className='grid grid-col-1 place-content-center place-items-start'>
                <div className='max-w-lg rounded overflow-hidden shadow-lg bg-slate-100'>
                        <img src={img1} alt='track-img'/>
                        <div className='flex justify-center items-center bg-slate-100 p-5 gap-5'>
                            <div className='truck-icon h-12 w-12 bg-white p-2 flex justify-center items-center rounded'>
                            <i className="ri-truck-line text-3xl"></i>
                            </div>
                            <div className='truck-text'>
                                <h1 className='text-start text-lg font-sans font-bold'>Track Your Order</h1>
                                <p className='text-start text-md text-slate-600'>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                            </div>
                        </div>
                        <div className='tbtruck mb-10 bg-slate-100'>
                            <form action='#' className='flex  justify-center items-center gap-2'>
                                <span className='bg-white w-12 h-12 rounded flex justify-center items-center'><i className="ri-id-card-line text-3xl text-slate-400 "></i></span>
                                <input type='text' placeholder=' Order ID' className='w-96 outline-none h-16 rounded-md'/>
                            </form>
                        </div>

                        <div className='ttruck  bg-slate-100'>
                            <form action='#' className='flex justify-center items-center gap-2'>
                                <span className='bg-white w-12 h-12 rounded flex justify-center items-center'><i className="ri-mail-line text-3xl text-slate-400"></i></span>
                                <input type='text' placeholder=' Billing email' className='w-96 outline-none h-16 rounded-md'/>
                            </form>
                        </div>

                        <div className='truck-btn mb-5 mt-3 flex justify-center items-center'>
                            <button className='tb-submite bg-red-600  hover:bg-red-700 w-80 h-12 text-center rounded text-white text-md font-semibold outline-none'>Track now
                            <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                </div>
            </div>
            <div>

            {<Footer/>}
            </div>
    </div>
  )
}

export default Producttrac
