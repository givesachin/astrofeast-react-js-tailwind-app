import React from 'react'
import Header from './Atoms/Header'
import Footer from './Atoms/Footer'
import ProductContainer from './Atoms/ProductContainer'
import afherobg from "../assets/herobg.png";


const CategoryDetail = () => {
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
            {
                id: 4,
                Image: afherobg,
                p_name: 'Lamb Chops',
                Price: '$25',
            },
            {
                id: 5,
                Image: afherobg,
                p_name: 'Lamb Chops',
                Price: '$25',
            },
            // Add more meat products as needed
        ],
    }
    return (
        <>
            <Header />
            <section className='px-16 relative'>
                {/* container */}
                <div className='border-x border-black pt-10'>
                    {/* headline */}
                    <hr className='w-full border-black absolute left-0' />
                    <div className='w-full flex flex-col justify-start items-start gap-y-4 py-9 px-8 '>
                        <div className='flex justify-between w-auto gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M21.877 2.28564L8.16267 15.9999L21.877 29.7142" stroke="#F4A73F" strokeWidth="2.61225" />
                            </svg>
                            <p className=' text-yellow w-auto font-Staatliches text-2xl font-normal uppercase'>back to SHOP</p>
                        </div>
                        <p className='font-Staatliches text-5xl text-left'>eat what you want</p>
                    </div>
                    <div className='flex'>
                        <div className=' w-auto border-t border-r border-black p-8'>
                            <div className='flex justify-between gap-x-7 items-center'>
                                <h2 className='font-Staatliches text-4xl'>filters</h2>
                                <div className='font-Staatliches w-full text-xl flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <g clip-path="url(#clip0_2591_4720)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00028 10.3852L14.0576 16.4426L15.943 14.5572L9.88562 8.49989L15.943 2.44255L14.0576 0.55722L8.00028 6.61322L1.94295 0.55722L0.0576172 2.44255L6.11495 8.49989L0.0576172 14.5572L1.94295 16.4426L8.00028 10.3852Z" fill="#030712" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2591_4720">
                                                <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className=''>Clear ALL</p>
                                </div>
                            </div>
                        </div>
                        <ProductContainer cardcontainer='flex-wrap' pitem={bestseller.meat} />

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default CategoryDetail