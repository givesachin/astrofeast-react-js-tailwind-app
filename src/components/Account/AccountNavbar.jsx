import React from "react";
import { NavLink } from "react-router-dom";
import FloatNavbar from "../Atoms/FloatNavbar";

const AccountNavbar = () => {
  const click =
    "uppercase flex-shrink-0  w-full font-Staatliches underline decoration-4 text-black dark:text-gray-100 underline-offset-[22px]";
  const hover =
    "uppercase text-[#838282]  flex-shrink-0  w-full font-Staatliches hover:underline hover:decoration-4 hover:text-black hover: underline-offset-[22px] dark:text-gray-400 dark:hover:text-gray-100";
  return (
    <section className="">
      <FloatNavbar />
      <div
        className="flex overflow-auto md:overflow-visible flex-nowrap w-full p-6 text-start text-2xl space-x-7 lg:border-x border-black relative 
dark:bg-slate-900 dark:border-slate-300"
      >
        {/* orders link */}
        <div className="flex flex-shrink-0 md:flex-shrink-1">
          <NavLink
            to="/orders"
            className={({ isActive }) => (isActive ? click : hover)}
          >
            orders
          </NavLink>
        </div>
        {/* subscriptions link */}
        <div className="flex flex-shrink-0 md:flex-shrink-1">
          <NavLink
            to="/subscriptions"
            className={({ isActive }) => (isActive ? click : hover)}
          >
            {" "}
            subscriptions
          </NavLink>
        </div>
        {/* golden ticket link */}
        <div className="flex flex-shrink-0 md:flex-shrink-1">
          <NavLink
            to="/golden-ticket"
            className={({ isActive }) => (isActive ? click : hover)}
          >
            {" "}
            golden ticket
          </NavLink>
        </div>
        {/* my-account link */}
        <div className="flex flex-shrink-0 md:flex-shrink-1">
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? click : hover)}
          >
            account
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default AccountNavbar;
