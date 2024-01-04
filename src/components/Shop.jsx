import React, { useEffect, useState } from "react";
import Header from "./Atoms/Header";
import Footer from "./Atoms/Footer";
import ProductContainer from "./Atoms/ProductContainer";
import afherobg from "../assets/herobg.png";
import offer from "../assets/offer.png";
import { NavLink } from "react-router-dom";
import FloatNavbar from "./Atoms/FloatNavbar";
import axios from "axios";
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
    // Add more meat products as needed
  ],
  seafood: [
    {
      id: 0,
      Image: afherobg,
      p_name: "Salmon",
      Price: "$15",
    },
    {
      id: 1,
      Image: afherobg,
      p_name: "Shrimp",
      Price: "$12",
    },
    {
      id: 2,
      Image: afherobg,
      p_name: "Tuna",
      Price: "$18",
    },
    {
      id: 3,
      Image: afherobg,
      p_name: "Lobster",
      Price: "$30",
    },
    // Add more seafood products as needed
  ],
  veggies: [
    {
      id: 0,
      Image: afherobg,
      p_name: "Carrots",
      Price: "$2",
    },
    {
      id: 1,
      Image: afherobg,
      p_name: "Broccoli",
      Price: "$3",
    },
    {
      id: 2,
      Image: afherobg,
      p_name: "Spinach",
      Price: "$2.5",
    },
    {
      id: 3,
      Image: afherobg,
      p_name: "Tomatoes",
      Price: "$2",
    },
    // Add more vegetable products as needed
  ],
};



const Shop = () => {





  const [products, setProducts] = useState([])

  const fetchProducts = () => {

    let data = JSON.stringify({
      "filters": {
        "state": "active"
      }
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://test.astrofeast.com/admin/guest/customers/api/v1.1.0/products',
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

      }).catch((error) => {
        console.log(error);
      });


  }


  useEffect(() => {
    document.title = "Astrofeast - Products";

    fetchProducts()




  }, []);
  return (
    <div>
      <Header />
      <FloatNavbar />
      {/* <section className='w-screen h-auto'>
                <p className='font-Staatliches text-5xl '>eat what you want</p>
            </section> */}
      <section className="lg:px-16 relative dark:text-gray-100 dark:bg-slate-900">
        {/* container */}
        <div className="lg:border-x border-black dark:border-slate-300 lg:pt-10">
          {/* headline */}
          <hr className="w-screen  border-black dark:border-slate-300 absolute left-0" />
          <div className="w-full py-9 px-8 ">
            <p className="font-Staatliches text-4xl md:text-5xl w-full text-left">
              eat what you want
            </p>
          </div>
          <img
            className="absolute top-5 md:top-10 lg:top-20 right-0 md:right-20"
            src={offer}
            alt="offer"
          />
          <div className="w-full py-5 md:py-9 px-8 border-t border-black dark:border-slate-300 bg-gray-100 dark:bg-slate-800">
            <p className="font-Staatliches text-3xl md:text-4xl w-full text-left">
              <NavLink to="/shop/categorydetail">best sellers</NavLink>
            </p>
          </div>
          {/* <ProductContainer
            cardcontainer="flex-nowrap"
            pitem={bestseller.veggies}
          /> */}

          <ProductContainer
            cardcontainer="flex-nowrap"
            pitem={products}
          />


          <div className="w-full py-5 md:py-9 px-8 border-t border-black dark:border-slate-300 bg-gray-100 dark:bg-slate-800">
            <p className="font-Staatliches text-3xl md:text-4xl w-full text-left">
              seafood
            </p>
          </div>
          <ProductContainer
            cardcontainer="flex-nowrap"
            pitem={bestseller.seafood}
          />

          <div className="w-full py-5 md:py-9 px-8 border-t border-black dark:border-slate-300 bg-gray-100 dark:bg-slate-800">
            <p className="font-Staatliches text-3xl md:text-4xl w-full text-left">
              meat
            </p>
          </div>
          <ProductContainer
            cardcontainer="flex-nowrap"
            pitem={bestseller.meat}
          />
        </div>
      </section>
      <div className="lg:h-0 lg:border-t  border-black dark:bg-slate-900 dark:border-slate-300 lg:flex lg:justify-center lg:items-center" />
      <section className="lg:px-16 lg:relative dark:bg-slate-900">
        <div className="lg:border-x border-black  dark:border-slate-300 pt-12" />
      </section>
      <Footer />
    </div>
  );
};

export default Shop;
