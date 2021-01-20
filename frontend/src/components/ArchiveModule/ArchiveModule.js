import React from "react";
import "./ArchiveModule.css";

const ArchiveModule = ({ title, thumbnailUrl, date, category, link }) => {
  let categoryName = null;
  if (category === 5) categoryName = "졸업 주간";
  else if (category === 6) categoryName = "와우영상제";
  else if (category === 7) categoryName = "기타";
  const slicedDate = date.slice(0, 10);
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
          {slicedDate}
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
