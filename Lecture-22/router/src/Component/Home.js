import React from 'react'

function Home() {
  return (
    <div className='bg-green-100 flex justify-center items-center h-screen'>
        <div class="container mx-auto p-2">
            <h1 className=' font-semibold text-2xl text-center mt-5'>RESONANCE — ONE/MULTI PAGE MULTIPURPOSE TEMPLATE</h1>
            <div className='create mt-6'>
                <p className=' font-sans font-semibold text-8xl'>Create your beautiful</p>
                <p className=' font-sans font-semibold text-8xl'>website with Resonance.</p>
            </div>
            <div className=' flex gap-5 justify-center items-center mt-9'>
                <button className=' bg-black text-white rounded p-2 font-semibold'>MULTI PAGE DOMS</button>
                <button className=' bg-black text-white rounded p-2 font-semibold'>ONE PAGE DOMS</button>
                <button className=' bg-slate-50 text-black  rounded p-2 font-semibold border-black'>INTRO SECTIONS</button>
            </div>
        </div>
    </div>
  )
}

export default Home
