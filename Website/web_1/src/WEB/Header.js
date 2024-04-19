import React from 'react'
import img1 from '../Image/logo.png'
import img2 from '../Image/f-google.jpg'
import img3 from '../Image/f-app.jpg'
import img4 from '../Image/f-brand-icon-01.png'
import img5 from '../Image/lang-flag.png'
function Header() {
    return (


        <div>
            {/* header start */}
            <div>
                <header className='bg-white h-16 p-3'>

                    <nav className='flex justify-between'>


                        <ul className='flex'>
                            <li><a href='#'><img src={img1} alt='logo-image' /></a></li>

                        </ul>
                        <ul>
                            <li>
                                <a href='#'><input type='text' placeholder='Search Products..' className='bg-gray-100 rounded border-2 p-2 w-96 font-bold' /></a>
                            </li>
                        </ul>
                        <ul className='flex'>

                            {/* <li><a href='#'><input type='text' placeholder='Search Products..' className='bg-gray-100 rounded border-2 p-2 w-72 font-bold'/></a></li> */}

                            <li><a href='#' className='flex border-2 w-32 p-1 rounded'><img src={img5} /> <p className='font-bold text-sm'>English</p> <span><i class="fa-solid fa-angle-down text-slate-400"></i></span></a></li>
                            <li><a href='#' className='flex border-2 w-32 p-2 rounded ml-14'> <p>USD</p> <span className='text-right'><i class="fa-solid fa-angle-down"></i></span></a></li>
                        </ul>
                        <ul className='flex icon'>
                            <li><a href='#' className='absolute zero'>0</a></li>
                            <li><a href='#' className='ml-7'><i class="ri-shopping-cart-2-line text-2xl"></i></a></li>
                            <li><a href='#' className='ml-7'><i class="fa-regular fa-user text-2xl"></i></a></li>
                            <li><a href='#' className='absolute zero-1'>0</a></li>
                            <li><a href='#' className='ml-7'><i class="fa-regular fa-heart text-2xl"></i></a></li>
                        </ul>
                    </nav>
                    <div className='nav flex justify-between items-center p-2'>
                        <div className='flex  justify-between items-center'>
                            <div className='dropdown relative'>

                                <button className='bg-red-500 text-white font-bold p-3 rounded  flex items-center justify-between   text-lg tracking-wide'><i class="fa-solid fa-bars"></i>Categories</button>
                                <div className='absolute bg-white w-60'>
                                    < ul className='text-left p-2 space-y-2'>
                                        <li>
                                            <a href='#' className='hover:text-red-500'><i class="fa-regular fa-user text-red-500"></i><span className='mx-2'>Candles</span></a>
                                        </li>
                                        <li>
                                            <a href='#' className='hover:text-red-500'><i class="ri-flower-line text-red-500"></i><span className='mx-2'>Handmade</span></a>
                                        </li>
                                        <li>
                                            <a href='#' className='hover:text-red-500'><i class="ri-gift-2-line text-red-500"></i><span className='mx-2'>Gift sets</span></a>
                                        </li>
                                        <li>
                                            <a href='#' className='hover:text-red-500'><i class="fa-regular fa-face-smile text-red-500"></i><span className='mx-2'>Plastic Gifts</span></a>
                                        </li>
                                        <li>
                                            <a href='#' className='hover:text-red-500'><i class="ri-football-line text-red-500"></i><span className='mx-2'>Handy Cream</span></a>
                                        </li>
                                        <li>
                                            <a href='#' className='hover:text-red-500'><i class="fa-regular fa-chess-queen text-red-500"></i><span className='mx-2'>Cosmetics</span></a>
                                        </li>
                                        <li>
                                            <a href='#' className='hover:text-red-500'><i class="fa-solid fa-gift text-red-500"></i><span className='mx-2'>Silk Accessories</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>

                                <ul className='flex justify-between ml-5'>
                                    <li><a href='#'><span className=' font-semibold '>Home <i class="fa-solid fa-angle-down text-slate-400"></i></span></a></li>
                                    <li><a href='#'><span className=' font-semibold '>Shop <i class="fa-solid fa-angle-down text-slate-400"></i></span></a></li>
                                    <li><a href='#'><span className=' font-semibold '>Pages <i class="fa-solid fa-angle-down text-slate-400"></i></span></a></li>
                                    <li><a href='#'><span className=' font-semibold '>Blog <i class="fa-solid fa-angle-down text-slate-400"></i></span></a></li>
                                    <li><a href='#'><span className=' font-semibold '>Contact</span></a></li>
                                </ul>
                            </div>
                           

                        </div>
                        <div>
                            <ul className='flex'>
                                <li><a href='#'><i class="ri-phone-line text-red-500"></i><span className='hover:text-red-600 font-bold'>908. 408. 501. 89</span></a></li>
                                <li><a href='#'><i class="ri-map-pin-line text-red-500"></i><span className='hover:text-red-600 font-bold'>Find Store</span></a></li>
                            </ul>
                        </div>
                    </div>

                </header>
            </div>
            {/* header end */}

        </div>
    )
}

export default Header

