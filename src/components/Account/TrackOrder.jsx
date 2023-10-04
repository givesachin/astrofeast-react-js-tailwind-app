import React from "react";

import Footer from "../Atoms/Footer";
import Header from "../Atoms/Header";

import AccountNavbar from "../Account/AccountNavbar";
import FloatNavbar from "../Atoms/FloatNavbar";
const GoldenTicket = () => {
  return (
    <section
      className="dark:text-gray-100
    dark:bg-slate-900"
    >
      <Header />
      <FloatNavbar />
      <section className="hidden lg:block lg:px-16 lg:relative">
        <div className="border-x border-black dark:border-slate-300 pt-12" />
      </section>
      <section className="lg:px-16  border-t border-black dark:border-slate-300">
        <AccountNavbar />
        {/* Track order page */}
        <div className="w-full border-t h-auto flex lg:border-x border-black dark:border-slate-300 flex-col">
          <div className="w-full flex flex-col border-black dark:border-slate-300 py-6 gap-1 px-10">
            <p className=" h-auto fs_w400_s48 flex items-center justify-start">
              Track your package
            </p>
            <p className=" border-black dark:border-slate-300 font-poppins flex flex-col justify-evenly text-start">
              Sit back relax while we deliver to your doorstep
            </p>
          </div>
          <div className="border-t border-black dark:border-slate-300 h-20 flex align-middle p-10 ">
            <div class="w-11/12 lg:w-2/6 mx-auto">
              <div class="bg-gray-200 h-1 flex items-center justify-between">
                <div class="w-1/3 bg-indigo-700 h-1 flex items-center">
                  <div class="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-check"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#FFFFFF"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                </div>
                <div class="w-1/3 flex justify-between bg-indigo-700 h-1 items-center relative">
                  <div class="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-check"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#FFFFFF"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                  <div class="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                    <div class="h-3 w-3 bg-indigo-700 rounded-full"></div>
                  </div>
                </div>
                <div class="w-1/3 flex justify-end">
                  <div class="bg-white h-6 w-6 rounded-full shadow"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row border-t border-black dark:border-slate-300 p-10 lg:p-0 ">
            <div className="lg:border-r border-black dark:border-slate-300 w-full lg:w-1/2">
              <p className="text-start p-4 font-poppins font-semibold">
                Shipment information
              </p>
              <div className="flex p-4">
                <p className="w-1/2 text-start"> Tracking ID</p>
                <p className="text-start">0901246121356152</p>
              </div>
              <div className="flex p-4">
                <p className="w-1/2 text-start">Shipping To</p>
                <p className="text-start">India gate, Delhi..</p>
              </div>
              <div className="flex p-4">
                <p className="w-1/2 text-start">Order #</p>
                <p className="text-start">#121213</p>
              </div>
            </div>
            <div className="border-t  border-black dark:border-slate-300  lg:border-t-0 w-full lg:w-1/2">
              <p className="text-start p-4 font-poppins font-semibold">
                Order details
              </p>
              <div className="flex p-4">
                <p className="w-1/2 text-start"> Number of meals</p>
                <p className="text-start">04</p>
              </div>
              <div className="flex p-4">
                <p className="w-1/2 text-start">Number of meals</p>
                <p className="text-start">04</p>
              </div>
              <div className="flex p-4">
                <p className="w-1/2 text-start">Frozen meat</p>
                <p className="text-start">04</p>
              </div>
              <div className="flex p-4">
                <p className="w-1/2 text-start">Pancakes</p>
                <p className="text-start">04</p>
              </div>
              <div className="flex p-4">
                <p className="w-1/2 text-start">Price</p>
                <p className="text-start">$100</p>
              </div>
            </div>
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

export default GoldenTicket;
