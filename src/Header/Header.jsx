import React from "react";
import Img from "../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={Img} alt="" />
      <div className="nav-items">
        <a href="#">Order</a>
        <a href="#">Order Review</a>
        <a href="#">Manage Inventory</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
};

export default Header;
