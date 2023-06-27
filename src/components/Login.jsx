import React from 'react'
import afloginimg from "../assets/Rectangle 32.png";
import aflogoufo from "../assets/Flying_saucer_logo 1.png";
import { useForm } from 'react-hook-form'
const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    // onsubmit the text will shown under the input field in green color
    const onSubmit = (data) => { console.log(data) };
    return (
        <section className='h-screen w-full flex md:flex-row flex-col gap-x-[6.25%] items-center font-poppins'>
            <img className=' h-2/5 md:h-full md:w-auto w-screen md:object-fill object-cover object-top' src={afloginimg} alt='astrofeast login poster' title='poster' />
            <div className='md:w-[45%] md:h-[65.85%] h-full flex flex-col justify-evenly items-start w-full  p-4'>
                <img src={aflogoufo} alt='astrofeast logo' title='UFO' />
                <p className='text-2xl font-semibold'>On sign-up, everyone gets</p>
                <p>Free Delivery on the first  order & Access to all content</p>
                <hr className='h-px w-full border-[#B9B9B9]' />
                <form action="get" className='flex flex-col items-start w-full gap-y-4' onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-full h-full flex flex-col items-start gap-y-1'>
                        <label className='text-lg' htmlFor="email">Sign up with email</label>
                        <input id='email' className='h-auto text-lg w-full border-2 border-[#B9B9B9] pl-4 py-3' name='email' type="email" placeholder='Enter your email address' required  {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, when: (value) => { value.length > 0; }  })} />
                        {errors.email && <span className='text-red-700'>Invalid email</span>}
                        {!errors.email && <span className='text-green-700'>Invalid email</span>}
                    </div>
                    <button type='submit' className='w-full py-3 border-2 bg-black text-white capitalize'>Sign up </button>
                </form>
                <p className='w-full'>or</p>
                <button className='w-full py-3 border-2 border-black capitalize'>Sign up with google</button>
                <hr className='h-px w-full border-[#B9B9B9]' />
                <div className='flex justify-center w-full '>
                    <p>Privacy</p>
                    <p className='w-4'>&#x2022;</p>
                    <p>Terms</p>
                </div>
            </div>
        </section>
    )
}

export default Login