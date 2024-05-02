import React from 'react'

import '../Shops/Wishstyle.css';
import Footer from '../../WEB/Footeer/Footer';
function Wishlist() {
  return (
    <div className=' container'>
        <div>

            <div className='wishlist-bg p-3'>
                <div className=' flex'>
                    <div>
                        <p>Home</p>
                    </div>
                    <div className='hr-2 mt-3'></div>
                    <div>
                        <p>Whishlist</p>
                    </div>
                </div>
                <div className='text-start'>
                    <p className='text-2xl font-semibold'>Whishlist</p>
                </div>
            </div>   
        </div>
        <div className='container'>
            <div className='grid grid-cols-1 place-content-center place-items-center'>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th className='border-collapse border border-slate-400 p-3 '>Images</th>
                                < th className='border-collapse border border-slate-400  p-3'>Courses</th>
                                <th className='border-collapse border border-slate-400  p-3 '>Unit Price</th>
                                <th className='border-collapse border border-slate-400   p-3'>Quantity</th>
                                <th className='border-collapse border border-slate-400  p-3'>Total</th>
                                <th className='border-collapse border border-slate-400   p-3'>Add To Cart</th>
                                <th className='border-collapse border border-slate-400  p-3'>Remove</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Wishlist
