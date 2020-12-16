import React, { useState } from "react";
import "./CommentInsertForm.css";
import axios from "axios";
import CSRFToken from "../../utils/CSRFToken";
import jQuery from "jquery";

const CommentInsertForm = ({
  commentInput,
  onChangeInput,
  onAdd,
  style,
  postId,
}) => {
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].replace(" ", "");
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

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
          "http://127.0.0.1:8000/api/v1/postings/" + p + "/comments/",
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
