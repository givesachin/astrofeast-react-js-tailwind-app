import React from "react";

import Footer from "../Atoms/Footer";
import Header from "../Atoms/Header";

import AccountNavbar from "../Account/AccountNavbar";

import gt1 from "../../assets/gt1.png";
import gt2 from "../../assets/gt2.png";
import gt3 from "../../assets/gt3.png";
import FloatNavbar from "../Atoms/FloatNavbar";
const GoldenTicket = () => {
  return (
    <section>
      <Header />

      <FloatNavbar />
      <section className="hidden lg:block lg:px-16 lg:relative">
        <div className="border-x border-black pt-12" />
      </section>
      <section className="lg:px-16  border-t border-black">
        <AccountNavbar />
        <div className="w-full border-t h-auto flex lg:border-x border-black">
          <div className="w-full flex flex-col border-black py-6 gap-1">
            <p className="px-6 h-auto fs_w400_s48 flex items-center justify-start">
              GOLDEN TICKET
            </p>
            <p className="px-6 border-black font-poppins flex flex-col justify-evenly text-start">
              Buy any 5 products and activate subscription benefits for the
              entire year
            </p>
          </div>
        </div>
        <div className="flex px-6 py-6 flex-col lg:flex-row w-full h-full border-t lg:border-x border-black justify-between gap-5">
          <div className="w-full md:align-left ">
            <p className="text-xl h-auto font-poppins font-semibold flex justify-start">
              What are tickets?
            </p>
            <br />
            <p className=" md:pr-48 font-poppins flex text-left ">
              Tickets, just like loyalty programs and subscriptions enable extra
              benefits, including offline experiences, exclusive content on your
              account and a whole lot more as you’re part of the crew.
              <br />
              <br />
              They are set in stone and are designed for you, and we can’t
              modify or cancel them out of the blue..
            </p>
            <br />
            <input
              className="flex px-6 py-3 text-white font-Staatliches bg-black object-start"
              type="submit"
              value="view golden ticket"
            />
          </div>
          <div className="w-96 h-36 lg:w-36 lg:h-96 lg:align-right lg:bg-slate-50 flex lg:flex-col ">
            <img className="p-3 " src={gt1} alt="gt1" />
            <img className="p-3" src={gt2} alt="gt2" />
            <img className="p-3" src={gt3} alt="gt3" />
          </div>
        </div>
      </section>
      <div className="h-0 lg:border-t  border-black flex justify-center items-center" />
      <section className="hidden  lg:block lg:px-16 lg:relative">
        <div className="lg:border-x border-black pt-12" />
      </section>
      <Footer />
    </section>
  );
};

export default GoldenTicket;
