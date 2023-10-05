import React, { useEffect, useState } from "react";
import blog4 from "../../assets/Blog/blog4.png";
import CTABar from "../Atoms/CTABar";
import Footer from "../Atoms/Footer";
import Header from "../Atoms/Header";
import { NavLink } from "react-router-dom";
import FloatNavbar from "../Atoms/FloatNavbar";
const options = {
  method: "GET",
  url: "https://the-mexican-food-db.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "25ad220f10msh8efa45310a070c6p1a029cjsn3a6be4c1eca8",
    "X-RapidAPI-Host": "the-mexican-food-db.p.rapidapi.com",
  },
};
const recipe = {
  id: 0,
  recipe_image: blog4,
  created_by: "John Smith",
  image_created_by: blog4,
  recipe_title: "Beef Burger and kebabs",
  recipe_desc:
    "In a small bowl, combine yogurt, lemon juice, garlic, remaining Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  serves: "3",
  prep_time: "45 min",
  preparation:
    "Heat the olive oil in a frying pan, add the onion and cook for 5 minutes until softened and starting to turn golden. Set aside.In a bowl, combine the beef mince with the herbs and the egg. Season, add the onions and mix well. Using your hands, shape into 4 patties.Cook the burgers on a preheated barbecue or griddle for 5-6 minutes on each side. While the second side is cooking, lay a slice of cheese on top to melt slightly (if using).Lay burgers on an oiled barbecue grill over a solid bed of hot coals or high heat on a gas grill (you can hold your hand at grill level only 2 to 3 seconds); close lid on gas grill. Cook burgers, turning once, until browned on both sides and no longer pink inside (cut to test), 7 to 8 minutes total. Remove from grillMeanwhile, lightly toast the cut-sides of the buns on the barbecue. Fill with the lettuce, burgers and tomato slices. Serve with ketchup, if you like.Meanwhile, lightly toast the cut-sides of the buns on the barbecue. Fill with the lettuce, burgers and tomato slices. Serve with ketchup, if you like.",
  ingredients:
    "1 lb. Beyond Beef 16 cherry tomatoes 2 small zucchini, each cut into 8(½- inch) slices 2 small yellow squash, each cut into 8(½-inch) slices 1 medium orange bell pepper, cut into 16 pieces 1 tbsp olive oil ¾ tsp kosher salt, divided ¾ tsp black pepper, divided  1 large red onion ½ cup chopped fresh cilantro, leaves and stems  1¼ tsp ground cumin, divided ½ cup plain fat - free Greek yogurt 1 tbsp fresh lemon juice 1 small garlic clove, grated Cooking spray",
};
const Recipe = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  function getProducts() {
    // axios.request(options).then(function (response) {
    //     setProducts(response.data)
    // });
  }
  useEffect(() => {
    document.title = "Astrofeast - Recipes";
  }, []);
  return (
    <section
      className="w-full h-full font-poppins dark:text-gray-100
    dark:bg-slate-900"
    >
      <Header />
      <FloatNavbar />
      <CTABar />

      <section className="lg:px-16 relative">
        <div className="w-full lg:border-x border-black dark:border-slate-300 lg:pt-10">
          <div className="w-full">
            <div className="flex justify-between w-auto gap-x-2 pt-8 pb-5 pl-10">
              <NavLink
                className="flex justify-between w-auto gap-x-2"
                to="/shop"
              >
                {" "}
                {/**SVG for back button arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M21.877 2.28564L8.16267 15.9999L21.877 29.7142"
                    stroke="#F4A73F"
                    strokeWidth="2.61225"
                  />
                </svg>
                <p className="hidden lg:block lg:text-yellow lg:w-auto lg:font-Staatliches lg:text-2xl lg:font-normal">
                  back
                </p>
                <p className="lg:hidden block text-yellow w-auto font-Staatliches text-2xl font-normal">
                  back to shop
                </p>
              </NavLink>
            </div>

            <p className="fs_w400_s60 h-auto pb-8 pl-8  flex items-center justify-start">
              recipes
            </p>
          </div>
          <div className="p-8 flex flex-col lg:flex-row border-t border-black dark:border-slate-300 gap-10">
            <div className="lg:w-1/2 lg:h-1/2 ">
              <img className="w-full" src={blog4} alt="recipe pic" />
            </div>
            <div className="lg:w-1/2 lg:h-1/2 place-self-center gap-20">
              <div className="">
                <p className="font-poppins text-left text-sm text-gray-600 pb-2">
                  Created By
                </p>
                <div className="flex gap-3">
                  <img
                    className="h-8 w-8 rounded-full flex"
                    src={blog4}
                    alt="profile pic"
                  />
                  <p className="flex text-lg font-poppins font-semibold self-center">
                    John Smith{" "}
                  </p>
                </div>
              </div>
              <p className="font-poppins font-semibold text-left text-2xl leading-10 pt-10">
                {" "}
                Beef Burger and kebabs
              </p>
              <p className="font-poppins text-left pr-16">
                In a small bowl, combine yogurt, lemon juice, garlic, remaining
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="flex pt-10 gap-10">
                <div>
                  <p className="font-poppins text-left text-sm text-gray-600 pb-2">
                    Serves
                  </p>
                  <p className="flex text-lg font-poppins font-semibold self-center">
                    3
                  </p>
                </div>
                <div>
                  <p className="font-poppins text-left text-sm text-gray-600 pb-2">
                    Prep Time
                  </p>
                  <p className="flex text-lg font-poppins font-semibold self-center">
                    45 mins
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  border-black dark:border-slate-300">
            <div className="flex flex-col lg:w-1/2 ">
              <div className="">
                <p className="fs_w400_s24 md:fs_w400_s48 h-auto pl-8 py-3 flex items-center justify-start border-y lg:border-r  border-black dark:border-slate-300 bg-slate-50 dark:bg-slate-800">
                  preparation
                </p>
              </div>
              <div className="lg:border-r h-full border-black dark:border-slate-300  ">
                <p className="text-sm h-auto pl-8 py-3 font-poppins flex items-center text-left justify-start  pr-20">
                  Heat the olive oil in a frying pan, add the onion and cook for
                  5 minutes until softened and starting to turn golden. Set
                  aside.In a bowl, combine the beef mince with the herbs and the
                  egg. Season, add the onions and mix well. Using your hands,
                  shape into 4 patties.Cook the burgers on a preheated barbecue
                  or griddle for 5-6 minutes on each side. While the second side
                  is cooking, lay a slice of cheese on top to melt slightly (if
                  using).Lay burgers on an oiled barbecue grill over a solid bed
                  of hot coals or high heat on a gas grill (you can hold your
                  hand at grill level only 2 to 3 seconds); close lid on gas
                  grill. Cook burgers, turning once, until browned on both sides
                  and no longer pink inside (cut to test), 7 to 8 minutes total.
                  Remove from grillMeanwhile, lightly toast the cut-sides of the
                  buns on the barbecue. Fill with the lettuce, burgers and
                  tomato slices. Serve with ketchup, if you like.Meanwhile,
                  lightly toast the cut-sides of the buns on the barbecue. Fill
                  with the lettuce, burgers and tomato slices. Serve with
                  ketchup, if you like.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2">
              <div className="">
                <p className="h-auto pl-8 py-3 fs_w400_s24 md:fs_w400_s48 flex items-center justify-start border-y border-black dark:border-slate-300  bg-slate-50 dark:bg-slate-800">
                  ingredients
                </p>
              </div>
              <div className="">
                <p className="text-sm h-auto pl-8 py-3 font-poppins flex items-center justify-start  text-left pr-80">
                  1 lb. Beyond Beef 16 cherry tomatoes 2 small zucchini, each
                  cut into 8(½- inch) slices 2 small yellow squash, each cut
                  into 8(½-inch) slices 1 medium orange bell pepper, cut into 16
                  pieces 1 tbsp olive oil ¾ tsp kosher salt, divided ¾ tsp black
                  pepper, divided 1 large red onion ½ cup chopped fresh
                  cilantro, leaves and stems 1¼ tsp ground cumin, divided ½ cup
                  plain fat - free Greek yogurt 1 tbsp fresh lemon juice 1 small
                  garlic clove, grated Cooking spray
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 flex justify-between border-t border-black dark:border-slate-300 dark:bg-slate-800 bg-slate-50">
            <p className="text-2xl font-Staatliches md:fs_w400_s48 font-semi-bold text-left">
              Look at more recipes
            </p>
            <input
              className="text-2xl font-Staatliches md:fs_w400_s48 "
              type="submit"
              value="view all     >"
            />
          </div>
        </div>
        <div className="w-full lg:border-x border-black dark:border-slate-300">
          <div className=" flex gap-x-8 flex-nowrap p-6 border-t border-black dark:border-slate-300 ">
            {products.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="flex flex-col border-black dark:border-slate-300 border"
              >
                <img
                  className="border-b border-black dark:border-slate-300 w-80 h-80 object-cover"
                  src={item.image}
                />

                <div className="w-full font-poppins font-semi-bold h-auto flex items-end justify-center py-5">
                  <p className="text-lg w-full font-medium">
                    {item.title.substring(0, item.title.indexOf(" "))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-0 lg:border-t  border-black dark:border-slate-300 flex justify-center items-center" />
      <section className="hidden  lg:block lg:px-16 lg:relative">
        <div className="lg:border-x border-black dark:border-slate-300 pt-12" />
      </section>

      <Footer />
    </section>
  );
};

export default Recipe;
