import React, { useState } from "react";
import "./CommentInsertForm.css";
import axios from "axios";

const CommentInsertForm = ({
  commentInput,
  onChangeInput,
  onAdd,
  //   error,
  style,
  onPostComment,
}) => {
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/postings/100/comments/",
        {
          post: 100,
          text: "hello",
          author: username,
        },
        {}
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const [username, setUsername] = useState(localStorage.username);
  console.log(username);

  return (
    <div className="comment_input_container">
      <div className="comment_input_username">{localStorage.username}</div>
      <div className="comment_insert_form_container">
        <form>
          <input
            type="text"
            name="comment"
            placeholder="댓글을 입력하세요."
            style={{ backgroundColor: style.backgroundColor }}
          ></input>
          <button
            className="comment_input_button"
            onClick={(e) => handleSubmit(e)}
          >
            입력
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentInsertForm;
