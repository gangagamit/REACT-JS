import React from 'react'
import Product1 from '../../../Image/product-1.jpg';
import Product2 from '../../../Image/product-2.jpg';
import img3 from '../../../Image/product-3.jpg';
import img4 from '../../../Image/product-4.jpg';
// import img5 from '../../Image/product-5.jpg';
// import img6 from '../../Image/product-6.jpg';
// import img7 from '../../Image/product-7.jpg';
// import img8 from '../../Image/product-8.jpg';
// import img9 from '../../Image/product-9.jpg';
// import img10 from '../../Image/product-10.jpg';
// import img11 from '../../Image/product-11.jpg';
// import img12 from '../../Image/product-12.jpg';
// import img13 from '../../Image/product-13.jpg';
// import img14 from '../../Image/product-14.jpg';
// import img15 from '../../Image/product-15.jpg';
// import img16 from '../../Image/product-16.jpg';
// import img17 from '../../Image/product-17.jpg';
// import img18 from '../../Image/product-18.jpg';
// import img19 from '../../Image/product-19.jpg';
// import img20 from '../../Image/product-20.jpg';
function Filterv_2() {
    return (
        <div>
            <div className='shop p-5'>
                <div className='flex'>
                    <div>
                        <h1>Home</h1>
                    </div>
                    <div className='hr mt-3'>

                    </div>
                    <div>
                        <h1>Shop</h1>
                    </div>
                </div>
                <div>
                    <p className='font-semibold text-3xl text-start'>Shop</p>
                </div>
            </div>

            <div className=' container'>
                {/* grid-1 */}
                <div className='grid lg:grid-cols-10 md:grid-cols-10 sm:grid-cols-1 gap-2'>
                    <div className=' col-span-6 text-start'>
                        <p className='text-lg'> <span className=' font-medium'>10</span> Item On List</p>
                    </div>
                    <div className='sort'>

                        <form class="max-w-sm mx-auto">

                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Sorted by (default)</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </form>

                    </div>
                    <div>
                        <form class="max-w-sm mx-auto">

                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>All</option>
                                <option value="US">10 per page</option>
                                <option value="CA">20 per page</option>
                                <option value="FR">30 per page</option>

                            </select>
                        </form>
                    </div>
                    <div className='flex items-center gap-2'>
                    <i class="ri-list-unordered text-2xl"></i>
                        <i class="ri-grid-line text-2xl text-red-400"></i>
                    </div>

                </div>
                {/* grid-1 close*/}
                <div className='cardd flex'>
                    <div className='Bradly'>
                        <div className='grid grid-cols-4'>
                            <div className=' max-w-60 rounded shadow overflow-hidden'>
                                <div className='button'>
                                    <div className=''>
                                        <a href="#" className='burdges relative inline-block'>
                                            <img src={Product1} alt="" />
                                            <img className='Burges' src={Product2} alt="" />
                                            <div className='iconn-p'>
                                                <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                                <a href="#"><i class="ri-arrow-left-right-fill"></i></a>
                                                <a href="#"><i class="ri-eye-line"></i></a>
                                                <a href="#"><i class="ri-heart-line"></i></a>
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
                                                <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                                <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                                <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                                <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                                <button><i class="fa-regular fa-star text-xs text-rose-600"></i></button>
                                                <span className='text-xs'>(81)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' max-w-60 rounded shadow overflow-hidden'>
                                <div className='button'>
                                    <div className=''>
                                        <a href="#" className='burdges relative inline-block'>
                                            <img src={img3} alt="" />
                                            <img className='Burges' src={img4} alt="" />
                                            <div className='iconn-p'>
                                                <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                                <a href="#"><i class="ri-arrow-left-right-fill"></i></a>
                                                <a href="#"><i class="ri-eye-line"></i></a>
                                                <a href="#"><i class="ri-heart-line"></i></a>
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
                                                <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                                <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                                <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                                <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                                <button><i class="fa-regular fa-star text-xs text-rose-600"></i></button>
                                                <span className='text-xs'>(81)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=' max-w-60 rounded shadow overflow-hidden'>
                                <div className='button'>
                                    <div className=''>
                                        <a href="#" className='burdges relative inline-block'>
                                            <img src={img3} alt="" />
                                            <img className='Burges' src={img4} alt="" />
                                            <div className='iconn-p'>
                                                <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                                <a href="#"><i class="ri-arrow-left-right-fill"></i></a>
                                                <a href="#"><i class="ri-eye-line"></i></a>
                                                <a href="#"><i class="ri-heart-line"></i></a>
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
                                                <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                                <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                                <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                                <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                                <button><i class="fa-regular fa-star text-xs text-rose-600"></i></button>
                                                <span className='text-xs'>(81)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div> {/*grid close */}

                        
                    </div>
                    <div className='cate'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filterv_2
