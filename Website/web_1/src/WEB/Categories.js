import React from 'react'

function Categories() {
  return (
    <div className=' container p-3'>
        <nav>
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
        </nav>
      
    </div>
  )
}

export default Categories
