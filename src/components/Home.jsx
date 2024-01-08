import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import afarrow from "../assets/afarrow.svg";
import afherobg from "../assets/herobg.png";
import CTABar from "./Atoms/CTABar";
import FloatNavbar from "./Atoms/FloatNavbar";
import Footer from "./Atoms/Footer";
import Header from "./Atoms/Header";
import Sidebar from "./Atoms/Sidebar";
import axios from "axios";
import { BACKEND_BASE_URL, BEARER_TOKEN, } from '../apis/index'
// import { Product } from "@medusajs/medusa";
// import { useProducts } from "medusa-react";

// const prodData =
// {
//     "items": [
//         {
//             "id": 1,
//             "imageSrc": afherobg,
//             "title": "The astrofeast product1"
//         },
//         {
//             "id": 2,
//             "imageSrc": afherobg,
//             "title": "The astrofeast product2"
//         },
//         {
//             "id": 3,
//             "imageSrc": afherobg,
//             "title": "The astrofeast product3"
//         },
//         {
//             "id": 4,
//             "imageSrc": afherobg,
//             "title": "The astrofeast product4"
//         },
//         {
//             "id": 5,
//             "imageSrc": afherobg,
//             "title": "The astrofeast product5"
//         },
//         {
//             "id": 6,
//             "imageSrc": afherobg,
//             "title": "The astrofeast product6"
//         },
//         /* ... more items ... */
//     ]
// }

const options = {
  method: "POST",
  url: `${BACKEND_BASE_URL}/products`,
  headers: {
    "X-RapidAPI-Key": "bdbad44431mshf133f3e78cc7290p12f0b7jsna61826593fed",
    "X-RapidAPI-Host": "the-mexican-food-db.p.rapidapi.com",
  },
};

const Home = () => {
  // TODO: get products API here 1.1
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getProducts();
  }, []);

  // const Products = () => {
  //   const { products, isLoading } = useProducts();

  //   return isLoading ? (
  //     <div>Loading...</div>
  //   ) : (
  //     <ul>
  //       {products?.map((product) => (
  //         <li key={product.id}>{product.title}</li>
  //       ))}
  //     </ul>
  //   );
  // };
  function getProducts() {
    axios
      .request(options)
      .then(function (response) {
        setProducts(response.data.data);
      })
      .catch(function (error) {
        // Handle the error here
        setError(error);
      });
    // axios.get('').then(function (response) {
    //     setProducts(response.data)
    // })
  }
  useEffect(() => {
    document.title = "Astrofeast - Home";
  }, []);
  const [toggle, setToggle] = useState(false);
  return (
    <section className="w-full">
      <Header />
      <FloatNavbar />
      <section className="w-full h-[48.75rem] relative ">
        <img
          className="w-full object-cover h-full brightness-50"
          src={afherobg}
          alt="hero background"
        />
        <div className="absolute pl-8 md:pl-16 pr-8 md:pr-16 top-[15%] gap-y-3 w-full h-auto flex flex-col items-start justify-between  ">
          <h1 className="pt-10 md:pt-20 w-11/12 md:w-7/12 lg:w-8/12 leading-1 text-6xl md:text-7xl font-Staatliches text-left z-10 text-[#fefefe] ">
            Reliable Interplanetary Food Delivery
          </h1>
          <div className="w-full h-auto gap-y-8 flex flex-col items-start justify-between">
            <h2 className="md:w-10/12  text-2xl     text-left z-10 text-[#fefefe] ">
              Celebrate with good food from around the world
            </h2>
            <NavLink to="/shop">
              <button className="px-8 py-4 bg-white uppercase font-Staatliches text-xl">
                {" "}
                view shop
              </button>
            </NavLink>
          </div>
        </div>
        <div className="absolute right-0 bottom-28 md:bottom-0 w-auto h-auto m-8 md:m-16">
          <NavLink to="/auth/signup">
            {/**Sign up cloud*/}
            <svg
              width="150"
              height="150"
              viewBox="0 0 181 188"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2124_8814)">
                <path
                  d="M123.92 13.6782C129.039 12.4372 134.233 15.4359 135.717 20.4895C136.873 24.4222 140.34 27.2321 144.427 27.5459C149.674 27.9487 153.68 32.4166 153.532 37.6767C153.416 41.7737 155.844 45.5286 159.632 47.0927C164.495 49.1004 166.92 54.5932 165.158 59.55C163.784 63.4133 164.93 67.7415 168.049 70.4037C172.052 73.8212 172.662 79.795 169.456 83.9697C166.957 87.2241 166.711 91.6962 168.853 95.1959C171.604 99.6901 170.346 105.559 166.005 108.545C162.622 110.873 161.012 115.049 161.967 119.042C163.195 124.173 160.196 129.369 155.138 130.871C151.202 132.04 148.39 135.522 148.066 139.616C147.651 144.869 143.197 148.892 137.929 148.757C133.827 148.652 130.078 151.101 128.509 154.893C126.496 159.756 121.018 162.215 116.057 160.457C112.192 159.087 107.87 160.259 105.212 163.38C101.8 167.385 95.8305 168.031 91.6605 164.823C88.4117 162.325 83.9461 162.1 80.4558 164.248C75.9745 167.007 70.1021 165.771 67.1299 161.429C64.8147 158.046 60.6475 156.448 56.664 157.414C51.5451 158.655 46.3511 155.656 44.8665 150.603C43.7112 146.67 40.2438 143.86 36.1569 143.546C30.9101 143.144 26.9038 138.676 27.0521 133.416C27.1676 129.319 24.74 125.564 20.9516 124C16.0889 121.992 13.6636 116.499 15.4261 111.542C16.7998 107.679 15.6536 103.351 12.5352 100.689C8.53199 97.2711 7.92179 91.2973 11.1276 87.1227C13.6267 83.8682 13.8732 79.3961 11.731 75.8964C8.98 71.4022 10.2377 65.5332 14.5791 62.5469C17.9624 60.2196 19.5723 56.0438 18.6166 52.0501C17.3887 46.919 20.3882 41.7237 25.4458 40.2215C29.3824 39.0523 32.1937 35.5702 32.5176 31.4765C32.9331 26.2236 37.387 22.1999 42.6546 22.3352C46.7565 22.4406 50.5062 19.991 52.0751 16.1995C54.0876 11.3359 59.5661 8.87744 64.5274 10.6355C68.3921 12.0051 72.7135 10.8336 75.3724 7.71229C78.7839 3.70755 84.7534 3.06154 88.9235 6.26889C92.1723 8.76767 96.6379 8.99258 100.128 6.84408C104.609 4.08562 110.482 5.32124 113.454 9.66365C115.769 13.0461 119.936 14.644 123.92 13.6782Z"
                  fill="url(#paint0_linear_2124_8814)"
                />
              </g>
              <path
                d="M44.0308 65.9102C42.5432 65.5116 41.275 64.9129 40.226 64.1142C39.1769 63.3155 38.4219 62.3471 37.9607 61.2089C37.5189 60.076 37.4572 58.8378 37.7758 57.4945L43.0497 58.9076C42.9251 59.6818 43.0306 60.3312 43.3663 60.856C43.7071 61.3614 44.2348 61.7099 44.9496 61.9014C45.6837 62.0981 46.3073 62.0892 46.8203 61.8746C47.3385 61.6408 47.6778 61.2244 47.8383 60.6255C47.9729 60.1233 47.9103 59.6613 47.6505 59.2397C47.4101 58.8233 47.0672 58.4416 46.6219 58.0945C46.1959 57.7526 45.5651 57.3247 44.7296 56.811C43.5247 56.0533 42.5612 55.3603 41.8392 54.7321C41.1172 54.1038 40.5629 53.3134 40.1762 52.3609C39.7896 51.4083 39.7671 50.2946 40.1087 49.0195C40.616 47.1263 41.6978 45.8322 43.3541 45.1372C45.0156 44.4229 46.9475 44.3608 49.1499 44.9509C51.3908 45.5514 53.0521 46.5763 54.1339 48.0256C55.2208 49.4557 55.5563 51.1399 55.1404 53.0783L49.7796 51.6419C49.9169 50.9747 49.8126 50.398 49.4666 49.9119C49.1258 49.4065 48.6077 49.0606 47.9122 48.8743C47.3134 48.7138 46.7864 48.7486 46.3314 48.9787C45.8815 49.1894 45.5763 49.5942 45.4158 50.1931C45.2398 50.8499 45.4118 51.4447 45.9316 51.9774C46.4514 52.5101 47.3113 53.1649 48.511 53.9419C49.7056 54.7382 50.6543 55.448 51.357 56.0711C52.0789 56.6993 52.6359 57.4801 53.0277 58.4133C53.4195 59.3465 53.4523 60.4216 53.1262 61.6387C52.8156 62.7978 52.2341 63.7704 51.3816 64.5566C50.5484 65.3479 49.4965 65.8735 48.2259 66.1336C46.9553 66.3936 45.5569 66.3191 44.0308 65.9102ZM61.828 51.3296C60.9586 51.0967 60.3111 50.654 59.8855 50.0016C59.4843 49.335 59.3847 48.6251 59.5866 47.8716C59.7936 47.0989 60.2349 46.5339 60.9104 46.1765C61.6104 45.805 62.3951 45.7358 63.2644 45.9687C64.1144 46.1965 64.74 46.6436 65.1412 47.3101C65.5668 47.9625 65.6761 48.6751 65.4691 49.4479C65.2672 50.2013 64.8162 50.7637 64.1162 51.1352C63.4407 51.4926 62.678 51.5573 61.828 51.3296ZM63.8407 53.6703L59.5081 69.8399L54.5529 68.5121L58.8855 52.3425L63.8407 53.6703ZM73.6371 56.0468C74.7769 56.3522 75.7097 56.8506 76.4355 57.542C77.1806 58.2386 77.684 59.0257 77.9458 59.9033L78.5592 57.6141L83.5144 58.9418L79.1895 75.0824C78.7909 76.57 78.1317 77.8324 77.2119 78.8697C76.3062 79.9314 75.1491 80.6567 73.7405 81.0453C72.3512 81.4392 70.7583 81.3954 68.9617 80.914C66.5662 80.2721 64.7774 79.182 63.5953 77.6436C62.408 76.1246 61.9669 74.3707 62.272 72.3819L67.1693 73.6941C67.1582 74.3537 67.3958 74.935 67.8822 75.438C68.3634 75.9604 69.029 76.3354 69.879 76.5632C70.9029 76.8375 71.7945 76.7555 72.5538 76.3171C73.3273 75.9032 73.8875 75.049 74.2343 73.7547L74.8477 71.4655C74.1629 72.0895 73.3307 72.5291 72.3513 72.7843C71.3771 73.0202 70.32 72.9854 69.1802 72.68C67.8473 72.3228 66.7304 71.6612 65.8298 70.6952C64.9343 69.7099 64.336 68.5039 64.035 67.0774C63.7584 65.6367 63.8427 64.0857 64.2879 62.4243C64.7331 60.7629 65.433 59.3872 66.3876 58.2971C67.3616 57.2123 68.4801 56.4767 69.7431 56.0904C71.0061 55.7041 72.3041 55.6896 73.6371 56.0468ZM76.3929 65.6989C76.7241 64.4625 76.6378 63.3937 76.1339 62.4926C75.6493 61.5966 74.9143 61.0167 73.9291 60.7527C72.9438 60.4887 72.0077 60.6209 71.1207 61.1493C70.2582 61.6636 69.6613 62.539 69.33 63.7754C68.9988 65.0117 69.0728 66.0876 69.5523 67.0028C70.0562 67.904 70.8008 68.4865 71.7861 68.7505C72.7713 69.0145 73.6978 68.8797 74.5654 68.3461C75.4524 67.8177 76.0616 66.9353 76.3929 65.6989ZM96.9983 62.3685C98.8915 62.8758 100.233 63.8977 101.022 65.4343C101.836 66.9568 101.955 68.7902 101.381 70.9346L98.8493 80.3813L93.923 79.0613L96.2757 70.2811C96.5656 69.1992 96.5106 68.2838 96.1109 67.5348C95.7111 66.7859 95.0379 66.2845 94.0913 66.0309C93.1447 65.7773 92.311 65.8748 91.5903 66.3236C90.8696 66.7723 90.3643 67.5376 90.0745 68.6195L87.7218 77.3997L82.7666 76.072L87.0992 59.9024L92.0544 61.2301L91.4799 63.3745C92.1737 62.7943 92.9999 62.4152 93.9586 62.2373C94.9225 62.04 95.9357 62.0838 96.9983 62.3685ZM128.733 71.0581L124.4 87.2277L119.445 85.8999L120.035 83.6976C119.341 84.2778 118.5 84.6736 117.512 84.885C116.548 85.0823 115.544 85.0411 114.501 84.7616C113.265 84.4303 112.246 83.8674 111.444 83.0728C110.648 82.2589 110.128 81.2605 109.886 80.0776C109.644 78.8946 109.712 77.598 110.09 76.1877L112.621 66.741L117.547 68.061L115.195 76.8412C114.905 77.9231 114.96 78.8385 115.36 79.5875C115.759 80.3364 116.433 80.8378 117.379 81.0914C118.345 81.3502 119.188 81.2553 119.909 80.8065C120.63 80.3577 121.135 79.5924 121.425 78.5106L123.778 69.7303L128.733 71.0581ZM136.634 75.6288C137.319 75.0048 138.148 74.5748 139.123 74.3389C140.097 74.103 141.154 74.1378 142.294 74.4432C143.627 74.8004 144.743 75.462 145.644 76.428C146.545 77.394 147.136 78.5877 147.418 80.0091C147.719 81.4356 147.647 82.9795 147.201 84.6409C146.756 86.3023 146.044 87.6851 145.065 88.7893C144.11 89.8794 142.999 90.6272 141.731 91.0328C140.468 91.4191 139.17 91.4336 137.837 91.0765C136.716 90.7762 135.783 90.2778 135.038 89.5812C134.313 88.8898 133.807 88.1124 133.52 87.2489L130.849 97.2172L125.894 95.8895L132.292 72.0118L137.247 73.3395L136.634 75.6288ZM142.159 83.2899C142.491 82.0535 142.402 80.9944 141.893 80.1126C141.408 79.2166 140.663 78.6341 139.659 78.3649C138.674 78.1009 137.737 78.2331 136.85 78.7616C135.983 79.2952 135.383 80.1802 135.052 81.4166C134.721 82.6529 134.797 83.7191 135.282 84.6151C135.786 85.5162 136.531 86.0988 137.516 86.3628C138.501 86.6268 139.437 86.4945 140.324 85.9661C141.216 85.4184 141.828 84.5263 142.159 83.2899ZM59.3598 91.6238C61.253 92.131 62.5942 93.153 63.3834 94.6896C64.197 96.2121 64.3166 98.0455 63.742 100.19L61.2108 109.637L56.2845 108.317L58.6372 99.5364C58.9271 98.4545 58.8721 97.5391 58.4724 96.7901C58.0726 96.0411 57.3994 95.5398 56.4528 95.2862C55.5062 95.0325 54.6725 95.1301 53.9518 95.5789C53.2311 96.0276 52.7258 96.7929 52.436 97.8747L50.0833 106.655L45.1281 105.327L49.4607 89.1577L54.4159 90.4854L53.8413 92.6298C54.5352 92.0496 55.3614 91.6705 56.3201 91.4926C57.284 91.2953 58.2972 91.3391 59.3598 91.6238ZM71.9524 112.763C70.3683 112.339 69.0293 111.618 67.9354 110.6C66.8609 109.587 66.1248 108.355 65.7272 106.902C65.3488 105.455 65.3849 103.891 65.8352 102.21C66.2804 100.549 67.0382 99.1889 68.1088 98.1299C69.1846 97.0516 70.4505 96.3451 71.9067 96.0106C73.3629 95.6761 74.8831 95.7211 76.4672 96.1456C78.0513 96.57 79.3903 97.2912 80.4841 98.3089C81.578 99.3267 82.3211 100.571 82.7136 102.043C83.1113 103.496 83.0875 105.053 82.6423 106.714C82.1971 108.375 81.427 109.743 80.332 110.816C79.2614 111.875 77.9884 112.569 76.5128 112.898C75.0567 113.233 73.5365 113.188 71.9524 112.763ZM73.1015 108.475C74.0481 108.728 74.943 108.595 75.7862 108.076C76.6487 107.562 77.2534 106.657 77.6002 105.363C77.947 104.069 77.8852 102.986 77.4147 102.114C76.9635 101.248 76.2646 100.688 75.318 100.434C74.3521 100.175 73.4572 100.308 72.6334 100.833C71.8147 101.338 71.2293 102.248 70.8773 103.562C70.5305 104.856 70.573 105.934 71.0049 106.795C71.456 107.661 72.1549 108.221 73.1015 108.475ZM110.649 105.553L101.94 120.55L96.4636 119.083L96.7243 107.909L91.2766 117.693L85.8287 116.233L85.7567 98.8832L90.7119 100.211L89.9031 112.386L95.7251 101.554L100.97 102.96L100.64 115.201L105.983 104.303L110.649 105.553ZM120.371 102.909L116.072 116.634L111.87 115.508L115.01 101.473L120.371 102.909ZM112.056 123.509C111.186 123.276 110.539 122.833 110.113 122.181C109.712 121.514 109.612 120.804 109.814 120.051C110.021 119.278 110.465 118.704 111.146 118.327C111.846 117.955 112.63 117.886 113.5 118.119C114.35 118.347 114.975 118.794 115.377 119.46C115.797 120.132 115.904 120.854 115.697 121.627C115.495 122.381 115.044 122.943 114.344 123.315C113.668 123.672 112.906 123.737 112.056 123.509Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_d_2124_8814"
                  x="0.0751953"
                  y="4.22949"
                  width="180.434"
                  height="183.633"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="12" />
                  <feGaussianBlur stdDeviation="4.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2124_8814"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2124_8814"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_2124_8814"
                  x1="151.001"
                  y1="41.5006"
                  x2="-42.6437"
                  y2="171.315"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F49B24" />
                  <stop offset="0.747416" stopColor="#FFBA5C" />
                  <stop offset="1" stopColor="#F3C78B" />
                </linearGradient>
              </defs>
            </svg>
          </NavLink>
        </div>
        <CTABar />
      </section>
      <section
        className="w-full h-auto flex flex-col items-center py-52 px-10 md:px-16 justify-between gap-y-8 dark:text-gray-100
dark:bg-slate-900"
      >
        <div className="flex flex-col items-center w-full h-auto gap-y-4">
          <p className="text-5xl font-Staatliches md:fs_w400_s60">
            The astrofeast project
          </p>
          <div className="flex place-content-center">
            <p className=" md:w-8/12 text-center font-poppins">
              or how we declassify authentic food from around the world, and
              keep it fresh AF
            </p>
          </div>
        </div>
        <button className="bg-black dark:bg-slate-300 w-auto h-auto text-white dark:text-gray-900 px-6 py-3 flex items-center font-Staatliches text-xl  gap-x-2">
          why we freeze
          <img className="dark:invert" src={afarrow} alt="arrow" />
        </button>
      </section>

      <div className="w-full h-auto flex pb-16 px-8 relative">
        <div className="pointer-events-none bottom-24 fixed">
          {/**SVG for frozne like it's hot cloud*/}
          <svg
            width="180"
            height="180"
            viewBox="0 0 217 226"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2124_8919)">
              <path
                d="M90.0609 19.404C93.9203 14.7751 100.738 13.9921 105.546 17.6256C109.288 20.4532 114.39 20.6732 118.361 18.1767C123.458 14.9717 130.185 16.3484 133.633 21.2844C136.319 25.129 141.109 26.9262 145.657 25.7824C151.494 24.3142 157.467 27.7104 159.224 33.4676C160.594 37.9547 164.597 41.1521 169.278 41.4741C175.286 41.8875 179.918 46.9627 179.816 52.9845C179.736 57.6789 182.557 61.9576 186.911 63.7146C192.502 65.971 195.346 72.2227 193.39 77.926C191.866 82.3707 193.232 87.3061 196.832 90.3258C201.457 94.2054 202.24 101.025 198.615 105.852C195.793 109.609 195.582 114.726 198.074 118.709C201.271 123.821 199.919 130.554 194.985 134.019C191.143 136.718 189.365 141.524 190.507 146.079C191.971 151.92 188.611 157.913 182.853 159.678C178.367 161.053 175.193 165.074 174.876 169.755C174.469 175.761 169.422 180.423 163.404 180.316C158.715 180.233 154.457 183.069 152.713 187.423C150.473 193.012 144.233 195.878 138.542 193.912C134.109 192.38 129.19 193.751 126.187 197.353C122.327 201.982 115.51 202.765 110.701 199.132C106.959 196.304 101.857 196.084 97.8871 198.581C92.7899 201.786 86.0628 200.409 82.6147 195.473C79.9291 191.628 75.139 189.831 70.5909 190.975C64.7532 192.443 58.7809 189.047 57.0232 183.29C55.6533 178.803 51.6504 175.605 46.9699 175.283C40.9614 174.87 36.3298 169.795 36.4318 163.773C36.5112 159.078 33.6904 154.8 29.3365 153.043C23.7454 150.786 20.9021 144.535 22.8576 138.831C24.3816 134.387 23.0159 129.451 19.416 126.432C14.7908 122.552 14.0077 115.733 17.6329 110.905C20.4546 107.148 20.6659 102.032 18.174 98.0482C14.9764 92.9367 16.3285 86.2032 21.2625 82.7381C25.1048 80.0398 26.8822 75.233 25.7406 70.6788C24.2762 64.837 27.6368 58.8439 33.395 57.0792C37.8807 55.7045 41.0545 51.6829 41.3716 47.0021C41.7784 40.9963 46.8253 36.3347 52.8439 36.4412C57.5328 36.5242 61.7908 33.6879 63.535 29.3346C65.7744 23.7454 72.0142 20.8796 77.7053 22.8456C82.1382 24.3771 87.0575 23.0062 90.0609 19.404Z"
                fill="#BDC695"
              />
            </g>
            <path
              d="M49.5574 104.586L50.7652 107.645L44.381 110.166L45.6858 113.47L50.4627 111.583L51.6353 114.552L46.8583 116.438L49.3621 122.778L45.545 124.285L39.3561 108.615L49.5574 104.586ZM57.47 107.577C57.6461 106.716 57.9926 105.96 58.5095 105.308C59.0204 104.642 59.6852 104.147 60.5036 103.824L62.0993 107.864L61.0502 108.279C60.0978 108.655 59.4658 109.145 59.1541 109.75C58.8366 110.34 58.8806 111.148 59.2861 112.175L61.5695 117.957L57.7524 119.464L52.8331 107.008L56.6502 105.501L57.47 107.577ZM73.0407 113.633C71.8204 114.115 70.6164 114.289 69.4285 114.156C68.2555 114.017 67.1952 113.576 66.2477 112.832C65.315 112.082 64.5931 111.06 64.0817 109.765C63.5763 108.485 63.4153 107.25 63.5988 106.059C63.7763 104.854 64.2534 103.797 65.0298 102.888C65.8063 101.979 66.8047 101.284 68.025 100.802C69.2452 100.32 70.4493 100.146 71.6372 100.279C72.8251 100.412 73.8957 100.857 74.8491 101.616C75.7966 102.36 76.5231 103.372 77.0286 104.652C77.534 105.932 77.6905 107.177 77.498 108.389C77.3146 109.579 76.8272 110.632 76.0358 111.547C75.2594 112.455 74.261 113.151 73.0407 113.633ZM71.7359 110.329C72.4651 110.041 72.9769 109.529 73.2713 108.794C73.5806 108.052 73.5383 107.183 73.1445 106.186C72.7507 105.189 72.1951 104.522 71.4775 104.186C70.7749 103.845 70.0589 103.818 69.3297 104.106C68.5857 104.4 68.0739 104.911 67.7944 105.641C67.509 106.356 67.5661 107.219 67.9658 108.231C68.3596 109.228 68.9004 109.901 69.5881 110.248C70.2908 110.59 71.0067 110.617 71.7359 110.329ZM83.8418 105.522L89.2437 103.389L90.4868 106.536L80.8213 110.353L79.6223 107.317L82.3238 98.9996L77.1897 101.027L75.9466 97.8799L85.4558 94.1242L86.6548 97.1601L83.8418 105.522ZM101.79 94.6404C101.931 94.9975 102.055 95.3784 102.163 95.7829L93.5248 99.1947C93.8899 99.9451 94.3705 100.443 94.9667 100.69C95.5718 100.915 96.1943 100.901 96.8342 100.649C97.7866 100.273 98.2902 99.6092 98.3448 98.6587L102.407 97.0542C102.522 97.9549 102.434 98.8414 102.142 99.7137C101.865 100.58 101.39 101.361 100.719 102.056C100.047 102.751 99.2055 103.299 98.1936 103.699C96.9733 104.181 95.7841 104.349 94.626 104.204C93.4679 104.06 92.4299 103.61 91.5122 102.854C90.5944 102.098 89.8799 101.073 89.3685 99.7783C88.8572 98.4836 88.671 97.2497 88.8098 96.0767C88.9635 94.8979 89.4137 93.8599 90.1604 92.9629C90.9071 92.0659 91.898 91.3735 93.1332 90.8857C94.3386 90.4096 95.51 90.2394 96.6473 90.3751C97.7847 90.5108 98.7989 90.9446 99.69 91.6764C100.596 92.4024 101.296 93.3904 101.79 94.6404ZM97.4865 95.1787C97.2279 94.5239 96.799 94.0912 96.1997 93.8806C95.6005 93.67 94.966 93.697 94.2963 93.9615C93.6564 94.2142 93.1867 94.6147 92.8872 95.1631C92.6026 95.7056 92.5434 96.3396 92.7096 97.0653L97.4865 95.1787ZM108.96 84.6867C110.418 84.1108 111.767 84.1285 113.006 84.7401C114.254 85.3308 115.205 86.4521 115.857 88.104L118.731 95.381L114.936 96.8797L112.265 90.1161C111.936 89.2827 111.464 88.7206 110.851 88.4297C110.237 88.1389 109.566 88.1374 108.836 88.4254C108.107 88.7134 107.618 89.1733 107.368 89.805C107.119 90.4368 107.159 91.1694 107.488 92.0027L110.159 98.7663L106.342 100.274L101.423 87.8181L105.24 86.3106L105.892 87.9624C106.062 87.259 106.412 86.6217 106.944 86.0506C107.469 85.4646 108.141 85.01 108.96 84.6867ZM123.407 74.4392L129.931 90.9576L126.114 92.4652L119.59 75.9468L123.407 74.4392ZM129.186 75.3565C128.517 75.621 127.89 75.645 127.305 75.4285C126.73 75.1913 126.328 74.7825 126.098 74.2021C125.863 73.6068 125.878 73.0335 126.142 72.482C126.414 71.9098 126.886 71.4914 127.555 71.2269C128.21 70.9683 128.825 70.9576 129.401 71.1949C129.985 71.4113 130.395 71.8172 130.63 72.4125C130.859 72.9928 130.837 73.5691 130.564 74.1414C130.3 74.6929 129.841 75.0979 129.186 75.3565ZM131.595 75.9018L136.514 88.3576L132.697 89.8651L127.778 77.4094L131.595 75.9018ZM146.892 84.2588L141.035 80.5342L143.098 85.7576L139.281 87.2651L132.757 70.7467L136.574 69.2392L140.18 78.3689L141.951 71.8119L146.661 69.9517L143.95 78.2472L151.625 82.3898L146.892 84.2588ZM162.282 70.7493C162.423 71.1065 162.547 71.4874 162.656 71.8919L154.017 75.3037C154.382 76.054 154.863 76.5523 155.459 76.7985C156.064 77.024 156.686 77.0104 157.326 76.7577C158.279 76.3815 158.782 75.7182 158.837 74.7677L162.9 73.1631C163.014 74.0639 162.926 74.9504 162.634 75.8226C162.357 76.689 161.882 77.4698 161.211 78.1651C160.539 78.8604 159.698 79.4079 158.686 79.8076C157.465 80.2895 156.276 80.4581 155.118 80.3134C153.96 80.1687 152.922 79.7185 152.004 78.9628C151.087 78.2071 150.372 77.1819 149.861 75.8872C149.349 74.5925 149.163 73.3587 149.302 72.1857C149.456 71.0068 149.906 69.9689 150.653 69.0719C151.399 68.1749 152.39 67.4825 153.625 66.9946C154.831 66.5186 156.002 66.3484 157.139 66.4841C158.277 66.6198 159.291 67.0535 160.182 67.7854C161.088 68.5113 161.788 69.4993 162.282 70.7493ZM157.979 71.2877C157.72 70.6329 157.291 70.2002 156.692 69.9896C156.093 69.779 155.458 69.8059 154.788 70.0704C154.149 70.3231 153.679 70.7237 153.379 71.272C153.095 71.8145 153.035 72.4486 153.202 73.1743L157.979 71.2877ZM70.3341 133.005C69.6645 133.27 69.0374 133.294 68.4531 133.077C67.8777 132.84 67.4754 132.431 67.2462 131.851C67.0111 131.256 67.0255 130.682 67.2894 130.131C67.5622 129.558 68.0335 129.14 68.7032 128.876C69.3579 128.617 69.973 128.606 70.5484 128.844C71.1328 129.06 71.5425 129.466 71.7776 130.061C72.0068 130.641 71.985 131.218 71.7121 131.79C71.4482 132.342 70.9889 132.747 70.3341 133.005ZM72.7428 133.55L77.6622 146.006L73.8451 147.514L68.9258 135.058L72.7428 133.55ZM86.0922 138.935L87.3706 142.172L85.4285 142.939C84.0446 143.486 82.8334 143.577 81.7951 143.213C80.7509 142.834 79.9261 141.878 79.3208 140.345L77.3636 135.39L75.8457 135.989L74.5938 132.819L76.1117 132.22L74.9128 129.184L78.7298 127.677L79.9288 130.712L82.4289 129.725L83.6808 132.895L81.1807 133.882L83.1555 138.882C83.3024 139.254 83.4975 139.487 83.7407 139.58C83.984 139.673 84.3139 139.638 84.7306 139.473L86.0922 138.935ZM84.1785 125.318L88.0848 123.775L87.9475 130.745L85.3804 131.759L84.1785 125.318ZM101.654 136.737C100.567 137.166 99.5266 137.362 98.5314 137.325C97.5362 137.288 96.6667 137.047 95.9229 136.601C95.1732 136.14 94.6099 135.52 94.233 134.74L98.0055 133.25C98.2205 133.664 98.5596 133.934 99.0225 134.061C99.4855 134.188 99.9774 134.148 100.498 133.942C100.974 133.754 101.304 133.521 101.486 133.243C101.678 132.943 101.715 132.645 101.597 132.347C101.456 131.99 101.167 131.803 100.73 131.786C100.288 131.755 99.6088 131.799 98.6931 131.92C97.718 132.064 96.8887 132.142 96.2053 132.154C95.516 132.151 94.8586 131.99 94.233 131.669C93.6017 131.333 93.1185 130.741 92.7835 129.893C92.5013 129.179 92.4391 128.455 92.5968 127.722C92.7635 126.968 93.1588 126.27 93.7826 125.628C94.4212 124.98 95.2688 124.448 96.3254 124.03C97.888 123.413 99.2685 123.315 100.467 123.736C101.68 124.152 102.607 124.973 103.246 126.2L99.7193 127.593C99.4893 127.185 99.1606 126.919 98.7333 126.795C98.3209 126.665 97.8543 126.704 97.3334 126.909C96.887 127.086 96.58 127.31 96.4124 127.583C96.239 127.84 96.211 128.118 96.3285 128.416C96.4696 128.773 96.7614 128.967 97.204 128.999C97.6614 129.025 98.3272 128.968 99.2013 128.829C100.218 128.703 101.064 128.644 101.738 128.653C102.407 128.647 103.059 128.819 103.697 129.17C104.343 129.499 104.844 130.093 105.2 130.95C105.488 131.679 105.538 132.416 105.351 133.161C105.172 133.886 104.761 134.564 104.116 135.197C103.486 135.824 102.666 136.338 101.654 136.737ZM121.077 110.746L127.265 126.416L123.448 127.923L120.901 121.472L114.963 123.817L117.511 130.268L113.694 131.776L107.505 116.106L111.322 114.598L113.746 120.737L119.684 118.392L117.26 112.253L121.077 110.746ZM135.761 123.267C134.541 123.749 133.337 123.923 132.149 123.79C130.976 123.651 129.916 123.21 128.968 122.466C128.036 121.716 127.314 120.694 126.802 119.399C126.297 118.119 126.136 116.884 126.319 115.694C126.497 114.488 126.974 113.431 127.751 112.522C128.527 111.613 129.525 110.918 130.746 110.436C131.966 109.954 133.17 109.78 134.358 109.913C135.546 110.046 136.616 110.492 137.57 111.25C138.517 111.994 139.244 113.006 139.749 114.286C140.255 115.566 140.411 116.811 140.219 118.023C140.035 119.213 139.548 120.266 138.756 121.181C137.98 122.089 136.982 122.785 135.761 123.267ZM134.457 119.963C135.186 119.675 135.698 119.163 135.992 118.428C136.301 117.686 136.259 116.817 135.865 115.82C135.471 114.823 134.916 114.156 134.198 113.821C133.496 113.479 132.78 113.452 132.05 113.74C131.306 114.034 130.795 114.545 130.515 115.275C130.23 115.99 130.287 116.853 130.686 117.865C131.08 118.862 131.621 119.535 132.309 119.882C133.011 120.224 133.727 120.251 134.457 119.963ZM149.898 113.736L151.176 116.972L149.234 117.739C147.85 118.286 146.639 118.377 145.601 118.013C144.556 117.634 143.732 116.678 143.126 115.146L141.169 110.19L139.651 110.79L138.399 107.62L139.917 107.02L138.718 103.984L142.535 102.477L143.734 105.513L146.234 104.525L147.486 107.695L144.986 108.682L146.961 113.683C147.108 114.055 147.303 114.287 147.546 114.38C147.79 114.474 148.119 114.438 148.536 114.273L149.898 113.736ZM151.916 97.9208L155.692 108.789L152.455 110.068L147.786 99.5517L151.916 97.9208ZM156.386 115.121C155.717 115.385 155.09 115.409 154.505 115.193C153.93 114.956 153.528 114.547 153.298 113.967C153.063 113.371 153.075 112.791 153.333 112.224C153.606 111.652 154.077 111.234 154.747 110.969C155.401 110.71 156.016 110.7 156.592 110.937C157.182 111.168 157.595 111.582 157.83 112.177C158.059 112.757 158.037 113.334 157.764 113.906C157.5 114.457 157.041 114.862 156.386 115.121Z"
              fill="#030712"
            />
            <defs>
              <filter
                id="filter0_d_2124_8919"
                x="5.05799"
                y="15.3423"
                width="206.132"
                height="210.101"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="13.7306" />
                <feGaussianBlur stdDeviation="5.14899" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2124_8919"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2124_8919"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="pb-16 px-8 relative">
        <div className=" h-full w-auto flex overflow-x-auto flex-nowrap dark:bg-slate-900 ">
          {/* TODO: set products here from API 1.2 */}
          <div className=" flex gap-x-8 flex-nowrap  ">
            {products.slice(0, 10).map((item, index) => (
              <div
                key={index}
                className="h-auto w-72 flex flex-col border-black border dark:border-slate-300 dark:text-gray-100"
              >
                <img
                  className="w-full object-cover h-72 border-black border-b"
                  src={item.default_media}
                  alt="product"
                />
                <div className="w-full flex items-end justify-center py-5">
                  <p className="text-lg w-full font-medium">
                    {item.name.length > 20
                      ? item.name.slice(0, 20) + "..."
                      : item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className=' flex gap-x-8 flex-nowrap '>
                        {prodData.items.map((item, index) => (<div key={index} className='h-auto w-72 flex flex-col border-black border'>
                            <img className='w-full object-cover h-72 border-black border-b' src={item.imageSrc} alt="product" />
                            <div className='w-full h-auto flex items-end justify-center py-5'>
                                <p className='text-lg w-full'>{item.title}</p>
                            </div>
                        </div>))}

                    </div> */}
        </div>
        <div className="bg-slate-400 items-center justify-between w-full dark:bg-slate-900">
          {error && (
            <p className="text-lg w-full font-medium dark:text-gray-100">
              Error: FAILED TO LOAD DATA... {error.message}
            </p>
          )}{" "}
          {/* Display the error if it exists */}
        </div>
      </div>
      {toggle && <Sidebar />}
      <Footer />
    </section>
  );
};

export default Home;
