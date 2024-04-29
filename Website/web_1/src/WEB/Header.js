import React from 'react';
import img1 from '../Image/logo.png';
import img5 from '../Image/lang-flag.png';

function Header() {
    return (
            <div className=' container mx-auto flex justify-between items-center p-3'>
                <header>
                     
                           
                            
                        <nav className='flex justify-center items-center'>
                       

                              
                            <ul>
                                <li>  <img src={img1} alt='logo'></img>
                                </li>
                            </ul>

                            <ul className='flex justify-center items-center'>
                                <li>
                                    <a href='#'>
                                        <input type='text' placeholder='Search products..' className=' input-1 border-slate-50 rounded bg-slate-50  h-10 w-[600px] p-2'/>

                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <button className='flex border-neutral-400 gap-2 btn-flag'>
                                            <img src={img5} alt='flag'></img>
                                            <p>English</p>
                                            <div className='list block'>
                                                <ul>
                                                    <li><a href='#'>Arbic</a></li>
                                                    <li><a href='#'>Spanish</a></li>
                                                    <li><a href='#'>Mandarin</a></li>
                                                </ul>
                                            </div>
                                            <span><i class="fa-solid fa-angle-down text-slate-400"></i></span>
                                        </button>
                                        
                                    </a>
                                </li>

                                <li>
                                    <a href='#'>
                                        <button className='flex border-neutral-400 gap-2 justify-center items-center w-28'>
                                           
                                            <p className='p-1'>USD</p>
                                            <div className='list block'>
                                                <ul>
                                                    <li><a href='#'>USD</a></li>
                                                    <li><a href='#'>YEAN</a></li>
                                                    <li><a href='#'>EURO</a></li>
                                                </ul>
                                            </div>
                                            <span><i class="fa-solid fa-angle-down text-slate-400"></i></span>
                                        </button>
                                        
                                    </a>
                                </li>
                              
                        <ul className='flex icon justify-center items-center'>
                            <li><a href='#' className='absolute zero'>0</a></li>
                            <li><a href='#' ><i class="ri-shopping-cart-2-line text-2xl text-black"></i></a></li>
                            <li><a href='#'><i class="fa-regular fa-user text-xl mx-2 text-black"></i></a></li>
                            <li><a href='#' className='absolute zero-1'>0</a></li>
                            <li><a href='#'><i class="fa-regular fa-heart text-xl text-black -mx-11"></i></a></li>
                        </ul>
                            </ul>
                        </nav>
                </header>  {/* header close */}
                
            </div>  // container
          
    )
}

export default Header

