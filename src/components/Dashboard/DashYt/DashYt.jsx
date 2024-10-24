import React from "react";
import "./DashYt.css";
import YouTubeEmbed from "../YoutubeEmbed/YtEmbed";
import check from "../../../assets/check.svg";

function DashYt({ videoId }) {
  return (
    // <div className="yt-dash-container">
    //   <div className="yt-dash-left">
    //     <YouTubeEmbed videoId={videoId} />
    //   </div>
    //   <div className="yt-dash-right">
    //     <div className="yt-dash-text">
    //       <span className="buyer">Buyer</span>
    //       <span className="supplier">Supplier</span>
    //     </div>

    //     <div className="yt-dash-paragraphs">
    //       <div className="paragraph">
    //         <img src={checkicon} alt="Check icon" />
    //         <p>Post your requirements.</p>
    //       </div>
    //       <div className="paragraph">
    //         <img src={checkicon} alt="Check icon" />
    //         <p>Sit back for multiple suppliers to contact you.</p>
    //       </div>
    //       <div className="paragraph">
    //         <img src={checkicon} alt="Check icon" width="20px" />
    //         <p>Choose among the suppliers based on</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="container-yt">
      <div class="left-yt">
        <YouTubeEmbed videoId={videoId} />
      </div>
      <div class="right-yt">
        <div class="buttons-yt">
          <button class="btn-yt active" id="buyer">
            Buyer
          </button>
          <button class="btn-yt" id="supplier">
            Supplier
          </button>
        </div>
        <div class="info-yt">
          <div class="row-yt">
            <img src={check} className="icon-yt" />
            <div class="text-yt">Post your requirements.</div>
          </div>
          <div class="row-yt">
            <img src={check} className="icon-yt" />
            <div class="text-yt">
              Sit back for multiple suppliers to contact you.
            </div>
          </div>
          <div class="row-yt">
            <img src={check} className="icon-yt" />
            <div class="text-yt">
              Choose among the suppliers based on the ratings and reviews.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashYt;
