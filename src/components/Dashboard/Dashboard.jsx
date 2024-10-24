import React from "react";
import "./Dashboard.css";
import DashboardButtons from "./DashboardButton/DashboardButtons";
import { Link } from "react-router-dom";
import vector from "../../assets/Vector.png";

function Dashboard() {
  return (
    <div className="dash-container">
      <div className="dash-left" style={{ color: "black" }}>
        <h1>
          Ready to dive into <span style={{ color: "#272555" }}>HABOT?</span>
        </h1>
        <p>
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button
          className="dash-button"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/signup" style={{ position: "relative", zIndex: 1 }}>
            Sign up Today !
          </Link>
          <img
            src={vector}
            style={{
              position: "absolute",
              left: "calc(50% + 60px)",
              top: "50%",
              transform: "translateY(-50%)",
              marginLeft: "38px",
            }}
            alt="Icon"
          />
        </button>
      </div>
      <div className="dash-right">
        <DashboardButtons />
      </div>
    </div>
  );
}

export default Dashboard;
