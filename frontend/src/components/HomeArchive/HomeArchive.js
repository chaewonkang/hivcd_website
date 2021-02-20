import React from "react";
import { Link } from "react-router-dom";
import "./HomeArchive.css";

const HomeArchive = ({ title, thumbnailUrl, body, category, id }) => {
  let categoryName = null;
  if (category === 5) categoryName = "졸업 주간";
  else if (category === 6) categoryName = "와우영상제";
  else if (category === 7) categoryName = "기타";
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

export default HomeArchive;
