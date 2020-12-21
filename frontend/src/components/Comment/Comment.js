import React from "react";
import "./Comment.css";

const Comment = ({ author, body, date }) => {
  const createdSliced = date.slice(0, 10);
  return (
    <li className="comment">
      <div className="comment_container">
        <div className="comment_container_username">
          <span>{author}</span>
        </div>
        <div className="comment_container_content">{body}</div>
        <div className="comment_container_date">{createdSliced}</div>
        <hr className="mobile_comment_hr"></hr>
      </div>
    </li>
  );
};

export default Comment;
