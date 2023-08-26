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
                        <p className='px-6 text-4xl h-auto font-Staatliches flex items-center justify-start'>subscriptions</p>
                        <p className='px-6 border-black font-poppins flex flex-col justify-evenly text-start'>Flat 3% off on all orders for that year.</p>

                    </div>
                    <div>
                        <input className='flex py-6 px-6 text-[#F4A73F] font-Staatliches' type="submit" value="Add subscription" />
                    </div>
                </div>
                <div className='flex px-6 py-6 flex-column w-full h-full border-t border-x border-black justify-between gap-5'>
                    <div>
                        <p className=' text-2xl h-auto font-Staatliches flex items-center justify-start'>subscription #{data.subscriptionNumber}</p>
                        <p className='text-sm font-poppins justify-start flex'>Salmon Tikka</p>
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

            </section>
            <Footer />
        </section >

    )
}

export default Subscriptions