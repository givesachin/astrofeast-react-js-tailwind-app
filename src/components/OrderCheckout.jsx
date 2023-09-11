import { React, useState } from 'react';
import afnonveg from "../assets/afnonveg.avif";
import afherobg from "../assets/herobg.png";
import Footer from './Atoms/Footer';
import Header from './Atoms/Header';
import QuantityBox from './Atoms/QuantityBox';
const initialFormData = {
    first_name: '',
    last_name: '',
    mobile: '',
    email: '',
    address: '',
    state: '',
    zipcode: ''
};

const initialFormErrors = {
    first_name: '',
    last_name: '',
    mobile: '',
    email: '',
    address: '',
    state: '',
    zipcode: ''
};

const products =
    [{ id: 0, prod_img: afnonveg, title: 'Fresh Pancakes' },
    { id: 1, prod_img: afnonveg, title: 'Fresh Pancakes' },
    { id: 2, prod_img: afnonveg, title: 'Fresh Pancakes' }]

const added_products =
    [{ id: 0, prod_img: afnonveg, title: 'Fresh Pancakes', price: 249.00 },
    { id: 1, prod_img: afnonveg, title: 'Fresh Pancakes', price: 249.00 }]

const OrderCheckout = () => {
    const [FilterToggle, setFilterToggle] = useState()
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const validateForm = () => {
        let isValid = true;
        const newFormErrors = { ...initialFormErrors };

        console.log("logging form data", formData);
        // Validate first_name
        if (!formData.first_name.trim()) {
            newFormErrors.first_name = 'First name is required';
            isValid = false;
        } else {
            newFormErrors.first_name = ''; // Clear the error message
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
        if (!formData.state.trim()) {
            newFormErrors.state = 'State is required';
            isValid = false;
        } else {
            newFormErrors.state = ''; // Clear the error message
        }
        if (!formData.zipcode.trim()) {
            newFormErrors.zipcode = 'Zip Code is required';
            isValid = false;
        } else {
            newFormErrors.zipcode = ''; // Clear the error message
        }

        setFormErrors(newFormErrors);
        return isValid;
    };

    function handleFilter() {
        setFilterToggle(!FilterToggle);
    }

    const bestseller = {
        meat: [
            {
                id: 0,
                Image: afherobg,
                p_name: 'Beef Steak',
                Price: '$20',
            },
            {
                id: 1,
                Image: afherobg,
                p_name: 'Chicken Breast',
                Price: '$10',
            },
            {
                id: 2,
                Image: afherobg,
                p_name: 'Pork Chops',
                Price: '$15',
            },
            {
                id: 3,
                Image: afherobg,
                p_name: 'Lamb Chops',
                Price: '$25',
            },
            {
                id: 4,
                Image: afherobg,
                p_name: 'Lamb Chops',
                Price: '$25',
            },
            {
                id: 5,
                Image: afherobg,
                p_name: 'Lamb Chops',
                Price: '$25',
            },
            // Add more meat products as needed
        ],
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // setUsers(values => ({ ...values, [name]: value }))
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    const handleEdit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Form is valid, proceed with form submission
            console.log('Form submitted:', formData);
            console.log('Form validation failed', formErrors);

        } else {
            console.log('Form validation failed');
        }
    }
    const [selectedOption, setSelectedOption] = useState('weekly'); // Default selected option

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    return (
        <>
            <Header />
            <section className='lg:px-16 relative font-poppins'>
                {/* container */}
                <div className='lg:border-x border-black lg:pt-10'>
                    {/* headline */}
                    <hr className='w-full border-black absolute left-0' />
                    {/* product grid */}
                    <div className='w-full flex flex-col justify-start items-start gap-y-4 py-9 px-8 '>
                        {/* <div className='flex justify-between w-auto gap-x-2'>
                            <NavLink className='flex justify-between w-auto gap-x-2' to='/shop'>  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M21.877 2.28564L8.16267 15.9999L21.877 29.7142" stroke="#F4A73F" strokeWidth="2.61225" />
                            </svg>
                                <p className='text-yellow w-auto font-Staatliches text-2xl font-normal uppercase'>back to SHOP</p>
                            </NavLink>
                        </div> */}
                        <p className='font-Staatliches text-5xl text-left'>order checkout</p>
                    </div>

                    <div className='w-full flex border-t border-black'>
                        <div className='w-2/3 flex border-r border-black'>
                            <div className='w-full h-auto p-6 flex flex-col'>
                                <section className='w-full h-auto'>
                                    <form className='flex-col flex items-start gap-5 capitalize' action="/" method="get" onSubmit={handleEdit}>
                                        <div><p className='font-Poppins text-xl text-left'>Enter the recipient's details</p></div>
                                        <div className='w-full text-start'>
                                            <input className={`w-full py-2 pl-4 border-2  ${formErrors.email ? 'border-red-500' : 'border-gray-400'
                                                }`} placeholder='Email address' onChange={handleChange} type="email" name="email" id="umail" />
                                            <p className='text-red-500 text-sm'>{formErrors.email}</p>
                                        </div>
                                        <div className='w-full flex flex-col md:flex-row gap-5'>
                                            <div className='w-full text-start'>
                                                <input className={`w-full py-2 pl-4  border-2 ${formErrors.first_name ? 'border-red-500' : 'border-gray-400'
                                                    }`} placeholder='Enter first name' onChange={handleChange} type="text" name="first_name" id="ufirstname" />
                                                <p className='text-red-500 text-sm'>{formErrors.first_name}</p>
                                            </div>
                                            <div className='w-full text-start'>
                                                <input className={`w-full  py-2 pl-4  border-2 ${formErrors.last_name ? 'border-red-500' : 'border-gray-400'
                                                    }`} placeholder='Enter last name' onChange={handleChange} type="text" name="last_name" id="ulastname" />
                                                <p className='text-red-500 text-sm'>{formErrors.last_name}</p>
                                            </div>
                                        </div>
                                        <div className='w-full text-start'>

                                            <input className={`w-full py-2 pl-4 border-2  ${formErrors.mobile ? 'border-red-500' : 'border-gray-400'
                                                }`} placeholder='Phone number' onChange={handleChange} type="tel" name="mobile" id="umobile" />
                                            <p className='text-red-500 text-sm'>{formErrors.mobile}</p>
                                        </div>
                                        <div className='w-full text-start'>

                                            <input className={`w-full py-2 pl-4 border-2  ${formErrors.state ? 'border-red-500' : 'border-gray-400'
                                                }`} placeholder='State' onChange={handleChange} type="text" name="state" id="ustate" />
                                            <p className='text-red-500 text-sm'>{formErrors.state}</p>
                                        </div>
                                        <div className='w-full text-start'>

                                            <input className={`w-full py-2 pl-4 border-2  ${formErrors.zipcode ? 'border-red-500' : 'border-gray-400'
                                                }`} placeholder='Zip code' onChange={handleChange} type="number" name="zipcode" id="uzipcode" />
                                            <p className='text-red-500 text-sm'>{formErrors.zipcode}</p>
                                        </div>
                                        <div className='w-full text-start'>

                                            <textarea className={`w-full py-2 pl-4 border-2  ${formErrors.address ? 'border-red-500' : 'border-gray-400'
                                                }`} placeholder='Address' onChange={handleChange} type="textarea" name="address" id="uaddress" />
                                            <p className='text-red-500 text-sm'>{formErrors.address}</p>
                                        </div>
                                    </form>
                                </section>

                            </div>
                        </div>
                        <div className='w-1/3 flex '>
                            <div className='w-full '>
                                <div className=''>
                                    <p className='p-8 text-left text-3xl font-Staatliches'>Your Cart (2)</p>
                                </div>
                                <div className='border-t border-black'>
                                    <p className='p-8 text-sm text-[#F4A73F] text-left font-Poppins'></p>
                                </div>
                                {added_products.map((added) => (
                                    <div key={added.id} className='h-auto pl-8 pb-8 w-auto flex ' >

                                        <img className='w-32 h-32 object-cover' src={added.prod_img} alt="product" />
                                        <div className='pl-8'>
                                            <p className='text-xl font-poppins font-semibold w-full '>{added.title}</p>
                                            <QuantityBox />
                                            <p className='font-Poppins text-left text-gray-400'>${added.price}</p>
                                        </div>
                                    </div>
                                ))}

                                <div className='flex flex-col p-8 border-t border-black gap-y-3 font-poppins'>
                                    <div className='text-start flex justify-between'>
                                        <p>Service fee</p>
                                        <p>$83</p>
                                    </div>
                                    <div className='text-start flex justify-between'>
                                        <p>Taxes and fees</p>
                                        <p>$29</p>
                                    </div>
                                    <div className='text-start flex justify-between'>
                                        <p>Weekly discount</p>
                                        <p>-$28</p>
                                    </div>
                                    <div className='text-start flex justify-between border-y border-black p-3'>
                                        <p>Total</p>
                                        <p>$701</p>
                                    </div>
                                    <input className=' w-full p-3 text-white font-Staatliches  bg-black' type="submit" value="place order    >" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
            <div className='lg:h-0 lg:border-t  border-black lg:flex lg:justify-center lg:items-center' />
            <section className='lg:px-16 lg:relative'>
                <div className='lg:border-x border-black pt-12' />
            </section>


            <Footer />
        </>
    )
}

export default OrderCheckout