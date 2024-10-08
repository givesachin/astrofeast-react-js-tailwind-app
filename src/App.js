import React from "react";
import "./App.css";
import About from "./components/About";
import Login from "./components/Atoms/Login";
import Signup from "./components/Atoms/Signup";
// uncomment the page which you want to be displayed
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {CookiesProvider} from 'react-cookie';
import Account from "./components/Account";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Sitemap from "./components/Sitemap";

import GoldenTicket from "./components/Account/GoldenTicket";
import Orders from "./components/Account/Orders";
import Subscriptions from "./components/Account/Subscription";
import TrackOrder from "./components/Account/TrackOrder";
import BlogLandingPage from "./components/Blog/BlogLandingPage";
import Recipe from "./components/Blog/Recipe";
import FeastBox from "./components/FeastBox";

import CategoryDetail from "./components/CategoryDetail";
import OrderCheckout from "./components/OrderCheckout";
import PaymentSuccess from "./components/PaymentSuccess";
import ProductDetails from "./components/ProductDetails";


import {QueryClient} from "@tanstack/react-query";


function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      {/* <MedusaProvider
        queryClientProviderProps={{ client: queryClient }}
        baseUrl="http://localhost:9000"
      > */}


      <CookiesProvider defaultSetOptions={{path: '/'}}>

        {/* <NavLink to="/auth"><p className='text-right w-full capitalize text-blue-600 active:text-purple-600 '>Login</p></NavLink> */}
        <Router>

          <Routes>


            <Route exact path="/" element={<Home/>}></Route>
            {/* <PrivateRoute path="/dashboard" element={<Dashboard />} /> */}
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/shop" element={<Shop/>}></Route>
            <Route
              exact
              path="/shop/categorydetail"
              element={<CategoryDetail/>}
            ></Route>
            <Route
              exact
              path="/shop/productdetail"
              element={<ProductDetails/>}
            ></Route>
            <Route exact path="/sitemap" element={<Sitemap/>}></Route>
            <Route path="/auth" element={<Auth/>}>
              <Route exact path="login" element={<Login/>}/>
              <Route exact path="signup" element={<Signup/>}/>
            </Route>

            <Route path="/my-account" element={<Account/>}></Route>
            <Route path="/golden-ticket" element={<GoldenTicket/>}></Route>
            <Route path="/subscriptions" element={<Subscriptions/>}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
            <Route path="/blog/" element={<BlogLandingPage/>}></Route>
            <Route path="/blog/recipe" element={<Recipe/>}></Route>
            <Route path="/feastbox" element={<FeastBox/>}></Route>

            <Route path="*" element={<h1>page not found</h1>}/>
            <Route path="/checkout" element={<OrderCheckout/>}></Route>
            <Route path="/payment-success" element={<PaymentSuccess/>}></Route>
            <Route path="/track-order" element={<TrackOrder/>}></Route>
          </Routes>
        </Router>
        {/* uncomment the component which you want to be displayed */}
        {/* <Home /> */}
        {/* <About /> */}
        {/* </MedusaProvider> */}
      </CookiesProvider>
    </div>
  );
}

export default App;
