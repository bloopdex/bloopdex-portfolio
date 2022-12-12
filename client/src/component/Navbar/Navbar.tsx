import React from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo";

function Navbar() {
  return (
    <div className="nav-bar">
      <Logo className="nav-logo" />
      <ul className="nav-items">
        <li>
          <a className="nav-item" href="#home">
            Home
          </a>
        </li>

        <li>
          <a className="nav-item" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav-item" href="#lab">
            Lab
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
