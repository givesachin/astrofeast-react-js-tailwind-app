import React, { useEffect, useState } from 'react'
import Footer from '../Atoms/Footer';
import Header from '../Atoms/Header';
import blog1 from '../../assets/Blog/blog1.png'
import blog2 from '../../assets/Blog/blog2.png'
import blog3 from '../../assets/Blog/blog3.png'
import axios from 'axios';
import CTABar from '../Atoms/CTABar';

const options = {
    method: 'GET',
    url: 'https://the-mexican-food-db.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Key': '25ad220f10msh8efa45310a070c6p1a029cjsn3a6be4c1eca8',
        'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
    }
};
const BlogLandingPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => { getProducts(); }, []);
    function getProducts() {
        // axios.request(options).then(function (response) {
        //     console.log(response.data);
        //     setProducts(response.data)
        // });
        // axios.get('').then(function (response) {
        //     console.log(response.data);
        //     setProducts(response.data)
        // })
    }
    return (
        <section className='w-full h-full font-poppins'>
            <Header />
            <CTABar />
            <section className='lg:px-16 relative'>
                <div className='w-full lg:border-x border-black pt-2 lg:pt-8'>
                    <div className='w-full'>
                        <p className='fs_w400_s60 h-auto p-8 flex items-center justify-start'>BLOGS</p>
                        {/* <p className='px-6 border-black font-poppins flex flex-col justify-evenly text-start'>CHECK OUT RECIPES!</p> */}

                    </div>
                    <div className='p-8 flex flex-col lg:flex-row border-t border-black gap-10 items-center'>
                        <div className='lg:w-1/2 lg:h-1/2 '>
                            <img className='' src={blog1} alt="blog1" />
                        </div>
                        <div className='lg:w-1/2 lg:h-1/2 place-self-center gap-20'>
                            <p className='font-poppins font-bold text-left text-2xl leading-10'> Latest Article</p>
                            <p className='mt-6 lg:mt-3 font-poppins text-left pr-16'>In a small bowl, combine yogurt, lemon juice, garlic, remaining Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <input className='mt-6 lg:mt-3 flex px-6 py-3 text-white font-Staatliches bg-black object-start' type="submit" value="read now     >" />

                        </div>
                    </div>

                </div>
                <div className='w-full lg:border-x border-black lg:pt-10'>
                    <div className='w-full border-t border-black'>
                        <p className='fs_w400_s48 h-auto p-8 flex items-center justify-start'>feature section</p>
                    </div>
                    <div className='flex flex-col lg:flex-row border-t lg:border-b border-black gap-10'>
                        <div className='lg:w-1/2 lg:h-1/2  '>
                            <img className='w-full' src={blog2} alt="blog1" />
                        </div>
                        <div className='pl-8 lg:w-1/2 lg:h-1/2 place-self-center gap-20'>
                            <p className='font-poppins font-bold text-left text-2xl leading-10'> Organic. Fresh. Frozen.</p>
                            <p className='mt-6 lg:mt-3 font-poppins text-left pr-16'>In a small bowl, combine yogurt, lemon juice, garlic, remaining Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.  </p>
                            <input className='mt-6 lg:mt-3 flex px-6 py-3 text-white font-Staatliches bg-black object-start' type="submit" value="read now     >" />
                        </div>
                    </div>

                </div>
                <div className='w-full lg:border-x border-black pt-6 lg:pt-0'>
                    <div className='flex flex-col lg:flex-row border-b border-t border-black lg:gap-16'>
                        <div className='lg:w-1/2 lg:h-1/2 place-self-center gap-20 ml-6 my-6 lg:m-10 order-2 lg:order-1'>
                            <p className='font-poppins font-bold text-left text-2xl leading-10'> Passionate about baking</p>
                            <p className='font-poppins text-left pr-16'>In a small bowl, combine yogurt, lemon juice, garlic, remaining Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <input className='mt-3 flex px-6 py-3 text-white font-Staatliches bg-black object-start' type="submit" value="read now     >" />

                        </div>
                        <div className='lg:w-1/2 lg:h-1/2 order-1 lg:order-2'>
                            <img className='w-full' src={blog3} alt="blog1" />
                        </div>
                    </div>
                </div>
                <div className='w-full lg:border-x border-black'>
                    <div className='p-6 flex justify-between'>
                        <p className='text-3xl font-Staatliches lg:fs_w400_s48 font-semi-bold text-left'>stories that have been read the most</p>
                        <input className='  text-3xl font-Staatliches ' type="submit" value="view all     >" />
                    </div>
                    {/* <div>
                        <img></img>
                        <p></p>
                    </div> */}
                    <div className=' flex gap-x-8 flex-nowrap p-6 border-t border-black '>
                        {products.slice(0, 4).map((item, index) =>
                        (<div key={index} className='flex flex-col border-black border'>
                            <img className='border-b border-black w-80 h-80 object-cover' src={item.image} />
                            {/* <img className='border-black border-b object-cover' src={item.image} alt="product" /> */}
                            <div className='w-full font-poppins font-semi-bold h-auto flex items-end justify-center py-5'>
                                <p className='text-lg w-full font-medium'>{(item.title).substring(0, (item.title).indexOf(' '))}</p>
                            </div>
                        </div>))}

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

export default BlogLandingPage