import React from 'react'
import { Link } from 'react-router-dom';
import '../Shops/Cart.css';
import { VscTriangleUp } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { VscTriangleDown } from "react-icons/vsc";
import { REMOVE, CART_QUTY_ICREAMENT , CART_QUTY_DECREAMENT} from '../../Redux/Action/Action';
function Cart() {

    let Subtotal = 0;
    const GST = 18.00;
    let GstCount = 0;
    const Data = useSelector((state) => state.Cartreducer.carts)
    const dispatch = useDispatch();
    const remove = (id) => {
        dispatch(REMOVE(id));
    }

    const increament_qnty = (item) => {
        dispatch(CART_QUTY_ICREAMENT(item))
    }
    const decreament_qnty = (item) => {
        dispatch(CART_QUTY_DECREAMENT(item))
    }
    GstCount += Subtotal * GST
    return (
        <div>
            {/* bg-img*/}
            <div className='cart-bg p-3'>
                <div className=' flex'>
                    <div>
                        <Link to='/'>Home</Link>
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
                            <tbody>
                                {Data.length ?
                                    Data.map((cvalue, ind) => {
                                        console.log(cvalue, "cvalue");
                                        const { name, price, imgg1, id, quantity, } = cvalue.cvalue;
                                        Subtotal += quantity * price 
                                        GstCount =  (Subtotal * GST)/100;
                                        return (
                                            <>
                                                <tr className='border' key={id}>
                                                    <td className=' flex justify-center'>
                                                        <img src={imgg1} alt="" height={130} width={130} className='py-3' />
                                                    </td>
                                                    <td className=' border w-[10rem] text-center mx-[25rem]'>{name}</td>
                                                    <td className='border text-center' >{price}</td>
                                                    <td className='border items-center w-[12rem]' >
                                                        <div className="quantity_input border rounded-md flex items-center justify-between p-4 cursor-pointer">
                                                            <p className='text-xl font-semibold'>{quantity}</p>
                                                            <p className='QUT-btn flex flex-col items-stretch justify-center'>
                                                                <button onClick={() => increament_qnty(cvalue)} className='INCREASE_count flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all py-[1.5px]' ><VscTriangleUp/></button>
                                                                <button onClick={() => decreament_qnty(cvalue)} className='DECREASE_count flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all py-[1.5px]'><VscTriangleDown/></button>
                                                            </p>
                                                        </div>

                                                    </td>
                                                    <td className='border text-center' >{quantity * price}</td>
                                                    <td className='text-center' ><button onClick={() => remove(id)}>Remove</button></td>
                                                </tr>
                                            </>
                                        )
                                    })
                                    : <pre className='text-2xl font-bold text-star'>Cart is empty........</pre>}
                            </tbody>
                        </table>
                    </div>

                </div>
                <div>
                    <div className=' grid lg:grid-cols-6 md:grid-cols-1 sm:grid-cols-1'>
                        <div className=' flex col-span-3 justify-center mt-5 gap-4'>
                            <button className=' text-md font-medium p-3 w-40 text-start'> Coupon Code</button>
                            <button className=' text-md p-3 font-medium bg-red-700 text-white w-40'>Apply Coupon</button>
                        </div>
                        <div className=' col-span-3 flex justify-center mt-5'>
                            <button className=' bg-red-700 text-white w-40 font-medium text-md'>Update Cart</button>
                        </div>
                    </div>
                </div>
                <div className=' float-end'>

                    <h3 className='text-2xl font-medium text-start'>Cart Totals</h3>
                </div>
                <div className=' flex mt-10'>


                    <div className=' col-span-3 flex ml-auto'>

                        <ul>
                            <li className='  border-[1px] w-80 flex justify-between'>
                                <p className=' text-slate-500 '>Subtotal</p>
                                <span className=' text-slate-500 '>$00.00</span>
                            </li>
                            <li className='  border-[1px] w-80 flex justify-between'>
                                <p className=' text-slate-500 '>Total</p>
                                <span className=' text-slate-500 '>$00.00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>{/* conatiner*/}
        </div>
    )
}

export default Cart
