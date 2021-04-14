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
    all: { title: "전체", set: false },
    news: { title: "소식", set: false },
    notice: { title: "학과", set: false },
    job: { title: "구인구직", set: false },
    lostandfound: { title: "분실물", set: false },
  });
  const [state] = useAsync(() => getPosts(), []);
  const { loading, data: posts, error } = state;

  const setOptionColor = (obj, tar) => {
    const elem = document.getElementById(tar);
    if (obj.tar[1]) {
      elem.classList.remove("board_filter_option");
      elem.classList.add("clicked");
    }
    return null;
  };

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
            id={options.all.title}
            tabIndex="0"
            className="board_filter_option"
            onClick={() => {
              setBoardFilter(0);
              options.all.set = true;
              setOptionColor(options, options.all.title);
            }}
            onMouseAway={() => {
              options.all.set = false;
            }}
          >
            {options.all.title}
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(1)}
          >
            {options.news.title}
          </button>
          <button
            className="board_filter_option"
            activaClassName="filter_option_active"
            onClick={() => setBoardFilter(4)}
          >
            {options.job.title}
          </button>
          <button
            className="board_filter_option"
            activaClassName="filter_option_active"
            onClick={() => setBoardFilter(5)}
          >
            {options.lostandfound.title}
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
