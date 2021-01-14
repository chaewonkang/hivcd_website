import React, { useState, useEffect } from "react";
import { Post, LogoImage, BoardPostWrapper } from "../../components";
import axios from "axios";
import "./Board.css";
import getCookie from "../../utils/getCookie";

function Board() {
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState([]);
  const [boardFilter, setBoardFilter] = useState(0);
  const [token, setToken] = useState("");
  const [error, setError] = useState(null);

  const loadPost = async () => {
    await axios
      .get(
        "http://13.125.84.10:8000/api/v1/postings/?format=json",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            Accept: "application/json",
            "X-CSRFToken": token,
            "Content-type": "application/json",
          },
        }
      )
      .then(({ data }) => {
        setLoading(true);
        setPostList(data);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    setToken(getCookie("csrftoken"));
    loadPost();
  });

  const boardPostList = postList.filter(
    (data) =>
      data.category === 1 ||
      data.category === 2 ||
      data.category === 3 ||
      data.category === 4
  );
  const items = boardPostList
    .filter((data) => {
      if (boardFilter === 0) return data;
      else if (data.category === boardFilter) return data;
      return;
    })
    .map((data) => {
      return (
        <Post
          key={data.pk}
          title={data.title}
          id={data.pk}
          date={data.created}
          category={data.category}
        ></Post>
      );
    });

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;

  return (
    <div className="contentcontainer">
      <div className="board_filter_wrapper">
        <div className="board_filter_container">
          <button
            tabindex="0"
            className="board_filter_option"
            onClick={() => setBoardFilter(0)}
          >
            ALL
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(1)}
          >
            NOTICE
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(2)}
          >
            EVENT
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(3)}
          >
            JOB
          </button>
          <button
            className="board_filter_option"
            onClick={() => setBoardFilter(4)}
          >
            LOST&FOUND
          </button>
        </div>
      </div>
      <BoardPostWrapper>
        <LogoImage></LogoImage>
        {items}
      </BoardPostWrapper>
    </div>
  );
}

export default Board;
