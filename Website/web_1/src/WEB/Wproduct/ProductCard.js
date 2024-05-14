import { FaStar } from "react-icons/fa";
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
function ProductCard({img1,name,price}) {
    return (
        <div className=' border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative'>
                <img src={img1} alt=""/>
                <h3 className=' font-medium text-start p-2'>{name}</h3>
                <h3 className='text-xl font-medium text-start p-2'>{price}</h3>
                <div className='  hover:block text-red-400 flex gap-[2px] text-[2px]'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <p className=' font-medium text-slate-500'>(81)</p>
                </div>
        </div>
    )
}

export default ProductCard
