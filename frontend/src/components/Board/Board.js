import React, { useState } from "react";
import { Post, BoardPostWrapper } from "../../components";
import axios from "axios";
import "./Board.css";
import getCookie from "../../utils/getCookie";
import useAsync from "../../utils/useAsync";
import logogif from "../../img/logogif.gif";

async function getPosts(token) {
  const response = await axios.get(
    "https://sidi.hongik.ac.kr/api/v1/postings/board"
  );
  return response.data;
}

function Board() {
  const [boardFilter, setBoardFilter] = useState(0);
  const [options, setOptions] = useState({
    all: "전체",
    news: "소식",
    notice: "학과",
    job: "구인구직",
    lostandfound: "분실물",
  });
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
            onMouseOver={() =>
              setOptions({
                ...options,
                all: "All",
              })
            }
            onMouseLeave={() =>
              setOptions({
                ...options,
                all: "전체",
              })
            }
          >
            {options.all}
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(1)}
            onMouseOver={() =>
              setOptions({
                ...options,
                news: "News",
              })
            }
            onMouseLeave={() =>
              setOptions({
                ...options,
                news: "소식",
              })
            }
          >
            {options.news}
          </button>
          <button
            className="board_filter_option"
            activaClassName="filter_option_active"
            onClick={() => setBoardFilter(4)}
            onMouseOver={() =>
              setOptions({
                ...options,
                job: "Job",
              })
            }
            onMouseLeave={() =>
              setOptions({
                ...options,
                job: "구인구직",
              })
            }
          >
            {options.job}
          </button>
          <button
            className="board_filter_option"
            activaClassName="filter_option_active"
            onClick={() => setBoardFilter(5)}
            onMouseOver={() =>
              setOptions({
                ...options,
                lostandfound: "Lost and Found",
              })
            }
            onMouseLeave={() =>
              setOptions({
                ...options,
                lostandfound: "분실물",
              })
            }
          >
            {options.lostandfound}
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
                date={data.created_at}
                category={data.category}
              ></Post>
            );
          })}
      </BoardPostWrapper>
    </div>
  );
}

export default Board;
