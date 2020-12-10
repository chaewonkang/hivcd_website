import React from "react";
import "./PostModule.css";
import { useHistory } from "react-router-dom";
import { Link, Route } from "react-router-dom";
import { BoardDetailPage } from "../../components";

const PostModule = ({ style, title, date, category, id }) => {
  return (
    <Link to={`/board/${id}`}>
      <div className="post" style={style}>
        <div className="post_tag">
          <span>{category}</span>
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
