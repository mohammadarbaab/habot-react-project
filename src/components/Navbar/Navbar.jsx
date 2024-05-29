import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import NavDropdown from "./navDropdown/NavDropdown";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    console.log("ToggleNav clicked");
    setIsOpen(!isOpen);
  };
  

  return (
    <nav className="navbar-container">
      <img src={logo} alt="logo" className="logo" />
      <div className="menu-icon" onClick={toggleNav}>
        &#9776;
      </div><div className={`nav-links-container ${isOpen ? "active" : ""}`}>
  {isOpen && (
    <img src={logo} alt="logo" className="sidebar-logo" />
  )}
  <ul className="nav-links">
    <li>Find Suppliers</li>
    <li>
      <NavDropdown />
    </li>
    <li>
      <button className="button">
        <span className="content">
          <a href="login">Login</a> <span>/</span>{" "}
          <a href="signup">Sign Up</a>
        </span>
      </button>
    </li>
  </ul>
</div>



    </nav>
  );
}

export default Navbar;
