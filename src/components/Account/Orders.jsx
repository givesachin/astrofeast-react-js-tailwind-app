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
            {/* <div className='relative w-[65px] h-[65px] border-r border-b border-black ' ></div>
            <div className='relative w-[65px] h-[65px] relative border-l border-b border-black left-[1635px] bottom-[65px]' ></div> */}
            <div className='flex justify-between'>
                <div className="flex w-16 h-16 border-r border-black"></div>
                <div className="flex w-16 h-16 border-l border-black place-self-end"></div>
            </div>
            <section className='px-16  border-t border-black'>
                <AccountNavbar />
                <div className='w-full border-t h-auto flex border-x border-black'>
                    <div className='w-full flex flex-col border-black py-6 gap-1'>
                        <p className='px-6 text-4xl h-auto font-Staatliches flex items-center justify-start'>orders</p>
                        <p className='px-6 border-black font-poppins flex flex-col justify-evenly text-start'>Check previous orders. Track your current orders.</p>

                    </div>
                    <div>
                        <input className='flex py-6 px-6 text-[#F4A73F] font-Staatliches' type="submit" value="reedem code" />
                    </div>
                </div>
                <div className=' px-6 py-6 flex-column w-full h-full border-t border-x border-black justify-between gap-5'>
                    {data.map((item, index) => (
                        <div className='flex px-6 py-6 flex-column w-full h-full border-t border-black justify-between gap-5'>
                            <div>
                                <p className=' text-2xl h-auto font-Staatliches flex items-center justify-start'>order #{item.order_number}</p>
                                <p className='text-sm font-poppins justify-start flex'>No of meals: {item.no_of_meals}</p>
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
                        </div>))}
                </div>

            </section>
            <div className='h-0 border-t  border-black flex justify-center items-center' />
            <section className='px-16 relative'>
                <div className='border-x border-black pt-12' />
            </section>
            <Footer />
        </section >

    )
}

export default Orders