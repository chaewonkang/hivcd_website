import React from "react";
import "./Comment.css";

const Comment = ({ name, body }) => {
  return (
    <li className="comment">
      <div className="comment_container">
        <div className="comment_container_username">
          <span>{name}</span>
        </div>
        <div className="comment_container_content">{body}</div>
        <div className="comment_container_date">20.10.16</div>
        <hr className="mobile_comment_hr"></hr>
      </div>
    </li>
  );
};

export default Comment;
