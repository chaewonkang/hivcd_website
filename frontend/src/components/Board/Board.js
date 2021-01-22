import React, { useState } from "react";
import { Post, LogoImage, BoardPostWrapper } from "../../components";
import axios from "axios";
import "./Board.css";
import getCookie from "../../utils/getCookie";
import useAsync from "../../utils/useAsync";

async function getPosts() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
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

function Board() {
  const [boardFilter, setBoardFilter] = useState(0);
  const [token, setToken] = useState("");
  const [state] = useAsync(() => getPosts(), []);
  const { loading, data: posts, error } = state;

  if (error) return <div className="contentcontainer">Error Occurred...</div>;
  if (loading) return <div className="contentcontainer">Loading...</div>;
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
            onClick={() => setBoardFilter(1)}
          >
            학과 공지
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(2)}
          >
            행사
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(3)}
          >
            구인구직
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(4)}
          >
            분실물
          </button>
        </div>
      </div>
      <BoardPostWrapper>
        <LogoImage></LogoImage>
        {posts
          // .filter(
          //     (data) =>
          //       data.category === 1 ||
          //       data.category === 2 ||
          //       data.category === 3 ||
          //       data.category === 4
          //   );
          .filter((data) => {
            if (boardFilter === 0) return data;
            else if (data.category === boardFilter) return data;
          })
          .map((data) => {
            return (
              <Post
                key={data.id}
                title={data.title}
                id={data.id}
                date={"1234567890"}
                category={2}
              ></Post>
            );
          })}
      </BoardPostWrapper>
    </div>
  );
}

export default Board;
