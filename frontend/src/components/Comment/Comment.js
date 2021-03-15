import React from "react";
import "./Comment.css";
import axios from "axios";
import getCookie from "../../utils/getCookie";

const Comment = ({ author, body, date, id }) => {
  const createdSliced = date.slice(2, 10);
  const token = getCookie("csrftoken");
  const commentKey = id;

  async function handleCommentDelete(id, token) {
    const response = await axios
      .post(
        `http://127.0.0.1/api/v1/postings/delete_comment/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": token,
          },
        }
      )
      .then(function () {
        window.location.reload();
        console.log(response);
      })
      .catch(function (e) {
        console.log(e);
      });
    return response;
  }

  return (
    <li className="comment">
      <div className="comment_container">
        <div className="comment_container_username">
          <span>{author.slice(0, 7)}</span>
        </div>
        <div className="comment_container_content">{body}</div>
        <div className="comment_container_date_delete">
          <div className="comment_container_date">{createdSliced}</div>
          <div
            className="comment_delete_button"
            onClick={(k = commentKey, t = token) =>
              handleCommentDelete((k = commentKey), (t = token))
            }
          >
            ✕
          </div>
        </div>
        <hr className="mobile_comment_hr"></hr>
      </div>
    </li>
  );
};

export default Comment;
