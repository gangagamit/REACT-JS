import React from 'react'
import ProductData from './ProductData';
import { Link } from 'react-router-dom';
function ProductCard() {
    return (
        <div className=' container mx-auto bg-white'>
            <div className='product xl:flex justify-between sm:block md:block '>
                <p className='text-2xl text-start font-bold'>popular   <span className='text-red-700'>Products</span></p>
                <nav>
                    <ul className='flex w-80 justify-between mr-7 font-bold '>
                        <li className='text-red-700 font-bold'><a>ALL</a></li>
                        <li><a>Popular</a></li>
                        <li><a>On sale</a></li>
                        <li><a>Best rated</a></li>
                    </ul>
                </nav>
            </div>
            <div className='images-card'>
                <div className='card-1 gap-10 rounded overflow-hidden grid xl:grid-cols-4 l:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                    {ProductData.map((cvalue) => {
                        return (<>
                            <div className='shadow max-w-sm  overflow-hidden relative'>
                                <div className='hover-1'>
                                    <div className='bg-slate-200'>
                                        <Link to={`product/${cvalue.id}`}><img src={cvalue.FirstImg} alt='image'/></Link>
                                    </div>
                                    <div className='btn h-10 w-48 bg-white rounded-md absolute top-20 left-8'>
                                        <ul className='flex justify-evenly'>
                                            <li className='text-2xl font-bold'><a href='#'><i class="fa-solid fa-basket-shopping"></i></a></li>
                                            <li className='text-2xl font-bold'><a href='#'><i class="fa-solid fa-arrow-right-arrow-left"></i></a></li>
                                            <li className='text-2xl font-bold'><a href='#'><i class="fa-solid fa-eye"></i></a></li>
                                            <li className='text-2xl font-bold'><a href='#'><i class="fa-regular fa-heart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className='text-start'>
                                        <p className='hover:text-red-700'>{cvalue.name}</p>
                                        <p className='font-bold'>{cvalue.price}</p>
                                    </div>
                                    <p>hello</p>
                                </div>


                                <div className='hover-2 absolute top-0 left-0 right-0 hover:opacity-10'>

                                    <div className='bg-slate-200'>
                                        {/* <Link to={`product/${cvalue.id}`}><img src={cvalue.FirstImg} alt='image'></img></Link> */}
                                        <Link to={`product/${cvalue.id}`}><img src={cvalue.SecondeImg} alt='image'></img></Link>
                                    </div>
                                    <div className='text-start'>
                                        <p className='hover:text-red-700'>{cvalue.name}</p>
                                        <p className='font-bold'>{cvalue.price}</p>
                                    </div>

                                </div>







                            </div>
                        </>)
                    })}

                </div>
            </div>
        </div>
    )
}

export default ProductCard
