import React, { useEffect, useState } from "react";
import aflogo from "../../assets/aflogo.svg";
import afmenu from "../../assets/afmenu.svg";
import afsearch from "../../assets/search.svg";
import afuser from "../../assets/afuser.svg";
import afbag from "../../assets/afbag.png";
import Sidebar from "./Sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [closeButtonState, setCloseButtonState] = useState(false);
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleCloseSidebar = () => {
    setSidebarVisible(false);
    setCloseButtonState(true);
  };

  {
    /* For Darkmode */
  }
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];
  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);
  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });
  const isLoggedIn = () => {
    return localStorage.getItem("user") !== null;
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  return (
    <>
      <header className="w-full h-auto  flex flex-col items-center dark:bg-slate-900 dark:text-gray-100">
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
                  className="pt-[0.15rem] h-6 w-fit invert font-bold"
                />
                <input
                  className=" font-poppins w-[15.875rem] py-[0.6rem] text-white text-sm bg-black focus:outline-none placeholder:text-white"
                  type="text"
                  placeholder="Search / Track Order"
                />
              </div>
              {/* other icons */}
              <div className="w-auto h-auto flex justify-evenly gap-x-4 items-center  ">
                <NavLink to="/feastbox" className="">
                  <img className="lg:invert h-8" src={afbag} alt="bag" />
                </NavLink>
                <div className="">
                  {isLoggedIn() ? ( // Conditionally render the user profile link
                    <NavLink to="/my-account" className="">
                      <img className="invert h-5" src={afuser} alt="user" />
                    </NavLink>
                  ) : (
                    <NavLink to="/auth/login" className="">
                      <img className="invert h-5" src={afuser} alt="user" />
                    </NavLink>
                  )}
                </div>
                <div className="hidden lg:flex">
                  <img
                    onClick={handleToggleSidebar}
                    className="hover:cursor-pointer"
                    src={afmenu}
                    alt="menu"
                  />
                </div>
                <div className="hidden lg:flex">
                  {isLoggedIn() ? ( // Conditionally render something for logged-in users
                    <div>
                      {/* Add content for logged-in users */}
                      <button onClick={handleLogout}>
                        {" "}
                        <FontAwesomeIcon icon={faSignOutAlt} />
                      </button>
                    </div>
                  ) : null}
                </div>
                <div className="-right-1 top-4 z-50 fixed duration-100 dark:bg-slate-700 bg-gray-200 rounded flex flex-col">
                  {options?.map((opt) => (
                    <button
                      key={opt.text}
                      onClick={() => setTheme(opt.text)}
                      className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
                        theme === opt.text && "text-sky-600"
                      }`}
                    >
                      <ion-icon name={opt.icon}></ion-icon>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* navigation */}
        <nav className="hidden lg:w-full lg:h-auto lg:flex lg:justify-between  lg:border-b lg:border-black dark:lg:border-slate-300 dark:border-t">
          <a
            className="uppercase text-black dark:text-gray-100 p-4 w-full font-Staatliches"
            href=""
          >
            Appetizer
          </a>
          <a
            className="uppercase text-black dark:text-gray-100  border-l border-black dark:border-slate-300 p-4 w-full font-Staatliches"
            href=""
          >
            desserts
          </a>
          <a
            className="uppercase text-black dark:text-gray-100  border-l border-black dark:border-slate-300 p-4 w-full font-Staatliches"
            href=""
          >
            combos
          </a>
          <a
            className="uppercase text-black dark:text-gray-100  border-l border-black dark:border-slate-300 p-4 w-full font-Staatliches"
            href=""
          >
            seafood
          </a>
          <a
            className="uppercase text-black dark:text-gray-100  border-l border-black dark:border-slate-300 p-4 w-full font-Staatliches"
            href=""
          >
            vegetarian
          </a>
          <a
            className="uppercase text-black dark:text-gray-100  border-l border-black dark:border-slate-300 p-4 w-full font-Staatliches"
            href=""
          >
            meat
          </a>
          <a
            className="uppercase text-[#F4A73F] border-l border-black dark:border-slate-300 p-4 w-full font-Staatliches "
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
