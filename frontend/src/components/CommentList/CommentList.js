import React from "react";
import "./CommentList.css";
import { Comment } from "../../components";

const CommentList = ({ comments }) => {
  const commentList = comments.map((comment, index) => (
    <Comment
      name={comment.email.split("@")[0]}
      body={comment.body}
      key={index}
    />
  ));
  return (
    <div className="comment_list">
      <ul>{commentList}</ul>
      <hr></hr>
      <div className="comment_input_container">
        {" "}
        <div>Chaewon</div>
        <div>
          <form>
            <input
              type="text"
              name="comment"
              placeholder="댓글을 입력하세요."
            ></input>
            <button className="comment_input_button">입력</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
