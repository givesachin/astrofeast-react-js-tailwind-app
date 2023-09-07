import React, { useState } from 'react'
import Footer from '../Atoms/Footer';
import Header from '../Atoms/Header';
import AccountNavbar from './AccountNavbar';

const data = [
    {
        "order_number": "12345",
        "no_of_meals": "10",
        "status": "Shipped",
        "shipped_to": "India gate, Delhi",
        "order_date": "Dec 14, 2022"
    },
    {
        "order_number": "12345",
        "no_of_meals": "10",
        "status": "Shipped",
        "shipped_to": "India gate, Delhi",
        "order_date": "Dec 14, 2022"
    },
    {
        "order_number": "12345",
        "no_of_meals": "10",
        "status": "Shipped",
        "shipped_to": "India gate, Delhi",
        "order_date": "Dec 14, 2022"
    }
]
const Orders = () => {

    return (
        <section >
            <Header />
            <section className='hidden lg:block lg:px-16 lg:relative'>
                <div className='border-x border-black pt-12' />
            </section>
            <section className='lg:px-16  border-t border-black'>
                <AccountNavbar />
                <div className='w-full border-t h-auto flex lg:border-x border-black'>
                    <div className='w-full flex flex-col border-black py-6 gap-1'>
                        <p className='px-6 h-auto fs_w400_s48 flex items-center justify-start'>orders</p>
                        <p className='px-6 border-black font-poppins flex flex-col justify-evenly text-start'>Check previous orders. Track your current orders.</p>

                    </div>
                    <div>
                        <input className='flex py-6 px-6 text-[#F4A73F] font-Staatliches' type="submit" value="reedem code" />
                    </div>
                </div>
                <div className='hidden lg:block lg:px-6 lg:py-3 lg:flex-column lg:w-full lg:h-full lg:border-t lg:border-x lg:border-black lg:justify-between lg:gap-5'>
                    {data.map((item, index) => (
                        <div key={index} className='flex flex-col'>
                            <div className='flex px-6 py-6 flex-row w-full h-full border-black justify-between gap-5'>
                                <div>
                                    <p className=' text-2xl h-auto font-Staatliches flex items-center justify-start'>order #{item.order_number}</p>
                                    <p className='text-sm font-poppins font-medium justify-start flex'>No of meals: {item.no_of_meals}</p>
                                </div>
                                <div >
                                    <p className='text-xs font-poppins justify-start flex'>Status</p>
                                    <p className='text-sm font-semibold font-poppins justify-start flex pt-2'>{item.status}</p>

                                </div>
                                <div>
                                    <p className='text-xs font-poppins justify-start flex'> Shipped to</p>
                                    <p className='text-sm font-semibold font-poppins justify-start flex pt-2'>{item.shipped_to}</p>
                                </div>
                                <div>
                                    <p className='text-xs font-poppins justify-start flex'>Order Date</p>
                                    <p className='text-sm font-semibold font-poppins justify-start flex pt-2'>{item.order_date}</p>
                                </div>

                                <div>
                                    <input className='flex px-6 py-3 text-white font-Staatliches bg-black object-start' type="submit" value="track order" />
                                </div>
                            </div>

                            {index !== data.length - 1 && (
                                <div className='flex '>
                                    <hr className='w-full border-t border-black' />
                                </div>
                            )}
                        </div>
                    ))}

                </div>
                <div className='lg:hidden block px-6 py-3 flex-column w-full h-full border-t border-black justify-between gap-5'>
                    {data.map((item, index) => (
                        <div key={index} className='flex flex-col'>
                            <div className='flex px-6 py-6 flex-col w-full h-full border-black justify-between gap-5'>
                                <div className='flex justify-between'>
                                    <div>
                                        <p className=' text-2xl h-auto font-Staatliches flex items-center justify-start'>order #{item.order_number}</p>
                                        <p className='text-sm font-medium font-poppins justify-start flex'>No of meals: {item.no_of_meals}</p>
                                    </div>
                                    <div>
                                        <input className='flex px-6 py-3 text-white font-Staatliches bg-black object-start' type="submit" value="track order" />
                                    </div>

                                </div>

                                <div className='flex justify-between w-3/4'>
                                    <div className='' >
                                        <p className='text-xs font-poppins justify-start flex'>Status</p>
                                        <p className='text-sm font-semibold font-poppins justify-start flex pt-2'>{item.status}</p>

                                    </div>
                                    <div className='' >
                                        <p className='text-xs font-poppins justify-start flex'> Shipped to</p>
                                        <p className='text-sm font-semibold font-poppins justify-start flex pt-2'>{item.shipped_to}</p>
                                    </div>
                                    <div className='' >
                                        <p className='text-xs font-poppins justify-start flex'>Order Date</p>
                                        <p className='text-sm font-semibold font-poppins justify-start flex pt-2'>{item.order_date}</p>
                                    </div>
                                </div>

                            </div>

                            {index !== data.length - 1 && (
                                <div className='flex '>
                                    <hr className='w-full border-t border-black' />
                                </div>
                            )}
                        </div>
                    ))}

                </div>

            </section>
            <div className='h-0 lg:border-t  border-black flex justify-center items-center' />
            <section className='hidden  lg:block lg:px-16 lg:relative'>
                <div className='lg:border-x border-black pt-12' />
            </section>
            <Footer />
        </section >

    )
}

export default Orders