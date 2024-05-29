import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import NavDropdown from "./navDropdown/NavDropdown";

function Navbar() {
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Find Suppliers</li>
        <li>
          <NavDropdown />
        </li>

        <li>
          <button class="button">
            <span class="content">
              <a href="login">Login</a> <span>/</span> <a href="signup">Sign Up</a>
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
