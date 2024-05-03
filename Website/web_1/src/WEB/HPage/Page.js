import React from "react";
import bg1 from '../../Image/about-img-1.jpg';
import bg2 from '../../Image/about-img-2.jpg';
import bg3 from '../../Image/about-img-3.png';
import img1 from '../../Image/team-1.jpg';
import img2 from '../../Image/team-2.jpg';
import img3 from '../../Image/team-3.jpg';
import img4 from '../../Image/team-4.jpg';
import img5 from '../../Image/about-banner-1.jpg';
import img6 from '../../Image/about-banner-2.jpg';
import '../HPage/Stylepage.css';
function Page() {
    return (
        <>

            <div className="flex justify-center items-center">
                <div className=" container">
                    {/* bg-img*/}
                    <div className='page-bg p-3'>
                        <div className=' flex'>
                            <div>
                                <p>Home</p>
                            </div>
                            <div className=" border-b-2 border-slate-500 h-4 w-10"></div>
                            <div >
                                <p>About Us</p>
                            </div>
                        </div>
                        <div className='text-start'>
                            <p className='text-2xl font-semibold'>About Us</p>
                        </div>
                    </div> {/* bg-img*/}

                    <div className="mt-3">
                        <div className=" lg:grid grid-cols-4 md:grid-col-1 gap-2">
                            <div className=" col-span-2">
                                <div>
                                    <img src={bg1} alt=""></img>
                                </div>
                            </div>
                            <div className=" col-span-2">
                                <div>
                                    <img src={bg2} alt=""></img>
                                </div>

                            </div>

                        </div>{/* grid close */}
                        <div className="  flex justify-center items-center mt-[-120px]">
                            <img src={bg3}></img>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <h1 className="text-start">About Us</h1>
                        <h2 className="text-2xl font-medium text-start">About Our Story</h2>
                    </div>
                    <div>
                        <div className="grid lg:grid-cols-3  md:grid-cols-1 gap-4 leading-7">
                            <div>
                                <p className="text-start text-slate-400 text-lg">
                                    Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services without costly customization or add ons. Get orders to your customers in lots of ways by offering shipping, pickup, delivery, and even QR code ordering.
                                </p>
                            </div>
                            <div>
                                <p className="text-start text-slate-400 text-lg">
                                    Expand your reach and sell more using seamless integrations with Google, Instagram, Facebook, and more. Built- in SEO tools make it easy for shoppers to find your business on search engines. Get access to the entire suite of integrated Square solutions to help you run your business. Integration between Square Online and all Square point of sale systems makes inventory management easy. Subscribe to Square Marketing and easily send email promotions to your customers using the contact information
                                </p>
                            </div>
                            <div>
                                <div className=" flex gap-2 ">
                                    <div>

                                        <p>  <i class="ri-check-line text-2xl"></i></p>
                                    </div>
                                    <div>

                                        <p>Orders go right to your restaurant</p>
                                        <span>point of sale, KDS, and kitchen</span>
                                    </div>
                                </div>
                                <div className=" flex gap-2 mt-3">
                                    <div>

                                        <p>  <i class="ri-check-line text-2xl"></i></p>
                                    </div>
                                    <div>

                                        <p className="text-start">Provide in-person pickup, delivery</p>
                                        <span className="text-start">by professional couriers</span>
                                    </div>
                                </div>
                                <div className=" flex gap-2 mt-3">
                                    <div>

                                        <p>  <i class="ri-check-line text-2xl"></i></p>
                                    </div>
                                    <div>

                                        <p className="text-start">Offer in-person diners self-serve,</p>
                                        <span className="text-start">contactless ordering via QR codes.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h1 className="text-center text-2xl">Team</h1>
                        <h1 className=" text-4xl font-medium text-center">Meet With Team</h1>
                        <div className="grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-3 mt-2">
                                <div>
                                    <img src={img1} alt="image" className=" h-72"/>
                                </div>
                                <div>
                                    <img src={img2} alt="image" className=" h-72"/>
                                </div>
                                <div>
                                    <img src={img3} alt="image" className=" h-72"/>
                                </div>
                                <div>
                                    <img src={img4} alt="image" className=" h-72"/>
                                </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid lg:grid-cols-4  md:grid-cols-1 gap-9 mt-8">
                            <div className=" col-span-2">
                                <div>
                                    <img src={img5} alt="image"/>
                                </div>
                             
                            </div>
                            <div className=" col-span-2">
                                    <h1 className="text-start">Features #01</h1>
                                    <h2 className=" text-3xl font-medium text-start">Solutions that work together</h2>
                                    <p className="text-start text-slate-500">Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                                    <div className="text-start mt-5">
                                        <button className=" text-lg font-medium w-40 hover:bg-red-600 hover:text-white">Get In Touch</button>
                                    </div>
                            </div>
                            
                        </div>
                    </div>

                    <div>
                        <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-9 mt-8">
                           
                            <div className=" col-span-2">
                                    <h1 className="text-start">Features #02</h1>
                                    <h2 className=" text-3xl font-medium text-start">All kinds of payments securely</h2>
                                    <p className="text-start text-slate-500">Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                                    <div className="text-start mt-5">
                                        <button className=" text-md font-medium w-40 hover:bg-red-600 hover:text-white">Contact With Us</button>
                                    </div>
                            </div>
                            <div className=" col-span-2">
                                <div>
                                    <img src={img6} alt="image"/>
                                </div>
                             
                            </div>
                            
                        </div>
                    </div>
                </div>{/* conatiner close */}
            </div>
        </>
    )
}
export default Page