import React, { useState } from "react";
import { Post, BoardPostWrapper } from "..";
import axios from "axios";
import "./Announce.css";
import useAsync from "../../utils/useAsync";
import logogif from "../../img/logogif.gif";

async function getPosts() {
  const response = await axios.get(
    "https://sidi.hongik.ac.kr/api/v1/postings/info"
  );
  return response.data;
}

function Announce() {
  const [state] = useAsync(() => getPosts(), []);
  const { loading, data: posts, error } = state;
  const [boardFilter, setBoardFilter] = useState(0);
  const [options] = useState({
    all: "전체",
    life: "생활",
    information: "규정",
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
            onClick={() => setBoardFilter(4)}
          >
            {options.life}
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(5)}
          >
            {options.information}
          </button>
        </div>
      </div>
      <BoardPostWrapper>
        {posts
          ? posts
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
              })
          : null}
      </BoardPostWrapper>
    </div>
  );
}

export default Announce;
