import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import afbag from "../../assets/afbag.png";
import afmenu from "../../assets/afmenu.svg";
import afsearch from "../../assets/search.svg";
import Sidebar from "./Sidebar";

const FloatNavbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [closeButtonState, setCloseButtonState] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleCloseSidebar = () => {
    setSidebarVisible(false);
    setCloseButtonState(true);
  };

  return (
    <div className="fixed z-50 bottom-4 bg-slate-100 lg:hidden flex self-center w-auto mt-28 px-8 md:px-16 py-3 justify-evenly gap-x-10 items-center">
      {/* Menu */}
      <div className="">
        <img
          onClick={handleToggleSidebar}
          className="invert"
          src={afmenu}
          alt="menu"
        />
      </div>
      {/* Cart / Bag */}
      <NavLink to="/feastbox">
        <img className="h-8" src={afbag} alt="bag" />
      </NavLink>
      {/* Search */}
      <img src={afsearch} alt="search" className="h-8" />
      {/* Button */}
      <button className="font-Staatliches h-fix whitespace-nowrap border md:border-2 border-black px-7 md:px-40 py-2 font-medium text-lg tracking-wide">
        see collection
      </button>
      {sidebarVisible && (
        <Sidebar
          sidebarVisible={sidebarVisible}
          closeSidebar={handleCloseSidebar}
          closeButtonState={closeButtonState}
        />
      )}
    </div>
  );
};

export default FloatNavbar;
