import React from "react";
import "./HomeArchive.css";

const HomeArchive = ({ title, id, thumbnailUrl }) => (
  <div className="archive">
    <div className="archive_tag">
      <span>archive</span>
    </div>
    <div className="archive_content">
      <div className="archive_content_header">
        {title} <br></br>
      </div>
      <span className="archive_content_date"> {id}</span>
    </div>
    <div
      className="archive_content_image image_fill"
      style={{
        backgroundImage: `url(${thumbnailUrl})`,
      }}
    ></div>
  </div>
);

export default HomeArchive;
