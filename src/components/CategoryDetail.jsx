import React, { useState, useEffect } from "react";
import Header from "./Atoms/Header";
import Footer from "./Atoms/Footer";
import ProductContainer from "./Atoms/ProductContainer";
import afherobg from "../assets/herobg.png";
import { NavLink } from "react-router-dom";
import FloatNavbar from "./Atoms/FloatNavbar";
const CategoryDetail = () => {
  useEffect(() => {
    document.title = "Astrofeast - Category Details";
  }, []);
  const [FilterToggle, setFilterToggle] = useState();

  function handleFilter() {
    setFilterToggle(!FilterToggle);
  }

  const bestseller = {
    meat: [
      {
        id: 0,
        Image: afherobg,
        p_name: "Beef Steak",
        Price: "$20",
      },
      {
        id: 1,
        Image: afherobg,
        p_name: "Chicken Breast",
        Price: "$10",
      },
      {
        id: 2,
        Image: afherobg,
        p_name: "Pork Chops",
        Price: "$15",
      },
      {
        id: 3,
        Image: afherobg,
        p_name: "Lamb Chops",
        Price: "$25",
      },
      {
        id: 4,
        Image: afherobg,
        p_name: "Lamb Chops",
        Price: "$25",
      },
      {
        id: 5,
        Image: afherobg,
        p_name: "Lamb Chops",
        Price: "$25",
      },
      // Add more meat products as needed
    ],
  };
  return (
    <>
      <Header />
      <FloatNavbar />
      <section
        className="lg:px-16 relative font-poppins dark:text-gray-100
dark:bg-slate-900"
      >
        {/* container */}
        <div className="lg:border-x border-black dark:border-slate-300 lg:pt-10">
          {/* headline */}
          <hr className="w-full border-black dark:border-slate-300 absolute left-0" />
          {/* product grid */}
          <div className="w-full flex flex-col justify-start items-start gap-y-4 py-9 px-8 ">
            <div className="flex justify-between w-auto gap-x-2">
              <NavLink
                className="flex justify-between w-auto gap-x-2"
                to="/shop"
              >
                {" "}
                {/**SVG for back to shop button arrow*/}
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
                <p className="text-yellow w-auto font-Staatliches text-2xl font-normal uppercase">
                  back to SHOP
                </p>
              </NavLink>
            </div>
            <p className="font-Staatliches text-5xl text-left">seafood</p>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* filters */}
            <div className=" w-auto border-t flex flex-col justify-start gap-y-8 border-r border-black dark:border-slate-300 md:p-8 px-8 py-4">
              <div className="flex justify-between lg:gap-x-7 items-center">
                <h2 className="font-Staatliches text-4xl"> filters </h2>
                <div>
                  <button
                    onClick={handleFilter}
                    className="w-full flex gap-1 items-center "
                  >
                    {/**SVG for Clear button cross sign */}
                    <svg
                      className="fill-[#030712] dark:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_2591_4720)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.00028 10.3852L14.0576 16.4426L15.943 14.5572L9.88562 8.49989L15.943 2.44255L14.0576 0.55722L8.00028 6.61322L1.94295 0.55722L0.0576172 2.44255L6.11495 8.49989L0.0576172 14.5572L1.94295 16.4426L8.00028 10.3852Z"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2591_4720">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="font-Staatliches w-20 text-xl">Clear ALL</p>
                  </button>
                </div>
              </div>
              {/* filter 1 */}

              <div className="hidden lg:w-full lg:h-auto lg:gap-7 lg:flex lg:flex-col lg:justify-start lg:items-center ">
                <div className="w-full flex justify-between gap-y-6 ">
                  <p className="text-xl font-poppins font-semibold capitalize ">
                    starters
                  </p>
                  <button onClick={handleFilter}>
                    {/**SVG for down arrow for show more*/}
                    <svg
                      className="stroke-[#030712] dark:stroke-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_2591_4726)">
                        <path
                          d="M1.42871 6.3269L10.0001 14.8983L18.5716 6.32691"
                          // stroke="#030712"
                          strokeWidth="1.63265"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2591_4726">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="matrix(-4.37114e-08 1 1 4.37114e-08 0 0)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
                {/* filter 1 checkbox */}
                {FilterToggle && (
                  <div className="flex w-full flex-col justify-between items-center gap-6">
                    <div className="w-full flex justify-start items-center gap-3">
                      <input
                        className="w-4 h-4 accent-black rounded-none focus:ring-2"
                        type="checkbox"
                        name="fresh"
                        id=""
                      />
                      <label className="text-lg " htmlFor="fresh">
                        filter data
                      </label>
                    </div>
                    <div className="w-full flex justify-start items-center gap-3">
                      <input
                        className="w-4 h-4 accent-black rounded-none focus:ring-2"
                        type="checkbox"
                        name="fresh1"
                        id=""
                      />
                      <label className="text-lg" htmlFor="fresh1">
                        filter data
                      </label>
                    </div>
                    <div className="w-full flex justify-start items-center gap-3">
                      <input
                        className="w-4 h-4 accent-black rounded-none focus:ring-black"
                        type="checkbox"
                        name="fresh2"
                        id=""
                      />
                      <label className="text-lg" htmlFor="fresh2">
                        filter data
                      </label>
                    </div>
                  </div>
                )}
              </div>

              <hr className="hidden lg:w-full lg:border border-black dark:border-slate-300" />
            </div>
            <ProductContainer
              cardcontainer="flex-wrap "
              pitem={bestseller.meat}
            />
          </div>
        </div>
      </section>
      <div className="lg:h-0 lg:border-t  border-black dark:border-slate-300 lg:flex lg:justify-center lg:items-center" />
      <section className="lg:px-16 lg:relative dark:bg-slate-900">
        <div className="lg:border-x border-black dark:border-slate-300 pt-12" />
      </section>

      <Footer />
    </>
  );
};

export default CategoryDetail;
