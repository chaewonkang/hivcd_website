import React from "react";
import "./PostModule.css";
import { useHistory } from "react-router-dom";

const PostModule = ({ style, title, id }) => {
  let history = useHistory();
  function handleClick() {
    history.push(`/board/${id}`);
  }

  return (
    <div className="post" style={style} onClick={handleClick}>
      <div className="post_tag">
        <span>board</span>
      </div>
      <div className="post_content">
        <h2 className="post_content_header">
          title: {title} <br></br>
        </h2>
        <span className="post_content_date">date: {id}</span>
      </div>
    </div>
  );
};

export default PostModule;
