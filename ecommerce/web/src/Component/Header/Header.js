import React from 'react'
import '../Header/header.css';
import img1 from '../../Image/logo.png';
import img2 from '../../Image/lang-flag.png';
function Header() {
    return (
        <div>
            <header>
                <div className=' container'>
                    <div className=' col-1'>
                        <div className='grid grid-cols-7'>
                            <div className='logo-img'>
                                <img src={img1} alt='logo' />
                            </div>
                            <div className='header-search flex justify-center  items-center text-start bg-slate-200'>
                                <div className='search-icon'>

                                    <button className='text-start'>
                                        <i className="fa-solid fa-magnifying-glass text-slate-400"></i>
                                    </button>
                                </div>
                                <div className='search flex justify-center items-center'>

                                    <form>
                                        <input type='text' placeholder='Search products...' className='bg-slate-200' />
                                    </form>
                                </div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <img src={img2} alt='flag' />
                                </div>
                            </div>

                        </div>
                        <div className='grid grid-cols-2'>
                            <div>
                                <img src={img2} alt='flag' />
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    )
}

export default Header
