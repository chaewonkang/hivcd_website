import React from "react";
import { EachPost, EachExhibition } from "../../components";
import "./EachPostWrapper.css";

const EachPostWrapper = ({ handleNavigateClick, postId, style, isBoard }) => {
  return (
    <div className="temp_EachPostWrapper" style={style}>
      {isBoard ? (
        <EachPost
          handleNavigateClick={() => handleNavigateClick()}
          postId={postId}
        ></EachPost>
      ) : (
        <EachExhibition postId={postId}></EachExhibition>
      )}
    </div>
  );
};

export default EachPostWrapper;
