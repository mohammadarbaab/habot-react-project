import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <li
        style={{
          listStyle: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        Find Service Tags{" "}
        <IoIosArrowDown
          onClick={toggleDropdown}
          style={{ marginLeft: "4px", cursor: "pointer" }}
        />
      </li>
      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            listStyle: "none",
            padding: "10px",
            margin: 0,
            zIndex: 1,
          }}
        >
          <li style={{ padding: "8px 12px" }}>Option 1</li>
          <li style={{ padding: "8px 12px" }}>Option 2</li>
          <li style={{ padding: "8px 12px" }}>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
