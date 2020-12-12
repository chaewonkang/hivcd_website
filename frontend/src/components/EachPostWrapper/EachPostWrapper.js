import React from "react";
import { EachPost } from "../../components";
import "./EachPostWrapper.css";

const EachPostWrapper = ({
  title,
  body,
  comments,
  handleNavigateClick,
  postId,
  category,
  author,
  date,
  onPostComment,
  style,
  fileUrl,
  fileName,
}) => {
  return (
    <div className="temp_EachPostWrapper" style={style}>
      <EachPost
        title={title}
        body={body}
        comments={comments}
        handleNavigateClick={handleNavigateClick}
        postId={postId}
        category={category}
        author={author}
        date={date}
        onPostComment={onPostComment}
        fileUrl={fileUrl}
        fileName={fileName}
      ></EachPost>
    </div>
  );
};

export default EachPostWrapper;
