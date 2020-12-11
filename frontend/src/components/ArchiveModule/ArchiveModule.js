import React from "react";
import "./ArchiveModule.css";

const ArchiveModule = ({ title, id, thumbnailUrl, date, category, link }) => {
  let categoryName = null;
  if (category === 5) categoryName = "GRADUATION EXHIBITION";
  else if (category === 6) categoryName = "WOW FILM FESTIVAL";
  else if (category === 7) categoryName = "ETC";
  return (
    <div className="archive_module">
      <div className="archive_module_tag">
        <span>{categoryName}</span>
      </div>
      <div className="archive_module_content">
        <div className="archive_module_content_header">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title} <br></br>
          </a>
          {date}
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
};

export default ArchiveModule;
