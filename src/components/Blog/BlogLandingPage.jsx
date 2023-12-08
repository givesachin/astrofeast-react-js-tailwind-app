import React, { useEffect, useState } from "react";
import blog1 from "../../assets/Blog/blog1.png";
import blog2 from "../../assets/Blog/blog2.png";
import blog3 from "../../assets/Blog/blog3.png";
import CTABar from "../Atoms/CTABar";
import Footer from "../Atoms/Footer";
import Header from "../Atoms/Header";
import checkoutRecipe from "../../assets/checkoutRecipe.png";
import FloatNavbar from "../Atoms/FloatNavbar";
import { NavLink } from "react-router-dom";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://the-mexican-food-db.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "25ad220f10msh8efa45310a070c6p1a029cjsn3a6be4c1eca8",
    "X-RapidAPI-Host": "the-mexican-food-db.p.rapidapi.com",
  },
};
const BlogLandingPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getProducts();
  }, []);
  function getProducts() {
    axios
      .request(options)
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        // Handle the error here
        setError(error);
      });
    // axios.get('').then(function (response) {
    //     setProducts(response.data)
    // })
  }
  useEffect(() => {
    document.title = "Astrofeast - Blog";
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
        <div className="w-full lg:border-x border-black dark:border-slate-300 pt-2 lg:pt-8">
          <div className="w-full">
            <p className="fs_w400_s60 h-auto p-8 flex items-center justify-start">
              BLOGS
            </p>
            <NavLink to="/blog/recipe">
              <img
                className="absolute top-10 md:top-16 right-5 md:right-16"
                src={checkoutRecipe}
                alt="certified"
              />
            </NavLink>
          </div>
          <div className="p-8 flex flex-col lg:flex-row border-t border-black dark:border-slate-300 gap-10 items-center">
            <div className="lg:w-1/2 lg:h-1/2 ">
              <img className="" src={blog1} alt="blog1" />
            </div>
            <div className="lg:w-1/2 lg:h-1/2 place-self-center gap-20">
              <p className="font-poppins font-bold text-left text-2xl leading-10">
                {" "}
                Latest Article
              </p>
              <p className="mt-6 lg:mt-3 font-poppins text-left md:pr-16">
                In a small bowl, combine yogurt, lemon juice, garlic, remaining
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <input
                className="mt-6 lg:mt-3 flex px-6 py-3 text-white font-Staatliches bg-black object-start text-xl md:text-base dark:text-gray-900
                dark:bg-slate-300 hover:cursor-pointer "
                type="submit"
                value="read now     >"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:border-x border-black dark:border-slate-300 lg:pt-10">
          <div className="w-full border-t border-black dark:border-slate-300">
            <p className="text-4xl font-Staatliches md:fs_w400_s48 h-auto px-8 py-4 md:p-8 flex items-center justify-start">
              feature section
            </p>
          </div>
          <div className="flex flex-col lg:flex-row border-t lg:border-b border-black dark:border-slate-300 gap-10">
            <div className="lg:w-1/2 lg:h-1/2  ">
              <img className="w-full" src={blog2} alt="blog1" />
            </div>
            <div className="pl-8 lg:w-1/2 lg:h-1/2 place-self-center gap-20">
              <p className="font-poppins font-bold text-left text-2xl leading-10">
                {" "}
                Organic. Fresh. Frozen.
              </p>
              <p className="mt-6 lg:mt-3 font-poppins text-left md:pr-16">
                In a small bowl, combine yogurt, lemon juice, garlic, remaining
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.{" "}
              </p>
              <input
                className="mt-6 lg:mt-3 flex px-6 py-3 text-white font-Staatliches bg-black object-start text-xl md:text-base dark:text-gray-900
                dark:bg-slate-300 hover:cursor-pointer "
                type="submit"
                value="read now     >"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:border-x border-black dark:border-slate-300 pt-6 lg:pt-0">
          <div className="flex flex-col lg:flex-row border-b border-t border-black dark:border-slate-300 lg:gap-16">
            <div className="lg:w-1/2 lg:h-1/2 place-self-center gap-20 ml-6 my-6 lg:m-10 order-2 lg:order-1">
              <p className="font-poppins font-bold text-left text-2xl leading-10">
                {" "}
                Passionate about baking
              </p>
              <p className="font-poppins text-left pr-2 md:pr-16">
                In a small bowl, combine yogurt, lemon juice, garlic, remaining
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <input
                className="mt-3 flex px-6 py-3 text-white font-Staatliches bg-black object-start text-xl md:text-base dark:text-gray-900
                dark:bg-slate-300 hover:cursor-pointer"
                type="submit"
                value="read now     >"
              />
            </div>
            <div className="lg:w-1/2 lg:h-1/2 order-1 lg:order-2">
              <img className="w-full" src={blog3} alt="blog1" />
            </div>
          </div>
        </div>
        <div className="w-full lg:border-x border-black dark:border-slate-300">
          <div className="p-6 flex flex-col md:flex-row justify-between">
            <div className="self-start">
              <p className="text-3xl font-Staatliches lg:fs_w400_s48 font-semi-bold text-left">
                stories that have been read the most
              </p>
            </div>
            <div className="pt-2 md:pt-0 self-start">
              <input
                className="  text-3xl font-Staatliches hover:cursor-pointer"
                type="submit"
                value="view all     >"
              />
            </div>
          </div>

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
          <div className="bg-slate-400 items-center justify-between w-full dark:bg-slate-900">
            {error && (
              <p className="text-lg w-full font-medium dark:text-gray-100">
                Error: FAILED TO LOAD DATA... {error.message}
              </p>
            )}{" "}
            {/* Display the error if it exists */}
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

export default BlogLandingPage;
