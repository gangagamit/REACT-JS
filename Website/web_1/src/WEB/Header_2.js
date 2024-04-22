import React from 'react'
import Categories from './Categories'

function Header_2() {
    return (
        <div className=' container  flex justify-around items-center w-screen'>
            {/* <div className=' flex justify-between items-center'> */}

            <div className='part-1'>
                <div className='flex justify-center items-center'>

                    <div>
                        <Categories />
                    </div>
                    <nav>

                        <ul>
                            <li>
                                <a href='#'>
                                    <p className=' hover:text-pink-500'>Home <span><i class="fa-solid fa-angle-down text-slate-400"></i></span></p>
                                </a>
                                <div className='homelist'>
                                    <li><a href='#' className=' hover:text-pink-500'>Wooden Home</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Fashion Home</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Furniture Home</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Cosmetics Home</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Food  Grocery</a></li>
                                </div>
                            </li>
                            <li>
                                <a href='#'>
                                    <p>Shop <span><i class="fa-solid fa-angle-down text-slate-400"></i></span></p>
                                </a>
                                <div className='homelist'>
                                    <li><a href='#' className=' hover:text-pink-500'>Shop</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Shop2</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Shop Details</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Shop Details 2</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Shop location</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Cart</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Sign In</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Checkout</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Wishlist</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>product track</a></li>
                                </div>
                            </li>
                            <li>
                                <a href='#'>
                                    <p className=' hover:text-pink-500'>Pages <span><i class="fa-solid fa-angle-down text-slate-400"></i></span></p>
                                </a>
                                <div className='homelist'>


                                    <li><a href='#' className=' font-semibold text-sm hover:text-pink-500'>page Layout</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Shop Filters V1</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Shop Filters V1</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Shop Shidebar</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Shop Right Shidebar</a></li>
                                    <li><a href='#' className=' hover:text-pink-500'>Shop list view</a></li>

                                </div>
                            </li>
                            <li>
                                <a href='#'>
                                    <p className='hover:text-pink-500'>Blogs <span><i class="fa-solid fa-angle-down text-slate-400"></i></span></p>
                                </a>
                                <div className='homelist'>
                                    <li><a href='#' className='hover:text-pink-500'>Blog</a></li>
                                    <li><a href='#' className='hover:text-pink-500'>Blog Details</a></li>
                                </div>
                            </li>
                            <li><a href='#' className='hover:text-pink-500'>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* part-1 close */}

            {/* part-2 start */}


            <div className='num flex justify-between items-center gap-5'>
                <div className='num-1 flex'>
                    <span><i class="ri-phone-line text-red-500 hover:text-pink-500"></i></span>
                    <p className='hover:text-pink-500'>908. 408. 501. 89</p>
                </div>
                <div className='num-2 flex'>
                    <span><i class="ri-map-pin-line text-red-500 hover:text-pink-500"></i></span>
                    <p className=' hover:text-pink-500'>Find Store</p>
                </div>
            </div>

            {/* part-2 close */}
            {/* </div> */}
        </div>

    )
}

export default Header_2

