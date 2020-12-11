import React from "react";
import "./CommentInsertForm.css";

const CommentInsertForm = ({
  commentInput,
  onChangeInput,
  onAdd,
  error,
  style,
  onPostComment,
}) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChangeInput({ value });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };
  return (
    <div className="comment_input_container">
      <div className="comment_input_username">Chaewon</div>
      <div className="comment_insert_form_container">
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
  );
};

export default CommentInsertForm;
