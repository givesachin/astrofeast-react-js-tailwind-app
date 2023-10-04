import React, { useState } from "react";
import afnonveg from "../assets/afnonveg.avif";
import bullet from "../assets/bullet.png";
import CTABar from "./Atoms/CTABar";
import Footer from "./Atoms/Footer";
import Header from "./Atoms/Header";
import QuantityBox from "./Atoms/QuantityBox";
import FloatNavbar from "./Atoms/FloatNavbar";

const products = [
  { id: 0, prod_img: afnonveg, title: "Fresh Pancakes" },
  { id: 1, prod_img: afnonveg, title: "Fresh Pancakes" },
  { id: 2, prod_img: afnonveg, title: "Fresh Pancakes" },
];

const added_products = [
  { id: 0, prod_img: afnonveg, title: "Fresh Pancakes", price: 249.0 },
  { id: 1, prod_img: afnonveg, title: "Fresh Pancakes", price: 249.0 },
];
const FeastBox = () => {
  const [selectedOption, setSelectedOption] = useState("weekly"); // Default selected option

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <section
      className="w-full h-full font-poppins dark:text-gray-100
    dark:bg-slate-900"
    >
      <Header />
      <FloatNavbar />
      <CTABar />
      <section className="lg:px-16 relative">
        <div className="border-x border-black dark:border-slate-300 lg:pt-10 ">
          <div className="w-full h-auto flex flex-row lg:flex-col border-b border-black dark:border-slate-300">
            <div className="w-full flex flex-col border-black dark:border-slate-300 p-8 gap-1">
              <p className="fs_w400_s60 text-4xl h-auto flex items-center justify-start">
                build your own feast box
              </p>
              <p className="lg:w-1/2 border-black dark:border-slate-300 font-poppins flex flex-col justify-evenly text-start">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo con.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex overflow-scroll lg:overflow-hidden lg:w-2/3">
              {products.map((product) => (
                <div key={product.id} className="pl-8 pt-8 pb-8">
                  <div className="h-96 w-[240px] md:w-76 flex flex-col border-black dark:border-slate-300 border justify-center items-center">
                    <img
                      className="w-full object-cover h-72 border-black dark:border-slate-300 border-b"
                      src={product.prod_img}
                      alt="product"
                    />
                    <p className="text-xl font-poppins font-semibold w-full text-center pt-4">
                      {product.title}
                    </p>
                    <div className="flex justify-center">
                      <QuantityBox />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t lg:border-t-0 lg:border-l border-black dark:border-slate-300 lg:ml-8 lg:w-1/3 ">
              <div className="">
                <p className="p-8 text-left text-3xl font-Staatliches">
                  my feast box
                </p>
              </div>
              <div className="border-t border-black dark:border-slate-300">
                <p className="p-8 text-sm text-[#F4A73F] text-left font-Poppins">
                  Add at least 4 more dishes to complete the box.
                </p>
              </div>
              {added_products.map((added) => (
                <div
                  key={added.id}
                  className="h-auto px-8 pb-8 w-auto flex justify-between lg:justify-normal "
                >
                  <img
                    className="w-32 h-32 object-cover"
                    src={added.prod_img}
                    alt="product"
                  />
                  <div className="md:pl-40 lg:pl-8">
                    <p className="text-xl font-poppins font-semibold w-full ">
                      {added.title}
                    </p>
                    <QuantityBox />
                    <p className="font-Poppins text-left text-gray-400">
                      ${added.price}
                    </p>
                  </div>
                </div>
              ))}
              <div className="">
                <p className="p-8 text-left text-3xl font-Staatliches border-y border-black dark:border-slate-300">
                  subscribe
                </p>
              </div>
              <div className="flex justify-center items-center border border-black dark:border-slate-300 m-8 p-2">
                <button
                  className={`px-4 py-2 space-x-10 text-black ${
                    selectedOption === "weekly" ? "bg-[#BDC695]" : "bg-white"
                  }`}
                  onClick={() => handleOptionChange("weekly")}
                >
                  Weekly
                </button>
                <button
                  className={`px-4 py-2 text-black ${
                    selectedOption === "bi-weekly" ? "bg-[#BDC695]" : "bg-white"
                  }`}
                  onClick={() => handleOptionChange("bi-weekly")}
                >
                  Bi-Weekly
                </button>
                <button
                  className={`px-4 py-2 text-black ${
                    selectedOption === "monthly" ? "bg-[#BDC695]" : "bg-white"
                  }`}
                  onClick={() => handleOptionChange("monthly")}
                >
                  Monthly
                </button>
              </div>
              <div className="border-b border-black dark:border-slate-300 m-6 pb-5">
                <div className="flex pb-5 gap-5">
                  <img src={bullet} className="invert" alt="bullet" />
                  <p>Flat 5% off on all subscriptions</p>
                </div>
                <div className="flex gap-5">
                  <img src={bullet} className="invert" alt="bullet" />
                  <p>Pause, cancel, modify — anytime</p>
                </div>
              </div>
              <div className="px-8 pb-8">
                <div className="">
                  <p className="text-left text-gray-900">Select Quantity:</p>
                </div>
                <div className="flex ">
                  <QuantityBox />
                  <p className="text-center self-center fs_w400_s48">$350.00</p>
                </div>
                <input
                  className=" w-full p-3 text-white font-Staatliches  bg-black dark:text-gray-900
                  dark:bg-slate-300 "
                  type="submit"
                  value="add to stash    >"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hidden lg:h-0 lg:border-t  lg:border-black dark:border-slate-300 lg:flex lg:justify-center lg:items-center" />
      <section className="lg:px-16 lg:relative">
        <div className="border-x border-black dark:border-slate-300 pt-12" />
      </section>
      <Footer />
    </section>
  );
};

export default FeastBox;
