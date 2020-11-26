import React from "react";
import "./Archive.css";
import BoardDetailPage from "../BoardDetailPage/BoardDetailPage";

const Archive = () => {
  return (
    <div className="archive_wrapper">
      <div className="archive_container">
        <div className="archive_module"></div>
        <BoardDetailPage></BoardDetailPage>
      </div>
    </div>
  );
};

export default Archive;
