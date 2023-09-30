import React, { useState } from "react";
import aflogo from "../../assets/aflogo.svg";
import afmenu from "../../assets/afmenu.svg";
import afsearch from "../../assets/search.svg";
import afuser from "../../assets/afuser.svg";
import afbag from "../../assets/afbag.png";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

const Header = () => {
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
    <>
      <header className="w-full h-auto  flex flex-col items-center">
        {/* black head bar */}
        <div className="w-full h-full py-5 pr-8 md:pr-16 bg-black flex justify-between items-center">
          <NavLink to="/">
            {" "}
            <img
              className="h-fit w-auto ml-8 md:ml-16"
              src={aflogo}
              alt="af-logo"
            />
          </NavLink>
          <div className="w-auto h-fit justify-between ">
            <div className="flex w-auto h-auto justify-center gap-x-6">
              {/* searchbar */}
              <div className="hidden lg:h-fit lg:w-auto lg:gap-x-2 lg:flex lg:border-b lg:border-white lg:items-center lg:justify-between ">
                <img
                  src={afsearch}
                  alt="search"
                  className="h-5 w-fit invert font-bold"
                />
                <input
                  className="w-[15.875rem] py-[0.6rem] text-white text-sm bg-black focus:outline-none placeholder:text-white"
                  type="text"
                  placeholder="Search / Track Order"
                />
              </div>
              {/* other icons */}
              <div className="w-auto h-auto flex justify-evenly gap-x-4 items-center">
                <NavLink to="/feastbox" className="">
                  <img className="lg:invert h-10" src={afbag} alt="bag" />
                </NavLink>
                <div className="">
                  <NavLink to="/auth/login" className="">
                    <img className="invert h-5" src={afuser} alt="user" />
                  </NavLink>
                </div>
                {/*
                              there is an issue when user will click first time,
                              the button will work. perhaps, the user
                              will click again after the sidebar is closed,
                              the button needs to be click 2 times to display sidebar
                            */}
                <div className="hidden lg:flex">
                  <img
                    onClick={handleToggleSidebar}
                    className=""
                    src={afmenu}
                    alt="menu"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* navigation */}
        <nav className="hidden lg:w-full lg:h-auto lg:flex lg:justify-between  lg:border-b lg:border-black">
          <a
            className="uppercase text-black p-4 w-full font-Staatliches"
            href=""
          >
            Appetizer
          </a>
          <a
            className="uppercase text-black border-l border-black  p-4 w-full font-Staatliches"
            href=""
          >
            desserts
          </a>
          <a
            className="uppercase text-black border-l border-black  p-4 w-full font-Staatliches"
            href=""
          >
            combos
          </a>
          <a
            className="uppercase text-black border-l border-black  p-4 w-full font-Staatliches"
            href=""
          >
            seafood
          </a>
          <a
            className="uppercase text-black border-l border-black  p-4 w-full font-Staatliches"
            href=""
          >
            vegetarian
          </a>
          <a
            className="uppercase text-black border-l border-black  p-4 w-full font-Staatliches"
            href=""
          >
            meat
          </a>
          <a
            className="uppercase text-[#F4A73F] border-l border-black  p-4 w-full font-Staatliches "
            href=""
          >
            view all
          </a>
        </nav>
        {/* menu */}
        {sidebarVisible && (
          <Sidebar
            sidebarVisible={sidebarVisible}
            closeSidebar={handleCloseSidebar}
            closeButtonState={closeButtonState}
          />
        )}
      </header>
    </>
  );
};

export default Header;
