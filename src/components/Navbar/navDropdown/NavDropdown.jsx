import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./NavDrop.css";

const NavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".dropdown")) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <li className="dropdown-toggle" onClick={toggleDropdown}>
        Find Service Tags
        <IoIosArrowDown className="dropdown-icon" />
      </li>
      <ul className={`dropdown-content ${isOpen ? "show" : ""}`}>
        <li>
          <a href="#">Supplier</a>
        </li>
        <li>
          <a href="#">Mini Supplier</a>
        </li>
        <li>
          <a href="#">Hard Supplier</a>
        </li>
      </ul>
    </div>
  );
};

export default NavDropdown;
