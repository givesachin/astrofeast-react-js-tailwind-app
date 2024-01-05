import React, { useState } from "react";
import afclose from "../../assets/close.svg";
import afsearch from "../../assets/search.svg";
import afuser from "../../assets/afuser.svg";
import afbag from "../../assets/afbag.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
const Sidebar = ({ sidebarVisible, closeSidebar, closeButtonState }) => {
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();
  const isLoggedIn = () => {
    return localStorage.getItem("user") !== null;
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth/login");
  };
  return (
    <>
      <section
        className={`overflow-hidden w-screen h-screen absolute top-0  z-40 flex flex-row-reverse bg-black/50 ${
          sidebarVisible ? "block" : "hidden"
        }`}
      >
        <div className="w-3/6 h-screen bg-white dark:bg-slate-900 py-16 px-20 flex-col flex justify-between gap-y-16 items-start ">
          <div
            class="relative z-10"
            aria-labelledby="slide-over-title"
            role="dialog"
            aria-modal="true"
          >
            <div class="fixed inset-0 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 overflow-hidden">
              <div class="absolute inset-0 overflow-hidden">
                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <div class="pointer-events-auto relative w-screen max-w-4xl">
                    <div class="max-w-4xl flex flex-col h-auto bg-white dark:bg-slate-900 py-6 shadow-xl ">
                      <div class="relative flex-1 w-auto h-auto p-1 md:p-5 md:pt-10 md:pl-5 ">
                        <div className="flex w-full h-auto flex-wrap md:flex-nowrap items-center gap-x-7 ">
                          {/* searchbar */}
                          <div className="mx-10 md:mx-1 order-4 md:mr-20 lg:mr-40 md:order-1 pt-10 md:pt-0 h-fit md:w-1/2 w-full gap-x-2 flex border-b-2 py-[0.6rem] border-black dark:border-slate-300 items-center ">
                            <img
                              src={afsearch}
                              alt="search"
                              className=" h-6 w-fit  font-bold dark:invert"
                            />
                            <input
                              className="w-[15.875rem] placeholder:text-black text-sm bg-white dark:placeholder:text-gray-100
                              dark:bg-slate-900 focus:outline-none"
                              type="text"
                              placeholder="Search / Track Order"
                            />
                          </div>
                          {/* other icons */}
                          <div className="order-2 w-auto h-auto align-bottom dark:invert ">
                            <NavLink to="/feastbox" className="">
                              <img className="h-8" src={afbag} alt="bag" />
                            </NavLink>
                          </div>
                          <div className="order-3 md:order-3 dark:invert">
                            {isLoggedIn() ? ( // Conditionally render the user profile link
                              <NavLink to="/my-account" className="">
                                <img className=" h-5" src={afuser} alt="user" />
                              </NavLink>
                            ) : (
                              <NavLink to="/auth/login" className="">
                                <img className=" h-5" src={afuser} alt="user" />
                              </NavLink>
                            )}
                          </div>
                          <div className="pl-2 md:pl-5 pr-36 md:pr-5 order-1 md:order-4 dark:invert">
                            <img
                              onClick={closeSidebar}
                              className=" h-5 hover:cursor-pointer"
                              src={afclose}
                              alt="menu"
                            />
                          </div>{" "}
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
                          <div className="flex justify-evenly items-center gap-x-10"></div>
                        </div>
                        <div className="h-auto flex flex-col justify-start items-start gap-y-7 md:gap-y-9 px-10 pt-9 md:px-8">
                          <NavLink to="/my-account">
                            <p className="capitalize text-3xl font-medium">
                              account
                            </p>
                          </NavLink>
                          <NavLink to="/shop">
                            {" "}
                            <p className="capitalize text-3xl  font-medium">
                              shop
                            </p>
                          </NavLink>
                          <p className="capitalize text-3xl  font-medium">
                            gifts
                          </p>
                          <p className="capitalize text-3xl  font-medium">
                            journal
                          </p>
                          <NavLink to="/about">
                            {" "}
                            <p className="capitalize text-3xl  font-medium">
                              about us
                            </p>
                          </NavLink>
                          <NavLink to="/blog">
                            {" "}
                            <p className="capitalize text-3xl  font-medium">
                              blog
                            </p>
                          </NavLink>
                          <NavLink to="/blog/recipe">
                            {" "}
                            <p className="capitalize text-3xl  font-medium">
                              recipes
                            </p>
                          </NavLink>
                        </div>
                        <hr className="border border-black dark:border-slate-300 mx-5 mt-7 md:mt-64" />
                        <div className="w-full flex flex-col md:flex-row  md:justify-between gap-y-7 md:gap-y-9 px-10 mt-10">
                          <div className="flex">
                            <p className="uppercase text-lg font-semibold hover:cursor-pointer">
                              faq
                            </p>
                          </div>
                          <div className="flex ">
                            <p className="uppercase text-lg font-semibold hover:cursor-pointer">
                              get in touch
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {closeButtonState}
      </section>
    </>
  );
};

export default Sidebar;
