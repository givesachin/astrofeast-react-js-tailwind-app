import React, { useEffect, useState } from 'react'
import Footer from '../Atoms/Footer';
import Header from '../Atoms/Header';
import blog4 from '../../assets/Blog/blog4.png'
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
const recipe = {
    id: 0,
    recipe_image: blog4,
    created_by: 'John Smith',
    image_created_by: blog4,
    recipe_title: 'Beef Burger and kebabs',
    recipe_desc:
        'In a small bowl, combine yogurt, lemon juice, garlic, remaining Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    serves: '3',
    prep_time: '45 min',
    preparation: 'Heat the olive oil in a frying pan, add the onion and cook for 5 minutes until softened and starting to turn golden. Set aside.In a bowl, combine the beef mince with the herbs and the egg. Season, add the onions and mix well. Using your hands, shape into 4 patties.Cook the burgers on a preheated barbecue or griddle for 5-6 minutes on each side. While the second side is cooking, lay a slice of cheese on top to melt slightly (if using).Lay burgers on an oiled barbecue grill over a solid bed of hot coals or high heat on a gas grill (you can hold your hand at grill level only 2 to 3 seconds); close lid on gas grill. Cook burgers, turning once, until browned on both sides and no longer pink inside (cut to test), 7 to 8 minutes total. Remove from grillMeanwhile, lightly toast the cut-sides of the buns on the barbecue. Fill with the lettuce, burgers and tomato slices. Serve with ketchup, if you like.Meanwhile, lightly toast the cut-sides of the buns on the barbecue. Fill with the lettuce, burgers and tomato slices. Serve with ketchup, if you like.',
    ingredients: '1 lb. Beyond Beef 16 cherry tomatoes 2 small zucchini, each cut into 8(½- inch) slices 2 small yellow squash, each cut into 8(½-inch) slices 1 medium orange bell pepper, cut into 16 pieces 1 tbsp olive oil ¾ tsp kosher salt, divided ¾ tsp black pepper, divided  1 large red onion ½ cup chopped fresh cilantro, leaves and stems  1¼ tsp ground cumin, divided ½ cup plain fat - free Greek yogurt 1 tbsp fresh lemon juice 1 small garlic clove, grated Cooking spray'
}
const Recipe = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => { getProducts(); }, []);
    function getProducts() {
        // axios.request(options).then(function (response) {
        //     console.log(response.data);
        //     setProducts(response.data)
        // });

    }
    return (
        <section className='w-full h-full font-poppins'>
            <Header />
            <CTABar />

            <section className='lg:px-16 relative'>
                <div className='w-full lg:border-x border-black lg:pt-10'>
                    <div className='w-full'>
                        <p className='fs_w400_s60 h-auto p-8 flex items-center justify-start'>recipes</p>
                        {/* <p className='px-6 border-black font-poppins flex flex-col justify-evenly text-start'>CHECK OUT RECIPES!</p> */}

                    </div>
                    <div className='p-8 flex flex-col lg:flex-row border-t border-black gap-10'>
                        <div className='lg:w-1/2 lg:h-1/2 '>
                            <img className='w-full' src={blog4} alt="recipe pic" />
                        </div>
                        <div className='lg:w-1/2 lg:h-1/2 place-self-center gap-20'>
                            <div className=''>
                                <p className='font-poppins text-left text-sm text-gray-600 pb-2'>Created By</p>
                                <div className='flex gap-3'>
                                    <img className='h-8 w-8 rounded-full flex' src={blog4} alt="profile pic" />
                                    <p className='flex text-lg font-poppins font-semibold self-center'>John Smith </p>
                                </div>
                            </div>
                            <p className='font-poppins font-semibold text-left text-2xl leading-10 pt-10'> Beef Burger and kebabs</p>
                            <p className='font-poppins text-left pr-16'>In a small bowl, combine yogurt, lemon juice, garlic, remaining Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <div className='flex pt-10 gap-10'>
                                <div>
                                    <p className='font-poppins text-left text-sm text-gray-600 pb-2'>Serves</p>
                                    <p className='flex text-lg font-poppins font-semibold self-center'>3</p>
                                </div>
                                <div>
                                    <p className='font-poppins text-left text-sm text-gray-600 pb-2'>Prep Time</p>
                                    <p className='flex text-lg font-poppins font-semibold self-center'>45 mins</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row  border-black'>
                        <div className='flex flex-col lg:w-1/2 '>
                            <div className=''>
                                <p className='fs_w400_s48 h-auto pl-8 py-3 flex items-center justify-start border-y lg:border-r  border-black bg-slate-50'>preparation</p>
                            </div>
                            <div className='lg:border-r h-full border-black  '>
                                <p className='text-sm h-auto pl-8 py-3 font-poppins flex items-center text-left justify-start  pr-20'>Heat the olive oil in a frying pan, add the onion and cook for 5 minutes until softened and starting to turn golden. Set aside.In a bowl, combine the beef mince with the herbs and the egg. Season, add the onions and mix well. Using your hands, shape into 4 patties.Cook the burgers on a preheated barbecue or griddle for 5-6 minutes on each side. While the second side is cooking, lay a slice of cheese on top to melt slightly (if using).Lay burgers on an oiled barbecue grill over a solid bed of hot coals or high heat on a gas grill (you can hold your hand at grill level only 2 to 3 seconds); close lid on gas grill. Cook burgers, turning once, until browned on both sides and no longer pink inside (cut to test), 7 to 8 minutes total. Remove from grillMeanwhile, lightly toast the cut-sides of the buns on the barbecue. Fill with the lettuce, burgers and tomato slices. Serve with ketchup, if you like.Meanwhile, lightly toast the cut-sides of the buns on the barbecue. Fill with the lettuce, burgers and tomato slices. Serve with ketchup, if you like.</p>
                            </div>
                        </div>
                        <div className='flex flex-col lg:w-1/2'>
                            <div className=''>
                                <p className='h-auto pl-8 py-3 fs_w400_s48 flex items-center justify-start border-y border-black  bg-slate-50'>ingredients</p>
                            </div>
                            <div className=''>
                                <p className='text-sm h-auto pl-8 py-3 font-poppins flex items-center justify-start  text-left pr-80'>1 lb. Beyond Beef 16 cherry tomatoes 2 small zucchini, each cut into 8(½- inch) slices 2 small yellow squash, each cut into 8(½-inch) slices 1 medium orange bell pepper, cut into 16 pieces 1 tbsp olive oil ¾ tsp kosher salt, divided ¾ tsp black pepper, divided  1 large red onion ½ cup chopped fresh cilantro, leaves and stems  1¼ tsp ground cumin, divided ½ cup plain fat - free Greek yogurt 1 tbsp fresh lemon juice 1 small garlic clove, grated Cooking spray</p>
                            </div>
                        </div>


                    </div>
                    {/* <div className='flex border-t border-black'>
                        <div className='w-1/2 '>
                            <p className='fs_w400_s48 h-auto pl-8 py-3 flex items-center justify-start border-r border-black'>preparation</p>
                        </div>
                        <div className='w-1/2'>
                            <p className='h-auto pl-8 py-3 fs_w400_s48 flex items-center justify-start '>ingredients</p>
                        </div>
                    </div>
                    <div className='flex border-y border-black'>
                        <div className='w-1/2 '>
                            <p className='text-sm h-auto pl-8 py-3 font-poppins flex items-center text-left justify-start border-r border-black pr-20'>Heat the olive oil in a frying pan, add the onion and cook for 5 minutes until softened and starting to turn golden. Set aside.In a bowl, combine the beef mince with the herbs and the egg. Season, add the onions and mix well. Using your hands, shape into 4 patties.Cook the burgers on a preheated barbecue or griddle for 5-6 minutes on each side. While the second side is cooking, lay a slice of cheese on top to melt slightly (if using).Lay burgers on an oiled barbecue grill over a solid bed of hot coals or high heat on a gas grill (you can hold your hand at grill level only 2 to 3 seconds); close lid on gas grill. Cook burgers, turning once, until browned on both sides and no longer pink inside (cut to test), 7 to 8 minutes total. Remove from grillMeanwhile, lightly toast the cut-sides of the buns on the barbecue. Fill with the lettuce, burgers and tomato slices. Serve with ketchup, if you like.Meanwhile, lightly toast the cut-sides of the buns on the barbecue. Fill with the lettuce, burgers and tomato slices. Serve with ketchup, if you like.</p>
                        </div>
                        <div className='w-1/2'>
                            <p className='text-sm h-auto pl-8 py-3 font-poppins flex items-center justify-start  text-left pr-80'>1 lb. Beyond Beef 16 cherry tomatoes 2 small zucchini, each cut into 8(½- inch) slices 2 small yellow squash, each cut into 8(½-inch) slices 1 medium orange bell pepper, cut into 16 pieces 1 tbsp olive oil ¾ tsp kosher salt, divided ¾ tsp black pepper, divided  1 large red onion ½ cup chopped fresh cilantro, leaves and stems  1¼ tsp ground cumin, divided ½ cup plain fat - free Greek yogurt 1 tbsp fresh lemon juice 1 small garlic clove, grated Cooking spray</p>
                        </div>
                    </div> */}
                    <div className='p-6 flex justify-between border-t border-black  bg-slate-50'>
                        <p className='text-3xl font-Staatliches md:fs_w400_s48 font-semi-bold text-left'>Look at more recipes</p>
                        <input className='text-3xl font-Staatliches md:fs_w400_s48 ' type="submit" value="view all     >" />
                    </div>

                </div>
                <div className='w-full lg:border-x border-black'>


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

export default Recipe