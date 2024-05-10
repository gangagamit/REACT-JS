import React from 'react'
import img2 from '../../Image/product-2.jpg';
import '../Product/Product.css';
function ProductCard({img,name,price}) {
  return (
    <div>
      
      <div className="mt-10 bg-white border rounded-xl ">
            
            <div>
              <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                  <img src={img} alt="" class="card-img" className='h-[200px] w-[300px] m-auto block rounded-md'/>
                  <img src={img2} alt=''  className=' hidden hover:bg-red-600 card-img2 h-[200px] w-[300px] m-auto  rounded-md'/>
                </div>
              </div> 
              <div className="p-6 text-center">

                <div className="uppercase text-slate-700 text-xl  cursor-pointer  font-bold ">{name}</div>
                <p className="mt-1 text-slate-500 text-xl">{price}</p>
                
              </div>
            </div>
          </div>
    </div>
  )
}

export default ProductCard
