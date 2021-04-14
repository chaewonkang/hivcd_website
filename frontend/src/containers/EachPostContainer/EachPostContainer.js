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
  const [boardFilter, setBoardFilter] = useState(0);
  const [options, setOptions] = useState({
    all: { title: "전체", set: false },
    news: { title: "소식", set: false },
    notice: { title: "학과", set: false },
    job: { title: "구인구직", set: false },
    lostandfound: { title: "분실물", set: false },
  });

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
    <>
      <div className="each_post_board_filter_wrapper">
        <div className="board_filter_wrapper">
          <div className="board_filter_container">
            <button
              tabIndex="0"
              className="board_filter_option"
              onClick={() => setBoardFilter(0)}
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
      </div>
      <div className="each_post_container">
        <BoardListWrapper
          list={list}
          postId={postId}
          curLoc={curLoc}
          category={boardFilter}
        ></BoardListWrapper>
      </div>
    </>
  );
}

export default EachPostContainer;
