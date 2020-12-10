import React from "react";
import "./ArchiveModule.css";

const ArchiveModule = ({ title, id, thumbnailUrl }) => (
  <div className="archive_module">
    <div className="archive_module_tag">
      <span>archive</span>
    </div>
    <div className="archive_module_content">
      <div className="archive_module_content_header">
        {title} <br></br>
        {id}
      </div>
    </div>
    <div
      className="archive_module_content_image image_fill"
      style={{
        backgroundImage: `url(${thumbnailUrl})`,
      }}
    ></div>
  </div>
);

export default ArchiveModule;
