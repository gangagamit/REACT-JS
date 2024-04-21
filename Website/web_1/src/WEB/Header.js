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
                    

                </header>
            </div>
            {/* header end */}

        </div>
    )
}

export default Header

