import React, { useEffect, useState } from "react";
import Header from "./Atoms/Header";
import Footer from "./Atoms/Footer";
import afherobg from "../assets/herobg.png";
import afarrow from "../assets/afarrow.svg";
import fssai_certified from "../assets/fssai_certified.png";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import ProductContainer from "../components/Atoms/ProductContainer";
import CTABar from "./Atoms/CTABar";
import FloatNavbar from "./Atoms/FloatNavbar";
import { ReactComponent as LikeIcon } from "../assets/like.svg";
import { ReactComponent as DislikeIcon } from "../assets/dislike.svg";
import { ReactComponent as CorrectBulletIcon } from "../assets/correctbullet.svg";
import axios from "axios";
import QuantityBox from "./Atoms/QuantityBox";
import { useClientSideAuthorizedNetworkHandler } from "../utils/network.utils";

const nutrition = [
  {
    id: 1,
    scope: "Energy",
    qty: 2.28,
  },
  {
    id: 2,
    scope: "Carbohydrates",
    qty: 2.28,
  },
  {
    id: 3,
    scope: "Protein",
    qty: 2.28,
  },
  {
    id: 4,
    scope: "Fat",
    qty: 2.28,
  },
  {
    id: 5,
    scope: "Sugar",
    qty: 2.28,
  },
  {
    id: 6,
    scope: "Cholestrol",
    qty: 2.28,
  },
  {
    id: 7,
    scope: "Iron",
    qty: 2.28,
  },
  {
    id: 8,
    scope: "Potassium",
    qty: 2.28,
  },
  {
    id: 9,
    scope: "Caffeine",
    qty: 2.28,
  },
  {
    id: 10,
    scope: "Salt",
    qty: 2.28,
  },
];



const ProductDetails = () => {


  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const navigate = useNavigate()
  const { authorizedPost } = useClientSideAuthorizedNetworkHandler()

  const fetchProducts = () => {

    let data = JSON.stringify({
      "filters": {
        "state": "active"
      }
    });




    authorizedPost('/products', data, {
      // withCredentials: false

    }).then((response) => {
      console.log((response.data));

      setProducts(response.data.data)

      setProduct(response.data.data.find(prd => prd.id == id))

    })
      .catch((error) => {
        console.log(error);
      });


  }

  const handleAddToStashButton = (id) => {
    let data = {
      "product_variant_id": id
    };


    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: 'https://test.astrofeast.com/admin/customers/api/v1.2.0/add_cart_item',
    //   headers: {
    //     'Accept': 'application/json',
    //     'X-CSRF-Token': '9yUJ8AbRIErS2w8azsydrzFuV4CqeW56awPW7bkH',
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer 1|mKCcYsvGRvABFFAbX03B6sLQJ1E3g2VHSmfH0pg2167fe6d9',
    //     'Cookie': 'XSRF-TOKEN=eyJpdiI6IkRQN29BbWdVTkdNN2V4RS9ZTHNmaGc9PSIsInZhbHVlIjoieEJ0MmxxVHJ1bVBwSWZabUNHRGxVS1gxY3ZBeTNDZ2pJb1RlVkoydUMzZGRHZm5UZi96TWFKZ3h4SHlCcnNKVlVuVjF5TVo1Y09HY3NRRHhKSUZzRjNkYjFDZzdLcWIwTkRSclNYV3V1eWVDaURHOCtrMjVrVDgvelBNVUlMcWwiLCJtYWMiOiJiZjI4NzkwNzlkNTI5OGViNGY5ZjA1ZTIzZTQ0N2RkYWNjMDI2OTcyZDNkYmYxYWU1ZmU3ZDE1OTBmZWJjNmQ5IiwidGFnIjoiIn0%3D; laravel_session=pnitrDkwnKer4y5xl5caJSzC3lgIpyOPUY9iRnAO'
    //   },
    //   data: data
    // };


    // axios.request(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //     navigate({
    //       pathname: "/checkout"
    //     })
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });



    authorizedPost('/add_cart_item', data, {
      // withCredentials: false

    }).then((response) => {
      console.log(JSON.stringify(response.data));
      navigate({ pathname: "/checkout" })
    })
      .catch((error) => {
        console.log(error);
      });

    // navigate({
    //   pathname: "/checkout",
    // }, {
    //   replace: false,
    //   state:{
    //     product_id:id
    //   }
    // })
  }

  useEffect(() => {
    document.title = "Astrofeast - Product Details";
    fetchProducts()
  }, []);
  return (
    <>
      <Header />
      <FloatNavbar />
      <CTABar />
      <section className="relative dark:text-gray-100 dark:bg-slate-900 ">
        <section className="lg:px-16 relative">
          {/* container */}
          <div className="lg:border-x border-black dark:border-slate-300 lg:pt-14">
            {/* headline */}

            {/* <hr className='w-screen  border-black absolute left-0' /> */}
            {/* poduct details */}
            <section className="h-full w-full border-b border-black dark:border-slate-300 flex lg:flex-row flex-col">
              {/* name and images */}
              <div className=" h-full w-auto flex flex-col justify-start ">
                <div
                  className="flex flex-col justify-between items-start w-full h-full py-5 px-4 border-b  border-black dark:border-slate-300 gap-y-5">
                  <h1 className="font-Staatliches  text-5xl">
                    {/* {JSON.stringify(product)} */}
                    {product.name} {`(${product.weight})`}
                  </h1>
                  <h2 className="font-Staatliches  text-3xl">${product.price}</h2>
                  <h2 className="font-normal md:font-medium text-left text-xl" dangerouslySetInnerHTML={{
                    __html: product.description
                  }} />
                </div>
                <div className="flex flex-col gap-6 w-auto h-auto py-5 md:py-10 px-4 md:px-8 ">
                  <div className="relative w-full h-full">
                    <img
                      className="-left-8 -top-12 absolute"
                      src={fssai_certified}
                      alt="certified"
                    />
                    <img
                      className="w-96 h-96 md:w-full md:h-full object-cover"
                      src={product.media ? product.media[0].original_url : "#"}
                      alt="products"
                    />
                  </div>

                  {/*<div className="flex w-auto h-auto justify-between">*/}
                  {/*  <img*/}
                  {/*    className=" h-20 md:h-24 w-20 md:w-36 lg:w-24 object-cover"*/}
                  {/*    src={afherobg}*/}
                  {/*    alt="products"*/}
                  {/*  />*/}
                  {/*  <img*/}
                  {/*    className=" h-20 md:h-24 w-20 md:w-36 lg:w-24 object-cover"*/}
                  {/*    src={afherobg}*/}
                  {/*    alt="products"*/}
                  {/*  />*/}
                  {/*  <img*/}
                  {/*    className=" h-20 md:h-24 w-20 md:w-36 lg:w-24 object-cover"*/}
                  {/*    src={afherobg}*/}
                  {/*    alt="products"*/}
                  {/*  />*/}
                  {/*  <img*/}
                  {/*    className=" h-20 md:h-24 w-20 md:w-36 lg:w-24 object-cover"*/}
                  {/*    src={afherobg}*/}
                  {/*    alt="products"*/}
                  {/*  />*/}
                  {/*</div>*/}
                </div>
              </div>
              {/* nutrition and certi */}
              <section
                className="flex flex-col h-auto border-t lg:border-t-0 lg:border-x border-black dark:border-slate-300">
                <div className="flex flex-col h-auto w-full border-b border-black dark:border-slate-300">
                  <div
                    className="flex justify-start border-b border-black dark:border-slate-300 items-start py-6 px-8 bg-gray-100 dark:bg-slate-800">
                    <h3 className="font-Staatliches  text-4xl">nutrition</h3>
                  </div>
                  <div className="flex flex-col w-full h-auto gap-5 p-8 justify-start items-start">
                    {nutrition.map((ntr) => (
                      <div
                        key={ntr.id}
                        className="flex w-full text-black dark:text-gray-100 justify-between"
                      >
                        <p>{ntr.scope}</p>
                        <p>{ntr.qty}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col h-auto w-full ">
                  <div
                    className="flex justify-start border-b border-black dark:border-slate-300 items-start py-6 px-8 bg-gray-100 dark:bg-slate-800">
                    <h3 className="font-Staatliches  text-4xl">certificates</h3>
                  </div>
                  <div className="flex flex-col gap-6 p-8 justify-between items-center">
                    <div className="w-full justify-center flex gap-6 items-center">
                      <button className="">
                        <img
                          className="invert rotate-180 dark:invert-0"
                          src={afarrow}
                          alt="back arrow"
                        />
                      </button>

                      <img
                        className="h-14 w-28 object-cover"
                        src={afherobg}
                        alt="certificate"
                      />

                      <button className="">
                        <img
                          className="invert dark:invert-0"
                          src={afarrow}
                          alt="back arrow"
                        />
                      </button>
                    </div>
                    <p>
                      farms that reduce environmental impact by at least 25%
                    </p>
                  </div>
                </div>
              </section>
              {/* tale sub and stash */}
              <section className="flex flex-col h-auto lg:w-[28rem]">
                <div
                  className="flex flex-col h-full w-full border-t lg:border-t-0 border-b border-black dark:border-slate-300">
                  <div
                    className="w-full flex justify-start border-b border-black dark:border-slate-300 items-start py-6 px-8 bg-gray-100 dark:bg-slate-800">
                    <h3 className="font-Staatliches  text-4xl">tales</h3>
                  </div>
                  <div className="w-full flex flex-col h-auto gap-5 p-8 justify-start items-start">
                    <div className="flex w-full flex-col items-center gap-6 h-auto text-left justify-between">
                      <p className="w-full">
                        The Celtics believe these sea astronauts will bless you
                        with bountiful wisdom.{" "}
                      </p>
                      <p className="w-full">
                        The Celtics believe these sea astronauts will bless you
                        with bountiful wisdom.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-auto w-full ">
                  <div
                    className="flex justify-start border-b border-black dark:border-slate-300 items-start py-6 px-8 bg-gray-100 dark:bg-slate-800">
                    <h3 className="font-Staatliches text-4xl">subscribe</h3>
                  </div>
                  <div className="w-auto flex flex-col gap-6 p-8 justify-start items-start">
                    <div
                      className="w-full h-auto justify-center items-center flex gap-2 p-2 border border-black dark:border-slate-300 ">
                      <button className="capitalize bg-green p-2 w-full h-auto">
                        <span className="w-full h-auto">weekly</span>
                      </button>
                      <button className="capitalize p-2 w-full h-auto">
                        <span className="w-full h-auto">bi-weekly</span>
                      </button>
                      <button className="capitalize p-2 w-full h-auto">
                        <span className="w-full h-auto">monthly</span>
                      </button>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="w-full flex justify-start gap-x-3">
                        {/**SVG for bullet correct sign */}
                        <CorrectBulletIcon />
                        <p className="w-full">
                          Flat 5% off on all subscriptions
                        </p>
                      </div>
                      <div className="w-full flex justify-start gap-x-3">
                        {/**SVG for bullet correct sign */}
                        <CorrectBulletIcon />
                        <p className="w-full">
                          Flat 5% off on all subscriptions
                        </p>
                      </div>
                    </div>
                    <hr className="w-full border-black dark:border-slate-300 " />
                    <div className="w-full h-auto flex flex-col justify-start">
                      <div className="w-full h-auto flex items-center justify-between">
                        <div className="w-full flex justify-start gap-2">
                          <QuantityBox price={product.price} isDetailsPage={true} initQuantity={1} />
                        </div>
                        {/* <h4 className="font-Staatliches text-5xl">${product.price}</h4> */}
                      </div>
                    </div>
                    {/* <NavLink to="/checkout" className=""> */}
                    <button
                      onClick={() => handleAddToStashButton(product?.variants[0]?.id)}
                      className="w-full md:px-72 px-[124px] lg:w-96 bg-black text-white dark:text-gray-900
dark:bg-slate-300 py-3 lg:px-5 flex justify-center gap-2 items-center font-Staatliches"
                    >
                      add to stash{" "}
                      <img
                        src={afarrow}
                        className="dark:invert"
                        alt="arrow to stash"
                      />
                    </button>
                    {/* </NavLink> */}
                    <p className="w-full text-center font-medium">
                      For really huge orders,{" "}
                      <NavLink to="">
                        <span className="underline">get in touch </span>
                      </NavLink>
                    </p>
                  </div>
                </div>
              </section>
            </section>
            <section className=" flex flex-col border-b border-black dark:border-slate-300 w-full h-full">
              <div
                className="flex justify-start border-b border-black dark:border-slate-300 items-start py-6 px-8 bg-gray-100 dark:bg-slate-800">
                <h3 className="font-Staatliches text-4xl">how to heat</h3>
              </div>
              <div className="flex flex-col justify-start gap-10 p-8 items-start py-6 px-8">
                <div className="flex w-full justify-start items-center gap-6">
                  {/**SVG for how to heat1 */}
                  <svg
                    className="stroke-[#030712] dark:stroke-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path d="M12 36H36V44H12V36Z" strokeWidth="3" />
                    <path d="M14 8H34V16H14V8Z" strokeWidth="3" />
                    <path d="M24 8V2" strokeWidth="3" />
                    <path d="M18 16L15 36" strokeWidth="3" />
                    <path d="M30 16L33 36" strokeWidth="3" />
                  </svg>
                  <p className="text-2xl text-left">
                    {" "}
                    Season breasts with salt and pepper on both sides. Dredge
                    chicken in flour, lightly coating both sides; pat off excess
                  </p>
                </div>
                <div className="flex w-full justify-start items-center gap-6">
                  {/**SVG for how to heat2 */}
                  <svg
                    className="stroke-[#030712] dark:stroke-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path d="M10 4H38V30H10V4Z" strokeWidth="3" />
                    <path d="M38 8H46" strokeWidth="3" />
                    <path d="M2 8H10" strokeWidth="3" />
                    <path
                      d="M8 41.5V41L11.5 36.5L15 41V41.5C15 43.433 13.433 45 11.5 45C9.567 45 8 43.433 8 41.5Z"
                      strokeWidth="3"
                    />
                    <path
                      d="M33 41.5V41L36.5 36.5L40 41V41.5C40 43.433 38.433 45 36.5 45C34.567 45 33 43.433 33 41.5Z"
                      strokeWidth="3"
                    />
                    <path
                      d="M20.5 41.5V41L24 36.5L27.5 41V41.5C27.5 43.433 25.933 45 24 45C22.067 45 20.5 43.433 20.5 41.5Z"
                      strokeWidth="3"
                    />
                  </svg>
                  <p className="text-2xl text-left">
                    {" "}
                    Heat oil in a large nonstick skillet over medium-high heat.
                    Add butter and swirl until melted. Place chicken in skillet,
                    top sides down. Reduce heat to medium and sauté 7 minutes
                  </p>
                </div>
                <div className="flex w-full justify-start items-center gap-6">
                  {/**SVG for how to heat3 */}
                  <svg
                    className="stroke-[#030712] dark:stroke-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path d="M10 16H30V32H10V16Z" strokeWidth="3" />
                    <path d="M4 10H44V38H4V10Z" strokeWidth="3" />
                    <path d="M35.5 17H38.5" strokeWidth="3" />
                    <path d="M35.5 24H38.5" strokeWidth="3" />
                  </svg>
                  <p className="text-2xl text-left">
                    {" "}
                    Leave drippings in skillet. To make one of the delicious
                    sauces listed above, add ingredients and deglaze the pan
                    (i.e., scrape it to loosen cooked bits).
                  </p>
                </div>
              </div>
            </section>
            {/* how to heat and comments */}
            <section className="border-b border-black dark:border-slate-300 flex flex-col w-full h-full">
              <div
                className="flex justify-start border-b border-black dark:border-slate-300 items-start py-6 px-8 bg-gray-100 dark:bg-slate-800">
                <h3 className="font-Staatliches text-4xl">tips</h3>
              </div>
              <div className="w-full p-8 flex flex-col justify-start text-left h-auto gap-y-8">
                <div className="flex flex-col w-full gap-y-4">
                  <div className="w-full flex items-center justify-between">
                    <p>Add a little more lemon in the end</p>
                    <p>20th jan</p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing. Ac
                    viverra purus inpretium.Lorem ipsum dolor sit amet,
                    consectetur adipiscing. Ac viverra purus inpretium.Lorem
                    ipsum dolor sit am Lorem ipsum dolor sit amet, consectetur
                    adipiscing. Ac viverra purus inpretium.Lorem ipsum dolor sit
                    amet, consectetur adipiscing. Ac viverra purus
                    inpretium.Lorem ipsum dolor sit am
                  </p>
                  <p className="text-emerald-500 italic font-semibold">
                    24 people found this useful
                  </p>
                  <div className="flex w-auto justify-start gap-x-5">
                    <div className="rounded-full border p-3 border-black dark:border-slate-300">
                      {/**SVG for like */}
                      <LikeIcon />
                    </div>
                    <div className="rounded-full border p-3 border-black dark:border-slate-300 rotate-180">
                      {/**SVG for dislike */}
                      <DislikeIcon />
                    </div>
                  </div>
                </div>
                <hr className="w-full border" />
                <div className="flex flex-col w-full gap-y-4">
                  <div className="w-full flex items-center justify-between">
                    <p>Add a little more lemon in the end</p>
                    <p>20th jan</p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing. Ac
                    viverra purus inpretium.Lorem ipsum dolor sit amet,
                    consectetur adipiscing. Ac viverra purus inpretium.Lorem
                    ipsum dolor sit am Lorem ipsum dolor sit amet, consectetur
                    adipiscing. Ac viverra purus inpretium.Lorem ipsum dolor sit
                    amet, consectetur adipiscing. Ac viverra purus
                    inpretium.Lorem ipsum dolor sit am
                  </p>
                  <p className="text-emerald-500 italic">
                    24 people found this useful
                  </p>
                  <div className="flex w-auto justify-start gap-x-5">
                    <div className="rounded-full border p-3 border-black dark:border-slate-300">
                      {/**SVG for like */}
                      <LikeIcon />
                    </div>
                    <div className="rounded-full border p-3 border-black dark:border-slate-300 rotate-180">
                      {/**SVG for dislike */}
                      <DislikeIcon />
                    </div>
                  </div>
                </div>
                <hr className="w-full border" />
                <div className="flex flex-col w-full gap-y-4">
                  <div className="w-full flex items-center justify-between">
                    <p>Add a little more lemon in the end</p>
                    <p>20th jan</p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing. Ac
                    viverra purus inpretium.Lorem ipsum dolor sit amet,
                    consectetur adipiscing. Ac viverra purus inpretium.Lorem
                    ipsum dolor sit am Lorem ipsum dolor sit amet, consectetur
                    adipiscing. Ac viverra purus inpretium.Lorem ipsum dolor sit
                    amet, consectetur adipiscing. Ac viverra purus
                    inpretium.Lorem ipsum dolor sit am
                  </p>
                  <p className="text-emerald-500 italic">
                    24 people found this useful
                  </p>
                  <div className="flex w-auto justify-start gap-x-5">
                    <div className="rounded-full border p-3 border-black dark:border-slate-300">
                      {/**SVG for like */}
                      <LikeIcon />
                    </div>
                    <div className="rounded-full border p-3 border-black dark:border-slate-300 rotate-180">
                      {/**SVG for dislike */}
                      <DislikeIcon />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="flex justify-between  items-start py-6 px-8 bg-gray-100 dark:bg-slate-800">
              <h3 className="font-Staatliches text-3xl md:text-4xl">
                similar products
              </h3>
              <h3 className="font-Staatliches text-3xl md:text-4xl hover:cursor-pointer">
                View all
              </h3>
            </div>
            {/* <ProductContainer
              cardcontainer="flex-nowrap"
              pitem={bestseller.meat}
            />
          */}
          </div> 
        </section>
        <div className="h-0 lg:border-t  border-black dark:border-slate-300 flex justify-center items-center" />
        <section className="hidden  lg:block lg:px-16 lg:relative">
          <div className="lg:border-x border-black dark:border-slate-300 pt-12" />
        </section>
        <Footer />
      </section>
    </>
  );
};

export default ProductDetails;
