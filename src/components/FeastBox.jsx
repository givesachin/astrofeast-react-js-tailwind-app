import React, { useState } from 'react'
import afnonveg from "../assets/afnonveg.avif";
import afshubh from "../assets/shubh.jpeg";
import afrana from "../assets/rana.jpeg";
import afhemanth from "../assets/hemanth.jpeg";
import bullet from "../assets/bullet.png";
import Footer from './Atoms/Footer';
import Header from './Atoms/Header';
import QuantityBox from './Atoms/QuantityBox';
import CTABar from './Atoms/CTABar';

const products =
    [{ id: 0, prod_img: afnonveg, title: 'Fresh Pancakes' },
    { id: 1, prod_img: afnonveg, title: 'Fresh Pancakes' },
    { id: 2, prod_img: afnonveg, title: 'Fresh Pancakes' }]

const added_products =
    [{ id: 0, prod_img: afnonveg, title: 'Fresh Pancakes', price: 249.00 },
    { id: 1, prod_img: afnonveg, title: 'Fresh Pancakes', price: 249.00 }]
const FeastBox = () => {
    const [selectedOption, setSelectedOption] = useState('weekly'); // Default selected option

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    return (
        <section className='w-full h-full font-poppins'>
            <Header />
            <CTABar />
            <section className='px-16 relative'>

                <div className='border-x border-black pt-10'>
                    <div className='w-full h-auto flex border-b border-black'>
                        <div className='w-full flex flex-col border-black py-6 gap-1'>
                            <p className='px-6 text-4xl h-auto font-Staatliches flex items-center justify-start'>build your own feast box</p>
                            <p className='px-6 w-1/2 border-black font-poppins flex flex-col justify-evenly text-start'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        {products.map((product) => (
                            <div key={product.id} className='pl-8 pt-8 pb-8'>
                                <div className='h-96 w-64 flex flex-col border-black border justify-center items-center' >
                                    <img className='w-full object-cover h-72 border-black border-b' src={product.prod_img} alt="product" />
                                    <p className='text-xl font-poppins font-semibold w-full text-center pt-4'>{product.title}</p>
                                    <div className="flex justify-center">
                                        <QuantityBox />
                                    </div>
                                </div>

                            </div>
                        ))}
                        <div className='border-l border-black ml-8 w-full '>
                            <div className=''>
                                <p className='p-8 text-left text-3xl font-Staatliches'>my feast box</p>
                            </div>
                            <div className='border-t border-black'>
                                <p className='p-8 text-sm text-[#F4A73F] text-left font-Poppins'>Add at least 4 more dishes to complete the box.</p>
                            </div>
                            {added_products.map((added) => (
                                <div key={added.id} className='h-auto pl-8 pb-8 w-auto flex ' >

                                    <img className='w-32 h-32 object-cover' src={added.prod_img} alt="product" />
                                    <div className='pl-8'>
                                        <p className='text-xl font-poppins font-semibold w-full '>{added.title}</p>
                                        <QuantityBox />
                                        <p className='font-Poppins text-left text-gray-400'>${added.price}</p>
                                    </div>
                                </div>
                            ))}
                            <div className=''>
                                <p className='p-8 text-left text-3xl font-Staatliches border-y border-black'>subscribe</p>
                            </div>
                            <div className="flex justify-center items-center border border-black m-8 p-2">
                                <button
                                    className={`px-4 py-2 space-x-10 text-black ${selectedOption === 'weekly' ? 'bg-[#BDC695]' : 'bg-white'
                                        }`}
                                    onClick={() => handleOptionChange('weekly')}
                                >
                                    Weekly
                                </button>
                                <button
                                    className={`px-4 py-2 text-black ${selectedOption === 'bi-weekly' ? 'bg-[#BDC695]' : 'bg-white'
                                        }`}
                                    onClick={() => handleOptionChange('bi-weekly')}
                                >
                                    Bi-Weekly
                                </button>
                                <button
                                    className={`px-4 py-2 text-black ${selectedOption === 'monthly' ? 'bg-[#BDC695]' : 'bg-white'
                                        }`}
                                    onClick={() => handleOptionChange('monthly')}
                                >
                                    Monthly
                                </button>
                            </div>
                            <div className='border-b border-black m-6 pb-5'>
                                <div className='flex pb-5 gap-5'>
                                    <img src={bullet} alt='bullet' />
                                    <p>Flat 5% off on all subscriptions</p>
                                </div>
                                <div className='flex gap-5'>
                                    <img src={bullet} alt='bullet' />
                                    <p>Pause, cancel, modify — anytime</p>
                                </div>
                            </div>
                            <div className='px-8'>
                                <div className=''>
                                    <p className='text-left text-gray-900'>Select Quantity:</p>
                                </div>
                                <div className='flex '>
                                    <QuantityBox />
                                    <p className='text-center self-center text-4xl font-Staatliches'>$350.00</p>

                                </div>
                                <input className=' w-full p-3 text-white font-Staatliches  bg-black' type="submit" value="add to stash    >" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='h-0 border-t  border-black flex justify-center items-center' />
            <section className='px-16 relative'>
                <div className='border-x border-black pt-12 mb-16' />
            </section>


            <Footer />
        </section >
    )
}

export default FeastBox