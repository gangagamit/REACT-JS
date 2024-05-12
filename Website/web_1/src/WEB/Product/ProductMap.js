import React from 'react'
import { Link } from 'react-router-dom'
import '../Product/Product.css';
import ProductData from './ProductData';

function ProductMap() {
  return (
    <div className="container2 bg-stone-50">
      <div className="flex flex-wrap justify-between">
        <div className="title-shape">
          <h1 className="font-bold text-2xl">
            Popular
            <span className="font-normal text-2xl text-rose-600">Products</span>
          </h1>
        </div>
        <div className="flex items-center">
          <ul className="flex sm:flex-wrap gap-10">
            <li className="text-rose-600 underline font-bold">
              <a href="#">All</a>
            </li>
            <li className="font-bold">
              <a href="#">Popular</a>
            </li>
            <li className="font-bold">
              <a href="#">On Sale</a>
            </li>
            <li className="font-bold">
              <a href="#">Best Rated</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-white mt-5">
        {ProductData.map((product, index,arr) => (
          <div key={index} className="button">
            <Link to='/ProductCard/${product.id}' className="burdges relative block">
            <img src={product.img1} alt={product.name} />
            <img className="Burges" src={product.img2} alt="" />
            <div className="icon">
              <a href="#">
                <i className="fa-solid fa-basket-shopping"></i>
              </a>
              <a href="#">
                <span className="material-symbols-outlined">sync_alt</span>
              </a>
              <a href="#">
                <span className="material-symbols-outlined">visibility</span>
              </a>
              <a href="#">
                <span className="material-symbols-outlined">favorite</span>
              </a>
            </div>
          </Link>
                            {/* <Link>
                                <div>
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                    <ul>
                                        <li><button></button></li>
                                    </ul>
                                </div>
                            </Link> */}
          <h6 className = "pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer" >
          { product.name }
              </h6>
      <h2 className="font-bold">{product.price}</h2>
      <div className="btn mt-6 mb-6">
        <div className="flex  items-center">
          <div className='flex gap-[2px]'>
            <button className='rounded-full h-[10px] w-[10px] bg-sky-500'></button>
            <button className='rounded-full h-[10px] w-[10px] bg-rose-500'></button>
            <button className='rounded-full h-[10px] w-[10px] bg-orange-500'></button>
            <button className='rounded-full h-[10px] w-[10px] bg-indigo-500'></button>
          </div>
          <div className='flex items-center'>


            <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
            <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
            <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
            <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
            <button><i class="fa-regular fa-star text-xs text-rose-600"></i></button>
            <span className='text-xs'>(81)</span>
          </div>
        </div>
      </div>
    </div>
  ))
}
            </div >
        </div >
    );
}

export default ProductMap;

