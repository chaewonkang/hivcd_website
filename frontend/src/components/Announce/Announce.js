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
  const [options, setOptions] = useState({
    all: "전체보기",
    life: "생활",
    information: "학사",
    statues: "내규",
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
            onMouseOver={() =>
              setOptions({
                ...options,
                all: "All",
              })
            }
            onMouseLeave={() =>
              setOptions({
                ...options,
                all: "전체보기",
              })
            }
          >
            {options.all}
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(9)}
            onMouseOver={() =>
              setOptions({
                ...options,
                life: "Life",
              })
            }
            onMouseLeave={() =>
              setOptions({
                ...options,
                life: "생활",
              })
            }
          >
            {options.life}
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(10)}
            onMouseOver={() =>
              setOptions({
                ...options,
                information: "Information",
              })
            }
            onMouseLeave={() =>
              setOptions({
                ...options,
                information: "학사",
              })
            }
          >
            {options.information}
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(11)}
            onMouseOver={() =>
              setOptions({
                ...options,
                statues: "Statues",
              })
            }
            onMouseLeave={() =>
              setOptions({
                ...options,
                statues: "내규",
              })
            }
          >
            {options.statues}
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

export default Announce;
