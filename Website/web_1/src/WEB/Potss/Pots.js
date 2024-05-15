import React from 'react'
import img1 from '../../Image/floded-01.png';
function Pots() {
    return (
        <div className='main container mx-auto  bg-slate-50 p-3 mt-10'>
            <div className='  bg-slate-100 grid lg:grid-cols-2  md: grid-cols-1 items-center p-5'>
                <div>
                    <img src={img1} alt='image'></img>
                </div>
                <div className='p-2'>
                    <p className=' font-bold text-red-600 text-2xl'>$49.00 <span className='text-slate-200 line-through text-2xl'>$59.00</span></p>
                    <p className='text-3xl font-bold'>Pro2 Abstract Folded Pots</p>
                    <p className='text-start'>Elegant pink origami design three-dimensional view and decoration co-exist. Great for adding a decorative touch to any room’s decor. Wonderful accent piece for coffee tables or side tables.</p>
                    <div className='flex'>
                        <p className=' h-2 w-full bg-red-500 rounded'></p>
                        <p className='h-2 w-48 bg-white rounded-e'></p>
                    </div>
                    <div className='grid grid-cols-5 mt-5 items-center justify-center'>
                        <div className='day h-20 w-24 bg-white shadow  rounded'>
                            <h1 className=' font-bold text-3xl'>-123</h1>
                            <p className=' text-slate-400'>Days</p>
                        </div>
                        <div className='hour h-20 w-24 bg-white shadow  rounded'>
                            <h1 className=' font-bold text-3xl'>-17</h1>
                            <p className=' text-slate-400'>Hour</p>
                        </div>
                        <div className='Minute h-20 w-24 bg-white shadow  rounded'>
                            <h1 className=' font-bold text-3xl'>-55</h1>
                            <p className=' text-slate-400'>Minute</p>
                        </div>
                        <div className='Second h-20 w-24 bg-white shadow  rounded p-1'>
                            <h1 className=' font-bold text-3xl'>-58</h1>
                            <p className=' text-slate-400'>Second</p>
                        </div>
                        <div className='remain'>
                            <p>Remains until the end of the offer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pots
