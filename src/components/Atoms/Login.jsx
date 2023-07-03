import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from "react-router-dom";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const [showPasswordInput, setShowPasswordInput] = useState(false);
    const onSubmit = (data) => {
        console.log(data);
        setShowPasswordInput(true);
        if (validatePassword(data.password)) {
            window.location.href = '/';
        }
    };

    const validatePassword = (value) => {
        if (!value) {
            return 'Password is required';
        }
        if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)(?!.*\s).{8,}/.test(value)) {
            return 'Invalid password format';
        }
        if (value.includes(watch('email'))) {
            return 'Password should not contain the email';
        }
        if (value.includes(watch('username'))) {
            return 'Password should not contain the username';
        }
        const commonPasswords = ['password', '123456', 'qwerty'];
        if (commonPasswords.includes(value.toLowerCase())) {
            return 'Commonly used password';
        }
        return true;
    };

    const emailValue = watch('email', '');
    const passwordValue = watch('password', '');

    return (
        <form action='/' onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start w-full gap-y-4 h-auto">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                    },
                })}
                className="h-auto text-lg w-full border border-[#d3d3d3] pl-4 py-3"
            />
            {errors.email && (
                <span className="text-red-700">
                    {errors.email.type === 'required' ? 'Please enter your email address' : errors.email.message}
                </span>
            )}
            {emailValue && !errors.email && (
                <span className="text-green-700">Sounds good</span>
            )}

            {showPasswordInput && (
                <>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', {
                            validate: validatePassword,
                        })}
                        className="h-auto text-lg w-full border border-[#d3d3d3] pl-4 py-3"
                    />
                    {errors.password && errors.password.type === 'validate' && <span>{errors.password.message}</span>}
                    {!errors.password && passwordValue && (
                        <span className="text-green-700">Strong password</span>
                    )}
                </>
            )}

            <button type="submit" className="w-full py-3 bg-black text-white capitalize">
                Login
            </button>
            <div className='flex '>
                <p className=''>Dont have an account?</p><NavLink to="/signup"><p className='text-right w-full capitalize text-blue-600 active:text-purple-600 '>Create Account</p></NavLink>
            </div>
        </form>
    );
};

export default Login;
