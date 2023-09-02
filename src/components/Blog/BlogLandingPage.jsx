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
        axios.request(options).then(function (response) {
            console.log(response.data);
            setProducts(response.data)
        });
        // axios.get('').then(function (response) {
        //     console.log(response.data);
        //     setProducts(response.data)
        // })
    }
    return (
        <section className='w-full h-full font-poppins'>
            <Header />
            <CTABar />
            <section className='px-16 relative'>
                <div className='w-full border-x border-black pt-10'>
                    <div className='w-full'>
                        <p className='text-5xl h-auto p-8 font-Staatliches flex items-center justify-start'>BLOGS</p>
                        {/* <p className='px-6 border-black font-poppins flex flex-col justify-evenly text-start'>CHECK OUT RECIPES!</p> */}

                    </div>
                    <div className='p-8 flex border-t border-black gap-10'>
                        <div className='w-1/2 h-1/2 '>
                            <img className='' src={blog1} alt="blog1" />
                        </div>
                        <div className='w-1/2 h-1/2 place-self-center gap-20'>
                            <p className='font-poppins font-bold text-left text-2xl leading-10'> Latest Article</p>
                            <p className='font-poppins text-left pr-16'>In a small bowl, combine yogurt, lemon juice, garlic, remaining Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <input className='mt-3 flex px-6 py-3 text-white font-Staatliches bg-black object-start' type="submit" value="read now     >" />

                        </div>
                    </div>

                </div>
                <div className='w-full border-x border-black pt-10'>
                    <div className='w-full border-t border-black'>
                        <p className='text-5xl h-auto p-8 font-Staatliches flex items-center justify-start'>feature section</p>
                    </div>
                    <div className='flex border-t border-b border-black gap-10'>
                        <div className='w-1/2 h-1/2 '>
                            <img className='' src={blog2} alt="blog1" />
                        </div>
                        <div className='w-1/2 h-1/2 place-self-center gap-20'>
                            <p className='font-poppins font-bold text-left text-2xl leading-10'> Organic. Fresh. Frozen.</p>
                            <p className='font-poppins text-left pr-16'>In a small bowl, combine yogurt, lemon juice, garlic, remaining Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.  </p>
                            <input className='mt-3 flex px-6 py-3 text-white font-Staatliches bg-black object-start' type="submit" value="read now     >" />

                        </div>
                    </div>

                </div>
                <div className='w-full border-x border-black'>
                    <div className='flex border-t border-b border-black gap-16'>
                        <div className='w-1/2 h-1/2 place-self-center gap-20 m-10'>
                            <p className='font-poppins font-bold text-left text-2xl leading-10'> Passionate about baking</p>
                            <p className='font-poppins text-left pr-16'>In a small bowl, combine yogurt, lemon juice, garlic, remaining Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <input className='mt-3 flex px-6 py-3 text-white font-Staatliches bg-black object-start' type="submit" value="read now     >" />

                        </div>
                        <div className='w-1/2 h-1/2 '>
                            <img className='' src={blog3} alt="blog1" />
                        </div>
                    </div>
                </div>
                <div className='w-full border-x border-black'>
                    <div className='p-6 flex justify-between'>
                        <p className='font-Staatliches font-semi-bold text-left text-3xl'>stories that have been read the most</p>
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
            <div className='h-0 border-t  border-black flex justify-center items-center' />
            <section className='px-16 relative'>
                <div className='border-x border-black pt-12' />
            </section>


            <Footer />
        </section >
    )
}

export default BlogLandingPage