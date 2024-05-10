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
                                    <th className='border-collapse border border-slate-400 p-3 w-40'>Images</th>
                                    <th className='border-collapse border border-slate-400 p-3 w-40'>Courses</th>
                                    <th className='border-collapse border border-slate-400  p-3 w-40'>Unit Price</th>
                                    <th className='border-collapse border border-slate-400   p-3 w-40'>Quantity</th>
                                    <th className='border-collapse border border-slate-400  p-3 w-40'>Total</th>
                                    <th className='border-collapse border border-slate-400  p-3 w-40'>Remove</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                 
                </div>
            </div>{/* conatiner*/}
        </div>
    )
}

export default Cart
