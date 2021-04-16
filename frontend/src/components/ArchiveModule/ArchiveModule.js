import React from "react";
import { Link } from "react-router-dom";
import "./ArchiveModule.css";

const ArchiveModule = ({ title, thumbnailUrl, category, id, body }) => {
  let categoryName = null;
  if (category === 6) categoryName = "졸업주간";
  else if (category === 7) categoryName = "와우영상제";
  else if (category === 8) categoryName = "소모임";
  const postId = parseInt(id, 10);
  return (
    <Link to={`/exhibition/${postId}`}>
      <div className="archive">
        <div className="archive_tag">
          <span>{categoryName}</span>
        </div>
        <div className="archive_content">
          <div className="archive_content_header">
            <span>
              {title} <br></br>
            </span>
            <p className="archive_content_body">
              {body.split("\n").map((line) => {
                return (
                  <span>
                    {line}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>
        </div>
        <div
          className="archive_content_image image_fill"
          style={{
            backgroundImage: `url(${thumbnailUrl})`,
          }}
        ></div>
      </div>
    </Link>
  );
};

export default ArchiveModule;
