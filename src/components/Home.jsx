import React from 'react'
// import { NavLink } from "react-router-dom";
import Footer from './Atoms/Footer';
import Header from './Atoms/Header';

const Home = () => {
    return (
        <section>
            <Header />
            {/* <NavLink to={'/auth'}><p>login</p></NavLink> */}
            <Footer />
        </section>

    )
}

export default Home