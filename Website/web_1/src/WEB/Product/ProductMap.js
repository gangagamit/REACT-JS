import React from 'react'
import { useParams } from 'react-router-dom';

import ProductData from './ProductData'
import ProductCard from './ProductCard'
function ProductMap() {
  return (
    
        <div className='text-3xl font-bold text-red-600'>
       
       <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", padding: "30px" }}>
       {ProductData.map((cvalue, ind, arr) => {
         return <ProductCard key={ind} img={cvalue.img}  name={cvalue.name}  price={cvalue.price}  />
       })}
     </div>
    </div>
  )
}

export default ProductMap
