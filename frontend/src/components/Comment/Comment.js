import React from 'react';
import './Comment.css';
import axios from 'axios';

const Comment = ({ author, body, date, id, postId }) => {
  const createdSliced = date.slice(2, 10);
  const commentKey = id;
  const postKey = postId;

  async function handleCommentDelete(postId, commentId) {
    const response = await axios
      .delete(
        `https://sidi.hongik.ac.kr/api/v1/postings/${postId}/comments/${commentId}/`
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
    <li className='comment'>
      <div className='comment_container'>
        <div className='comment_container_username'>
          <span>{author.slice(0, 7)}</span>
        </div>
        <div className='comment_container_content'>{body}</div>
        <div className='comment_container_date_delete'>
          <div className='comment_container_date'>{createdSliced}</div>
          <div
            className='comment_delete_button'
            onClick={() => handleCommentDelete(postKey, commentKey)}
          >
            ✕
          </div>
        </div>
        <hr className='mobile_comment_hr'></hr>
      </div>
    </li>
  );
};

export default Comment;
