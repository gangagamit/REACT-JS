import React from 'react'
function Procard({FirstImg,name,id,price}) {
  return (
    <div>
            <div className="mt-10 bg-white border rounded-xl ">
            
            <div>
              <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                  <img src={FirstImg} alt="" class="card-img" className='h-[200px] w-[300px] m-auto block rounded-md'/>
                </div>
              </div> 
              <div className="p-6 text-center">
                <div className="uppercase tracking-wide text-xl text-indigo-500 cursor-pointer hover:text-red-500 font-bold ">{name}</div>
                <p className="mt-1 text-slate-500 text-xl">{price}</p>
                
              </div>
            </div>
          </div>
    </div>
  )
}

export default Procard
