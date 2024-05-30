import React from "react";
import "./DashYt.css";
import YouTubeEmbed from "../YoutubeEmbed/YtEmbed";
import checkicon from '../../../assets/check.png'

function DashYt({ videoId}) {
  return (
    <div className="yt-dash-container">
      <div className="yt-dash-left">
        <YouTubeEmbed videoId={videoId} />
      </div>
      <div className="yt-dash-right">
        <div className="yt-dash-text">
          <span className="buyer">Buyer</span>
          <span className="supplier">Supplier</span>
        </div>

        <div className="yt-dash-paragraphs">
          <div className="paragraph">
            <img src={checkicon} alt="Check icon" />
            <p>Post your requirements.</p>
          </div>
          <div className="paragraph">
            <img src={checkicon} alt="Check icon" />
            <p>Sit back for multiple suppliers to contact you.</p>
          </div>
          <div className="paragraph">
            <img src={checkicon} alt="Check icon" width="20px" />
            <p>Choose among the suppliers based on</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashYt;
