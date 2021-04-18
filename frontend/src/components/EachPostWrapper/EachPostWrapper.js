import React from "react";
import { EachPost, EachExhibition, EachAnnounce } from "../../components";
import "./EachPostWrapper.css";

const EachPostWrapper = ({ handleNavigateClick, postId, style, curLoc }) => {
  return (
    <div className="temp_EachPostWrapper" style={style}>
      {curLoc.includes("board") ? <EachPost postId={postId}></EachPost> : null}
      {curLoc.includes("info") ? (
        <EachAnnounce postId={postId}></EachAnnounce>
      ) : null}
      {curLoc.includes("exhibition") ? (
        <EachExhibition postId={postId}></EachExhibition>
      ) : null}
    </div>
  );
};

export default EachPostWrapper;
