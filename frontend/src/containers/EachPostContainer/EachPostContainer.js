import React, { useState, useEffect } from "react";
import { BoardListWrapper } from "../../components";
import axios from "axios";
import "./EachPostContainer.css";
import getCookie from "../../utils/getCookie";
import useAsync from "../../utils/useAsync";
import logogif from "../../img/logogif.gif";

async function getList() {
  const response = await axios.get(
    "https://sidi.hongik.ac.kr/api/v1/postings/board",
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

function EachPostContainer({ match, location }) {
  const [state] = useAsync(() => getList(), []);
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
      <BoardListWrapper
        list={list}
        postId={postId}
        curLoc={curLoc}
      ></BoardListWrapper>
    </div>
  );
}

export default EachPostContainer;
