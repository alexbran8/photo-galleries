import React from "react";
import "./Navbar.css"
import {Link} from "react-router-dom";

export const Navbar = () => {

    return (
        <div className="navbar">
            <Link className='navbar-item' to="/simple-gallery">Simple Gallery</Link>
            <Link className='navbar-item' to="/slide-gallery">Slide Gallery</Link>
        </div>
    )
}