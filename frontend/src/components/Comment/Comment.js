import React from "react";
import "./Comment.css";
import axios from "axios";
import getCookie from "../../utils/getCookie";

const Comment = ({ author, body, date, key }) => {
  const createdSliced = date.slice(0, 10);
  const token = getCookie("csrftoken");
  const commentId = key;

  async function handleCommentDelete(id, token) {
    const response = await axios
      .post(
        `http://devsidi.hongik.ac.kr/api/v1/postings/delete_comment/${id}`,
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
        <div className="comment_container_date">
          {createdSliced}
          <div
            className="comment_delete_button"
            onClick={(commentId, token) =>
              handleCommentDelete(commentId, token)
            }
          >
            X
          </div>
        </div>
        <hr className="mobile_comment_hr"></hr>
      </div>
    </li>
  );
};

export default Comment;
