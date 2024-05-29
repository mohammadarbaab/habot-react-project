import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const NavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <li className="dropdown-toggle" onClick={toggleDropdown}>
        Find Service Tags
        <IoIosArrowDown className="dropdown-icon" />
      </li>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default NavDropdown;
