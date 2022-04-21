import React from "react";
import "./navbar.scss";
import { HiMenuAlt3 } from "react-icons/hi";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-container-start">
          <h1 className="navbar-container-start-text">alroyf</h1>
        </div>
        <div className="navbar-container-mid">
          <ul className="navbar-container-mid-box">
            <li>Home</li>

            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="navbar-container-end">
          <button>contact me</button>
        </div>
        <div className="navbar-container-menu">
          <HiMenuAlt3 className="hamberg-menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
