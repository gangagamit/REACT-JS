import React, { useState } from 'react'
import '../Shops/Checkstyle.css';
import { Link } from 'react-router-dom';
function Checkout() {
    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(true);

    return (
        <div className='main'>
            <div>
                {/* bg-img*/}
                <div className='checklist-bg p-3'>
                    <div className=' flex'>
                        <div>
                            <Link to='/'>Home</Link>
                        </div>
                        <div className='hr-3 mt-3'></div>
                        <div>
                            <p>Checkout</p>
                        </div>
                    </div>
                    <div className='text-start'>
                        <p className='text-2xl font-semibold'>Checkout</p>
                    </div>
                </div> {/* bg-img*/}

            </div>
            {/* grid start */}
            <div className='grid grid-cols-2 gap-3'>
                <div className='billing'>{/* billing div */}
                    <div className='customer flex items-center'>
                        <i className="fa-solid fa-folder text-slate-600"></i>
                        {/* onclick button */}
                        <p>Returning customer?

                            <button onClick={() => setShow(!show)} className='text-slate-700'>Click here to login

                            </button>
                            {show &&

                                <div className='max-w-md rounded border overflow-hidden mt-11 p-5'>
                                    <p className='text-start font-medium'>Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus.</p>
                                    <div className='form p-5'>
                                        <form>
                                            <div class="mb-5">
                                                <label for="email" className=" text-start block mb-2 text-md  text-gray-900 dark:text-white">Username or email *</label>
                                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div class="mb-5">
                                                <label for="email" className=" text-start block mb-2 text-md  text-gray-900 dark:text-white">Password *</label>
                                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div className='mb-5'>
                                                <div className=' float-left'>
                                                    <button className='bg-red-600 text-white font-medium w-28 h-11 rounded'>Login</button>
                                                </div>
                                                <div className='float-left mx-5'>
                                                    <input type=' checkbox' className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 ' />Remember me
                                                </div>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                            }

                        </p>
                    </div>
                    {/* onclick button close*/}
                </div>{/* billing div close */}
                <div className='order'>{/* order-div */}
                    <div className='customer flex items-center'>
                        <i className="fa-solid fa-folder text-slate-600"></i>
                        {/* onclick button */}
                        <p>Have a coupon?

                            <button onClick={() => setShow1(!show1)} className='text-slate-700'>Click here to enter your code

                            </button>
                            {show1 &&

                                <div>

                                    <div className='form p-5'>
                                        <form>
                                            <div class="mb-5">

                                                <input type="email" id="email" placeholder='Coupon Code' className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                                            </div>
                                            <div className='mb-5 float-start'>
                                                <button className='bg-red-600 font-semibold text-sm text-white h-12 w-28 rounded'>Apply Coupon</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            }

                        </p>
                    </div>
                    {/* onclick button close*/}

                </div>{/* order-close */}
            </div> {/* grid-close */}

            {/* grid-2 */}
            <div className='grid-1 flex mt-12 place-content-center place-items-center'>
                <div className='Billing-Details w-[500px]'>
                    <h1 className='text-start text-3xl font-semibold border-b-2 mt-2'>Billing Details</h1>
                    <div className='grid grid-cols-1'>
                        <form>
                            <div class="mb-5">
                                <label for="email" className=" text-start block mb-2 text-lg  text-slate-400 dark:text-white">Country *</label>
                                <select id="countries" className="text-md font-medium bg-gray-50 border border-gray-300 text-gray-900   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option  className="text-md font-medium" selected >Choose a country</option>
                                    <option value="US"  className="text-md font-medium">United States</option>
                                    <option value="CA" className="text-md font-medium">Canada</option>
                                    <option value="FR" className="text-md font-medium">France</option>
                                    <option value="DE" className="text-md font-medium">Germany</option>
                                </select>
                            </div>
                            <div className='mb-5'>
                                    <div className='grid grid-cols-2 gap-2'>
                                            <div >
                                                <label for="email" className=" text-start block mb-2 text-md font-semibold text-slate-400 dark:text-white">First Name *</label>
                                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div>
                                                <label for="email" className=" text-start block mb-2 text-md text-slate-400 font-semibold dark:text-white">Last Name *</label>
                                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                    </div>
                            </div>
                            <div className='mb-5'>
                                <div className='grid grid-cols-1'>
                                <label for="email" className=" text-start block mb-2 text-md text-slate-400 font-semibold dark:text-white">Company Name </label>
                                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            </div>

                            <div className='mb-5'>
                                <div className='grid grid-cols-1'>
                                <label for="email" className=" text-start block mb-2 text-md text-slate-400 font-semibold dark:text-white">Address * </label>
                                                <input type="email" id="email" placeholder= "Street address"class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            </div>
                            <div className='mb-5'>
                                <div className='grid grid-cols-1'>
                               <input type="email" id="email" placeholder= "Apartment,suite,unit etc.(optional)"class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            </div>
                            <div className='mb-5'>
                                <div className='grid grid-cols-1'>
                                <label for="email" className=" text-start block mb-2 text-md text-slate-400 font-semibold dark:text-white">Town/City* </label>
                                <input type="email" id="email" placeholder= "Town/City"class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            </div>

                            <div className='mb-5'>
                                    <div className='grid grid-cols-2 gap-2'>
                                            <div >
                                                <label for="email" className=" text-start block mb-2 text-md font-semibold text-slate-400 dark:text-white">State / County *</label>
                                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div>
                                                <label for="email" className=" text-start block mb-2 text-md text-slate-400 font-semibold dark:text-white">Postcode / Zip *</label>
                                                <input type="email" id="email" placeholder='Postcode / Zip *' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                    </div>
                            </div>

                            <div className='mb-5'>
                                    <div className='grid grid-cols-2 gap-2'>
                                            <div >
                                                <label for="email" className=" text-start block mb-2 text-md font-semibold text-slate-400 dark:text-white">Email Address *</label>
                                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div>
                                                <label for="email" className=" text-start block mb-2 text-md text-slate-400 font-semibold dark:text-white">Phone *</label>
                                                <input type="email" id="email" placeholder='Postcode / Zip *' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                    </div>
                            </div>
                            <div className='mb-5'>
                                <div className='float-left mx-5'>
                                    <input type=' checkbox' className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 ' />Create an account?
                                </div>
                            </div>
                         
                        </form>
                        <form>
                            <div className='mb-5 flex'>
                                <p className='text-start text-slate-500'>Ship to a different address?</p>
                                <input type='checkbox'/>
                            </div>
                            <div className='mb-5'>
                            <div>
                                                <label for="email" className=" text-start block mb-2 text-md text-slate-400 font-semibold dark:text-white">Order Notes</label>
                                                <textarea type="text" id="email" rows={5} cols={5}placeholder='Notes about your order, e.g. special notes for delivery.' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                
                {/* Billingdiv close*/}

                 {/* your order */}
                <div className='Your-order'>
                        <h1 className='text-2xl font-medium'>
                            Your Order
                        </h1>
                        <div className='table-order'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Vestibulum <strong>*1</strong></td>
                                            <td>$165.00</td>
                                           
                                        </tr>
                                        <tr>
                                            <td>Vestibulum dictum magna<strong>*1</strong></td>
                                            <td>$50.00</td>
                                           
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>
                                                Cart Subtotal
                                            </th>
                                            <td>
                                                <span>$215.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Shipping</th>
                                            <td>
                                                <ul>
                                                    <li>
                                                        <input type='radio' name='shipping'/>
                                                        <label>Flate rate: <span>$7.00</span></label>
                                                    </li>
                                                    <li>
                                                        <input type='radio' name='shipping'/>
                                                        <label>Free shipping:</label>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Order total</th>
                                            <td>$215.00</td>
                                        </tr>
                                    </tfoot>
                                </table>
                                 {/* accordio  */}
                                <div className='payment-method'>
                                    <div className='accordion' id='chechaccordion'>
                                       
                                    </div>
                                </div>
                                {/* accordio close */}
                        </div>
                </div>
               {/* your order div close*/}
            </div>
            {/* grid-2 close*/}

        </div>   // main-div close

    )
}

export default Checkout
