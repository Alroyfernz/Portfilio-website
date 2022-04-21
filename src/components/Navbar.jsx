import React, { useState } from "react";
import "./navbar.scss";
import { HiMenuAlt3 } from "react-icons/hi";
import Dropdown from "./Dropdown";
const Navbar = () => {
  const [isOpen, toggle] = useState(false);

  return (
    <nav className="navbar">
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <div className="navbar-container">
        <div className="navbar-container-start">
          <h1 className="navbar-container-start-text">alroyf</h1>
        </div>
        <div className="navbar-container-mid">
          <ul className="navbar-container-mid-box">
            <li>
              {" "}
              <a href="#home"> Home</a>
            </li>

            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="navbar-container-end">
          <button>contact me</button>
        </div>
        <div
          className="navbar-container-menu"
          onClick={() => {
            toggle(!isOpen);
            console.log(isOpen);
          }}
        >
          <HiMenuAlt3 className="hamberg-menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
