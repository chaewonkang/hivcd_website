import React from "react";
import "./PostModule.css";
import { useHistory } from "react-router-dom";
import { Link, Route } from "react-router-dom";
import { BoardDetailPage } from "../../components";

const PostModule = ({ style, title, date, category, id }) => {
  let categoryName = null;
  if (category === 1) categoryName = "NOTICE";
  else if (category === 2) categoryName = "EVENT";
  else if (category === 3) categoryName = "JOB";
  else if (category === 4) categoryName = "LOST&FOUND";
  console.log(`category name is: ${categoryName}`);
  return (
    <Link to={`/board/${id}/`}>
      <div className="post" style={style}>
        <div className="post_tag">
          <span>{categoryName}</span>
        </div>
        <div className="post_content">
          <div className="post_content_header">
            {title} <br></br>
          </div>
          <span className="post_content_date">{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostModule;
