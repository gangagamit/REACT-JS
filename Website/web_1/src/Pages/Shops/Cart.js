import React from 'react'
import { Link } from 'react-router-dom';
import '../Shops/Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE } from '../../Redux/Action/Action';
function Cart() {

    const Data = useSelector((state) => state.Cartreducer.carts)
    const dispatch = useDispatch();
    const remove = (id)=>{
        dispatch(REMOVE(id));
    }
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
                            console.log(cvalue,"cvalue");
                            const {name , price ,  imgg1 , id} = cvalue.cvalue;
                            return (
                                <>
                                    <tr className='border' key={id}>
                                        <td className=' flex justify-center'>
                                            <img src={imgg1} alt="" height={130} width={130} className='py-3' />
                                        </td>
                                        <td className=' border w-[10rem] text-center mx-[25rem]'>{name}</td>
                                        <td className='border text-center' >{price}</td>
                                        <td className='border items-center w-[12rem]' >
                                            <div className='border py-4  mx-[4rem] flex justify-center rounded '>
                                                <input type="number" defaultValue={1} className='outline-none border-none focus:border-none mx-2' />
                                            </div>
                                        </td>
                                        <td className='border text-center' >{price}</td>
                                         <td className='text-center' ><button onClick={() => remove(id)}>Remove</button></td> 
                                    </tr>
                                </>
                            )
                        })
                    : <h1 className='text-[35px] font-bold'>cart is empty...........</h1>}
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
