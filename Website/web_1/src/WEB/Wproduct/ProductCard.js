import { FaStar } from "react-icons/fa";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import {Link} from "react-router-dom";
import React from 'react';
import { useDispatch } from "react-redux";
import {ADD} from '../../Redux/Action/Action';
function ProductCard({id, imgg1,img2,name,price}) {
    const dispatch = useDispatch();
    const send = (e)=>{
        dispatch(ADD(e));
    }
    return (
        <div className=' border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative'>
              <Link to={`/shopDetails/${id}`}>
             
              <div className="firstimg ">
              <img src={imgg1} alt=""/>

              </div>
                  <div className=" secondimg absolute top-0 opacity-0 hover:opacity-100">
                <img src={img2} alt=""/> 
                </div> 
                <h3 className=' font-medium text-start p-2'>{name}</h3>
                <h3 className='text-xl font-medium text-start p-2'>{price}</h3>
                <div className=" z-auto flex justify-center  items-center m-auto relative -top-72 bg-white rounded-2xl h-12 w-52 ">
                    <ul>
                        <li><button  onClick={()=>send()}  className=" text-slate-400 border-0 text-xl"><RiShoppingBasket2Line/></button></li>
                        <li><button className=" text-slate-400 border-0 text-xl"><FaArrowRightArrowLeft/></button></li>
                        <li><button className=" text-slate-400 border-0 text-xl"><MdOutlineRemoveRedEye/></button></li>
                        <li><button className=" text-slate-400 border-0 text-xl">< CiHeart/></button></li>
                    </ul>
                </div>
                <div className=' text-red-400 flex gap-[2px] text-[2px] float-right opacity-0'>
                    <h3 className="text-lg"><FaStar/></h3>
                    <h3 className="text-lg"><FaStar/></h3>
                    <h3 className="text-lg"><FaStar/></h3>
                    <h3 className="text-lg"><FaStar/></h3>

                    <p className=' font-medium text-slate-500'>(81)</p>
                </div>
              </Link>

        </div>
    //     <div className="w-[300px] rounded-md border">
    //   <img
    //     src={imgg1}
    //     alt="Laptop"
    //     className="h-[300px] w-full rounded-md object-cover text-start"
    //   />
    //   <div className="p-4">
    //     <h1 className="text-lg font-semibold text-start">{name}</h1>
    //     <p className="mt-3 text-sm text-gray-600 text-start font-medium">
    //         {price}
    //     </p>
    //     <button className=" border-0">
         
    //     </button>
    //   </div>
    // </div>
    )
}

export default ProductCard
