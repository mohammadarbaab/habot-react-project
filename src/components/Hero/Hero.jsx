import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Are You a Supplier?</h1>
        <h3>Explore Matching Opportunities.</h3>
      </div>
      <div className="hero-inputs">
        <input
          className="icon-input"
          placeholder="Search your required service here"
        />
        <input
          className="icon-input"
          placeholder="Search your desired location here"
        />
        <button className="hero-btn">Search</button>
      </div>

      <div className="hero-footer">
        <b>Are you a buyer?</b>
        <a>Click here if you are looking to post a requirements</a>
      </div>
    </div>
  );
}

export default Hero;
