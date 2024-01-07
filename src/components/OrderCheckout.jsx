import { React, useState, useEffect } from "react";
import afnonveg from "../assets/afnonveg.avif";
import afherobg from "../assets/herobg.png";
import Footer from "./Atoms/Footer";
import Header from "./Atoms/Header";
import QuantityBox from "./Atoms/QuantityBox";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import FloatNavbar from "./Atoms/FloatNavbar";
import axios from "axios";
import { useAuth } from "../utils/auth.utils";
import { useClientSideAuthorizedNetworkHandler } from "../utils/network.utils";
const initialFormData = {
  first_name: "",
  last_name: "",
  mobile: "",
  email: "",
  address: "",
  state: "",
  zipcode: "",
};

const initialFormErrors = {
  first_name: "",
  last_name: "",
  mobile: "",
  email: "",
  address: "",
  state: "",
  zipcode: "",
};

const products = [
  { id: 0, prod_img: afnonveg, title: "Fresh Pancakes" },
  { id: 1, prod_img: afnonveg, title: "Fresh Pancakes" },
  { id: 2, prod_img: afnonveg, title: "Fresh Pancakes" },
];

// const added_products = [
//   { id: 0, prod_img: afnonveg, title: "Fresh Pancakes", price: 249.0 },
//   { id: 1, prod_img: afnonveg, title: "Fresh Pancakes", price: 249.0 },
// ];



const OrderCheckout = () => {
  
    const { authorizedPost } = useClientSideAuthorizedNetworkHandler()
  const { state } = useLocation();
  const { product_id } = state; // Read values passed on state
  const [cart, setCart] = useState([]);
  // const [product, setProduct] = useState([]);

  const fetchCart = ()=>{
      authorizedPost("/cart").then((res)=>{
        console.log(res.data)
          setCart(res.data)
      }).catch((err)=>{
        console.log(err)
      })
  }

  console.log({ product_id });


  useEffect(() => {

    fetchCart();
  }, [])


  useEffect(() => {
    document.title = "Astrofeast - Order Checkout";
  }, []);
  const [FilterToggle, setFilterToggle] = useState();
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);




  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
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
    if (!formData.state.trim()) {
      newFormErrors.state = "State is required";
      isValid = false;
    } else {
      newFormErrors.state = ""; // Clear the error message
    }
    if (!formData.zipcode.trim()) {
      newFormErrors.zipcode = "Zip Code is required";
      isValid = false;
    } else {
      newFormErrors.zipcode = ""; // Clear the error message
    }

    setFormErrors(newFormErrors);
    return isValid;
  };

  function handleFilter() {
    setFilterToggle(!FilterToggle);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const { helpers } = useAuth()
  const navigate = useNavigate();
  const handleEdit = (event) => {
    event.preventDefault();
    const token = helpers.getAuthToken().token
    console.log("token", token)
    // if (validateForm()) {
    //   // Form is valid, proceed with form submission
    //   console.log("Form submitted:", formData);
    //   console.log("Form validation failed", formErrors);
    //   alert("Form submitted successfully!");
    //   navigate("/payment-success");
    // } else {
    //   console.log("Form validation failed");
    // }


    let data = {
      "billpayer": {
        "email": "test.customer2@gmail.com",
        "phone": "8140996031",
        "firstname": "Sachin",
        "lastname": "Bhoi",
        "company_name": null,
        "tax_nr": null,
        "address": {
          "country_id": "IN",
          "address": "Consult Anubhav",
          "postalcode": "390001",
          "city": "Vadodara"
        }
      },
      "ship_to_billing_address": "1",
      "shipping_address": {
        "name": null,
        "country_id": null,
        "address": null,
        "postalcode": null,
        "city": null
      },
      "payment_method": "1",
      "notes": "see ya."
    }

    async function displayRazorpay(order_number) {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const result = await authorizedPost("/initiate_payment", {order_id:order_number},)




      if (!result) {
        alert("Server error. Are you online?");
        return;
      }

      // Getting the order details back
      const { order_total: amount, order: result_order, customer, key, rzp_order_id } = result.data;


      const options = {
        key: key, // Enter the Key ID generated from the Dashboard
        amount: amount,
        currency: "USD",
        name: customer.name,
        description: "Test Transaction",
        order_id: rzp_order_id,
        handler: async function (response) {
          const data = {
            "razorpay_payment_id": response.razorpay_payment_id,
            "razorpay_order_id": response.razorpay_order_id,
            "razorpay_signature": response.razorpay_signature,
            "order_id": rzp_order_id

          };

          const result = await authorizedPost("/capture_payment", data,)

          console.log("payment capture", result)

          if (typeof result.data.payment == 'undefined' ||  result.data.payment < 1) {
            alert("you will get refund by your bank")
          } else {
            navigate("/payment-success")
          }


        },
        prefill: {
          name: customer.name,
          email: customer.email,
          contact: "9999999999",
        },
        notes: {
          address: result_order.shipping_address_id,
        },
        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }





    authorizedPost('/create_order', data, {
      // withCredentials: false

    }).then((response) => {
      console.log(JSON.stringify(response.data));
      // navigate({
      //   pathname: "/checkout",
      // }, {
      //   replace: false,
      //   state:{
      //         product_id:id
      //       }
      // })
      displayRazorpay(response.data.order.number)

      // navigate("/payment-success", {
      //   state:{
      //       // order_id:response.data.order.number,
      //       order:response.data.order
      //   }
      // })

    })
      .catch((error) => {
        console.log(error);
        // navigate("/payment-success", {
        //   state: {
        //     order_id: "AS-0034"
        //   }
        // })
      });


  };
  const [selectedOption, setSelectedOption] = useState("weekly"); // Default selected option

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Header />
      <FloatNavbar />
      <section
        className="lg:px-16 relative font-poppins dark:text-gray-100
dark:bg-slate-900"
      >
        <div className="lg:border-x border-black dark:border-slate-300 lg:pt-10">
          <hr className="w-full border-black dark:border-slate-300 absolute left-0" />
          <div className="w-full flex flex-col justify-start items-start gap-y-4 py-9 px-8 ">
            <p className="font-Staatliches text-5xl text-left">
              order checkout
            </p>
          </div>

          <div className="w-full flex border-t border-black dark:border-slate-300">
            <div className="w-full h-auto flex flex-col">
              <section className="w-full h-auto">
                <form
                  className="flex flex-col lg:flex-row items-start gap-5 capitalize"
                  action="/"
                  method="get"
                  onSubmit={handleEdit}
                >
                  <div className="w-full lg:w-2/3 p-6 gap-y-10 flex flex-col border-black dark:border-slate-300">
                    <div>
                      <p className="font-Poppins text-xl text-left">
                        Enter the recipient's details
                      </p>
                    </div>
                    <div className="w-full text-start">
                      <input
                        className={`w-full py-2 pl-4 border-2 dark:bg-slate-900  ${formErrors.email
                          ? "border-red-500"
                          : "border-gray-400"
                          }`}
                        placeholder="Email address"
                        onChange={handleChange}
                        type="email"
                        name="email"
                        id="umail"
                      />
                      <p className="text-red-500 text-sm ">
                        {formErrors.email}
                      </p>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-5">
                      <div className="w-full text-start">
                        <input
                          className={`w-full py-2 pl-4   dark:bg-slate-900 border-2 ${formErrors.first_name
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
                          className={`w-full  py-2 pl-4  dark:bg-slate-900 border-2 ${formErrors.last_name
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
                        className={`w-full py-2 pl-4 dark:bg-slate-900 border-2  ${formErrors.mobile
                          ? "border-red-500"
                          : "border-gray-400"
                          }`}
                        placeholder="Phone number"
                        onChange={handleChange}
                        type="tel"
                        name="mobile"
                        id="umobile"
                      />
                      <p className="text-red-500 text-sm">
                        {formErrors.mobile}
                      </p>
                    </div>
                    <div className="w-full text-start">
                      <input
                        className={`w-full py-2 pl-4 dark:bg-slate-900 border-2  ${formErrors.state
                          ? "border-red-500"
                          : "border-gray-400"
                          }`}
                        placeholder="State"
                        onChange={handleChange}
                        type="text"
                        name="state"
                        id="ustate"
                      />
                      <p className="text-red-500 text-sm">{formErrors.state}</p>
                    </div>
                    <div className="w-full text-start">
                      <input
                        className={`w-full py-2 pl-4 dark:bg-slate-900 border-2  ${formErrors.zipcode
                          ? "border-red-500"
                          : "border-gray-400"
                          }`}
                        placeholder="Zip code"
                        onChange={handleChange}
                        type="number"
                        name="zipcode"
                        id="uzipcode"
                      />
                      <p className="text-red-500 text-sm">
                        {formErrors.zipcode}
                      </p>
                    </div>
                    <div className="w-full text-start">
                      <textarea
                        className={`w-full py-2 pl-4  dark:bg-slate-900 border-2  ${formErrors.address
                          ? "border-red-500"
                          : "border-gray-400"
                          }`}
                        placeholder="Address"
                        onChange={handleChange}
                        type="textarea"
                        name="address"
                        id="uaddress"
                      />
                      <p className="text-red-500 text-sm">
                        {formErrors.address}
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/3 flex border-t lg:border-t-0 lg:border-l border-black dark:border-slate-300 ">
                    <div className="w-full ">
                      <div className="">
                        <p className="p-8 text-left text-3xl font-Staatliches">
                          Your Cart ({cart?.cart?.items?.length??0})
                        </p>
                      </div>
                      <div className="border-t border-black dark:border-slate-300">
                        <p className="p-8 text-sm text-[#F4A73F] text-left font-Poppins"></p>
                      </div>
                      {cart?.cart?.items?.map((added) => (
                        <div
                          key={added.id}
                          className="h-auto px-8 pb-8 w-auto flex lg:justify-normal justify-between"
                        >
                          <img
                            className="w-32 h-32 object-cover"
                            src={added.media ? added.media[0].original_url : "#"}
                            alt="product"
                          />
                          <div className="pl-8">
                            <p className="text-xl font-poppins font-semibold w-full ">
                              {added.name}
                            </p>
                            <QuantityBox price={Number(added.price??0)} initQuantity={added.quantity} />
                            {/* <p className="font-Poppins text-left text-gray-400">
                              ${added.price}
                            </p> */}
                          </div>
                        </div>
                      ))}

                      <div className="flex flex-col p-8 border-t border-black dark:border-slate-300 gap-y-3 font-poppins">
                        <div className="text-start flex justify-between">
                          <p>Service fee</p>
                          <p>$83</p>
                        </div>
                        <div className="text-start flex justify-between">
                          <p>Taxes and fees</p>
                          <p>$29</p>
                        </div>
                        <div className="text-start flex justify-between">
                          <p>Weekly discount</p>
                          <p>-$28</p>
                        </div>
                        <div className="text-start flex justify-between border-y border-black dark:border-slate-300 p-3">
                          <p>Total</p>
                          <p>${((cart.cart_total??0)+(83+29)-28).toFixed(2)}</p>
                        </div>
                        {/* <NavLink to="/payment-success" className=""> */}
                        <input
                          className="hover:cursor-pointer w-full p-3 text-white font-Staatliches  bg-black dark:text-gray-900
                            dark:bg-slate-300 "
                          type="submit"
                          value="place order    >"
                          onClick={handleEdit}
                        />
                        {/* </NavLink> */}
                      </div>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:h-0 lg:border-t  border-black dark:border-slate-300 lg:flex lg:justify-center lg:items-center" />
      <section className="lg:px-16 lg:relative dark:bg-slate-900">
        <div className="lg:border-x border-black dark:border-slate-300 pt-12" />
      </section>

      <Footer />
    </>
  );
};

export default OrderCheckout;
