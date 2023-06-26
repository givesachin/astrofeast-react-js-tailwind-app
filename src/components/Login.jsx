import React from 'react'
import afloginimg from "../assets/Rectangle 32.png";
import aflogoufo from "../assets/Flying_saucer_logo 1.png";

const Login = () => {
    return (
        <section className='h-screen w-full flex md:flex-row flex-col gap-x-[6.25%] items-center'>
            <img className=' h-2/5 md:h-screen md:w-auto w-screen object-none object-top' src={afloginimg} alt='astrofeast login poster' title='poster' />
            <div className='md:w-[45%] md:h-[65.85%] h-full flex flex-col justify-evenly items-start w-full  p-4'>
                <img src={aflogoufo} alt='astrofeast logo' title='UFO' />
                <p>On sign-up, everyone gets</p>
                <p>Free Delivery on the first  order & Access to all content</p>
                <hr className='h-px w-full border-[#B9B9B9]' />
                <form action="get" className='flex flex-col items-start w-full gap-y-4'>
                    <label htmlFor="email">Sign up with email</label>
                    <input className='h-auto w-full border-2 border-[#B9B9B9] pl-4 py-3' name='email' type="email" placeholder='Enter your email address' required/>
                    <button type='submit' className='w-full py-3 border-2 border-black'>Sign up </button>
                </form>
                <p className='w-full'>or</p>
                <button className='w-full py-3 border-2 border-black'>Sign up with google</button>
                <hr className='h-px w-full border-[#B9B9B9]' />
                <div className='flex justify-center w-full'>
                    <p>Privacy</p>
                    <p>.</p>
                    <p>Terms</p>
                </div>
            </div>
        </section>
    )
}

export default Login