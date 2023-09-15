// import React, { useState } from 'react'
import React from "react";
import "../App.css";
import afloginimg from "../assets/Rectangle 32.png";
import aflogoufo from "../assets/Flying_saucer_logo 1.png";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <section className="h-screen w-screen flex md:flex-col lg:flex-row overflow-hidden flex-col gap-x-[7%] items-center font-poppins">
      <img
        className=" h-2/5 lg:h-full lg:w-auto md:h-1/4 md:w-1/3 w-screen md:object-fill object-cover object-top"
        src={afloginimg}
        alt="astrofeast login poster"
        title="poster"
      />
      <div className=" md:w-3/4 lg:w-[45%] h-full noscrollbar overflow-y-scroll flex flex-col justify-evenly items-center lg:items-start w-full  p-3">
        <img
          className="self-center"
          src={aflogoufo}
          alt="astrofeast logo"
          title="UFO"
        />
        <p className="text-2xl font-semibold whitespace-nowrap">
          On sign-up, everyone gets
        </p>
        <p className="whitespace-nowrap">
          Free Delivery on the first order & Access to all content
        </p>
        <hr className="h-px  mb-5  w-full border-[#0f0d0d]" />
        <Outlet />
        <p className="w-full my-4">or</p>
        <button className="w-full py-3 border-2 border-black capitalize">
          Sign up with google
        </button>
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
