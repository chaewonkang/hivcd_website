import React, { useState } from "react";
import "./CommentInsertForm.css";
import axios from "axios";
import axiosInstance from "../../utils/axiosApi";

const CommentInsertForm = ({
  commentInput,
  onChangeInput,
  onAdd,
  style,
  onPostComment,
}) => {
  async function handleSubmit(e, comment) {
    e.preventDefault();
    try {
      const response = await axios
        .post(
          "http://127.0.0.1:8000/api/v1/postings/100/comments/",
          {
            author: 12,
            text: "hello!!",
            post: 100,
          },
          {
            headers: {
              Authorization: "JWT " + localStorage.getItem("access_token"),
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        )
        .catch(function (error) {
          if (error.response) {
            console.log(`error.response.data: ${error.response.data}`);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    } catch (error) {
      throw error;
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
            onClick={(e) =>
              handleSubmit(e, {
                author: username,
                text: "hello",
                post: 100,
              })
            }
          >
            입력
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentInsertForm;
