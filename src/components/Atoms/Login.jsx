import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { NavLink } from "react-router-dom";
const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [isInputTouched, setIsInputTouched] = useState(false);
    // onsubmit the text will shown under the input field in green color
    const onSubmit = (data) => { console.log(data) };

    const handleInputFocus = () => {
        setIsInputTouched(true);
    };

    return (
        <form action="get" className='flex flex-col items-start w-full gap-y-4 h-auto' onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full h-full flex flex-col items-start gap-y-1'>
                <label className='text-lg' htmlFor="email">Login with email</label>
                <input id='email' className='h-auto text-lg w-full border border-[#d3d3d3] pl-4 py-3' name='email' type="email" placeholder='Enter your email address' required  {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} onFocus={handleInputFocus} />
                {isInputTouched && errors.email && (
                    <span className='text-red-700'>Invalid email</span>
                )}
                {isInputTouched && !errors.email && (
                    <span className='text-green-700'>Valid email</span>
                )}
            </div>
            <button type='submit' className='w-full py-3 bg-black text-white capitalize'>Log In </button>
            <NavLink to="/sigup"><p className='text-right w-full text-black capitalize'>Sign Up </p></NavLink>
        </form>
    )
}

export default Login