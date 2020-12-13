import React from "react";
import "./PostModule.css";
import { Link, Redirect } from "react-router-dom";

const PostModule = ({ style, title, date, category, id }) => {
  let categoryName = null;
  if (category === 1) categoryName = "NOTICE";
  else if (category === 2) categoryName = "EVENT";
  else if (category === 3) categoryName = "JOB";
  else if (category === 4) categoryName = "LOST&FOUND";
  else if (category === 5) categoryName = "GRADUATION EXHIBITION";
  else if (category === 6) categoryName = "WOW FILM FESTIVAL";
  else if (category === 7) categoryName = "ETC";
  //   console.log(`category name is: ${categoryName}`);
  const postId = parseInt(id, 10);
  return (
    <Link to={`/board/${postId}`}>
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
