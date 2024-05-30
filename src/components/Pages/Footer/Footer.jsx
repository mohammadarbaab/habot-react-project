import React from "react";
import "./Footer.css";
import logo2 from "../../../assets/HABOT.png";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container ">
      <footer className="footer-main">
        <div className="footer-left">
          <div className="footer-col-img">
            <img src={logo2} alt="Logo" />
            <p>© R Singhania</p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">
              <p>About</p>
            </a>
            <a href="#">
              <p>FaQ</p>
            </a>
          </div>
          <div className="footer-col">
            <h4>Terms</h4>
            <a href="#">
              <p>Data privacy</p>
            </a>
            <a href="#">
              <p>Terms</p>
            </a>
            <a href="#">
              <p>Accessibility</p>
            </a>
          </div>
          <div className="footer-col">
            <h4>Related</h4>
            <a href="#">
              <p>Find Buyer</p>
            </a>
            <a href="#">
              <p>Feedback</p>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div class="icons">
            <a href="#">
              <FaLinkedin style={{ color: "white" }} />
            </a>
            <a href="#">
              <FaTwitter style={{ color: "white" }} />
            </a>
            <a href="#">
              <FaFacebookF style={{ color: "white" }} />
            </a>
            <a href="#">
              <FaInstagram style={{ color: "white" }} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
