import React, { useState, useEffect } from "react";
import { BoardListWrapper } from "../../components";
import axios from "axios";
import "./EachPostContainer.css";
import getCookie from "../../utils/getCookie";
import useAsync from "../../utils/useAsync";

function handleNavigateClick(type, postId) {
  if (type === "NEXT") {
    getPost(parseInt(postId) + 1);
  } else {
    getPost(parseInt(postId) - 1);
  }
}

async function getList(token) {
  const response = await axios.get(
    "http://www.devsidi.hongik.ac.kr/api/v1/postings/",
    {},
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        Accept: "application/json",
        "X-CSRFToken": token,
        "Content-type": "application/json",
      },
    }
  );
  return response.data;
}

async function getPost({ postId, token }) {
  return axios.get(
    `http://13.125.84.10:8000/api/v1/postings/${postId}`,
    {},
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        Accept: "application/json",
        "X-CSRFToken": token,
        "Content-type": "application/json",
      },
    }
  );
}

function EachPostContainer({ match }) {
  const [token, setToken] = useState(getCookie("csrftoken"));
  const [state] = useAsync(() => getList(token), [token]);
  const { loading, data: list, error } = state;
  const [postId, setPostId] = useState(0);

  useEffect(() => {
    setPostId(match.params.postId);
  });

  if (error) return <div className="each_post_container">Error Occurred!</div>;
  if (loading) return <div className="each_post_container">Loading...</div>;
  if (!list) return null;

  return (
    <div className="each_post_container">
      <BoardListWrapper
        list={list.filter(
          (data) =>
            data.category === 1 ||
            data.category === 2 ||
            data.category === 3 ||
            data.category === 4
        )}
        postId={postId}
        handleNavigateClick={() => handleNavigateClick()}
      ></BoardListWrapper>
    </div>
  );
}

export default EachPostContainer;
