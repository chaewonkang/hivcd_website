import React, { useState, useEffect } from "react";
import { BoardListWrapper } from "../../components";
import axios from "axios";
import "./EachAnnounceContainer.css";
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
    "https://sidi.hongik.ac.kr/api/v1/postings/announce",
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
    `https://sidi.hongik.ac.kr/api/v1/postings/announce/${postId}`,
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

function EachAnnounceContainer({ match, location }) {
  const [token] = useState(getCookie("csrftoken"));
  const [state] = useAsync(() => getList(token), [token]);
  const { loading, data: list, error } = state;
  const [postId, setPostId] = useState(0);
  const [curLoc, setCurLoc] = useState("");

  useEffect(() => {
    setPostId(match.params.postId);
    setCurLoc(location.pathname);
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
      {location.pathname.includes("announce") ? (
        <BoardListWrapper
          list={list.filter(
            (data) =>
              data.category === 9 ||
              data.category === 10 ||
              data.category === 11
          )}
          postId={postId}
          handleNavigateClick={() => handleNavigateClick()}
          curLoc={curLoc}
        ></BoardListWrapper>
      ) : null}
    </div>
  );
}

export default EachAnnounceContainer;
