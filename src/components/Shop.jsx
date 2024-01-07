import React, { useEffect, useState } from "react";
import Header from "./Atoms/Header";
import Footer from "./Atoms/Footer";
import ProductContainer from "./Atoms/ProductContainer";
import afherobg from "../assets/herobg.png";
import offer from "../assets/offer.png";
import { NavLink } from "react-router-dom";
import FloatNavbar from "./Atoms/FloatNavbar";
import axios from "axios";
import {clientSideOpenNetworkHandler} from "../utils/network.utils";




const Shop = () => {



  const {networkHandler} = clientSideOpenNetworkHandler()

  const [products, setProducts] = useState([])

  const fetchProducts = () => {

    let data = JSON.stringify({
      "filters": {
        "state": "active"
      }
    });

    // let config = {
    //   data:
    // };

    networkHandler.get('/products/shop')
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
            pitem={products?.best_sellers}
          />


          <div className="w-full py-5 md:py-9 px-8 border-t border-black dark:border-slate-300 bg-gray-100 dark:bg-slate-800">
            <p className="font-Staatliches text-3xl md:text-4xl w-full text-left">
              seafood
            </p>
          </div>
          <ProductContainer
            cardcontainer="flex-nowrap"
            pitem={products?.meat}
          />

          <div className="w-full py-5 md:py-9 px-8 border-t border-black dark:border-slate-300 bg-gray-100 dark:bg-slate-800">
            <p className="font-Staatliches text-3xl md:text-4xl w-full text-left">
              meat
            </p>
          </div>
          <ProductContainer
            cardcontainer="flex-nowrap"
            pitem={products?.sea_food}
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
