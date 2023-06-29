import React from 'react'
import afloginimg from "../assets/Rectangle 32.png";
import aflogoufo from "../assets/Flying_saucer_logo 1.png";
import Login from './Atoms/Login'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Signup from './Atoms/Signup';
const Auth = () => {
    return (

        <section className='h-screen w-full flex md:flex-row overflow-hidden flex-col gap-x-[7%] items-center font-poppins'>
            <img className=' h-2/5 md:h-full md:w-auto w-screen md:object-fill object-cover object-top' src={afloginimg} alt='astrofeast login poster' title='poster' />
            <div className='md:w-[45%] md:h-[65.85%] h-full overflow-y-scroll flex flex-col justify-evenly items-start w-full  p-4'>
                <img src={aflogoufo} alt='astrofeast logo' title='UFO' />
                <p className='text-2xl font-semibold'>On sign-up, everyone gets</p>
                <p>Free Delivery on the first  order & Access to all content</p>
                <hr className='h-px  mb-7  w-full border-[#B9B9B9]' />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="sigup" element={<Signup />} />

                    </Routes>
                </BrowserRouter>
                <p className='w-full my-4'>or</p>
                <button className='w-full py-3 border-2 border-black capitalize'>Sign up with google</button>
                <hr className='h-px  mt-7  w-full border-[#B9B9B9]' />
                <div className='flex justify-center w-full '>
                    <p>Privacy</p>
                    <p className='w-4'>&#x2022;</p>
                    <p>Terms</p>
                </div>

            </div>
        </section>
    )
}

export default Auth