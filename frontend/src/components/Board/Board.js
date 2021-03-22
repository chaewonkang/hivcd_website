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
            activaClassName="filter_option_active"
            onClick={() => setBoardFilter(0)}
          >
            전체보기
          </button>
          <button
            className="board_filter_option"
            activaClassName="filter_option_active"
            onClick={() => setBoardFilter(1)}
          >
            소식
          </button>
          <button
            className="board_filter_option"
            activaClassName="filter_option_active"
            onClick={() => setBoardFilter(2)}
          >
            학과 공지
          </button>
          <button
            className="board_filter_option"
            activaClassName="filter_option_active"
            onClick={() => setBoardFilter(3)}
          >
            행사/홍보
          </button>
          <button
            className="board_filter_option"
            activaClassName="filter_option_active"
            onClick={() => setBoardFilter(4)}
          >
            구인구직
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

export default Board;
