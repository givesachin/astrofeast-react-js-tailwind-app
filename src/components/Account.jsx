import React, { useEffect, useState } from 'react'
// import { NavLink } from "react-router-dom";
import Footer from './Atoms/Footer';
import Header from './Atoms/Header';
import afherobg from "../assets/herobg.png";
import afarrow from "../assets/afarrow.svg";

import { NavLink } from "react-router-dom";
const initialFormData = {
    name: '',
    mobile: '',
    email: '',
    address: '',
};

const initialFormErrors = {
    name: '',
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
        // Validate name
        if (!formData.name.trim()) {
            newFormErrors.name = 'Name is required';
            isValid = false;
        } else {
            newFormErrors.name = ''; // Clear the error message
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
                <div className='border-x border-black pt-10'>
                    {/* poster */}

                    <div className='w-full border-t h-auto flex justify-between  border-b border-black'>
                        <div className='w-full flex flex-col border-r border-black'>
                            <p className='text-5xl h-auto p-5 font-Staatliches flex items-center justify-start'>MY ACCOUNT</p>
                            <div className='w-full h-full p-4 border-black flex flex-col justify-evenly  text-start'>
                                <p className='w-full'>Personalize your experience here and see everything we track and do with your data.</p>
                            </div>
                        </div>

                    </div>


                    {/* subpart of who we are */}
                    <div className='w-full h-auto flex justify-center border-b border-black'>
                        <ul className='h-auto flex flex-col items-start p-6 '>
                            image
                        </ul>
                        <div className='w-full h-auto p-6 flex flex-col'>
                            <section className='w-full h-auto'>
                                <form className='flex-col flex items-start gap-5 capitalize' action="/" method="get" onSubmit={handleSignup}>
                                    <div className='w-full flex gap-5'>
                                        <div className='w-full text-start'>
                                            <input className={`w-full py-2 pl-4  border-2 ${formErrors.name ? 'border-red-500' : 'border-gray-400'
                                                }`} placeholder='Enter first name' onChange={handleChange} type="text" name="name" id="uname" />
                                            <p className='text-red-500 text-sm'>{formErrors.name}</p>
                                        </div>
                                        <div className='w-full text-start'>
                                            <input className={`w-full  py-2 pl-4  border-2 ${formErrors.name ? 'border-red-500' : 'border-gray-400'
                                                }`} placeholder='Enter last name' onChange={handleChange} type="text" name="name" id="uname" />
                                            <p className='text-red-500 text-sm'>{formErrors.name}</p>
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
                                    <input className=' px-6 py-3 text-black font-Staatliches border-2 border-gray-900 ' type="submit" value="DISCARD" />
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