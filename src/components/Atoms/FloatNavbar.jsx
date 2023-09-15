import React, { useState } from "react";
import aflogo from "../../assets/aflogo.svg";
import afmenu from "../../assets/afmenu.svg";
import afsearch from "../../assets/search.svg";
import afuser from "../../assets/afuser.svg";
import afbag from "../../assets/afbag.png";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

const FloatNavbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="fixed z-50 bottom-4 bg-slate-100 lg:hidden flex self-center w-auto mt-28 px-8 md:px-16 py-3 justify-evenly gap-x-10 items-center">
      <div className="">
        <img
          onClick={() => {
            setToggle(!toggle);
          }}
          className="invert"
          src={afmenu}
          alt="menu"
        />
      </div>
      <NavLink to="/feastbox">
        <img className="h-8" src={afbag} alt="bag" />
      </NavLink>
      <img src={afsearch} alt="search" className="h-8" />
      <button className="font-Staatliches h-fix whitespace-nowrap border md:border-2 border-black px-7 md:px-40 py-2 font-medium text-lg tracking-wide">
        see collection
      </button>
      {toggle && <Sidebar />}
    </div>
  );
};

export default FloatNavbar;
