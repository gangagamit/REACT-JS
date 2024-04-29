import React from 'react'
import '../Shops/Cart.css';
function Cart() {
    return (
        <div>
            {/* bg-img*/}
            <div className='cart-bg p-3'>
                <div className=' flex'>
                    <div>
                        <p>Home</p>
                    </div>
                    <div className='hr-5 mt-3'></div>
                    <div>
                        <p>Cart</p>
                    </div>
                </div>
                <div className='text-start'>
                    <p className='text-2xl font-semibold'>Cart</p>
                </div>
            </div> {/* bg-img*/}
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
                <div className='coupon-code'>
                    <div className='flex'>
                        <div className=' bg-slate-100'>
                            <input type='text' placeholder='Coupon code' className='outline-none h-16 w-24 rounded-full bg-slate-100'/>
                        </div>
                        <div>
                            adsd
                        </div>
                    </div>
                </div>
            </div>{/* conatiner*/}
        </div>
    )
}

export default Cart
