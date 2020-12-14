import React from "react";
import "./CommentList.css";
import { Comment } from "../../components";
import CommentInsertForm from "../CommentInsertForm/CommentInsertForm";

const CommentList = ({ comments, style, onPostComment }) => {
  console.log(comments);
  console.log(typeof comments);

  let result3 = [];

  const commentsArray = comments.forEach((item) => {
    result3.push([item.name, parseInt(item.value)]);
  });

  console.log(result3);

  console.log(commentsArray);

  //   const commentList = (
  //     <Comment
  //       key={comments[0].getString("id")}
  //       author={comments[0].getString("author")}
  //       body={comments[0].getString("text")}
  //       date={comments[0].getString("created")}
  //     />
  //   );
  return (
    <div className="comment_list">
      {/* <ul>{commentList}</ul> */}
      <hr className="mobile_commentlist_hr_hidden"></hr>
      <CommentInsertForm
        style={style}
        onPostComment={onPostComment}
      ></CommentInsertForm>
    </div>
  );
};

export default CommentList;
