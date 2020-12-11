import React from "react";
import "./HomeArchive.css";

const HomeArchive = ({ title, id, thumbnailUrl, date, category, link }) => {
  let categoryName = null;
  if (category === 5) categoryName = "GRADUATION EXHIBITION";
  else if (category === 6) categoryName = "WOW FILM FESTIVAL";
  else if (category === 7) categoryName = "ETC";
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
        <span className="archive_content_date"> {date}</span>
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
