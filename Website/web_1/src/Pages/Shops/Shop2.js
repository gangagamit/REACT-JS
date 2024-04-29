import React from 'react'

function Shop2() {
  return (
    <div>
           <div className='shop p-5'>
                <div className='flex'>
                    <div>
                        <h1>Home</h1>
                    </div>
                    <div className='hr mt-3'>

                    </div>
                    <div>
                        <h1>Shop</h1>
                    </div>
                </div>
                <div>
                    <p className='font-semibold text-3xl text-start'>Shop</p>
                </div>
            </div>
            <div className='item flex justify-between items-center p-2'>
                <div>
                    <p className='text-slate-400 text-2xl'><span className='font-semibold text-black'>10</span> Item On List</p>
                </div>
                <div className='sort flex gap-5 items-center'>
                    <div>


                        <form class="max-w-sm mx-auto">
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                <option value="US">Sort by default</option>
                                <option value="CA">Newest</option>
                                <option value="FR">Oldest</option>

                            </select>
                        </form>

                    </div>
                    <div className='select-2 text-2xl'>
                    <form class="max-w-sm mx-auto">
                            <select id="countries" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                <option value="US">All</option>
                                <option value="CA">10 per pages</option>
                                <option value="CA">20 per pages</option>
                                <option value="CA">30 per pages</option>

                            </select>
                        </form>

                    </div>
                    <div className='select-icon'>
                    <i class="fa-solid fa-bars"></i>
                    </div>
                    <div className='table-cell'>
                    <i className=" text-red-400  fa-solid fa-table-cells"></i>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Shop2
