import React from "react";
import { EachPost, EachExhibition } from "../../components";
import "./EachPostWrapper.css";

const EachPostWrapper = ({ handleNavigateClick, postId, style, curLoc }) => {
  return (
    <div className="temp_EachPostWrapper" style={style}>
      {curLoc === "board" || curLoc === "announce" ? (
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
