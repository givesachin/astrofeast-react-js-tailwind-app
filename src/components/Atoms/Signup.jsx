import React from 'react'
import { NavLink } from "react-router-dom";
const Signup = () => {
    return (
        <section className='w-full h-auto'>
            <form className='flex-col flex items-start gap-2 capitalize' action="/" method="get">
                <div className='w-full text-start'>
                    <label htmlFor="name">name</label>
                    <input className='w-full text-lg  py-4 pl-4 border-2 border-gray-400' placeholder='enter name' type="text" name="name" id="uname" />
                </div>
                <div className='w-full text-start'>
                    <label htmlFor="Mobile">Mobile number</label>
                    <input className='w-full text-lg  py-4 pl-4 border-2  border-gray-400' placeholder='enter mobile number' type="tel" name="Mobile" id="umobile" />
                </div>
                <div className='w-full text-start'>
                    <label htmlFor="email">Email</label>
                    <input className='w-full text-lg  py-4 pl-4 border-2  border-gray-400' placeholder='enter email' type="email" name="email" id="umail" />
                </div>
                <div className='w-full text-start'>
                    <label htmlFor="address">Address</label>
                    <textarea className='w-full text-lg  py-4 pl-4 border-2  border-gray-400' placeholder='enter address' type="textarea" name="address" id="uaddress" />
                </div>
                <button type='submit' className='w-full py-3 bg-black text-white capitalize'>Create Account </button>
                <div className='flex '>
                    <p className=''>already have an account?</p><NavLink to="/auth/login"><p className='text-right w-full capitalize text-blue-600 active:text-purple-600 '>Log In</p></NavLink>
                </div>
            </form>
        </section>
    )
}

export default Signup