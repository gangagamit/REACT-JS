import { FaStar } from "react-icons/fa";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
// interface propsType{
//     img: String;
//     name:String;
//     price:String;
// }

// const ProductCard : React.FC<propsType> = ({img,name,price})=>{
//         return (
//                 <div>

//                 </div>
//         );
// };
// export default ProductCard;
import React from 'react'
function ProductCard({img1,img2,name,price}) {
    return (
        <div className=' border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative'>
              <div className="firstimg ">
              <img src={img1} alt=""/>
              </div>
                  <div className=" secondimg absolute top-0 opacity-0 hover:opacity-100">
                <img src={img2} alt=""/> 
                </div> 
                <h3 className=' font-medium text-start p-2'>{name}</h3>
                <h3 className='text-xl font-medium text-start p-2'>{price}</h3>
                <div className=" flex justify-center  items-center m-auto relative -top-64 bg-white rounded-2xl h-12 w-52 opacity-0 hover:opacity-95">
                    <ul>
                        <li><button className=" text-slate-400 border-0 text-xl"><RiShoppingBasket2Line/></button></li>
                        <li><button className=" text-slate-400 border-0 text-xl"><FaArrowRightArrowLeft/></button></li>
                        <li><button className=" text-slate-400 border-0 text-xl"><MdOutlineRemoveRedEye/></button></li>
                        <li><button className=" text-slate-400 border-0 text-xl">< CiHeart/></button></li>
                    </ul>
                </div>
                <div className='  text-red-400 flex gap-[2px] text-[2px] float-right'>
                    <h3 className="text-lg"><FaStar/></h3>
                    <h3 className="text-lg"><FaStar/></h3>
                    <h3 className="text-lg"><FaStar/></h3>
                    <h3 className="text-lg"><FaStar/></h3>

                    <p className=' font-medium text-slate-500'>(81)</p>
                </div>
        </div>
    )
}

export default ProductCard
