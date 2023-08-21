import React from 'react'
import Header from './Atoms/Header'
import Footer from './Atoms/Footer'
import { NavLink } from 'react-router-dom'

const Sitemap = () => {
    return (
        <div>
            <Header />
            <section className='w-screen h-auto flex  justify-center px-4  py-16 gap-16 items-center'>
                <NavLink to="/"><h1 className='text-xl font-bold capitalize'>Home</h1></NavLink>
                <NavLink to="/about"><h1 className='text-xl font-bold capitalize'>about</h1></NavLink>
                <NavLink to="/shop"><h1 className='text-xl font-bold capitalize'>shop</h1></NavLink>
            </section>
            <Footer />
        </div>
    )
}

export default Sitemap