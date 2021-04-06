import React, { useState } from "react";
import { Post, BoardPostWrapper } from "../../components";
import axios from "axios";
import "./Board.css";
import getCookie from "../../utils/getCookie";
import useAsync from "../../utils/useAsync";
import logogif from "../../img/logogif.gif";

async function getPosts() {
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
  const [state] = useAsync(() => getPosts(), []);
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
            {options.all}
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(1)}
          >
            {options.news}
          </button>
          <button
            className="board_filter_option"
            activaClassName="filter_option_active"
            onClick={() => setBoardFilter(4)}
          >
            {options.job}
          </button>
          <button
            className="board_filter_option"
            activaClassName="filter_option_active"
            onClick={() => setBoardFilter(5)}
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
