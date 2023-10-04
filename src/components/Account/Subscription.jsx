import React from "react";
import Footer from "../Atoms/Footer";
import Header from "../Atoms/Header";
import AccountNavbar from "./AccountNavbar";
import FloatNavbar from "../Atoms/FloatNavbar";
const data = {
  subscriptionNumber: "12345567",
  item: "Salmon Tikka",
  nextDeliveryDate: "Dec 14, 2022",
  shippingAddress: "N-3/40, DLF Phase 2, Gurgaon 122002",
  savingsAmount: "100",
};
const Subscriptions = () => {
  return (
    <section
      className="dark:text-gray-100
    dark:bg-slate-900"
    >
      <Header />
      <FloatNavbar />
      <section className="hidden lg:block lg:px-16 lg:relative">
        <div className="lg:border-x border-black dark:border-slate-300 pt-12" />
      </section>
      <section className="lg:px-16  border-t border-black dark:border-slate-300">
        <AccountNavbar />
        {/* Subscription page title */}
        <div className="w-full border-t h-auto flex md:flex-wrap flex-col md:flex-row lg:border-x border-black dark:border-slate-300 ">
          <div className="px-6 md:pl-6 lg:px-3 order-1 w-full md:w-1/2   flex flex-col border-black dark:border-slate-300 pt-6  ">
            <p className="md:px-6 lg:px-3 h-auto fs_w400_s48 flex items-center justify-start">
              subscriptions
            </p>
          </div>
          <div className="md:pl-6 lg:px-3 order-3 pb-3  ">
            <p className="order-3 px-6  border-black dark:border-slate-300 font-poppins flex flex-col justify-evenly text-start">
              Flat 3% off on all orders for that year.
            </p>
          </div>
          {/* add subscription button*/}
          <div className="md:pr-6 order-2 md:w-1/2 flex md:justify-end">
            <input
              className="flex text-3xl md:text-xl py-6 px-6 text-[#F4A73F] font-Staatliches"
              type="submit"
              value="Add subscription"
            />
          </div>
        </div>
        {/* subscription info for desktop screen */}
        <div className="hidden lg:flex lg:px-6 lg:py-6 lg:flex-column lg:w-full lg:h-full lg:border-t lg:border-x lg:border-black dark:border-slate-300 lg:justify-between lg:gap-5">
          <div>
            <p className=" text-2xl h-auto font-Staatliches flex items-center justify-start">
              subscription #{data.subscriptionNumber}
            </p>
            <p className="text-sm font-poppins justify-start flex font-medium">
              Salmon Tikka
            </p>
          </div>
          <div>
            <p className="text-xs font-poppins justify-start flex">
              Next Delivery on
            </p>
            <p className="text-sm font-semibold font-poppins justify-start flex pt-2">
              {data.nextDeliveryDate}
            </p>
          </div>
          <div>
            <p className="text-xs font-poppins justify-start flex">
              {" "}
              Shipped to
            </p>
            <p className="text-sm font-semibold font-poppins justify-start flex pt-2">
              {data.shippingAddress}
            </p>
          </div>
          <div>
            <p className="w-28 text-xs font-semibold text-[#10B981] font-poppins p-2">
              You’ve saved ₹{data.savingsAmount}/- so far!
            </p>
          </div>
          <div>
            <input
              className="flex px-6 py-3 text-white font-Staatliches bg-black object-start dark:text-gray-900
              dark:bg-slate-300 "
              type="submit"
              value="modify"
            />
          </div>
        </div>

        {/* subscription info for mobile and tablet screen */}
        <div className="lg:hidden flex md:px-12 px-6 py-6 flex-col w-full h-full border-t  border-black dark:border-slate-300 justify-between gap-5">
          <div className="flex justify-between">
            <div>
              <p className=" text-2xl h-auto font-Staatliches flex items-center justify-start">
                subscription #{data.subscriptionNumber}
              </p>
              <p className="text-base md:text-sm font-poppins justify-start flex font-medium">
                Salmon Tikka
              </p>
            </div>
            <div>
              <input
                className="hidden md:flex md:px-6 md:py-3 md:text-white md:font-Staatliches md:bg-black md:object-start "
                type="submit"
                value="modify"
              />
            </div>
          </div>
          {/* subscription detail for mobile screen*/}
          <div className="flex flex-col gap-y-5  md:flex-row justify-between">
            <div>
              <p className="text-sm md:text-xs font-poppins justify-start flex">
                Next Delivery on
              </p>
              <p className="text-base md:text-sm font-semibold font-poppins justify-start flex pt-2">
                {data.nextDeliveryDate}
              </p>
            </div>
            <div>
              <p className="text-sm md:text-xs font-poppins justify-start flex">
                {" "}
                Shipped to
              </p>
              <p className="text-base md:text-sm font-semibold font-poppins justify-start flex pt-2">
                {data.shippingAddress}
              </p>
            </div>
            <div>
              <p className="w-28 text-sm md:text-xs font-semibold text-[#10B981] font-poppins md:p-2">
                You’ve saved ₹{data.savingsAmount}/- so far!
              </p>
            </div>
          </div>
          <div className="md:hidden">
            <input
              className="w-full justify-center flex px-6 py-3 text-white font-Staatliches bg-black "
              type="submit"
              value="modify"
            />
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

export default Subscriptions;
