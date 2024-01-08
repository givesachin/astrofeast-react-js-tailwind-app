import React, { useState, useEffect } from "react";
import Footer from "../Atoms/Footer";
import Header from "../Atoms/Header";
import AccountNavbar from "./AccountNavbar";
import { NavLink } from "react-router-dom";
import FloatNavbar from "../Atoms/FloatNavbar";
import { useClientSideAuthorizedNetworkHandler } from "../../utils/network.utils";
// const data = [
//   {
//     order_number: "12345",
//     no_of_meals: "10",
//     status: "Shipped",
//     shipped_to: "India gate, Delhi",
//     order_date: "Dec 14, 2022",
//   },
//   {
//     order_number: "12345",
//     no_of_meals: "10",
//     status: "Shipped",
//     shipped_to: "India gate, Delhi",
//     order_date: "Dec 14, 2022",
//   },
//   {
//     order_number: "12345",
//     no_of_meals: "10",
//     status: "Shipped",
//     shipped_to: "India gate, Delhi",
//     order_date: "Dec 14, 2022",
//   },
// ];
const Orders = () => {
  const [orders, setOrders] = useState([])
  const { authorizedPost } = useClientSideAuthorizedNetworkHandler()
  const fetchOrders = () => {
    authorizedPost("/list_orders").then((res) => {
      console.log(res.data)
      setOrders(res.data.orders)
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    document.title = "Astrofeast - Orders";
    fetchOrders()
  }, []);
  return (
    <section
      className="dark:text-gray-100
    dark:bg-slate-900"
    >
      <Header />
      <FloatNavbar />
      <section className="hidden lg:block lg:px-16 lg:relative">
        <div className="border-x border-black dark:border-slate-300 pt-12" />
      </section>
      <section className="lg:px-16  border-t border-black dark:border-slate-300">
        <AccountNavbar />
        {/* Orders page title */}
        <div className="w-full border-t h-auto flex md:flex-wrap flex-col md:flex-row lg:border-x border-black dark:border-slate-300 md:gap-y-3 pb-5 ">
          <div className="md:pl-6 order-1 w-full md:w-1/2   flex flex-col border-black dark:border-slate-300 pt-6  ">
            <p className="px-6 h-auto fs_w400_s48 flex items-center justify-start">
              orders
            </p>
          </div>
          <div className="md:pl-6 order-3 pb-3 ">
            <p className="order-3 px-6 border-black dark:border-slate-300 font-poppins flex flex-col justify-evenly text-start font-medium">
              Check previous orders. Track your current orders.
            </p>
          </div>
          {/* reedem code button */}
          <div className="md:pr-6 order-2 md:w-1/2 flex md:justify-end">
            <input
              className="flex text-3xl md:text-xl py-3 md:py-6 px-6 text-[#F4A73F] font-Staatliches hover:cursor-pointer"
              type="submit"
              value="reedem code"
            />
          </div>
        </div>
        {/* order info for desktop screen */}
        <div className="hidden lg:block lg:px-6 lg:py-3 lg:flex-column lg:w-full lg:h-full lg:border-t lg:border-x lg:border-black dark:border-slate-300 lg:justify-between lg:gap-5">
          {orders && orders?.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex px-6 py-6 flex-row w-full h-full border-black dark:border-slate-300 justify-between gap-5">
                <div>
                  <p className=" text-2xl h-auto font-Staatliches flex items-center justify-start">
                    order #{item.number}
                  </p>
                  <p className="text-sm font-poppins font-medium justify-start flex">
                    No of meals: {item.items.length}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-poppins justify-start flex">
                    Status
                  </p>
                  <p className="text-sm font-semibold font-poppins justify-start flex pt-2">
                    {item.status}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-poppins justify-start flex">
                    {" "}
                    Shipped to
                  </p>
                  <p className="text-sm font-semibold font-poppins justify-start flex pt-2">
                    {item.shipping_address.address + ", " + item.shipping_address.city}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-poppins justify-start flex">
                    Order Date
                  </p>
                  <p className="text-sm font-semibold font-poppins justify-start flex pt-2">
                    {(new Date(item.ordered_at)).toLocaleString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </p>
                </div>
                {/* Track Order button */}
                <div>
                  <NavLink to="/track-order" className="">
                    <input
                      className="flex px-6 py-3 text-white font-Staatliches bg-black object-start dark:text-gray-900
                      dark:bg-slate-300 hover:cursor-pointer"
                      type="submit"
                      value="track order"
                    />
                  </NavLink>
                </div>
              </div>

              {index !== orders?.length - 1 && (
                <div className="flex ">
                  <hr className="w-full border-t border-black dark:border-slate-300" />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* order info for mobile and tablet screen */}
        <div className="lg:hidden block px-2 md:px-6 py-3 flex-column w-full h-full border-t border-black dark:border-slate-300 justify-between gap-5">
          {orders && orders?.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex px-6 py-6 flex-col w-full h-full border-black dark:border-slate-300 justify-between gap-5">
                <div className="flex justify-between">
                  <div>
                    <p className="text-3xl md:text-2xl h-auto font-Staatliches flex items-center justify-start">
                      order #{item.number}
                    </p>
                    <p className="text-base md:text-sm font-medium font-poppins justify-start flex">
                      No of meals: {item.items.length}
                    </p>
                  </div>
                  <div>
                    <NavLink to="/track-order" className="">
                      <input
                        className="hidden md:flex md:px-6 md:py-3 md:text-white md:font-Staatliches md:bg-black md:object-start  dark:text-gray-900
                        dark:bg-slate-300"
                        type="submit"
                        value="track order"
                      />
                    </NavLink>
                  </div>
                </div>

                <div className="flex flex-wrap justify-between w-full  md:w-3/4">
                  <div className="w-1/2 md:w-auto ">
                    <p className="text-sm md:text-xs font-poppins justify-start flex">
                      Status
                    </p>
                    <p className="text-base md:text-sm font-semibold font-poppins justify-start flex pt-1 md:pt-2">
                      {item.status}
                    </p>
                  </div>
                  <div className="w-1/2 md:w-auto ">
                    <p className="text-sm md:text-xs font-poppins justify-start flex">
                      {" "}
                      Shipped to
                    </p>
                    <p className="text-base md:text-sm font-semibold font-poppins justify-start flex pt-1 md:pt-2">
                      {item.shipping_address.address + ", " + item.shipping_address.city}
                    </p>
                  </div>
                  <div className="pt-6 md:pt-0">
                    <p className="text-sm md:text-xs font-poppins justify-start flex">
                      Order Date
                    </p>
                    <p className="text-base md:text-sm font-semibold font-poppins justify-start flex pt-1 md:pt-2">
                      {(new Date(item.ordered_at)).toLocaleString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </p>
                  </div>
                </div>
                <div className="md:hidden">
                  <NavLink to="/track-order">
                    <input
                      className="w-full flex py-4 text-white font-Staatliches bg-black justify-center text-xl  dark:text-gray-900
                      dark:bg-slate-300"
                      type="submit"
                      value="track order"
                    />
                  </NavLink>
                </div>
              </div>

              {index !== orders?.length - 1 && (
                <div className="flex ">
                  <hr className="w-full border-t border-black dark:border-slate-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <div className="h-0 lg:border-t  border-black dark:border-slate-300 flex justify-center items-center" />
      <section className="hidden  lg:block lg:px-16 lg:relative">
        <div className="lg:border-x border-black dark:border-slate-300 pt-12" />
      </section>
      <Footer />
    </section>
  );
};

export default Orders;
