import React from 'react'
import img1 from '../Image/loremm.jpg';
function About() {
    return (
        <>
            <h1 className='text-5xl font-sans font-semibold mt-5 underline bg-green-100'>About</h1>
            <div className='flex justify-center items-center h-screen bg-green-100'>
                <div className=' container mx-auto grid grid-cols-2 gap-10 bg-green-300 text-white font-sans font-semibold h-96 p-5'>

                    <div className='text'>
                        <p className='hover:text-red-400'>
                            <h1 className='text-4xl font-semibold text-center hover:text-red-400'>What is Lorem Ipsum?</h1>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className='max-w-sm rounded '>
                        <img src={img1} alt='image' className=' w-[800px] rounded'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
