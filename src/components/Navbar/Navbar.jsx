import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import NavDropdown from "./navDropdown/NavDropdown";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    console.log("ToggleNav clicked");
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="menu-icon" onClick={toggleNav}>
        &#9776;
      </div>
      <div className={`nav-links-container ${isOpen ? "active" : ""}`}>
        {isOpen && <img src={logo} alt="logo" className="sidebar-logo" />}
        <ul className="nav-links">
          <li>Find Suppliers</li>
          <li>
            <NavDropdown />
          </li>
          <li>
            <button className="button">
              <span className="content">
                <Link to="/signin">Login</Link> <span>/</span>{" "}
                <Link to="/signup">Sign Up</Link>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
