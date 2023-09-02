import React, { useState } from 'react'

import Footer from '../Atoms/Footer';
import Header from '../Atoms/Header';

import user from "../../assets/user.jpg";
import pencil from "../../assets/pencil-2-xxl.png";
import AccountNavbar from '../Account/AccountNavbar';

import gt1 from "../../assets/gt1.png";
import gt2 from "../../assets/gt2.png";
import gt3 from "../../assets/gt3.png";

const GoldenTicket = () => {
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
                        <p className='px-6 text-4xl h-auto font-Staatliches flex items-center justify-start'>GOLDEN TICKET</p>
                        <p className='px-6 border-black font-poppins flex flex-col justify-evenly text-start'>Buy any 5 products and activate subscription benefits for the entire year</p>

                    </div>
                </div>
                <div className='flex px-6 py-6 flex-column w-full h-full border-t border-x border-black justify-between gap-5'>
                    <div className='w-full align-left'>
                        <p className='text-xl h-auto font-poppins font-semibold flex justify-start'>
                            What are tickets?
                        </p><br />
                        <p className=' pr-48 font-poppins flex text-left text-justify'>
                            Tickets, just like loyalty programs and subscriptions enable extra benefits, including offline experiences, exclusive content on your account and a whole lot more as you’re part of the crew.<br /><br />
                            They are set in stone and are designed for you, and we can’t modify or cancel them out of the blue..
                        </p><br />
                        <input className='flex px-6 py-3 text-white font-Staatliches bg-black object-start' type="submit" value="view golden ticket" />
                    </div>
                    <div className='w-36 h-96 align-right bg-slate-50'>
                        <img className='p-3' src={gt1} alt="gt1" />
                        <img className='p-3' src={gt2} alt="gt2" />
                        <img className='p-3' src={gt3} alt="gt3" />
                    </div>
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

export default GoldenTicket