import React from 'react'
import Header from './Atoms/Header'
import Footer from './Atoms/Footer'
import ProductContainer from './Atoms/ProductContainer'
import afherobg from "../assets/herobg.png";
const bestseller = [
    {
        id: 0,
        Image: afherobg,
        p_name: 'Carrots',
        Price: '$250',
    },
    {
        id: 1,
        Image: afherobg,
        p_name: 'Broccoli',
        Price: '$250',
    },
    {
        id: 2,
        Image: afherobg,
        p_name: 'Spinach',
        Price: '$250',
    },
    {
        id: 3,
        Image: afherobg,
        p_name: 'Tomatoes',
        Price: '$250',
    }

];

const Shop = () => {
    return (
        <div>
            <Header />
            {/* <section className='w-screen h-auto'>
                <p className='font-Staatliches text-5xl '>eat what you want</p>
            </section> */}
            <section className='px-16 relative'>
                {/* container */}
                <div className='border-x border-black pt-10'>
                    {/* headline */}
                    <hr className='w-screen border border-black absolute left-0' />
                    <div className='w-full py-9 px-8 border-b border-black'>
                        <p className='font-Staatliches text-5xl w-full text-left'>eat what you want</p>
                    </div>
                    <ProductContainer pitem={bestseller} containerHeader='Best Sellers' />
                    <ProductContainer pitem={bestseller} containerHeader='seafood' />
                    <ProductContainer pitem={bestseller} containerHeader='meat' />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Shop