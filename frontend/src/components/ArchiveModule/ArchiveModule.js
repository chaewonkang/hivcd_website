import React from "react";
import "./ArchiveModule.css";

const ArchiveModule = ({ title, id, thumbnailUrl }) => (
  <div className="archive_module_container">
    <div className="archive_module_tag">
      <span>archive</span>
    </div>
    <div className="archive_module_content">
      <div className="archive_module_content_header">
        title: {title} <br></br>
        date: {id}
      </div>
      <div
        className="archive_module_content_image image_fill"
        style={{
          backgroundImage: `url(${thumbnailUrl})`,
        }}
      ></div>
    </div>
  </div>
);

export default ArchiveModule;
