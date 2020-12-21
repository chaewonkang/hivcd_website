import React, { useState } from "react";
import "./CommentInsertForm.css";
import axios from "axios";
import getCookie from "../../utils/getCookie";

const CommentInsertForm = ({ style, postId }) => {
  function handleChange(e) {
    setComment({
      author: username,
      [e.target.name]: e.target.value,
      post: postId,
    });
  }

  async function handleSubmit(e, t, data, p) {
    e.preventDefault();

    try {
      const response = await axios
        .post(
          "http://13.125.84.10:8000/api/v1/postings/" + p + "/comments/",
          {
            ...data,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access_token"),
              "X-CSRFToken": t,
            },
          }
        )
        .then(function () {
          window.location.reload();
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
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
  const [comment, setComment] = useState({});
  const token = getCookie("csrftoken");

  return (
    <div className="comment_input_container">
      <div className="comment_input_username">{localStorage.username}</div>
      <div className="comment_insert_form_container">
        <form>
          <input
            type="text"
            name="text"
            placeholder="댓글을 입력하세요."
            style={{ backgroundColor: style.backgroundColor }}
            onChange={(e) => handleChange(e)}
          ></input>
          <button
            className="comment_input_button"
            onClick={(e, t = token, data = comment, p = postId) =>
              handleSubmit(e, (t = token), (data = comment), (p = postId))
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
