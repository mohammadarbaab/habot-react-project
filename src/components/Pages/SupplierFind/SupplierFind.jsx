import React from "react";
import "./Supplier.css";
import { Link } from "react-router-dom";

function SupplierFind() {
  return (
    <div className="supp-container">
      <div class="supp-left">
        <h1>Let Suppliers <span>Find You</span></h1>
    </div>
      <div className="supp-right">
        <Link to="/signup">
          <button>Get Verified</button>
        </Link>
      </div>
    </div>
  );
}

export default SupplierFind;
