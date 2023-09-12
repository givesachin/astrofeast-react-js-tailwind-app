import React, { useState } from 'react'
import afclose from "../../assets/close.svg";
import afsearch from "../../assets/search.svg";
import afuser from "../../assets/afuser.svg";
import afbag from "../../assets/afbag.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const [hide, setHide] = useState(true)
    return (
        <>
            {hide ? <section className='overflow-hidden w-screen h-screen relative top-0  z-50 flex flex-row-reverse bg-black/50'>
                <div className='w-3/6 h-screen bg-white py-16 px-20 flex-col flex justify-between gap-y-16 items-start' >
                    <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">

                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                        <div class="fixed inset-0 overflow-hidden">
                            <div class="absolute inset-0 overflow-hidden">
                                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

                                    <div class="pointer-events-auto relative w-screen max-w-4xl">
                                        <div class="max-w-4xl flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl border border-black">
                                            <div class="px-4 sm:px-6">

                                            </div>
                                            <div class="relative flex-1 w-auto h-auto md:pt-10 ">
                                                <div className='flex w-auto justify-evenly h-auto flex-wrap md:flex-nowrap gap-x-10'>
                                                    {/* searchbar */}
                                                    <div className='mx-10 md:mx-5 order-4 md:mr-40 md:order-1 pt-10 md:pt-0 h-fit md:w-1/2 w-full gap-x-2 flex border-b py-[0.6rem] border-black items-center '>
                                                        <img src={afsearch} alt="search" className=' h-6 w-fit  font-bold' />
                                                        <input className='w-[15.875rem]  text-black placeholder:text-black text-sm bg-white focus:outline-none' type="text" placeholder='Search / Track Order' />
                                                    </div>
                                                    {/* other icons */}
                                                    <div className='order-2 md:order-2 w-auto h-auto align-bottom '>
                                                        <img className='h-8' src={afbag} alt="bag" />
                                                    </div>
                                                    <div className='order-3 md:order-3'><img className=' h-6' src={afuser} alt="user" /></div>
                                                    <div className='pr-64 md:pr-5 order-1 md:order-4'><img onClick={() => { setHide(!hide); console.log('click from sidebar', hide); }} className=' h-5' src={afclose} alt="menu" /></div>
                                                    <div className='flex justify-evenly items-center gap-x-10'>
                                                    </div>
                                                </div>
                                                <div className='h-auto flex flex-col justify-start items-start gap-y-9 px-10 pt-9 md:px-16'>
                                                    <NavLink to="/my-account"><p className='capitalize text-3xl font-medium'>account</p></NavLink>
                                                    <NavLink to="/shop"> <p className='capitalize text-3xl  font-medium'>shop</p></NavLink>
                                                    <p className='capitalize text-3xl  font-medium'>gifts</p>
                                                    <p className='capitalize text-3xl  font-medium'>journal</p>
                                                    <NavLink to="/about"> <p className='capitalize text-3xl  font-medium'>about us</p></NavLink>
                                                </div>
                                                <hr className='border-black w-full mt-10 md:mt-72' />
                                                <div className='w-full flex flex-col md:flex-row  md:justify-between gap-y-9 p-8'>
                                                    <div className='flex'>
                                                        <p className='uppercase text-lg font-semibold'>faq</p>
                                                    </div>
                                                    <div className='flex '>
                                                        <p className='uppercase text-lg font-semibold'>get in touch</p>
                                                    </div>
                                                </div>
                                                <div className='md:hidden'>Mobile</div>
                                                <div className='lg:hidden'>Tablet</div>
                                                <div className='sm:hidden md:hidden'>Desktop</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section > : null}
        </>
    )
}

export default Sidebar