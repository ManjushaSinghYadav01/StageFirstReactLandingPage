import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Deals & Coupons Finder</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/deals">Deals</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;