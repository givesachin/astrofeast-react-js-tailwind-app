import React, { useState } from 'react'
import afclose from "../../assets/close.svg";
import afsearch from "../../assets/search.svg";
import afuser from "../../assets/afuser.svg";
import afbag from "../../assets/afbag.png";
import { NavLink } from "react-router-dom";

const AccountNavbar = () => {

    return (
        <section className=''>

            <div className='flex w-full p-6 text-start text-2xl space-x-7 lg:border-x border-black relative ' >
                <NavLink to="/orders"><p className='uppercase text-[#838282]  w-full font-Staatliches hover:underline hover:decoration-4 hover:text-black hover: underline-offset-[22px]'>orders</p></NavLink>
                <NavLink to="/subscriptions"> <p className='uppercase text-[#838282]  w-full font-Staatliches hover:underline hover:decoration-4 hover:text-black hover: underline-offset-[22px]'>subscriptions</p></NavLink>
                <NavLink to="/golden-ticket"> <p className='uppercase text-[#838282]  w-full font-Staatliches  hover:underline hover:decoration-4 hover:text-black hover: underline-offset-[22px]'>golden ticket</p></NavLink>
                <NavLink to="/my-account"> <p className='uppercase text-[#838282]  w-full font-Staatliches hover:underline hover:decoration-4 hover:text-black hover: underline-offset-[22px]'>account</p></NavLink>
            </div>

        </section >
    )
}

export default AccountNavbar