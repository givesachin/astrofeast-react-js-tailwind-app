import React from "react";
const CTABar = () => {
  return (
    <div className="hidden lg:absolute lg:w-screen lg:h-auto lg:z-10 lg:block">
      <ul className="text-[14px] w-full bg-[#BDC695] h-auto p-2 flex justify-center gap-x-12 ">
        <li>
          {" "}
          <p className="w-full">
            &#x2022; We are currently avaliable at delhi, to know more{" "}
            <span className="font-bold hover:cursor-pointer">Click here</span>
          </p>
        </li>
        <li>
          {" "}
          <p className="w-full">
            {" "}
            &#x2022; We are currently avaliable at delhi, to know more{" "}
            <span className="font-bold hover:cursor-pointer">Click here</span>
          </p>{" "}
        </li>
      </ul>
    </div>
  );
};
export default CTABar;
