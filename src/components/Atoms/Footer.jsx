import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full lg:flex lg:items-center lg:flex-col dark:bg-slate-900 dark:text-gray-100">
      <div className="w-full  lg:flex border-t border-black dark:border-slate-300">
        <div className="lg:border-r w-full border-black dark:border-slate-300">
          <p className="px-8 py-3 md:px-16 md:py-6 text-start border-b text-xl font-medium font-poppins uppercase border-black dark:border-slate-300">
            Stay up with Astrofeast
          </p>
          <div className="px-6 md:px-16 py-8 lg:p-16 gap-y-9 flex flex-col items-start">
            <div className="w-full gap-y-2 flex flex-col items-start">
              <p className=" font-semibold text-2xl font-poppins">
                Tales from Outer Space
              </p>
              <p className=" text-lg md:text-xl font-poppins">
                Fortnightly briefs from around the world
              </p>
            </div>

            <div className="w-full gap-y-2 flex flex-col items-start ">
              <form
                className="w-full flex md:flex-nowrap flex-wrap md:flex-between gap-y-4 md:gap-x-4  "
                action="get"
              >
                <input
                  className="w-full md:w-3/4 p-4 border border-black dark:border-slate-300 placeholder:text-black dark:placeholder:text-gray-100 dark:bg-slate-900 font-poppins"
                  type="text"
                  placeholder="Email/Whatsapp"
                />
                <input
                  className="w-full px-6 py-3 text-white dark:bg-slate-300 dark:text-gray-900 font-Staatliches  bg-black lg:w-auto md:w-1/4 text-xl md:tracking-wider"
                  type="submit"
                  value="Send me a tale"
                />
              </form>
              <p className="text-xs font-poppins pt-2">
                No spams. No automations. No filters.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:border-white border-t border-black dark:border-slate-300">
          <div className="w-1/2 md:w-full flex flex-col border-r border-black dark:border-slate-300">
            <p className="px-8 md:px-16 py-4 md:py-6 text-start border-b text-lg font-medium uppercase border-black dark:border-slate-300 font-poppins">
              work with us
            </p>
            <div className="w-full gap-y-6 md:gap-y-5 p-8 md:p-16 flex flex-col items-start font-poppins lg:gap-y-4">
              <p className=" font-semibold text-xl md:text-2xl"> Kitchens</p>
              <p className=" font-semibold text-xl md:text-2xl"> Investors</p>
              <p className=" font-semibold text-xl md:text-2xl"> Careers</p>
              <p className=" font-semibold text-xl md:text-2xl"> Cold Chain</p>
              <p className=" font-semibold text-xl md:text-2xl">
                {" "}
                Sustainability
              </p>
            </div>
          </div>
          <div className="w-1/2 md:w-full flex flex-col">
            <p className="px-8 md:px-16 py-4 md:py-6 text-start border-b text-lg font-medium uppercase border-black dark:border-slate-300 font-poppins">
              quick links
            </p>
            <div className="w-full md:gap-y-5 lg:gap-y-2 p-8 md:p-16 flex flex-col items-start font-poppins gap-y-6">
              <NavLink to="/my-account">
                <p className=" font-semibold text-xl md:text-2xl"> Account</p>
              </NavLink>
              <NavLink to="/shop">
                <p className=" font-semibold text-xl md:text-2xl"> Shop</p>
              </NavLink>
              <NavLink to="/golden-ticket">
                <p className=" font-semibold text-xl md:text-2xl">
                  {" "}
                  Golden Ticket
                </p>
              </NavLink>
              <p className=" font-semibold text-xl md:text-2xl"> FAQs </p>
              <p className=" font-semibold text-xl md:text-2xl"> Support</p>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="w-full font-poppins flex flex-col-reverse gap-y-8 lg:flex-row justify-between px-16 py-12 border-t border-black dark:border-slate-300 font-medium mb-10 lg:mb-0">
        <p className="w-full lg:text-left uppercase">2023 &#169; astrofeast</p>
        <div className="w-full flex md:place-content-center  flex-col md:flex-row gap-y-8 gap-x-8">
          <div className="flex gap-y-8 justify-center lg:justify-start gap-x-8 uppercase">
            <p>whitepaper</p>
            <p>privacy</p>
            <p>terms</p>
          </div>
          {/* Whatsapp, Twitter, Linkdin,  */}
          <div className="flex gap-y-8 justify-center lg:justify-end gap-x-8 uppercase  ">
            {/**Whatsapp */}
            <svg
              className="fill-[#030712] dark:fill-white"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2313_424)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.00008 15.3334C12.0501 15.3334 15.3334 12.0501 15.3334 8.00008C15.3334 3.94999 12.0501 0.666748 8.00008 0.666748C3.94999 0.666748 0.666748 3.94999 0.666748 8.00008C0.666748 9.41121 1.06531 10.7292 1.75602 11.8477L0.666748 15.3334L4.15242 14.2441C5.27093 14.9348 6.58896 15.3334 8.00008 15.3334ZM6.89315 4.60881L7.70508 7.45068L6.3514 8.25862C6.54852 8.54562 6.77481 8.81895 7.03035 9.07448C7.28588 9.33008 7.55922 9.55635 7.84622 9.75342L8.65415 8.39975L11.496 9.21168L11.189 11.7742L10.7207 11.7482C9.69801 11.6916 8.68501 11.4032 7.76741 10.8825C7.24995 10.5889 6.76342 10.2218 6.32323 9.78162C5.88302 9.34142 5.51588 8.85488 5.22227 8.33741C4.70161 7.41981 4.41324 6.4068 4.35659 5.38411L4.33065 4.91579L6.89315 4.60881Z"
                  // fill="fn({isDark}),'white','#030712')"
                />
              </g>
              <defs>
                <clipPath id="clip0_2313_424">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {/**Twitter */}
            <svg
              className="fill-[#030712] dark:fill-white"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.99992 5.05737L3.99991 1.05737L3.52851 1.52877C1.42721 3.63007 1.42721 7.03695 3.52851 9.13828L3.72376 9.33355L1.72376 11.3335L0.528564 12.5287L1.47137 13.4715L2.67645 12.2665C5.25286 14.529 9.17885 14.4307 11.638 11.9716C13.3464 10.2631 13.9154 7.84681 13.3449 5.66683H15.3333V4.33349H12.8349C12.5313 3.74345 12.1323 3.18981 11.638 2.69544L10.9999 2.05737L7.99992 5.05737Z"
              />
            </svg>
            {/**Linkdin*/}
            <svg
              className="fill-[#030712] dark:fill-white"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.49992 1.5H0.833252V5.16667H4.49992V1.5ZM4.49992 6.16667H0.833252V15.1667H4.49992V6.16667ZM10.6666 6.16667H5.83325V15.1667H9.49992V9.83333H9.99992C10.8283 9.83333 11.4999 10.5049 11.4999 11.3333V15.1667H15.1666V10.6667C15.1666 8.1814 13.1519 6.16667 10.6666 6.16667Z"
              />
            </svg>
            {/**Instagram*/}
            <svg
              className="fill-[#030712] dark:fill-white"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2313_433)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.666748 0.666748H15.3334V15.3334H0.666748V0.666748ZM8.00008 5.66675C6.71141 5.66675 5.66675 6.71141 5.66675 8.00008C5.66675 9.28875 6.71141 10.3334 8.00008 10.3334C9.28875 10.3334 10.3334 9.28875 10.3334 8.00008C10.3334 6.71141 9.28875 5.66675 8.00008 5.66675ZM4.33341 8.00008C4.33341 5.97503 5.97503 4.33341 8.00008 4.33341C10.0251 4.33341 11.6667 5.97503 11.6667 8.00008C11.6667 10.0251 10.0251 11.6667 8.00008 11.6667C5.97503 11.6667 4.33341 10.0251 4.33341 8.00008ZM13.0001 3.00008H11.6667V4.33341H13.0001V3.00008Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_2313_433">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
