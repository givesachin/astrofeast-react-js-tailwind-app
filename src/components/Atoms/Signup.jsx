import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {clientSideOpenNetworkHandler} from "../../utils/network.utils";
const initialFormData = {
  name: "",
  mobile: "",
  email: "",
  address: "",
  password: "",
};

const initialFormErrors = {
  name: "",
  mobile: "",
  email: "",
  address: "",
  password: "",
};

const Signup = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const {networkHandler} = clientSideOpenNetworkHandler();
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = { ...initialFormErrors };
    // Validate name
    if (!formData.name.trim()) {
      newFormErrors.name = "Name is required";
      isValid = false;
    } else {
      newFormErrors.name = ""; // Clear the error message
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
  const handleSignup = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with form submission
      const name = formData.name;
      const names = name.split(" ")
      const lastName = names.pop();
      const firstName = names.join(" ")
      const formDataToSend = new FormData()
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('firstname', firstName);
      formDataToSend.append('lastname', lastName);
      formDataToSend.append('phone', formData.mobile);
      // formDataToSend.append('address', formData.address);


      const res = await networkHandler.post('/v1.1.0/register', formDataToSend, {
        headers: {
          'Content-type': 'multipart/form-data'
        }
      })
      // console.log("Form submitted:", formData);
      // console.log("Form validation failed", formErrors);
      alert("You have been registered, please login now");
      navigate('/auth/login');
    } else {
      console.log("Form validation failed");
    }
  };
  useEffect(() => {
    document.title = "Astrofeast - Sign up";
  }, []);

  return (
    <section
      className="w-full h-screen dark:text-gray-100
    dark:bg-slate-900"
    >
      <form
        className="flex-col flex items-start gap-2 capitalize"
        action="/"
        method="get"
        onSubmit={handleSignup}
      >
        <div className="w-full text-start">
          <label htmlFor="name">name</label>
          <input
            className={`w-full text-lg py-4 pl-4 dark:bg-slate-900 border-2 ${
              formErrors.name ? "border-red-500" : "border-gray-400"
            }`}
            placeholder="enter name"
            onChange={handleChange}
            type="text"
            name="name"
            id="uname"
          />
          <p className="text-red-500 text-sm">{formErrors.name}</p>
        </div>
        <div className="w-full text-start">
          <label htmlFor="Mobile">Mobile number</label>
          <input
            className={`w-full text-lg  py-4 pl-4 border-2 dark:bg-slate-900  ${
              formErrors.mobile ? "border-red-500" : "border-gray-400"
            }`}
            placeholder="enter mobile number"
            onChange={handleChange}
            type="tel"
            name="mobile"
            id="umobile"
          />
          <p className="text-red-500 text-sm">{formErrors.mobile}</p>
        </div>
        <div className="w-full text-start">
          <label htmlFor="email">Email</label>
          <input
            className={`w-full text-lg  py-4 pl-4 border-2 dark:bg-slate-900  ${
              formErrors.email ? "border-red-500" : "border-gray-400"
            }`}
            placeholder="enter email"
            onChange={handleChange}
            type="email"
            name="email"
            id="umail"
          />
          <p className="text-red-500 text-sm">{formErrors.email}</p>
        </div>
        <div className="w-full text-start">
          <label htmlFor="address">Address</label>
          <textarea
            className={`w-full text-lg  py-4 pl-4 border-2 dark:bg-slate-900 ${
              formErrors.address ? "border-red-500" : "border-gray-400"
            }`}
            placeholder="enter address"
            onChange={handleChange}
            type="textarea"
            name="address"
            id="uaddress"
          />
          <p className="text-red-500 text-sm">{formErrors.address}</p>
        </div>
        <div className="w-full text-start">
          <label htmlFor="password">Password</label>
          <input
            className={`w-full text-lg py-4 pl-4 border-2 dark:bg-slate-900 ${
              formErrors.password ? "border-red-500" : "border-gray-400"
            }`}
            placeholder="enter password"
            onChange={handleChange}
            type="password"
            name="password"
            id="upassword"

          />
          <p className="text-red-500 text-sm">{formErrors.password}</p>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-black text-white capitalize dark:text-gray-900
          dark:bg-slate-300 "
        >
          Create Account{" "}
        </button>
        <div className="flex ">
          <p className="mr-1">already have an account?</p> {" "}
          <NavLink to="/auth/login">
            <p className="text-right w-full capitalize text-blue-600 active:text-purple-600 ">
              Log In
            </p>
          </NavLink>
        </div>
      </form>
    </section>
  );
};

export default Signup;
