import React from "react";
import "./CommentList.css";
import { Comment } from "../../components";

const CommentList = ({ comments, style }) => {
  console.log(`CommentList: ${comments}`);
  const commentList = comments.map((comment, index) => (
    <Comment body={comment.text} key={index} />
  ));
  return (
    <div className="comment_list">
      <ul>{commentList}</ul>
      <hr className="mobile_commentlist_hr_hidden"></hr>
      <div className="comment_input_container">
        {" "}
        <div className="comment_input_username">Chaewon</div>
        <div>
          <form>
            <input
              type="text"
              name="comment"
              placeholder="댓글을 입력하세요."
              style={{ backgroundColor: style.backgroundColor }}
            ></input>
            <button className="comment_input_button">입력</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
