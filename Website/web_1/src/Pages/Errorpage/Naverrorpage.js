import React from 'react'
import {useNavigate} from "react-router-dom";
// import img1 from '../../Image/shop-1.jpg';
import img2 from '../../Image/error.png';
import '../Errorpage/errorresponsive.css';
function Naverrorpage() {
    const home = useNavigate();
  return (
    <div>
        <div>
            {/* bg-img*/}
            <div className='cart-bg p-3'>
                <div className=' flex'>
                    <div>
                        <p>Home</p>
                    </div>
                    <div className='hr-5 mt-3'></div>
                    <div>
                        <p>Error</p>
                    </div>
                </div>
                <div className='text-start'>
                    <p className='text-2xl font-semibold'>Error</p>
                </div>
            </div> {/* bg-img*/}
            <div className='error leading-6 '>
                <div className='flex justify-center items-center'>

                <img src={img2} alt='image'/>
                </div>
                <div>
                <h1 className='text-5xl font-bold'>404. Page not found</h1>
                <p className='mt-4 font-mono'>Sorry, we couldn’t find the page you where looking for. We suggest that<span className='block'>
                    you return to homepage.</span></p>
                </div>
                <div className='flex justify-center items-center mt-2'>
              
                <button   onClick={()=> home("/")}  className='text-md font-semibold outline-none bg-red-500 text-white w-40 h-14'>   <i class="fa-solid fa-arrow-left"></i>  Back to Home</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Naverrorpage
