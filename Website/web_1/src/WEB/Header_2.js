import React from 'react'

function Header_2() {
  return (
    <div className='flex justify-between p-11'>
      <ul>
        <li><a href='#'>
            <button className='text'><i class="fa-solid fa-bars"></i><span >Categories</span></button></a>
            <div className='dropdown w-40'>
                <ul>
                    <li><a href='#'><i class="fa-regular fa-user text-red-500"></i><span className='mx-2'>Candles</span></a></li>
                    <li><a href='#' className='hover:text-red-500'><i class="ri-flower-line text-red-500"></i><span className='mx-2'>Handmade</span></a></li>
                    <li><a href='#' className='hover:text-red-500'><i class="ri-gift-2-line text-red-500"></i><span className='mx-2'>Gift sets</span></a></li>
                    <li> <a href='#' className='hover:text-red-500'><i class="fa-regular fa-face-smile text-red-500"></i><span className='mx-2'>Plastic Gifts</span></a></li>
                    <li><a href='#' className='hover:text-red-500'><i class="ri-football-line text-red-500"></i><span className='mx-2'>Handy Cream</span></a></li>
                    <li><a href='#' className='hover:text-red-500'><i class="fa-regular fa-chess-queen text-red-500"></i><span className='mx-2'>Cosmetics</span></a></li>
                    <li> <a href='#' className='hover:text-red-500'><i class="fa-solid fa-gift text-red-500"></i><span className='mx-2'>Silk Accessories</span></a></li>
                    <li className='bg-gray-100'><a href='#' >Value of the day Top 100 offers New Arrivals</a></li>
                </ul>
            </div>
        </li>
      </ul>
      <ul className='demo'>
            <li><a href='#'><span className=' font-semibold '>Home <i class="fa-solid fa-angle-down text-slate-400"></i></span></a>
                    <div className='homemenu'>
                        <ul className='text-left'>
                            <li>Wooden Home</li>
                            <li>Fashion Home</li>
                            <li>Furniture Home</li>
                            <li>Cosmetics Home</li>
                            <li>Food Grocery</li>
                        </ul>
                    </div>
            </li>
            <li><a href='#'><span className=' font-semibold '>Shop <i class="fa-solid fa-angle-down text-slate-400"></i></span></a>
            <div className='homemenu'>
                        <ul className='text-left'>
                            <li>Shop</li>
                            <li>Shop 2</li>
                            <li>Shop details</li>
                            <li>Shop details 2</li>
                            <li>location</li>
                            <li>Cart</li>
                            <li>Sign In</li>
                        </ul>
                    </div>

            </li>
            <li><a href='#'><span className=' font-semibold '>Pages <i class="fa-solid fa-angle-down text-slate-400"></i></span></a></li>
            <li><a href='#'><span className=' font-semibold '>Blog <i class="fa-solid fa-angle-down text-slate-400"></i></span></a>
            
            <div className='homemenu'>
                        <ul className='text-left'>
                            <li>Blog</li>
                            <li>Blog details</li>
                        </ul>
                    </div>
            </li>
            <li><a href='#'><span className=' font-semibold '>Contact</span></a></li>
        </ul>
        <div className='flex'>
            <p className=' hover:text-red-600'><i class="ri-phone-line text-red-500"></i><span className='hover:text-red-600 font-bold'>908. 408. 501. 89</span></p>
            <p className=' hover:text-red-600 ml-5'><i class="ri-map-pin-line text-red-500"></i><span className='hover:text-red-600 font-bold'>Find Store</span></p>
        </div>
    </div>
  )
}

export default Header_2
