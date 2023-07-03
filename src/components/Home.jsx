import React from 'react'
import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <div>Home
         <NavLink to={'/auth'}><p>login</p></NavLink>
        </div>

    )
}

export default Home