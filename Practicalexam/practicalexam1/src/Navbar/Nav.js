import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../Image/logo1.png';
function Nav() {
    return (
        <div className='flex justify-center items-center gap-5'>
            
            {/* <img src={img1} alt='logo' className=' rounded imagg'/> */}
            <div className=' container'>
            <ul className='menu'>
                            <li>
                                <Link to="/">  <img src={img1} alt='logo' className=' rounded-full imagg '/></Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/login"><button className='btn font-semibold'>Login</button></Link>
                            </li>
                           
                        </ul>
            </div>
        </div>
    )
}

export default Nav
