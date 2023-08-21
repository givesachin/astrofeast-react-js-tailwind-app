import React from 'react'
import Header from './Atoms/Header'
import Footer from './Atoms/Footer'
import ProductContainer from './Atoms/ProductContainer'
import afherobg from "../assets/herobg.png";
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
        // Add more meat products as needed
    ],
    seafood: [
        {
            id: 0,
            Image: afherobg,
            p_name: 'Salmon',
            Price: '$15',
        },
        {
            id: 1,
            Image: afherobg,
            p_name: 'Shrimp',
            Price: '$12',
        },
        {
            id: 2,
            Image: afherobg,
            p_name: 'Tuna',
            Price: '$18',
        },
        {
            id: 3,
            Image: afherobg,
            p_name: 'Lobster',
            Price: '$30',
        },
        // Add more seafood products as needed
    ],
    veggies: [
        {
            id: 0,
            Image: afherobg,
            p_name: 'Carrots',
            Price: '$2',
        },
        {
            id: 1,
            Image: afherobg,
            p_name: 'Broccoli',
            Price: '$3',
        },
        {
            id: 2,
            Image: afherobg,
            p_name: 'Spinach',
            Price: '$2.5',
        },
        {
            id: 3,
            Image: afherobg,
            p_name: 'Tomatoes',
            Price: '$2',
        },
        // Add more vegetable products as needed
    ]
};


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
                    <hr className='w-screen  border-black absolute left-0' />
                    <div className='w-full py-9 px-8 '>
                        <p className='font-Staatliches text-5xl w-full text-left'>eat what you want</p>
                    </div>
                    <ProductContainer pitem={bestseller.veggies} containerHeader='Best Sellers' />
                    <ProductContainer pitem={bestseller.seafood}containerHeader='seafood' />
                    <ProductContainer pitem={bestseller.meat} containerHeader='meat' />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Shop