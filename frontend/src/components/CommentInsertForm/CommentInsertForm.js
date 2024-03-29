import React, { useState, useEffect } from 'react';
import './CommentInsertForm.css';
import axios from 'axios';

const CommentInsertForm = ({ style, postId }) => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState({});

  useEffect(() => {
    setUsername(localStorage.username);
  }, [username]);

  function handleChange(e) {
    setComment({
      [e.target.name]: e.target.value,
      post: parseInt(postId, 10),
    });
  }

  async function handleSubmit(e, data, pk) {
    e.preventDefault();

    try {
      const response = await axios
        .post(`https://sidi.hongik.ac.kr/api/v1/postings/${pk}/comments/`, {
          ...data,
        })
        .then(function () {
          window.location.reload();
          console.log(response);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className='comment_input_container'>
      <div className='comment_insert_form_container'>
        <form>
          <input
            type='text'
            name='text'
            placeholder='댓글을 입력하세요.'
            style={{ backgroundColor: style.backgroundColor }}
            onChange={(e) => handleChange(e)}
          ></input>
          <button
            className='comment_input_button'
            onClick={(e, data = comment, pk = postId) =>
              handleSubmit(e, (data = comment), (pk = postId))
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
