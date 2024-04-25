import React from 'react'

function Card({id,name,age,img}) {
  return (
            <div>
              <div className="mt-10 bg-white border rounded-xl ">
            
            <div>
              <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                  <img src={img} alt="" class="card-img" className='h-[200px] w-[300px] m-auto block rounded-md w'/>
                </div>
              </div> 
              <div className="p-6 text-center">
                <p className="mt-1 text-black opacity-70 font-bold  text-xl cursor-pointer hover:underline">{id}</p>
                <div className="uppercase tracking-wide text-xl text-indigo-500 cursor-pointer hover:text-red-500 font-bold ">{name}</div>
                <p className="mt-1 text-slate-500 text-xl">{age}</p>
                
              </div>
            </div>
          </div>
    </div>
  )
}

export default Card;
