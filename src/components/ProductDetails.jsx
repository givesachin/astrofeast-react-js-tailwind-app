import React from 'react'
import Header from './Atoms/Header'
import Footer from './Atoms/Footer'
import afherobg from "../assets/herobg.png";
import afarrow from "../assets/afarrow.svg";
import { NavLink } from 'react-router-dom';
const ProductDetails = () => {
    return (
        <>
            <Header />
            <section className='relative'>
                <div className='absolute w-screen h-auto top-4 z-10'>
                    <ul className='w-full bg-[#BDC695] h-auto p-2 flex justify-center gap-x-12 '>
                        <li>  <p className='w-full'>&#x2022; We are currently avaliable at delhi, to know more <span className='font-bold'>Click here</span></p></li>
                        <li>  <p className='w-full'> &#x2022; We are currently avaliable at delhi, to know more <span className='font-bold'>Click here</span></p> </li>
                    </ul>
                </div>

                <section className='px-16 relative'>
                    {/* container */}
                    <div className='border-x border-black pt-14'>
                        {/* headline */}

                        {/* <hr className='w-screen  border-black absolute left-0' /> */}
                        {/* poduct details */}
                        <section className='h-auto w-full flex'>
                            {/* name and iamges */}
                            <div className='h-auto  w-auto flex flex-col justify-start border-r border-black' >
                                <div className='flex flex-col justify-between items-start w-full h-auto py-10 px-8 border-b  border-black'>
                                    <h1 className=''>
                                        product.title (product.qty)
                                    </h1>
                                    <h2>
                                        product.subtitle
                                    </h2>
                                </div>
                                <div className='flex flex-col gap-6 w-full h-auto py-10 px-8 '>
                                    <img className=' w-full h-96 object-cover' src={afherobg} alt="products" />
                                    <div className='flex w-full h-auto justify-between'>
                                        <img className=' h-24 w-24 object-cover' src={afherobg} alt="products" />
                                        <img className=' h-24 w-24 object-cover' src={afherobg} alt="products" />
                                        <img className=' h-24 w-24 object-cover' src={afherobg} alt="products" />
                                        <img className=' h-24 w-24 object-cover' src={afherobg} alt="products" />

                                    </div>
                                </div>
                            </div>
                            {/* nutrition and certi */}
                            <section className='flex  flex-col h-auto border-r border-black'>
                                <div className='flex flex-col h-full w-full border-b border-black'>

                                    <div className='flex justify-start border-b border-black items-start py-6 px-8'>
                                        <h3 className=''>nutrition</h3>
                                    </div>
                                    <div className='flex flex-col w-full h-full gap-5 p-8 justify-start items-start'>
                                        <div className='flex w-full justify-between'>
                                            <p>nutrition.name</p>
                                            <p>nutrition.cal</p>
                                        </div>
                                        <div className='flex w-full justify-between'>
                                            <p>nutrition.name</p>
                                            <p>nutrition.cal</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col h-auto w-full '>
                                    <div className='flex justify-start border-b border-black items-start py-6 px-8'>
                                        <h3 className=''>certificates</h3>
                                    </div>
                                    <div className='flex flex-col gap-6 p-8 justify-between items-center'>
                                        <div className='w-full justify-center flex gap-6 items-center'>
                                            <button className=''>
                                                <img className='invert rotate-180' src={afarrow} alt="back arrow" />

                                            </button>

                                            <img className='h-14 w-28 object-cover' src={afherobg} alt="certificate" />

                                            <button className=''>
                                                <img className='invert' src={afarrow} alt="back arrow" />
                                            </button>
                                        </div>
                                        <p>certi.text</p>
                                    </div>
                                </div>
                            </section>
                            {/* tale sub and stash */}
                            <section className='flex flex-col h-auto w-auto'>
                                <div className='flex flex-col h-full w-full border-b border-black'>

                                    <div className='flex justify-start border-b border-black items-start py-6 px-8'>
                                        <h3 className=''>tales</h3>
                                    </div>
                                    <div className='flex flex-col h-full gap-5 p-8 justify-start items-start'>
                                        <div className='flex w-full flex-col items-center h-auto justify-between'>
                                            <p>product.tale</p>
                                            <p>product.tale</p>
                                        </div>

                                    </div>
                                </div>
                                <div className='flex flex-col h-auto w-full '>
                                    <div className='flex justify-start border-b border-black items-start py-6 px-8'>
                                        <h3 className=''>subscribe</h3>
                                    </div>
                                    <div className='flex flex-col gap-6 p-8 justify-start items-start'>
                                        <div className='w-full h-auto justify-center items-center flex gap-2 p-2 border border-black '>
                                            <button className='capitalize bg-green p-2 w-full h-auto'><span className='w-full h-auto'>weekly</span></button>
                                            <button className='capitalize p-2 w-full h-auto'><span className='w-full h-auto'>bi-weekly</span></button>
                                            <button className='capitalize p-2 w-full h-auto'><span className='w-full h-auto'>monthly</span></button>
                                        </div>
                                        <div className='flex gap-4'>
                                            <div className='w-full flex justify-start gap-3'>
                                                <p>subs.text</p>
                                                <p>subs.text</p>
                                            </div>
                                        </div>
                                        <hr className='w-full border-black ' />
                                        <div className='w-full h-auto flex flex-col justify-start'>
                                            <div className='w-full h-auto flex justify-between'>
                                                <div className='w-full flex justify-start gap-2'>
                                                    <button className='h-full w-auto border border-black p-2 text-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <g clip-path="url(#clip0_2591_4101)">
                                                                <path d="M10 0.833313V19.1666" stroke="#030712" stroke-width="1.25" />
                                                                <path d="M0.833496 10H19.1668" stroke="#030712" stroke-width="1.25" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2591_4101">
                                                                    <rect width="20" height="20" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                    <button className='p-2 text-center'>1</button>
                                                    <button className='h-full w-auto border border-black p-2 text-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <g clip-path="url(#clip0_2591_4101)">
                                                                <path d="M0.833496 10H19.1668" stroke="#030712" stroke-width="1.25" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2591_4101">
                                                                    <rect width="20" height="20" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <h4>product.price</h4>
                                            </div>
                                        </div>
                                        <button className='w-full bg-black text-white py-3 px-5 flex justify-center gap-2 items-center'>add to stash <img src={afarrow} alt="arrow to stash" /></button>
                                        <p className='w-full text-center'>For really huge orders, <NavLink to='' ><span className='underline'>get in touch  </span></NavLink></p>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </div>
                </section>
                <Footer />
            </section >
        </>
    )
}

export default ProductDetails