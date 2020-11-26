import React from "react";
import "./EachPost.css";
import { CommentList } from "../../components";

const EachPost = ({ title, body, comments }) => (
  <div className="each_post_wrapper">
    <div className="each_post">
      <div className="each_post_tag">EVENT</div>
      <h1>{title}</h1>
      <hr></hr>
      <div className="each_post_info">
        <span>작성자 • 조교실</span>
        <span>작성일 • 2020.10.26</span>
        <span>조회 • 362</span>
      </div>
      <div className="each_post_files">
        <span>첨부파일 • 11월 10일 지하루_1.png</span>
        <button>DOWNLOAD</button>
      </div>
      <hr></hr>
      <p>{body}</p>
      <p>{body}</p>
      <p>{body}</p>
      <p>{body}</p>
      <hr></hr>
    </div>
    <CommentList comments={comments}></CommentList>
  </div>
);

export default EachPost;
