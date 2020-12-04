import React from "react";
import "./EachPost.css";
import { CommentList, EachPostNavigator } from "../../components";

const EachPost = ({ title, body, comments, handleNavigateClick }) => (
  <div className="each_post_wrapper">
    <div className="each_post">
      {" "}
      <div className="each_post_tag">EVENT</div>
      <h1>{title}</h1>
      <hr></hr>
      <div className="each_post_info">
        <span>작성자 ▪︎ 조교실</span>
        <span>작성일 ▪︎ 2020.10.26</span>
        <span>조회 ▪︎ 362</span>
      </div>
      <hr></hr>
      <div className="each_post_files">
        <span className="attached_file">
          첨부파일 ▪︎ 11월 10일 지하루_1.png
        </span>
        <button className="download_button">DOWNLOAD</button>
      </div>
      <hr></hr>
      <p>
        {body}
        {body}
        {body}
        {body}
        <br></br>
        {body}
        {body}
        {body}
        {body}
        <br></br>
        {body}
        {body}
      </p>
      <hr></hr>
      <CommentList comments={comments}></CommentList>
      <EachPostNavigator
        handleNavigateClick={handleNavigateClick}
      ></EachPostNavigator>
    </div>
  </div>
);

export default EachPost;
