import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import '../Shops/Wishstyle.css';
import Footer from '../../WEB/Footeer/Footer';
import { Link } from 'react-router-dom';
import { WREMOVE } from '../../Redux/Action/Action';

function Wishlist() {
    
    const Data = useSelector((state) => state.wishreducer.wish)
    const dispatch = useDispatch();
    const remove = (id)=>{
        dispatch(WREMOVE(id));
    }
  return (
    <div className=' container'>
        <div>

            <div className='wishlist-bg p-3'>
                <div className=' flex'>
                    <div>
                        <Link to='/'>Home</Link>
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
                    : <h1 className='text-[35px] font-bold'>whishlist is empty...........</h1>}
                        </tbody> 

                    </table>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Wishlist
