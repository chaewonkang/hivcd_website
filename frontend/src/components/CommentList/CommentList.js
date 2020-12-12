import React from "react";
import "./CommentList.css";
import { Comment } from "../../components";
import CommentInsertForm from "../CommentInsertForm/CommentInsertForm";

const CommentList = ({ comments, style, onPostComment }) => {
  const commentList = comments.map((comment, index, author) => (
    <Comment
      author={comment.author}
      body={comment.text}
      key={index}
      date={comment.created}
    />
  ));

  return (
    <div className="comment_list">
      <ul>{commentList}</ul>
      <hr className="mobile_commentlist_hr_hidden"></hr>
      <CommentInsertForm
        style={style}
        onPostComment={onPostComment}
      ></CommentInsertForm>
    </div>
  );
};

export default CommentList;
