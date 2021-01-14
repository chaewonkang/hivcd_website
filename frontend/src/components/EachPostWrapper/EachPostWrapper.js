import React from "react";
import { EachPost } from "../../components";
import "./EachPostWrapper.css";

const EachPostWrapper = ({ handleNavigateClick, postId, style }) => {
  return (
    <div className="temp_EachPostWrapper" style={style}>
      <EachPost
        handleNavigateClick={handleNavigateClick}
        postId={postId}
      ></EachPost>
    </div>
  );
};

export default EachPostWrapper;
