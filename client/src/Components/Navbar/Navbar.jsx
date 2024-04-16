import React, { useState, useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets'
import { StoreContext } from "../context/StoreContext";


function NavbarF() {

  const [menu, setMenu] = useState("home");
  const  {getCartTotalAmount} = useContext(StoreContext);

  return (
    <div className="navbar">

      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("menu")} className={menu === "home" ? "active" : ""}>Menu</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "home" ? "active" : ""}>Contact us</li>

        <div className="navbar-right">
          <img src={assets.search_icon} alt="search icon" />
          <div className="navbar-search-icon">
            <Link to="/Cart"><img src={assets.basket_icon} /></Link>
            <div className={getCartTotalAmount() === 0 ? "" : "dot"}>
            </div>
          </div>
          <button>Sign In</button>
        </div>
      </ul>
    </div>
  );
}

export default NavbarF;
