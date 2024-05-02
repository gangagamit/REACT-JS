import React from 'react'
import img1 from '../../Image/product-1.jpg';
import img2 from '../../Image/product-2.jpg';
import img3 from '../../Image/product-3.jpg';
import img4 from '../../Image/product-4.jpg';
import img5 from '../../Image/product-5.jpg';
import img6 from '../../Image/product-6.jpg';
import img7 from '../../Image/product-7.jpg';
import img8 from '../../Image/product-8.jpg';
import img9 from '../../Image/product-9.jpg';
import img10 from '../../Image/product-10.jpg';
import img11 from '../../Image/product-11.jpg';
import img12 from '../../Image/product-12.jpg';
import img13 from '../../Image/product-13.jpg';
import img14 from '../../Image/product-14.jpg';
import img15 from '../../Image/product-15.jpg';
import img16 from '../../Image/product-16.jpg';
import img17 from '../../Image/product-17.jpg';
import img18 from '../../Image/product-18.jpg';
import img19 from '../../Image/product-19.jpg';
import img20 from '../../Image/product-20.jpg';
const PopularProduct = () => {
    return (
        <div className='main p-3 container mx-auto'>
            <div className=' flex justify-between'>


                <div className='flex gap-2'>
                    <h1 className=' font-sans text-2xl font-bold'>
                        Popular
                    </h1>
                    <h2 className=' font-sans text-2xl text-pink-500 underline'>
                        Products
                    </h2>
                </div>
                <div>
                    <ul>
                        <li><a href='#' className='text-pink-500 underline'>All</a></li>
                        <li><a href='#' className='font-bold font-sans'>Popular</a></li>
                        <li><a href='#' className='font-bold font-sans'>On Sale</a></li>
                        <li><a href='#' className='font-bold font-sans'>Best Rated</a></li>
                    </ul>
                </div>
            </div>
            {/* grid-1 start */}
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3'>
                <div className='card-1'>
                    <div className=' max-sm-w card shadow rounded overflow-hidden'>
                        <div className='button '>
                            <div className=''>
                                <a href="#" className='burdges relative inline-block'>
                                    <img src={img1} alt="" />
                                    <img className='Burges' src={img2} alt="" />
                                    <div className='icon'>
                                        <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                        <a href="#"><i className="ri-arrow-left-right-line text-2xl"></i></a>
                                        <a href="#"><i class="ri-eye-line text-xl"></i></a>
                                        <a href="#"><i class="ri-heart-line text-lg"></i></a>
                                    </div>
                                </a>

                                <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Terry Byrd</h6>
                                <h2 className='font-bold'>$100.00</h2>
                                <div className='btn mt-6 mb-6'>
                                    <div className='flex gap-[2px]'>
                                        <button className='rounded-full h-[10px] w-[10px] bg-sky-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-rose-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-orange-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-indigo-500'></button>
                                    </div>
                                    <div className='flex items-center'>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600 "></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-regular fa-star text-xs text-rose-600"></i></button>
                                        <span className='text-xs'>(81)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-2'>
                    <div className='button'>
                        <div className=''>
                            <a href="#" className='burdges relative inline-block'>
                                <img src={img3} alt="" />
                                <img className='Burges' src={img4} alt="" />
                                <div className='icon'>
                                <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                        <a href="#"><i className="ri-arrow-left-right-line text-2xl"></i></a>
                                        <a href="#"><i class="ri-eye-line text-xl"></i></a>
                                        <a href="#"><i class="ri-heart-line text-lg"></i></a>
                                </div>
                            </a>

                            <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Terry Byrd</h6>
                            <h2 className='font-bold'>$100.00</h2>
                            <div className='btn mt-6 mb-6'>
                                <div className='flex gap-[2px]'>
                                    <button className='rounded-full h-[10px] w-[10px] bg-sky-500'></button>
                                    <button className='rounded-full h-[10px] w-[10px] bg-rose-500'></button>
                                    <button className='rounded-full h-[10px] w-[10px] bg-orange-500'></button>
                                    <button className='rounded-full h-[10px] w-[10px] bg-indigo-500'></button>
                                </div>
                                <div className='flex items-center'>
                                    <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                    <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                    <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                    <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                    <button className='border-0'><i class="fa-regular fa-star text-xs text-rose-600"></i></button>
                                    <span className='text-xs'>(81)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-3'>
                    <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <div className='button'>
                            <div className=''>
                                <a href="#" className='burdges relative inline-block'>
                                    <img src={img5} alt="" />
                                    <img className='Burges' src={img6} alt="" />
                                    <div className='icon'>
                                    <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                        <a href="#"><i className="ri-arrow-left-right-line text-2xl"></i></a>
                                        <a href="#"><i class="ri-eye-line text-xl"></i></a>
                                        <a href="#"><i class="ri-heart-line text-lg"></i></a>
                                    </div>
                                </a>

                                <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Terry Byrd</h6>
                                <h2 className='font-bold'>$100.00</h2>
                                <div className='btn mt-6 mb-6'>
                                    <div className='flex gap-[2px]'>
                                        <button className='rounded-full h-[10px] w-[10px] bg-sky-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-rose-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-orange-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-indigo-500'></button>
                                    </div>
                                    <div className='flex items-center'>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-regular fa-star text-xs text-rose-600"></i></button>
                                        <span className='text-xs'>(81)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-3'>
                    <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <div className='button'>
                            <div className=''>
                                <a href="#" className='burdges relative inline-block'>
                                    <img src={img7} alt="" />
                                    <img className='Burges' src={img8} alt="" />
                                    <div className='icon'>
                                    <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                        <a href="#"><i className="ri-arrow-left-right-line text-2xl"></i></a>
                                        <a href="#"><i class="ri-eye-line text-xl"></i></a>
                                        <a href="#"><i class="ri-heart-line text-lg"></i></a>
                                    </div>
                                </a>

                                <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Terry Byrd</h6>
                                <h2 className='font-bold'>$100.00</h2>
                                <div className='btn mt-6 mb-6'>
                                    <div className='flex gap-[2px]'>
                                        <button className='rounded-full h-[10px] w-[10px] bg-sky-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-rose-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-orange-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-indigo-500'></button>
                                    </div>
                                    <div className='flex items-center'>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-regular fa-star text-xs text-rose-600"></i></button>
                                        <span className='text-xs'>(81)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  {/* grid-1 end */}

            {/* grid-2 start */}
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3 mt-5'>
                <div className='card-1'>
                    <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <div className='button'>
                            <div className=''>
                                <a href="#" className='burdges relative inline-block'>
                                    <img src={img9} alt="" />
                                    <img className='Burges' src={img10} alt="" />
                                    <div className='icon'>
                                    <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                        <a href="#"><i className="ri-arrow-left-right-line text-2xl"></i></a>
                                        <a href="#"><i class="ri-eye-line text-xl"></i></a>
                                        <a href="#"><i class="ri-heart-line text-lg"></i></a>
                                    </div>
                                </a>

                                <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Terry Byrd</h6>
                                <h2 className='font-bold'>$100.00</h2>
                                <div className='btn mt-6 mb-6'>
                                    <div className='flex gap-[2px]'>
                                        <button className='rounded-full h-[10px] w-[10px] bg-sky-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-rose-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-orange-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-indigo-500'></button>
                                    </div>
                                    <div className='flex items-center'>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-regular fa-star text-xs text-rose-600"></i></button>
                                        <span className='text-xs'>(81)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-2'>
                    <div className=' max-sm-w shadow rounded overflow-hidden'>
                    <div className='button'>
                            <div className=''>
                                <a href="#" className='burdges relative inline-block'>
                                    <img src={img11} alt="" />
                                    <img className='Burges' src={img12} alt="" />
                                    <div className='icon'>
                                    <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                        <a href="#"><i className="ri-arrow-left-right-line text-2xl"></i></a>
                                        <a href="#"><i class="ri-eye-line text-xl"></i></a>
                                        <a href="#"><i class="ri-heart-line text-lg"></i></a>
                                    </div>
                                </a>

                                <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Terry Byrd</h6>
                                <h2 className='font-bold'>$100.00</h2>
                                <div className='btn mt-6 mb-6'>
                                    <div className='flex gap-[2px]'>
                                        <button className='rounded-full h-[10px] w-[10px] bg-sky-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-rose-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-orange-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-indigo-500'></button>
                                    </div>
                                    <div className='flex items-center'>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-regular fa-star text-xs text-rose-600"></i></button>
                                        <span className='text-xs'>(81)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-3'>
                    <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <div className='button'>
                            <div className=''>
                                <a href="#" className='burdges relative inline-block'>
                                    <img src={img13} alt="" />
                                    <img className='Burges' src={img14} alt="" />
                                    <div className='icon'>
                                    <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                        <a href="#"><i className="ri-arrow-left-right-line text-2xl"></i></a>
                                        <a href="#"><i class="ri-eye-line text-xl"></i></a>
                                        <a href="#"><i class="ri-heart-line text-lg"></i></a>
                                    </div>
                                </a>

                                <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Terry Byrd</h6>
                                <h2 className='font-bold'>$100.00</h2>
                                <div className='btn mt-6 mb-6'>
                                    <div className='flex gap-[2px]'>
                                        <button className='rounded-full h-[10px] w-[10px] bg-sky-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-rose-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-orange-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-indigo-500'></button>
                                    </div>
                                    <div className='flex items-center'>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-regular fa-star text-xs text-rose-600"></i></button>
                                        <span className='text-xs'>(81)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-4'>
                    <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <div className='button'>
                            <div className=''>
                                <a href="#" className='burdges relative inline-block'>
                                    <img src={img15} alt="" />
                                    <img className='Burges' src={img16} alt="" />
                                    <div className='icon'>
                                    <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                        <a href="#"><i className="ri-arrow-left-right-line text-2xl"></i></a>
                                        <a href="#"><i class="ri-eye-line text-xl"></i></a>
                                        <a href="#"><i class="ri-heart-line text-lg"></i></a>
                                    </div>
                                </a>

                                <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Terry Byrd</h6>
                                <h2 className='font-bold'>$100.00</h2>
                                <div className='btn mt-6 mb-6'>
                                    <div className='flex gap-[2px]'>
                                        <button className='rounded-full h-[10px] w-[10px] bg-sky-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-rose-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-orange-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-indigo-500'></button>
                                    </div>
                                    <div className='flex items-center'>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-regular fa-star text-xs text-rose-600"></i></button>
                                        <span className='text-xs'>(81)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    {/* grid-2 end */}
            {/* grid-3 start */}

            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5'>
                <div className='card-1'>
                    <div className=' max-sm-w shadow rounded overflow-hidden'>
                    <div className='button'>
                            <div className=''>
                                <a href="#" className='burdges relative inline-block'>
                                    <img src={img17} alt="" />
                                    <img className='Burges' src={img18} alt="" />
                                    <div className='icon'>
                                    <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                        <a href="#"><i className="ri-arrow-left-right-line text-2xl"></i></a>
                                        <a href="#"><i class="ri-eye-line text-xl"></i></a>
                                        <a href="#"><i class="ri-heart-line text-lg"></i></a>
                                    </div>
                                </a>

                                <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Terry Byrd</h6>
                                <h2 className='font-bold'>$100.00</h2>
                                <div className='btn mt-6 mb-6'>
                                    <div className='flex gap-[2px]'>
                                        <button className='rounded-full h-[10px] w-[10px] bg-sky-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-rose-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-orange-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-indigo-500'></button>
                                    </div>
                                    <div className='flex items-center'>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-regular fa-star text-xs text-rose-600"></i></button>
                                        <span className='text-xs'>(81)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-2'>
                    <div className=' max-sm-w shadow rounded overflow-hidden'>
                    <div className='button'>
                            <div className=''>
                                <a href="#" className='burdges relative inline-block'>
                                    <img src={img19} alt="" />
                                    <img className='Burges' src={img20} alt="" />
                                    <div className='iconn'>
                                        <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                        <a href="#"><i className="ri-arrow-left-right-line text-2xl"></i></a>
                                        <a href="#"><i class="ri-eye-line text-xl"></i></a>
                                        <a href="#"><i class="ri-heart-line text-lg"></i></a>
                                    </div>
                                </a>

                                <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Terry Byrd</h6>
                                <h2 className='font-bold'>$100.00</h2>
                                <div className='btn mt-6 mb-6'>
                                    <div className='flex gap-[2px]'>
                                        <button className='rounded-full h-[10px] w-[10px] bg-sky-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-rose-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-orange-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-indigo-500'></button>
                                    </div>
                                    <div className='flex items-center'>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button className='border-0'><i class="fa-regular fa-star text-xs text-rose-600"></i></button>
                                        <span className='text-xs'>(81)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* grid-3 end */}

        </div> // main div end

    )
}

export default PopularProduct
