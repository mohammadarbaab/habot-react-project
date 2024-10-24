import React from "react";
import "./BuyersPost.css";
import group33 from "../../../assets/Group 33.png"
import document from "../../../assets/document.png"
import layer from "../../../assets/Layer.png"
import Title from "./Title/Title";
import edit from "../../../assets/edit.png"
import group from "../../../assets/Group.png"
import group22 from "../../../assets/Group22.png"
function BuyersPost() {
  return (
    <>
      <div className="buyers-header">
        <Title />
      </div>
      <div />
      <div className="buyers-container">
        <div className="flex-box" style={{ backgroundColor: "#E8FBFF" }}>
          <img src={group33} style={{height:"45px",width:"45px"}}/>
          <h1>Select Your Role and Sign Up</h1>
        </div>
        <div className="flex-box">
          <img src={document} style={{height:"45px",width:"45px"}}/>
          <h1>Buyers Post Your Requirements</h1>
        </div>
        <div className="flex-box" style={{ backgroundColor: "#E8FBFF" }}>
          <img src={layer} style={{height:"45px",width:"45px"}}/>
          <h1> Review, Select, and Contact the Best Suppliers</h1>
        </div>
        <div className="flex-box">
          <img src={edit} style={{height:"45px",width:"45px"}}/>
          <h1>
            {" "}
            Suppliers Complete your profile and get notified for opportunities
          </h1>
        </div>
        <div className="flex-box" style={{ backgroundColor: "#E8FBFF" }}>
          <img src={group} style={{height:"45px",width:"45px"}}/>
          <h1>Contact to Buyers and Share your Quote for the service</h1>
        </div>
        <div className="flex-box">
          <img src={group22} style={{height:"45px",width:"45px"}}/>
          <h1>
            Both the Parties can Connect and Make Business Leave a Feedback
          </h1>
        </div>
      </div>
    </>
  );
}

export default BuyersPost;
