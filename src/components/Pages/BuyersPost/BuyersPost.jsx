import React from "react";
import "./BuyersPost.css";
import { RiAdminFill } from "react-icons/ri";
import { VscOpenPreview } from "react-icons/vsc";
import { FaAddressBook } from "react-icons/fa";
import { HiBookOpen } from "react-icons/hi2";
import { BsJournalBookmark } from "react-icons/bs";
import { GiShakingHands } from "react-icons/gi";
import Title from "./Title/Title";
function BuyersPost() {
  return (
    <>
      <div className="buyers-header">
        <Title />
      </div>
      <div />
      <div className="buyers-container">
        <div className="flex-box" style={{ backgroundColor: "#E8FBFF" }}>
          <RiAdminFill size="80px" />
          <h1>Select Your Role and Sign Up</h1>
        </div>
        <div className="flex-box">
          <FaAddressBook size="80px" />
          <h1>Buyers Post Your Requirements</h1>
        </div>
        <div className="flex-box" style={{ backgroundColor: "#E8FBFF" }}>
          <VscOpenPreview size="80px" />
          <h1> Review, Select, and Contact the Best Suppliers</h1>
        </div>
        <div className="flex-box">
          <HiBookOpen size="80px" />
          <h1>
            {" "}
            Suppliers Complete your profile and get notified for opportunities
          </h1>
        </div>
        <div className="flex-box" style={{ backgroundColor: "#E8FBFF" }}>
          <BsJournalBookmark size="80px" />
          <h1>Contact to Buyers and Share your Quote for the service</h1>
        </div>
        <div className="flex-box">
          <GiShakingHands size="80px" />
          <h1>
            Both the Parties can Connect and Make Business Leave a Feedback
          </h1>
        </div>
      </div>
    </>
  );
}

export default BuyersPost;
