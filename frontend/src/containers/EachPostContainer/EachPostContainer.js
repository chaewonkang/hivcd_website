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

async function getList() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {},
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        Accept: "application/json",
        "Content-type": "application/json",
      },
    }
  );
  return response.data;
}

async function getPost({ postId }) {
  return axios.get(
    `http://13.125.84.10:8000/api/v1/postings/${postId}/?format=json`,
    {},
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        Accept: "application/json",
        // "X-CSRFToken": token,
        "Content-type": "application/json",
      },
    }
  );
}

function EachPostContainer({ match }) {
  const [state] = useAsync(() => getList(), []);
  const { loading, data: list, error } = state;
  const [postId, setPostId] = useState(0);
  const [token, setToken] = useState("");

  useEffect(() => {
    setPostId(match.params.postId);
  });

  if (error) return <div className="each_post_container">Error Occurred!</div>;
  if (loading) return <div className="each_post_container">Loading...</div>;
  if (!list) return null;

  return (
    <div className="each_post_container">
      <BoardListWrapper
        list={list}
        postId={postId}
        handleNavigateClick={() => handleNavigateClick()}
      ></BoardListWrapper>
    </div>
  );
}

export default EachPostContainer;
