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
            {hide ? <section className='overflow-hidden w-screen h-screen absolute top-0  z-50 flex flex-row-reverse bg-black/50'>
                <div className='font-poppins w-3/6 h-screen bg-white py-16 px-20 flex-col flex justify-between gap-y-16 items-start' >
                    <div className='flex w-full h-auto justify-between gap-x-6'>
                        {/* searchbar */}
                        <div className='h-fit w-auto gap-x-2 flex border-b py-[0.6rem] border-black items-center justify-between '>
                            <img src={afsearch} alt="search" className=' h-4 w-fit  font-bold' />
                            <input className='w-[15.875rem]  text-black placeholder:text-black text-sm bg-white focus:outline-none ' type="text" placeholder='Search / Track Order' />
                        </div>
                        {/* other icons */}
                        <div className='w-auto h-auto flex justify-evenly gap-x-4 items-center'>
                            <img className=' h-10' src={afbag} alt="bag" />
                            <div className=''><img className=' h-5' src={afuser} alt="user" /></div>
                            <div className=''><img onClick={() => { setHide(!hide); console.log('click from sidebar', hide); }} className=' h-5' src={afclose} alt="menu" /></div>
                        </div>
                    </div>
                    <div className='h-full flex flex-col justify-start items-start gap-y-9'>
                        <p className='capitalize text-4xl font-medium'>account</p>
                        <NavLink to="/shop"> <p className='capitalize text-4xl  font-medium'>shop</p></NavLink>
                        <p className='capitalize text-4xl  font-medium'>gifts</p>
                        <p className='capitalize text-4xl  font-medium'>journal</p>
                        <NavLink to="/about"> <p className='capitalize text-4xl  font-medium'>about us</p></NavLink>
                    </div>
                    <hr className='border-black w-full' />
                    <div className='w-full flex  justify-between items-center gap-y-9'>
                        <p className='uppercase text-lg font-semibold'>faq</p>
                        <p className='uppercase text-lg font-semibold'>get in touch</p>
                    </div>
                </div >
            </section > : null}
        </>
    )
}

export default Sidebar