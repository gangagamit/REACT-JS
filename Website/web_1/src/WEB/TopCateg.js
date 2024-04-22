import React from 'react'
import img1 from '../Image/cat01.svg';
import img2 from '../Image/cat02.svg';
import img3 from '../Image/cat03.svg';
import img4 from '../Image/cat04.svg';
import img5 from '../Image/cat05.svg';
import img6 from '../Image/cat06.svg';
function TopCateg() {
  return (
    <div>
      <section className=' bg-slate-50 p-8'>
                <h1 className=' font-bold text-2xl text-start'>Top <span className=' text-pink-700 text-3xl underline'>Categories</span></h1>
            <div>
                <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-3 mt-20 '>
                    <div className='div-1 text-center'>
                            <p>20</p>
                             <div className='p-3  bg-slate-100 rounded-full h-48  flex justify-center items-center'>
                             <img src={img1} alt='image' className='p-5'></img>
                              </div> 
                              <div>
                            <pre className=' font-sans'>Driftwood 
                            </pre>Table Decor
                                </div>                   
                        
                    </div>
                     <div className='div-2'>
                      <p>12</p>
                     <div className='p-3 rounded-full bg-slate-100 h-48 flex justify-center items-center'>
                             <img src={img2} alt='image' className='p-5'></img>
                              </div>                    
                            <pre className=' font-sans'>Floor Driftwood

                            </pre>Sculpture 

                    </div>

                    <div className='div-3'>
                      <p>03</p>
                    <div className='p-3 rounded-full bg-slate-100 flex h-48 justify-center items-center'>
                             <img src={img3} alt='image' className='p-5'></img>
                              </div>                    
                            <pre className=' font-sans'>Driftwood
 
                            </pre>Christmas Tree
                    </div>
                    <div className='div-4'>
                      <p>09</p>
                    <div className='p-3 rounded-full bg-slate-100 h-48 flex justify-center items-center'>
                             <img src={img4} alt='image' className='p-5'></img>
                              </div>                    
                            <pre className=' font-sans'>Wooden

                            </pre>Bluetooth Speaker

                    </div>
                    <div className='div-5'>
                      <p>10</p>
                    <div className='p-3 rounded-full bg-slate-100 h-48 flex justify-center items-center'>
                             <img src={img5} alt='image' className='p-5'></img>
                              </div>                    
                            <pre className=' font-sans'>Receivers

                            </pre>Amplifiers
                    </div>
                    <div className='div-6 text-center'>
                      <p>05</p>
                    <div className='p-3 rounded-full bg-slate-100 h-48 flex justify-center items-center'>
                             <img src={img6} alt='image' className='p-5'></img>
                              </div>                    
                            <pre className=' font-sans'>Driftwood
                            </pre>Table Decor
                    </div>
                </div>
            </div>
      </section>

    </div>
  )
}

export default TopCateg
