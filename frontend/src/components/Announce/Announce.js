import React, { useState } from "react";
import { Post, BoardPostWrapper } from "..";
import axios from "axios";
import "./Announce.css";
import getCookie from "../../utils/getCookie";
import useAsync from "../../utils/useAsync";
import logogif from "../../img/logogif.gif";

async function getPosts(token) {
  const response = await axios.get(
    "https://sidi.hongik.ac.kr/api/v1/postings/announce"
  );
  return response.data;
}

function Announce() {
  const [boardFilter, setBoardFilter] = useState(0);
  const [token] = useState(getCookie("csrftoken"));
  const [state] = useAsync(() => getPosts(token), [token]);
  const { loading, data: posts, error } = state;

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
  if (!posts) return null;

  return (
    <div className="contentcontainer">
      <div className="board_filter_wrapper">
        <div className="board_filter_container">
          <button
            tabIndex="0"
            className="board_filter_option"
            onClick={() => setBoardFilter(0)}
          >
            전체보기
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(9)}
          >
            학사정보
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(10)}
          >
            학사내규
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(11)}
          >
            학사내규
          </button>
        </div>
      </div>
      <BoardPostWrapper>
        {posts
          .filter((data) => {
            if (boardFilter === 0) return data;
            else if (data.category === boardFilter) return data;
            return null;
          })
          .map((data) => {
            return (
              <Post
                key={data.pk}
                title={data.title}
                id={data.pk}
                date={data.updated}
                category={data.category}
              ></Post>
            );
          })}
      </BoardPostWrapper>
    </div>
  );
}

export default Announce;
