import React, { useState } from "react";

import Footer from "./Atoms/Footer";
import Header from "./Atoms/Header";

import user from "../assets/user.jpg";
import pencil from "../assets/pencil-2-xxl.png";
import AccountNavbar from "./Account/AccountNavbar";
import FloatNavbar from "./Atoms/FloatNavbar";
const initialFormData = {
  first_name: "",
  last_name: "",
  mobile: "",
  email: "",
  address: "",
};

const initialFormErrors = {
  first_name: "",
  last_name: "",
  mobile: "",
  email: "",
  address: "",
};

const Account = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = { ...initialFormErrors };
    // Validate first_name
    if (!formData.first_name.trim()) {
      newFormErrors.first_name = "First name is required";
      isValid = false;
    } else {
      newFormErrors.first_name = ""; // Clear the error message
    }
    // Validate last_name
    if (!formData.last_name.trim()) {
      newFormErrors.last_name = "Last name is required";
      isValid = false;
    } else {
      newFormErrors.last_name = ""; // Clear the error message
    }

    // Validate mobile
    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(formData.mobile)) {
      newFormErrors.mobile = "Enter a valid 10-digit mobile number";
      isValid = false;
    } else {
      newFormErrors.mobile = ""; // Clear the error message
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newFormErrors.email = "Enter a valid email address";
      isValid = false;
    } else {
      newFormErrors.email = ""; // Clear the error message
    }

    // Validate address
    if (!formData.address.trim()) {
      newFormErrors.address = "Address is required";
      isValid = false;
    } else {
      newFormErrors.address = ""; // Clear the error message
    }

    setFormErrors(newFormErrors);
    return isValid;
  };

  const [users] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleEdit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with form submission
      console.log("Form submitted:", formData);
      console.log("Form validation failed", formErrors);
    } else {
      console.log("Form validation failed");
    }
  };
  return (
    <section
      className="dark:text-gray-100
    dark:bg-slate-900"
    >
      <Header />
      <FloatNavbar />
      <section className="hidden lg:block lg:px-16 lg:relative ">
        <div className="border-x border-black dark:border-slate-300 pt-12" />
      </section>
      <section className="lg:px-16 border-t border-black dark:border-slate-300">
        <AccountNavbar />
        <div className="w-full gap-y-5 border-t h-auto flex md:flex-wrap flex-col md:flex-row lg:border-x border-b border-black dark:border-slate-300">
          <div className="px-6 md:pl-6 lg:px-3 order-1 w-full md:w-1/2   flex flex-col border-black dark:border-slate-300 pt-6 ">
            <p className="px-6 h-auto fs_w400_s48 flex items-center justify-start">
              MY ACCOUNT
            </p>
          </div>
          <div className="md:pl-6 lg:px-3 order-3 pb-3">
            <p className=" px-6 w-6/7 font-poppins md:w-full border-black dark:border-slate-300 flex flex-col justify-evenly text-start md:whitespace-nowrap">
              Personalize your experience here and see everything we track and
              do with your data.
            </p>
          </div>
          <div className="order-2 md:w-1/2 h-10 flex gap-3 md:p-8 place-content-start px-6 md:justify-end ">
            <img className="h-6 w-6 md:h-5 md:w-5" src={pencil} alt="bag" />
            <p className="text-orange-400 font-Staatliches text-2xl md:text-xl ">
              EDIT DETAILS
            </p>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col lg:flex-row justify-center lg:border-x border-black dark:border-slate-300">
          <ul className="h-auto flex flex-col items-start p-6 ">
            <div>
              <img
                className=" w-full object-cover h-40"
                src={user}
                title="poster"
              />
            </div>
          </ul>
          <div className="w-full h-auto p-6 flex flex-col">
            <section className="w-full h-auto">
              <form
                className="flex-col flex items-start gap-5 capitalize"
                action="/"
                method="get"
                onSubmit={handleEdit}
              >
                <div className="w-full flex flex-col md:flex-row gap-5">
                  <div className="w-full text-start ">
                    <input
                      className={`w-full py-2 pl-4  border-2 dark:bg-slate-800 ${
                        formErrors.first_name
                          ? "border-red-500"
                          : "border-gray-400"
                      }`}
                      placeholder="Enter first name"
                      onChange={handleChange}
                      type="text"
                      name="first_name"
                      id="ufirstname"
                    />
                    <p className="text-red-500 text-sm">
                      {formErrors.first_name}
                    </p>
                  </div>
                  <div className="w-full text-start">
                    <input
                      className={`w-full  py-2 pl-4  border-2 dark:bg-slate-800 ${
                        formErrors.last_name
                          ? "border-red-500"
                          : "border-gray-400"
                      }`}
                      placeholder="Enter last name"
                      onChange={handleChange}
                      type="text"
                      name="last_name"
                      id="ulastname"
                    />
                    <p className="text-red-500 text-sm">
                      {formErrors.last_name}
                    </p>
                  </div>
                </div>
                <div className="w-full text-start">
                  <input
                    className={`w-full py-2 pl-4 border-2 dark:bg-slate-800 ${
                      formErrors.email ? "border-red-500" : "border-gray-400"
                    }`}
                    placeholder="Email address"
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="umail"
                  />
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                </div>
                <div className="w-full text-start">
                  <input
                    className={`w-full py-2 pl-4 border-2 dark:bg-slate-800 ${
                      formErrors.mobile ? "border-red-500" : "border-gray-400"
                    }`}
                    placeholder="Phone number"
                    onChange={handleChange}
                    type="tel"
                    name="mobile"
                    id="umobile"
                  />
                  <p className="text-red-500 text-sm">{formErrors.mobile}</p>
                </div>
                <div className="w-full text-start">
                  <textarea
                    className={`w-full py-2 pl-4 border-2 dark:bg-slate-800 ${
                      formErrors.address ? "border-red-500" : "border-gray-400"
                    }`}
                    placeholder="Address"
                    onChange={handleChange}
                    type="textarea"
                    name="address"
                    id="uaddress"
                  />
                  <p className="text-red-500 text-sm">{formErrors.address}</p>
                </div>
                <div className="flex gap-5">
                  <input
                    className=" px-6 py-3 text-white font-Staatliches  bg-black dark:text-gray-900
                    dark:bg-slate-300 "
                    type="submit"
                    value="SAVE CHANGES"
                  />
                  <input
                    className=" px-6 py-3 text-black font-Staatliches border-2 border-gray-400 dark:border-slate-300 dark:text-gray-100"
                    type="reset"
                    value="DISCARD"
                  />
                </div>
              </form>
            </section>
          </div>
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

export default Account;
