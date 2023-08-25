import React, { useEffect, useState } from 'react'
// import { NavLink } from "react-router-dom";
import Footer from './Atoms/Footer';
import Header from './Atoms/Header';

import user from "../assets/user.jpg";
import pencil from "../assets/pencil-2-xxl.png";
import { NavLink } from "react-router-dom";
const initialFormData = {
    first_name: '',
    last_name: '',
    mobile: '',
    email: '',
    address: '',
};

const initialFormErrors = {
    first_name: '',
    last_name: '',
    mobile: '',
    email: '',
    address: '',
};

const Account = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const validateForm = () => {
        let isValid = true;
        const newFormErrors = { ...initialFormErrors };

        console.log("logging form data", formData);
        // Validate first_name
        if (!formData.frist_name.trim()) {
            newFormErrors.first_name = 'First name is required';
            isValid = false;
        } else {
            newFormErrors.frist_name = ''; // Clear the error message
        }
        // Validate last_name
        if (!formData.last_name.trim()) {
            newFormErrors.last_name = 'Last name is required';
            isValid = false;
        } else {
            newFormErrors.last_name = ''; // Clear the error message
        }

        // Validate mobile
        const mobilePattern = /^\d{10}$/;
        if (!mobilePattern.test(formData.mobile)) {
            newFormErrors.mobile = 'Enter a valid 10-digit mobile number';
            isValid = false;
        } else {
            newFormErrors.mobile = ''; // Clear the error message
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            newFormErrors.email = 'Enter a valid email address';
            isValid = false;
        } else {
            newFormErrors.email = ''; // Clear the error message
        }

        // Validate address
        if (!formData.address.trim()) {
            newFormErrors.address = 'Address is required';
            isValid = false;
        } else {
            newFormErrors.address = ''; // Clear the error message
        }

        setFormErrors(newFormErrors);
        return isValid;
    };

    const [users] = useState({})
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // setUsers(values => ({ ...values, [name]: value }))
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    const handleSignup = (event) => {
        event.preventDefault();
        console.log(users)
        if (validateForm()) {
            // Form is valid, proceed with form submission
            console.log('Form submitted:', formData);
            console.log('Form validation failed', formErrors);

        } else {
            console.log('Form validation failed');
        }
    }
    return (
        <section>
            <Header />
            <section className='px-16 relative'>
                {/* container */}
                <div className='border-x border-black py-10' >
                    {/* poster */}
                    <div className='w-full border-t h-auto flex  border-black' ></div>

                    <div className='w-full p-4 text-start text-2xl space-x-7' >
                        <a className='uppercase text-[#838282]  w-full font-Staatliches' href="">orders</a>
                        <a className='uppercase text-[#838282]    w-full font-Staatliches' href="">subscriptions</a>
                        <a className='uppercase text-[#838282]    w-full font-Staatliches' href="">golden ticket</a>
                        <a className='uppercase text-black w-full font-Staatliches underline decoration-[6px]  underline-offset-[18px]' href="">account</a> 
                    </div>

                    <div className='w-full border-t h-auto flex   border-b border-black'>
                        <div className='w-full flex flex-col border-black py-6'>
                            <p className='px-6 text-5xl h-auto font-Staatliches flex items-center justify-start'>MY ACCOUNT</p>
                            <p className='px-6 w-full border-black flex flex-col justify-evenly text-start'>Personalize your experience here and see everything we track and do with your data.</p>

                        </div>
                        <div className='w-80 flex gap-3 p-8 place-content-end' >
                            <img className='h-5 w-5' src={pencil} alt="bag" />
                            <p className='text-orange-400 font-Staatliches text-xl '>
                                EDIT DETAILS
                            </p>
                        </div>

                    </div>


                    {/* subpart of who we are */}
                    <div className='w-full h-auto flex justify-center border-b border-black'>
                        <ul className='h-auto flex flex-col items-start p-6 '>
                            <div>
                                <img class=" w-full object-cover h-40" src={user} title="poster" />
                            </div>
                        </ul>
                        <div className='w-full h-auto p-6 flex flex-col'>
                            <section className='w-full h-auto'>
                                <form className='flex-col flex items-start gap-5 capitalize' action="/" method="get" onSubmit={handleSignup}>
                                    <div className='w-full flex gap-5'>
                                        <div className='w-full text-start'>
                                            <input className={`w-full py-2 pl-4  border-2 ${formErrors.frist_name ? 'border-red-500' : 'border-gray-400'
                                                }`} placeholder='Enter first name' onChange={handleChange} type="text" name="first_name" id="ufirstname" />
                                            <p className='text-red-500 text-sm'>{formErrors.frist_name}</p>
                                        </div>
                                        <div className='w-full text-start'>
                                            <input className={`w-full  py-2 pl-4  border-2 ${formErrors.last_name ? 'border-red-500' : 'border-gray-400'
                                                }`} placeholder='Enter last name' onChange={handleChange} type="text" name="last_name" id="ulastname" />
                                            <p className='text-red-500 text-sm'>{formErrors.last_name}</p>
                                        </div>
                                    </div>
                                    <div className='w-full text-start'>
                                        <input className={`w-full py-2 pl-4 border-2  ${formErrors.email ? 'border-red-500' : 'border-gray-400'
                                            }`} placeholder='Email address' onChange={handleChange} type="email" name="email" id="umail" />
                                        <p className='text-red-500 text-sm'>{formErrors.email}</p>
                                    </div>
                                    <div className='w-full text-start'>

                                        <input className={`w-full py-2 pl-4 border-2  ${formErrors.mobile ? 'border-red-500' : 'border-gray-400'
                                            }`} placeholder='Phone number' onChange={handleChange} type="tel" name="mobile" id="umobile" />
                                        <p className='text-red-500 text-sm'>{formErrors.mobile}</p>
                                    </div>
                                    <div className='w-full text-start'>

                                        <textarea className={`w-full py-2 pl-4 border-2  ${formErrors.address ? 'border-red-500' : 'border-gray-400'
                                            }`} placeholder='Address' onChange={handleChange} type="textarea" name="address" id="uaddress" />
                                        <p className='text-red-500 text-sm'>{formErrors.address}</p>
                                    </div>
                                    <div className='flex gap-5'>

                                        <input className=' px-6 py-3 text-white font-Staatliches  bg-black' type="submit" value="SAVE CHANGES" />
                                        <input className=' px-6 py-3 text-black font-Staatliches border-2 border-gray-900 ' type="reset" value="DISCARD" />
                                    </div>


                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </section >

    )
}

export default Account