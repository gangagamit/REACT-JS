import React from 'react'
import img1 from '../../Image/blog-in-01.jpg';
import img2 from '../../Image/blog-in-02.jpg';
import img3 from '../../Image/blog-in-03.jpg';
import { Link } from 'react-router-dom';
function Blog1() {
    return (
        <div>
            {/* bg-img*/}
            <div className='page-bg p-3'>
                <div className=' flex'>
                    <div>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className=" border-b-2 border-slate-500 h-4 w-10"></div>
                    <div >
                        <p>Blog</p>
                    </div>
                </div>
                <div className='text-start mt-2'>
                    <p className='text-3xl font-semibold'>Blog</p>
                </div>
            </div> {/* bg-img*/}
            <div className='flex justify-center'>
                <div className=' container'>
                    <div className='grid lg:grid-cols-5 md: grid-cols-1 gap-10 mt-5'>
                        <div className=' col-span-3'>
                            <img src={img1} alt='image' className=' rounded-md' />
                            <div className='flex gap-10 mt-5'>
                                <div className='alex flex gap-1 '>
                                    <i class="ri-user-3-line text-red-500 text-md"></i>
                                    <p className='text-sm font-bold'> ALEXTINA</p>
                                </div>
                                <div className='blog-date flex gap-1'>
                                    <i class="ri-time-line text-red-500 text-md"></i>
                                    <p className='text-sm font-bold'>  Dec 28, 2022</p>
                                </div>
                                <div className='blog-commet flex gap-1'>
                                    <i class="ri-chat-4-line text-red-500 text-md"></i>
                                    <p className='text-sm font-bold '>  (04) COMMENTS</p>
                                </div>
                            </div>
                            <div className='scientist'>
                                <div className='mt-2'>
                                    <h1 className='text-4xl font-bold text-start hover:text-red-600'>Scientist speculate that ours might not be held</h1>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-md text-start'>Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laboratory</p>
                                </div>
                                <div className='mt-4 text-start'>
                                    <button className='bg-red-600 text-white w-40 h-12 font-medium'> Read More</button>
                                </div>
                            </div>{/*text-1 close */}
                            <div>
                                <img src={img2} alt='image' className=' rounded-md' />
                                <div className='flex gap-10 mt-5'>
                                    <div className='alex flex gap-1 '>
                                        <i class="ri-user-3-line text-red-500 text-md"></i>
                                        <p className='text-sm font-bold'> ALEXTINA</p>
                                    </div>
                                    <div className='blog-date flex gap-1'>
                                        <i class="ri-time-line text-red-500 text-md"></i>
                                        <p className='text-sm font-bold'>  Dec 28, 2022</p>
                                    </div>
                                    <div className='blog-commet flex gap-1'>
                                        <i class="ri-chat-4-line text-red-500 text-md"></i>
                                        <p className='text-sm font-bold '>  (04) COMMENTS</p>
                                    </div>
                                </div>
                                <div className='scientist'>
                                    <div className='mt-2'>
                                        <h1 className='text-4xl font-bold text-start hover:text-red-600'>The Multiverse is the collection of alternate universes</h1>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='text-md text-start'>Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laboratory</p>
                                    </div>
                                    <div className='mt-4 text-start'>
                                        <button className='bg-red-600 text-white w-40 h-12 font-medium'> Read More</button>
                                    </div>
                                </div>{/*text-2 close */}
                            </div>{/* image-part-2 */}
                            <div>
                                <img src={img3} alt='image' className=' rounded-md' />
                                <div className='flex gap-10 mt-5'>
                                    <div className='alex flex gap-1 '>
                                        <i class="ri-user-3-line text-red-500 text-md"></i>
                                        <p className='text-sm font-bold'> ALEXTINA</p>
                                    </div>
                                    <div className='blog-date flex gap-1'>
                                        <i class="ri-time-line text-red-500 text-md"></i>
                                        <p className='text-sm font-bold'>  Dec 28, 2022</p>
                                    </div>
                                    <div className='blog-commet flex gap-1'>
                                        <i class="ri-chat-4-line text-red-500 text-md"></i>
                                        <p className='text-sm font-bold '>  (04) COMMENTS</p>
                                    </div>
                                </div>
                                <div className='scientist'>
                                    <div className='mt-2'>
                                        <h1 className='text-4xl font-bold text-start hover:text-red-600'>That share a universal hierarchy a large variety of these</h1>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='text-md text-start'>Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laboratory</p>
                                    </div>
                                    <div className='mt-4 text-start'>
                                        <button className='bg-red-600 text-white w-40 h-12 font-medium'> Read More</button>
                                    </div>
                                </div>{/*text-2 close */}
                            </div>{/* image-part-2 close */}
                            <div className='mt-5'>
                                <img src={img1} alt='image' className=' rounded-md' />
                                <div className='flex gap-10 mt-5'>
                                    <div className='alex flex gap-1 '>
                                        <i class="ri-user-3-line text-red-500 text-md"></i>
                                        <p className='text-sm font-bold'> ALEXTINA</p>
                                    </div>
                                    <div className='blog-date flex gap-1'>
                                        <i class="ri-time-line text-red-500 text-md"></i>
                                        <p className='text-sm font-bold'>  Dec 28, 2022</p>
                                    </div>
                                    <div className='blog-commet flex gap-1'>
                                        <i class="ri-chat-4-line text-red-500 text-md"></i>
                                        <p className='text-sm font-bold '>  (04) COMMENTS</p>
                                    </div>
                                </div>
                                <div className='scientist'>
                                    <div className='mt-2'>
                                        <h1 className='text-4xl font-bold text-start hover:text-red-600'>Universes were originated from another due to a major</h1>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='text-md text-start'>Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laboratory</p>
                                    </div>
                                    <div className='mt-4 text-start'>
                                        <button className='bg-red-600 text-white w-40 h-12 font-medium'> Read More</button>
                                    </div>
                                </div>{/*text-1 close */}
                            </div>{/* image-part-4 */}
                            <div className='mt-5'>
                                <img src={img2} alt='image' className=' rounded-md' />
                                <div className='flex gap-10 mt-5'>
                                    <div className='alex flex gap-1 '>
                                        <i class="ri-user-3-line text-red-500 text-md"></i>
                                        <p className='text-sm font-bold'> ALEXTINA</p>
                                    </div>
                                    <div className='blog-date flex gap-1'>
                                        <i class="ri-time-line text-red-500 text-md"></i>
                                        <p className='text-sm font-bold'>  Dec 28, 2022</p>
                                    </div>
                                    <div className='blog-commet flex gap-1'>
                                        <i class="ri-chat-4-line text-red-500 text-md"></i>
                                        <p className='text-sm font-bold '>  (04) COMMENTS</p>
                                    </div>
                                </div>
                                <div className='scientist'>
                                    <div className='mt-2'>
                                        <h1 className='text-4xl font-bold text-start hover:text-red-600'>A hypothetical collection of potentially diverse</h1>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='text-md text-start'>Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laboratory</p>
                                    </div>
                                    <div className='mt-4 text-start'>
                                        <button className='bg-red-600 text-white w-40 h-12 font-medium'> Read More</button>
                                    </div>
                                </div>{/*text-2 close */}
                            </div>{/*image--part-5 */}
                            <div className='mt-5'>
                                <img src={img3} alt='image' className=' rounded-md' />
                                <div className='flex gap-10 mt-5'>
                                    <div className='alex flex gap-1 '>
                                        <i class="ri-user-3-line text-red-500 text-md"></i>
                                        <p className='text-sm font-bold'> ALEXTINA</p>
                                    </div>
                                    <div className='blog-date flex gap-1'>
                                        <i class="ri-time-line text-red-500 text-md"></i>
                                        <p className='text-sm font-bold'>  Dec 28, 2022</p>
                                    </div>
                                    <div className='blog-commet flex gap-1'>
                                        <i class="ri-chat-4-line text-red-500 text-md"></i>
                                        <p className='text-sm font-bold '>  (04) COMMENTS</p>
                                    </div>
                                </div>
                                <div className='scientist'>
                                    <div className='mt-2'>
                                        <h1 className='text-4xl font-bold text-start hover:text-red-600'>Stanford physicists Andrei Linde In a new study</h1>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='text-md text-start'>Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laboratory</p>
                                    </div>
                                    <div className='mt-4 text-start'>
                                        <button className='bg-red-600 text-white w-40 h-12 font-medium'> Read More</button>
                                    </div>
                                </div>{/*text-2 close */}
                            </div>{/*image-part-6 */}
                            <div className='flex mt-5 gap-3'>
                                <button className='h-10 w-10 bg-red-600 text-white'>1</button>
                                <button className='h-10 w-10 hover:bg-red-600 hover:text-white'>2</button>
                                <button className='h-10 w-10 hover:bg-red-600 font-medium'><i class="ri-arrow-right-line"></i></button>
                            </div>
                        </div>{/* grid-part-1 close */}
                        {/* grid-part-2 */}
                        <div>
                            <div className=' border-[1px] border-slate-300 rounded w-80 h-40 shadow'>
                                <form className='flex justify-center items-center mt-4'>
                                    <div class="mb-5  ">
                                        <label for="email" className=" text-start block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Search</label>
                                        <div className='flex p-5 h-14 w-full border-[1px] border-slate-100 items-center bg-slate-100 rounded'>

                                            <input type="email" id="email" placeholder='SEARCH POST' className="  bg-slate-100 outline-none  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            <i class="ri-search-line text-2xl"></i>
                                        </div>
                                    </div>
                                </form>
                            </div>{/* form close*/}
                            <div className='mt-8 border-[1px] h-96 w-80  border-slate-200 rounded shadow'>
                                <div className='blog-category p-3'>
                                    <h1 className=' font-bold text-xl text-start'>Category</h1>
                                    <div className='blog-ul'>
                                        <ul>
                                            <li className='flex justify-between h-10 w-full border-[1px] border-slate-100 mt-2'>
                                                <a href='#' className='text-slate-400 text-sm font-medium'>CHEMISTRY</a>
                                                <span className='text-slate-400 text-sm font-medium'>03</span>
                                            </li>
                                            <li className='flex justify-between h-10 w-full border-[1px] border-slate-100 mt-2'>
                                                <a href='#' className='text-slate-400 text-sm font-medium'>FORENSIC SCIENCE</a>
                                                <span className='text-slate-400 text-sm font-medium'>07</span>
                                            </li>
                                            <li className='flex justify-between h-10 w-full border-[1px] border-slate-100 mt-2'>
                                                <a href='#' className='text-slate-400 text-sm font-medium'>GEMOLOGICAL</a>
                                                <span className='text-slate-400 text-sm font-medium'>09</span>
                                            </li>
                                            <li className='flex justify-between h-10 w-full border-[1px] border-slate-100 mt-2'>
                                                <a href='#' className='text-slate-400 text-sm font-medium'>COVID ANALYSIS</a>
                                                <span className='text-slate-400 text-sm font-medium'>01</span>
                                            </li>
                                            <li className='flex justify-between h-10 w-full border-[1px] border-slate-100 mt-2'>
                                                <a href='#' className='text-slate-400 text-sm font-medium'>BECTERIOLOGY</a>
                                                <span className='text-slate-400 text-sm font-medium'>00</span>
                                            </li>
                                            <li className='flex justify-between h-10 w-full border-[1px] border-slate-100 mt-2'>
                                                <a href='#' className='text-slate-400 text-sm font-medium'>ANGIOSPERM</a>
                                                <span className='text-slate-400 text-sm font-medium'>26</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>{/*second box */}
                            <div className='mt-8 p-3 border-[1px] h-[450px] w-80  border-slate-200 rounded shadow'>
                                <h1 className='text-start text-xl font-medium'>Recent Post</h1>
                                <div className='flex justify-around mt-3'>
                                    <div className='text-start'>
                                        <img src={img1} alt='image' className='h-20 w-20' />
                                    </div>
                                    <div>
                                        <h1 className='text-md text-slate-400 text-start'>4 March. 2022</h1>
                                        <p className='text-start font-medium'>Don't Underestimate</p>
                                        <span className='text-start font-medium'>Tree for Furniture</span>
                                    </div>
                                </div>
                                <div className='flex justify-around items-center mt-3'>
                                    <div className='text-start'>
                                        <img src={img2} alt='image' className='h-20 w-20' />
                                    </div>
                                    <div>
                                        <h1 className='text-md text-slate-400'>12 February. 2022</h1>
                                        <p className=' font-medium text-start'>Equipping</p>
                                        <span className=' font-medium block'>Researchers in the</span>
                                        <span className='text-start font-medium block'>Developing World</span>
                                    </div>
                                </div>
                                <div className='flex justify-around items-center mt-3'>
                                    <div className='text-start'>
                                        <img src={img3} alt='image' className='h-20 w-20' />
                                    </div>
                                    <div>
                                        <h1 className='text-md text-slate-400 text-start'>14 January. 2022</h1>
                                        <p className='text-start font-medium'>Things to do before</p>
                                        <span className=' text-start font-medium'>shopping</span>
                                    </div>
                                </div>
                                <div className='flex justify-around mt-3'>
                                    <div className='text-start'>
                                        <img src={img1} alt='image' className='h-20 w-20' />
                                    </div>
                                    <div>
                                        <h1 className='text-md text-slate-400 text-start'>18 March. 2021</h1>
                                        <p className='text-start font-medium'>Research And Verify</p>
                                        <span className='text-start font-medium'>of a Quality Product</span>
                                    </div>
                                </div>
                            </div>{/* third box close */}
                            <div className='mt-8 p-3 border-[1px] h-80 w-80  border-slate-200 rounded shadow'>
                              
                                    <h1 className='text-2xl font-medium'>Popular Tag</h1>
                                    <div className='blog-popular flex justify-center items-center'>
                                        <ul>
                                            <div className='flex gap-3 mt-3'>

                                                <li className='h-8 w-24 border-[1px] border-slate-200 flex items-center text-slate-400 text-sm font-medium hover:bg-red-600 hover:text-white'><a href='#'>FARNITURE</a></li>
                                                <li className='h-8 w-24 border-[1px] border-slate-200
                                                 flex items-center text-slate-400 text-sm font-medium hover:bg-red-600 hover:text-white'><a href='#'>TABLE</a></li>
                                            </div>

                                            <div className='flex gap-3 mt-3'>

                                                <li className='h-8 w-24 border-[1px] border-slate-200
                                                 flex items-center text-slate-400 text-sm font-medium hover:bg-red-600 hover:text-white '><a href='#'>CHAIR</a></li>
                                                <li className='h-8 w-24 border-[1px] border-slate-200
                                                 flex items-center text-slate-400 text-sm font-medium hover:bg-red-600 hover:text-white'><a href='#'>CLOTHS</a></li>
                                            </div>
                                            <div className='flex gap-3 mt-3'>

                                                <li className='h-8 w-24 border-[1px] border-slate-200
                                                 flex items-center text-slate-400 text-sm font-medium hover:bg-red-600 hover:text-white'><a href='#'>TOY</a></li>
                                                <li className='h-8 w-24 border-[1px] border-slate-200
                                                 flex items-center text-slate-400 text-sm font-medium'><a href='#'>SUITE</a></li>
                                            </div>
                                            <div className='flex gap-3 mt-3'>

                                                <li className='h-8 w-24 border-[1px] border-slate-200
                                                 flex items-center text-slate-400 text-sm font-medium hover:bg-red-600 hover:text-white'><a href='#'>T-SHIRT</a></li>
                                                <li className='h-8 w-24 border-[1px] border-slate-200
                                                 flex items-center text-slate-400 text-sm font-medium hover:bg-red-600 hover:text-white'><a href='#'>DRESS</a></li>
                                            </div>
                                            <div className='flex gap-3 mt-3'>

                                                <li className='h-8 w-24 border-[1px] border-slate-200
                                                 flex items-center text-slate-400 text-sm font-medium hover:bg-red-600 hover:text-white'><a href='#'>WOODEN</a></li>
                                                <li className='h-8 w-24 border-[1px] border-slate-200
                                                 flex items-center text-slate-400 text-sm font-medium hover:bg-red-600 hover:text-white'><a href='#'>CLOCK</a></li>
                                            </div>
                                            <div className='flex gap-3 mt-3'>

                                                <li className='h-8 w-24 border-[1px] border-slate-200
                                                 flex items-center text-slate-400 text-sm font-medium hover:bg-red-600 hover:text-white'><a href='#'>CRAFT</a></li>
                                                <li className='h-8 w-24 border-[1px] border-slate-200
                                                 flex items-center text-slate-400 text-sm font-medium hover:bg-red-600 hover:text-white'><a href='#'>GIFT</a></li>
                                            </div>
                                        </ul>
                                    </div>
                               
                            </div>
                            </div>
                            {/* grid-part-2 close*/}
                        </div>
                    </div>
                </div>
            </div>
            )
}

            export default Blog1
