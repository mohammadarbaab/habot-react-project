import React from "react";
import "./Dashboard.css";
import { IoMdArrowForward } from "react-icons/io";
import DashboardButtons from "./DashboardButton/DashboardButtons";

function Dashboard() {
  return (
    <div className="dash-container">
      <div className="dash-left" style={{ color: "black" }}>
        <h1>Ready to dive into HABOT?</h1>
        <p>
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="dash-button" style={{ position: "relative" }}>
          Sign up Today!
          <IoMdArrowForward
            style={{
              position: "absolute",
              right: 15,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "34px",
            }}
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
