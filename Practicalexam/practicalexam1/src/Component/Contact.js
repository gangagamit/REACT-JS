import React from 'react'
import img1 from '../Image/email2.jpg';
function Contact() {
  return (
    <div className=' container mt-4 shadow-lg h-screen flex justify-center items-center'>
          <div className='grid grid-cols-2 gap-8'>
              <div className='img shadow-none'>
                  <img src={img1} className=' rounded-3xl h-96 w-96'/>
              </div> 
              <div className='max-w-md rounded shadow-xl'>
                    <form>
                      <h1 className=' font-semibold text-xl'>Get in touch</h1>
                      <input type='text' placeholder='Name' className=' bg-slate-200 p-2 rounded-xl w-72 font-semibold mt-2'/>
                      <input type='text' placeholder='Email' className=' bg-slate-200 p-2 rounded-xl w-72 font-semibold mt-2'/>
                    <div>
                      <textarea rows={5} cols={33} className='rounded-xl bg-slate-200 font-semibold p-2 mt-2' placeholder='Message'></textarea>
                    </div>
                    <button className=' bg-purple-800 text-xl text-white w-72 p-2 rounded-xl mt-2'>Send</button>
                    </form>
              </div>
          </div>
            
    </div>
  )
}

export default Contact
