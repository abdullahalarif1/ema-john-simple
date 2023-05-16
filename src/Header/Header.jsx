import React, { useContext } from "react";
import Img from "../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const {user, logout} = useContext(AuthContext)
  console.log(user);

  const handleLogout = () => {
    logout()
    .then(()=> {

    })
    .catch(error => {
      console.error(error)
    })

  }
  return (
    <nav className="header">
      <img src={Img} alt="" />
      <div className="nav-items">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign up</Link>
        {
          user && <span className="">{user.email} <button onClick={handleLogout} style={{padding:'10px 15px'}}>Sign out</button></span>
        }
      </div>
    </nav>
  );
};

export default Header;
