import React, { useState } from 'react'
import Footer from '../Atoms/Footer';
import Header from '../Atoms/Header';
import AccountNavbar from './AccountNavbar';

const data = {
    "subscriptionNumber": "12345567",
    "item": "Salmon Tikka",
    "nextDeliveryDate": "Dec 14, 2022",
    "shippingAddress": "N-3/40, DLF Phase 2, Gurgaon 122002",
    "savingsAmount": "100"
}
const Subscriptions = () => {

    return (
        <section >
            <Header />
            <section className='hidden lg:block lg:px-16 lg:relative'>
                <div className='lg:border-x border-black pt-12' />
            </section>
            <section className='lg:px-16  border-t border-black'>
                <AccountNavbar />
                <div className='w-full border-t h-auto flex lg:border-x border-black'>
                    <div className='w-full flex flex-col border-black py-6 gap-1'>
                        <p className='px-6 h-auto fs_w400_s48 flex items-center justify-start'>subscriptions</p>
                        <p className='px-6 border-black font-poppins flex flex-col justify-evenly text-start'>Flat 3% off on all orders for that year.</p>

                    </div>
                    <div>
                        <input className='flex py-6 px-6 text-[#F4A73F] font-Staatliches' type="submit" value="Add subscription" />
                    </div>
                </div>
                <div className='hidden lg:flex lg:px-6 lg:py-6 lg:flex-column lg:w-full lg:h-full lg:border-t lg:border-x lg:border-black lg:justify-between lg:gap-5'>
                    <div>
                        <p className=' text-2xl h-auto font-Staatliches flex items-center justify-start'>subscription #{data.subscriptionNumber}</p>
                        <p className='text-sm font-poppins justify-start flex font-medium'>Salmon Tikka</p>
                    </div>
                    <div >
                        <p className='text-xs font-poppins justify-start flex'>Next Delivery on</p>
                        <p className='text-sm font-semibold font-poppins justify-start flex pt-2'>{data.nextDeliveryDate}</p>

                    </div>
                    <div>
                        <p className='text-xs font-poppins justify-start flex'> Shipped to</p>
                        <p className='text-sm font-semibold font-poppins justify-start flex pt-2'>{data.shippingAddress}</p>
                    </div>
                    <div>
                        <p className='w-28 text-xs font-semibold text-[#10B981] font-poppins p-2'>You’ve saved ₹{data.savingsAmount}/- so far!</p>
                    </div>
                    <div>
                        <input className='flex px-6 py-3 text-white font-Staatliches bg-black object-start' type="submit" value="modify" />
                    </div>
                </div>
                <div className='lg:hidden flex px-6 py-6 flex-col w-full h-full border-t  border-black justify-between gap-5'>

                    <div className='flex justify-between'>
                        <div>
                            <p className=' text-2xl h-auto font-Staatliches flex items-center justify-start'>subscription #{data.subscriptionNumber}</p>
                            <p className='text-sm font-poppins justify-start flex font-medium'>Salmon Tikka</p>
                        </div>
                        <div>
                            <input className='flex px-6 py-3 text-white font-Staatliches bg-black object-start' type="submit" value="modify" />
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <div >
                            <p className='text-xs font-poppins justify-start flex'>Next Delivery on</p>
                            <p className='text-sm font-semibold font-poppins justify-start flex pt-2'>{data.nextDeliveryDate}</p>

                        </div>
                        <div>
                            <p className='text-xs font-poppins justify-start flex'> Shipped to</p>
                            <p className='text-sm font-semibold font-poppins justify-start flex pt-2'>{data.shippingAddress}</p>
                        </div>
                        <div>
                            <p className='w-28 text-xs font-semibold text-[#10B981] font-poppins p-2'>You’ve saved ₹{data.savingsAmount}/- so far!</p>
                        </div>
                    </div>
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

export default Subscriptions