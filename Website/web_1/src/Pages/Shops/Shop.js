import React from 'react'
import '../Shops/shop.css';
import img1 from '../../Image/product-1.jpg';
import img2 from '../../Image/product-3.jpg';
import img3 from '../../Image/product-5.jpg';
import img4 from '../../Image/product-7.jpg';
import img5 from '../../Image/product-9.jpg';
import img6 from '../../Image/product-11.jpg';
import img7 from '../../Image/product-13.jpg';
import img8 from '../../Image/product-15.jpg';
import img9 from '../../Image/product-17.jpg';
import img10 from '../../Image/product-19.jpg';
function Shop() {
    return (
        <div className='container'>
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
            <div className='item flex justify-between items-center p-2'>
                <div>
                    <p className='text-slate-400 text-2xl'><span className='font-semibold text-black'>10</span> Item On List</p>
                </div>
                <div className='sort flex gap-5 items-center'>
                    <div>


                        <form class="max-w-sm mx-auto">
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                <option value="US">Sort by default</option>
                                <option value="CA">Newest</option>
                                <option value="FR">Oldest</option>

                            </select>
                        </form>

                    </div>
                    <div className='select-2 text-2xl'>
                    <form class="max-w-sm mx-auto">
                            <select id="countries" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                <option value="US">All</option>
                                <option value="CA">10 per pages</option>
                                <option value="CA">20 per pages</option>
                                <option value="CA">30 per pages</option>

                            </select>
                        </form>

                    </div>
                    <div className='select-icon'>
                    <i class="fa-solid fa-bars"></i>
                    </div>
                    <div className='table-cell'>
                    <i className=" text-red-400  fa-solid fa-table-cells"></i>
                    </div>
                </div>
            </div>
            <div className='shop-card'>

                    {/* grid-1 start */}
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3 mt-5'>
            <div className='card-1'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img1} alt='image'></img>
                        <p className='text-start p-1'>Bradley Burgess 2</p>
                        <p className='font-bold text-start p-1'>$20.00</p>
                </div>
            </div>
            <div className='card-2'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img2} alt='image'></img>
                        <p className='text-start p-1'>Allie Sharp</p>
                        <p className='font-bold text-start p-1'>$30.00</p>
                </div>
            </div>
            <div className='card-3'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img3} alt='image'></img>
                        <p className='text-start p-1'>Nathaniel Baldwin</p>
                        <p className='font-bold text-start p-1'>$40.00</p>
                </div>
            </div>
            <div className='card-4'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img4} alt='image'></img>
                        <p className='text-start p-1'>Effie Rios</p>
                        <p className='font-bold text-start p-1'>$40.00</p>
                </div>
            </div>
        </div>  {/* grid-1 end */}

                {/* grid-2 start */}
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3 mt-5'>
            <div className='card-5'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img5} alt='image'></img>
                        <p className='text-start p-1'>Carolyn Goodwin</p>
                        <p className='font-bold text-start p-1'>$50.00</p>
                </div>
            </div>
            <div className='card-6'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img6} alt='image'></img>
                        <p className='text-start p-1'>Evelyn Patton</p>
                        <p className='font-bold text-start p-1'>$60.00</p>
                </div>
            </div>
            <div className='card-7'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img7} alt='image'></img>
                        <p className='text-start p-1'>Sally Ray</p>
                        <p className='font-bold text-start p-1'>$70.00</p>
                </div>
            </div>
            <div className='card-8'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img8} alt='image'></img>
                        <p className='text-start p-1'>Ora Bowman</p>
                        <p className='font-bold text-start p-1'>$80.00</p>
                </div>
            </div>
        </div>    {/* grid-2 end */}
        {/* grid-3 start */}

        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5'>
            <div className='card-9'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img9} alt='image'></img>
                        <p className='text-start p-1'>Frederick Valdez</p>
                        <p className='font-bold text-start p-1'>$90.00</p>
                </div>
            </div>
            <div className='card-10'>
                <div className=' max-sm-w shadow rounded overflow-hidden'>
                        <img src={img10} alt='image'></img>
                        <p className='text-start p-1'>Terry Byrd</p>
                        <p className='font-bold text-start p-1'>$100.00</p>
                </div>
            </div>
          
          
        </div>    

        {/* grid-3 end */}

            </div>
        </div>
    )
}

export default Shop
