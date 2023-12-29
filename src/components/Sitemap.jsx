import React from "react";
import Header from "./Atoms/Header";
import Footer from "./Atoms/Footer";
import {NavLink} from "react-router-dom";
import FloatNavbar from "./Atoms/FloatNavbar";

const Sitemap = () => {
    return (
        <div>
            <Header/>
            <FloatNavbar/>
            <section className="w-full h-auto px-4 py-8 gap-16 items-center sitemap">
                <NavLink to="/">
                    <h1 className="text-xl font-bold capitalize">Home</h1>
                </NavLink>
                <NavLink to="/about">
                    <h1 className="text-xl font-bold capitalize">about</h1>
                </NavLink>
                <NavLink to="/shop">
                    <h1 className="text-xl font-bold capitalize">shop</h1>
                </NavLink>
                <NavLink to="/shop/categorydetail">
                    <h1 className="text-xl font-bold capitalize">shop/categorydetail</h1>
                </NavLink>
                <NavLink to="/shop/categorydetail">
                    <h1 className="text-xl font-bold capitalize">shop/productdetail</h1>
                </NavLink>
                <NavLink to="/auth/login">
                    <h1 className="text-xl font-bold capitalize">auth/login</h1>
                </NavLink>
                <NavLink to="/auth/signup">
                    <h1 className="text-xl font-bold capitalize">auth/signup</h1>
                </NavLink>
                <NavLink to="/my-account">
                    <h1 className="text-xl font-bold capitalize">my-account</h1>
                </NavLink>
                <NavLink to="/golden-ticket">
                    <h1 className="text-xl font-bold capitalize">golden-ticket</h1>
                </NavLink>
                <NavLink to="/subscriptions">
                    <h1 className="text-xl font-bold capitalize">subscriptions</h1>
                </NavLink>
                <NavLink to="/orders">
                    <h1 className="text-xl font-bold capitalize">orders</h1>
                </NavLink>
                <NavLink to="/blog/">
                    <h1 className="text-xl font-bold capitalize">blog</h1>
                </NavLink>
                <NavLink to="/blog/recipe">
                    <h1 className="text-xl font-bold capitalize">blog/recipe</h1>
                </NavLink>
                <NavLink to="/feastbox">
                    <h1 className="text-xl font-bold capitalize">feastbox</h1>
                </NavLink>
                <NavLink to="/*">
                    <h1 className="text-xl font-bold capitalize">page not found</h1>
                </NavLink>
                <NavLink to="/checkout">
                    <h1 className="text-xl font-bold capitalize">checkout</h1>
                </NavLink>
                <NavLink to="/payment-success">
                    <h1 className="text-xl font-bold capitalize">payment-success</h1>
                </NavLink>
                <NavLink to="/track-order">
                    <h1 className="text-xl font-bold capitalize">track-order</h1>
                </NavLink>
                <NavLink to="https://astrofeast.com">
                    <h1 className="text-xl font-bold capitalize">CI CD comment 7</h1>
                </NavLink>
            </section>
            <Footer/>
        </div>
    );
};

export default Sitemap;
