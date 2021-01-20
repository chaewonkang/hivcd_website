import React from "react";
import "./HomeArchive.css";

const HomeArchive = ({ title, thumbnailUrl, date, category, link }) => {
  let categoryName = null;
  if (category === 5) categoryName = "졸업 주간";
  else if (category === 6) categoryName = "와우영상제";
  else if (category === 7) categoryName = "기타";
  const slicedDate = date.slice(0, 10);
  return (
    <div className="archive">
      <div className="archive_tag">
        <span>{categoryName}</span>
      </div>
      <div className="archive_content">
        <div className="archive_content_header">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title} <br></br>
          </a>
        </div>
        <span className="archive_content_date"> {slicedDate}</span>
      </div>
      <div
        className="archive_content_image image_fill"
        style={{
          backgroundImage: `url(${thumbnailUrl})`,
        }}
      ></div>
    </div>
  );
};

export default HomeArchive;
