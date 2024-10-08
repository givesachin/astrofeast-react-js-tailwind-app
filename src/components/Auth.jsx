// import React, { useState } from 'react'
import React from "react";
import "../App.css";
import afloginimg from "../assets/Rectangle 32.png";
import aflogoufo from "../assets/Flying_saucer_logo 1.png";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <section
      className="h-screen w-screen flex md:flex-col lg:flex-row overflow-hidden flex-col gap-x-[7%] items-center font-poppins dark:text-gray-100
    dark:bg-slate-900"
    >
      <img
        className="lg:h-full lg:w-auto h-1/4 w-1/3 md:object-fill object-cover object-top"
        src={afloginimg}
        alt="astrofeast login poster"
        title="poster"
      />
      <div className=" md:w-3/4 lg:w-[45%] h-full noscrollbar overflow-y-scroll flex flex-col gap-10 items-center lg:items-start w-full md:pt-32 p-3 md:p-3">
        <img
          className="self-center"
          src={aflogoufo}
          alt="astrofeast logo"
          title="UFO"
        />
        <p className="text-2xl font-semibold whitespace-nowrap">
          On sign-up, everyone gets
        </p>
        <p className="md:whitespace-nowrap">
          Free Delivery on the first order & Access to all content
        </p>
        <hr className="h-px  mb-3  w-full border-[#0f0d0d] dark:border-slate-300" />
        <Outlet  />
        {/* <p className="w-full my-4">or</p>
        <button className="w-full py-3 border-2 border-black dark:border-slate-300 capitalize">
          Sign up with google
        </button> */}
        <hr className="h-px  mt-5  w-full border-[#B9B9B9]" />
        <div className="flex justify-center w-full ">
          <p>Privacy</p>
          <p className="w-4">&#x2022;</p>
          <p>Terms</p>
        </div>
      </div>
    </section>
  );
};

export default Auth;
