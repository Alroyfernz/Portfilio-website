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

            <li>
              {" "}
              <a href="#abour"> About</a>
            </li>
            <li>
              <a href="#prod"> Projects</a>
            </li>
          </ul>
        </div>
        <div className="navbar-container-end">
          <button>contact me</button>
        </div>
        <div className="navbar-container-menu">
          <button
            onClick={() => {
              toggle(!isOpen);
              console.log(isOpen);
            }}
          >
            <HiMenuAlt3 className="hamberg-menu" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
