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
  const { state } = useLocation();
  const { product_id } = state; // Read values passed on state
  const [products, setProducts] = useState([]);
  // const [product, setProduct] = useState([]);

  const fetchProducts = () => {

    let data = JSON.stringify({
      "filters": {
        "state": "active"
      }
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://test.astrofeast.com/admin/guest/customers/api/v1.2.0/products',
      headers: {
        'Accept': 'application/json',
        'X-CSRF-Token': '123',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 1|mKCcYsvGRvABFFAbX03B6sLQJ1E3g2VHSmfH0pg2167fe6d9',
        'Cookie': 'XSRF-TOKEN=eyJpdiI6Im9SdnkrYlQ0N09qQk00d0R3U21Xb1E9PSIsInZhbHVlIjoiSXZNZDY2cVlnTk1zeFU3NHpTeUFkMXpEM1EremhvUVNqenFoaTVLNTFKbWI2ZXJqZHY2M05XRTIvZEx6b2tNS0FFUmNaSUpqeDFjTHZjcVdUdUhBWkQ3UU40V1ozU1JQZzIzRjNCaWJINHBNVFI1ZG5Cb3cxMTNUUVQ2YjNuUlQiLCJtYWMiOiJkNzI3NDQ5YWM5MjExNTNhYjlkNjlhMzk5ZGM3MTk2ZjZhMTQzNjQxMTE5NDJiNmYwZTM3ZDZmYjUyOTJhNDY0IiwidGFnIjoiIn0%3D; laravel_session=BGdcWTBgCHwkcBuN8eDAU3v0Y1peoB4KlxuUlF2O'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log((response.data));

        setProducts(response.data.data)

        // setProduct(response.data.data.find(prd => prd.id == id))

      }).catch((error) => {
        console.log(error);
      });


  }

  console.log({ product_id });


  useEffect(() => {

    fetchProducts();
  }, [])


  useEffect(() => {
    document.title = "Astrofeast - Order Checkout";
  }, []);
  const [FilterToggle, setFilterToggle] = useState();
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const { authorizedPost } = useClientSideAuthorizedNetworkHandler()





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

  const bestseller = {
    meat: [
      {
        id: 0,
        Image: afherobg,
        p_name: "Beef Steak",
        Price: "$20",
      },
      {
        id: 1,
        Image: afherobg,
        p_name: "Chicken Breast",
        Price: "$10",
      },
      {
        id: 2,
        Image: afherobg,
        p_name: "Pork Chops",
        Price: "$15",
      },
      {
        id: 3,
        Image: afherobg,
        p_name: "Lamb Chops",
        Price: "$25",
      },
      {
        id: 4,
        Image: afherobg,
        p_name: "Lamb Chops",
        Price: "$25",
      },
      {
        id: 5,
        Image: afherobg,
        p_name: "Lamb Chops",
        Price: "$25",
      },
      // Add more meat products as needed
    ],
  };
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

      navigate("/payment-success")

    })
      .catch((error) => {
        console.log(error);
        // navigate("/payment-success")
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
                          Your Cart ({products.length})
                        </p>
                      </div>
                      <div className="border-t border-black dark:border-slate-300">
                        <p className="p-8 text-sm text-[#F4A73F] text-left font-Poppins"></p>
                      </div>
                      {products.map((added) => (
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
                            <QuantityBox price={added.price} />
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
                          <p>$701</p>
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
