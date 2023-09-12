import React, { useState } from 'react'
import afclose from "../../assets/close.svg";
import afsearch from "../../assets/search.svg";
import afuser from "../../assets/afuser.svg";
import afbag from "../../assets/afbag.png";
import { NavLink } from "react-router-dom";

const AccountNavbar = () => {
    const click = 'uppercase flex-shrink-0  w-full font-Staatliches underline decoration-4 text-black  underline-offset-[22px]'
    const hover = 'uppercase text-[#838282]  flex-shrink-0  w-full font-Staatliches hover:underline hover:decoration-4 hover:text-black hover: underline-offset-[22px]'
    return (
        <section className=''>

            <div className='flex overflow-auto md:overflow-visible flex-nowrap w-full p-6 text-start text-2xl space-x-7 lg:border-x border-black relative ' >
                <div className='flex flex-shrink-0 md:flex-shrink-1'>
                    <NavLink to="/orders" className={({ isActive }) =>
                        isActive ? click : hover
                    }>orders</NavLink>

                </div>
                <div className='flex flex-shrink-0 md:flex-shrink-1'>
                    <NavLink to="/subscriptions" className={({ isActive }) =>
                        isActive ? click : hover
                    }> subscriptions</NavLink>

                </div>
                <div className='flex flex-shrink-0 md:flex-shrink-1'>
                    <NavLink to="/golden-ticket" className={({ isActive }) =>
                        isActive ? click : hover
                    }> golden ticket</NavLink>

                </div>
                <div className='flex flex-shrink-0 md:flex-shrink-1'>
                    <NavLink to="/my-account" className={({ isActive }) =>
                        isActive ? click : hover
                    }>account</NavLink>

                </div>

            </div>

        </section >
    )
}

export default AccountNavbar