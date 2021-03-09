import React, { useState, useEffect } from "react";
import { BoardListWrapper } from "../../components";
import axios from "axios";
import "./EachPostContainer.css";
import getCookie from "../../utils/getCookie";
import useAsync from "../../utils/useAsync";
import logogif from "../../img/logogif.gif";

function handleNavigateClick(type, postId) {
  if (type === "NEXT") {
    getPost(parseInt(postId) + 1);
  } else {
    getPost(parseInt(postId) - 1);
  }
}

async function getList(token) {
  const response = await axios.get(
    "http://sidi.hongik.ac.kr/api/v1/postings/",
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
    `http://sidi.hongik.ac.kr/api/v1/postings/${postId}`,
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

function EachPostContainer({ match, location }) {
  const [token] = useState(getCookie("csrftoken"));
  const [state] = useAsync(() => getList(token), [token]);
  const { loading, data: list, error } = state;
  const [postId, setPostId] = useState(0);
  const [isBoard, setIsBoard] = useState(true);

  useEffect(() => {
    setPostId(match.params.postId);
    location.pathname.includes("board") ? setIsBoard(true) : setIsBoard(false);
  });

  if (loading)
    return (
      <div className="container_loading">
        <img className="loading_status" src={logogif} alt="logogif"></img>
      </div>
    );
  if (error)
    return (
      <div className="container_loading">
        <img className="loading_status" src={logogif} alt="logogif"></img>
      </div>
    );
  if (!list) return null;

  return (
    <div className="each_post_container">
      {location.pathname.includes("board") ? (
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
          isBoard={isBoard}
        ></BoardListWrapper>
      ) : (
        <BoardListWrapper
          list={list.filter(
            (data) =>
              data.category === 5 || data.category === 6 || data.category === 7
          )}
          postId={postId}
          handleNavigateClick={() => handleNavigateClick()}
          isBoard={isBoard}
        ></BoardListWrapper>
      )}
    </div>
  );
}

export default EachPostContainer;
