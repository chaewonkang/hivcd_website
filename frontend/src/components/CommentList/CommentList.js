import React from "react";
import "./CommentList.css";
import { Comment } from "../../components";
import CommentInsertForm from "../CommentInsertForm/CommentInsertForm";

const CommentList = ({ comments, style, onPostComment, postId }) => {
  let commentList;
  if (comments) {
    commentList = comments.map((comment) => {
      return (
        <Comment
          author={comment.author}
          body={comment.text}
          key={comment.id}
          id={comment.id}
          date={comment.created}
          postId={postId}
        />
      );
    });
  }

  return (
    <div className="comment_list">
      {commentList ? (
        <>
          <ul>{commentList}</ul>
          <hr></hr>
        </>
      ) : null}
      <CommentInsertForm
        style={style}
        onPostComment={onPostComment}
        postId={postId}
      ></CommentInsertForm>
    </div>
  );
};

export default CommentList;
