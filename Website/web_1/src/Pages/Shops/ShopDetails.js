import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Data from '../../WEB/Wproduct/Data';
import { FaStar } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
function ShopDetails() {
  const {id} = useParams();
  console.log(id);
  const product = Data.find((item)=>item.id === parseInt(id));
  console.log(product,"product");
  return (
    <div>
      {/* bg-img*/}
      <div className='cart-bg p-3'>
        <div className=' flex'>
          <div>
            <Link to='/'>Home</Link>
          </div>
          <div className='hr-5 mt-3'></div>
          <div>
            <p>Shop Details</p>
          </div>
        </div>
        <div className='text-start'>
          <p className='text-2xl font-semibold'>Shop Details</p>
        </div>
      </div> {/* bg-img*/}
      <div className='secondpart '>
        <div className=' grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-5 mx-auto'>
          <div className=' col-span-1'>
              <img src={product.imgg1}/> 
          </div>
          <div className=' col-span-3'>
            <div className=' flex gap-4'>
              <div className='drr'>
                <h3 className=' h-6 w-14 border-red-400 bg-red-400 text-red-700 text-md font-medium'>Dress</h3>
              </div>
              <div className=' flex'>
                <span className=' text-xl text-yellow-400'><FaStar /></span>
                <span className=' text-xl text-yellow-400'><FaStar /></span>
                <span className=' text-xl text-yellow-400'><FaStar /></span>
              </div>
              <div>
                <p className=' text-sm text-slate-500'>10 Reviews</p>
              </div>
            </div>
            <div className='flex mt-8'>
              <h3 className='text-4xl font-medium '>{product.name}</h3>
              <button className=' text-red-600 font-semibold text-md'>In Stock</button>
            </div>
            <div className='price'>
                <h4 className=' line-through text-slate-500 font-medium text-start text-2xl'>$9.35</h4>
                <h3 className=' text-red-600 font-medium text-2xl text-start'>{product.price}</h3>
            </div>
            <div>
              <p className=' text-slate-500 font-medium text-start'>
                Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. 
                It is a
                </p>
                <p className=' text-slate-500 font-medium text-start'>
                completely modern design and you feel comfortable to put on this hijab.
                Buy it at the best price.
                </p>
            </div>
            <div className=' flex gap-5'>
              <button className=' flex bg-red-500 w-40 h-12 gap-3 justify-center items-center'>
                <p className=' text-xl text-slate-50'>< PiShoppingCartLight/></p>
                <p className='text-white font-medium'>Add to Cart</p>
              </button>
              <div>
                  <button className=' text-3xl text-slate-500'><CiHeart/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopDetails
