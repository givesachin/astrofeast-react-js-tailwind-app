import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as WhatsAppIcon } from "../../assets/whatsapp.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";
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
                  className="w-full px-6 py-3 hover:cursor-pointer text-white dark:bg-slate-300 dark:text-gray-900 font-Staatliches  bg-black lg:w-auto md:w-1/4 text-xl md:tracking-wider"
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
            <div className="w-full  gap-y-6 md:gap-y-5 p-8 md:p-16 flex flex-col items-start font-poppins lg:gap-y-4">
              <p className=" font-semibold text-xl md:text-2xl hover:cursor-pointer">
                {" "}
                Kitchens
              </p>
              <p className=" font-semibold text-xl md:text-2xl hover:cursor-pointer">
                {" "}
                Investors
              </p>
              <p className=" font-semibold text-xl md:text-2xl hover:cursor-pointer">
                {" "}
                Careers
              </p>
              <p className=" font-semibold text-xl md:text-2xl hover:cursor-pointer">
                {" "}
                Cold Chain
              </p>
              <p className=" font-semibold text-xl md:text-2xl hover:cursor-pointer">
                {" "}
                Sustainability
              </p>
            </div>
          </div>
          <div className="w-1/2 md:w-full flex flex-col">
            <p className="px-8 md:px-16 py-4 md:py-6 text-start border-b text-lg font-medium uppercase border-black dark:border-slate-300 font-poppins">
              quick links
            </p>
            <div className="w-full md:gap-y-5 lg:gap-y-2 p-8 md:p-16 flex flex-col items-start font-poppins space-y-2">
              <NavLink to="/my-account" className="">
                <p className=" font-semibold text-xl md:text-2xl hover:cursor-pointer">
                  {" "}
                  Account
                </p>
              </NavLink>
              <NavLink to="/shop">
                <p className=" font-semibold text-xl md:text-2xl hover:cursor-pointer">
                  {" "}
                  Shop
                </p>
              </NavLink>
              <NavLink to="/golden-ticket">
                <p className=" font-semibold text-xl md:text-2xl hover:cursor-pointer">
                  {" "}
                  Golden Ticket
                </p>
              </NavLink>
              <p className=" font-semibold text-xl md:text-2xl hover:cursor-pointer">
                {" "}
                FAQs{" "}
              </p>
              <p className=" font-semibold text-xl md:text-2xl hover:cursor-pointer">
                {" "}
                Support
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="w-full font-poppins flex flex-col-reverse gap-y-8 lg:flex-row justify-between px-16 py-12 border-t border-black dark:border-slate-300 font-medium mb-10 lg:mb-0">
        <p className="w-full lg:text-left uppercase">2023 &#169; astrofeast</p>
        <div className="w-full flex md:place-content-center  flex-col md:flex-row gap-y-8 gap-x-8">
          <div className="flex gap-y-8 justify-center lg:justify-start gap-x-8 uppercase">
            <p className="hover:cursor-pointer">whitepaper</p>
            <p className="hover:cursor-pointer">privacy</p>
            <p className="hover:cursor-pointer">terms</p>
          </div>
          {/* Whatsapp, Twitter, Linkdin,  */}
          <div className="flex gap-y-8 justify-center lg:justify-end gap-x-8 uppercase  ">
            {/**Whatsapp */}
            <WhatsAppIcon />
            {/**Twitter */}
            <TwitterIcon />
            {/**Linkdin*/}
            <LinkedInIcon />
            {/**Instagram*/}
            <InstagramIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
