import React from 'react'
import Data from './Data';
import ProductCard from './ProductCard';
function ProduFeatur() {
  return (
    <div className=' container  pt-16'>
        <div className=' lg:flex  justify-between items-center'>
            <div>
                <h3 className=' font-medium text-xl'>Popular Product</h3>
            </div>
            <div className=' space-x-4 mt-8 lg:mt-0'>
                <button className=' text-xl text-pink-800 underline border-0'>All</button>
                <button className=' font-medium text-lg border-0'> Popular</button>
                <button className=' font-medium text-lg border-0'> On sale</button>
                <button className=' font-medium text-lg border-0'> Best rated</button>
            </div>
        </div>{/* heading */}

        <div className=' grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5'>
               {Data.map((cvalue,id)=>{
                 return <ProductCard key={id} img1 = {cvalue.img1} img2 ={cvalue.img2} name = {cvalue.name}  price = {cvalue.price} />
               })}
        </div>
    </div>
  )
}

export default ProduFeatur;
