import React, { useState, useRef, useEffect } from "react";
import "./EachPost.css";
import { EachPostNavigator, CommentList, Warning } from "../../components";
import axios from "axios";
import getCookie from "../../utils/getCookie";
import useAsync from "../../utils/useAsync";

async function getEachPost(postId) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {},
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        Accept: "application/json",
        // "X-CSRFToken": token,
        "Content-type": "application/json",
      },
    }
  );
  return response.data;
}

function setCategoryNumber(category) {
  let categoryName = null;
  if (category === 1) categoryName = "BOARD / NOTICE";
  else if (category === 2) categoryName = "BOARD / EVENT";
  else if (category === 3) categoryName = "BOARD / JOB";
  else if (category === 4) categoryName = "BOARD / LOST&FOUND";
  else if (category === 5) categoryName = "EXHIBITION / GRADUATION EXHIBITION";
  else if (category === 6) categoryName = "EXHIBITION / WOW FILM FESTIVAL";
  else if (category === 7) categoryName = "EXHIBITION / ETC";

  return categoryName;
}

function EachPost({ postId, handleNavigateClick }) {
  const [style, setStyle] = useState({
    color: null,
    borderColor: null,
  });
  const [warningVisibility, setWarningVisibility] = useState(false);
  const [token, setToken] = useState("");
  const [state] = useAsync(() => getEachPost(postId), [postId]);
  const { loading, data: eachPost, error } = state;

  useEffect(() => {
    setToken(getCookie("csrftoken"));
  });

  const colorArray = [
    "#A3B3C4",
    "#00F5C6",
    "#93F421",
    "#9452FF",
    "#FDFBC1",
    "#BC791E",
    "#00C4FF",
    "#FF3333",
    "#FF01FF",
    "#DEADF0",
    "#9099FF",
    "#3EA455",
    "#FECC99",
    "#959B01",
    "#CDCC33",
  ];

  const borderColorArray = [
    "#78A4B7",
    "#47D2DD",
    "#64CB0C",
    "#6E12D6",
    "#CFD372",
    "#935B0F",
    "#094EFF",
    "#B74A6C",
    "#E00000",
    "#BB12D8",
    "#6F55FF",
    "#0F7946",
    "#FD9191",
    "#6F55FF",
    "#A8B419",
  ];

  const randomIndex = Math.floor(Math.random() * 15);

  const selectedColor = colorArray[randomIndex];
  const selectedBorderColor = borderColorArray[randomIndex];

  const willMount = useRef(true);

  if (willMount.current) {
    setStyle({
      backgroundColor: selectedColor,
      border: `2px solid ${selectedBorderColor}`,
    });
  }

  willMount.current = false;

  //   const category = setCategoryNumber(eachPost.category);

  if (error) return <div>에러 발생...</div>;
  if (loading) return <div>로딩 중...</div>;
  if (!eachPost) return null;

  return (
    <div className="each_post_wrapper" style={style}>
      <div className="each_post">
        {" "}
        {/* <div className="each_post_tag">{category}</div> */}
        <h1>{eachPost.title}</h1>
        <hr style={{ marginBottom: 1 + "em" }}></hr>
        <div className="each_post_info">
          <span>작성자 ▪︎ {eachPost.title}</span>
          <span>작성일 ▪︎ {eachPost.title}</span>
          <span>조회 ▪︎ 362</span>
        </div>
        <hr></hr>
        <div className="each_post_files">
          <span className="attached_file">
            {/* 첨부파일 ▪︎ {eachPost.files[0].name} */}
          </span>
          <a
            href={"www.www.www"}
            target="_blank"
            download={"www.www.www"}
            rel="noopener noreferrer"
          >
            <button className="download_button">DOWNLOAD</button>
          </a>
        </div>
        <hr style={{ marginBottom: 2 + "em" }}></hr>
        <p>{eachPost.body}</p>
        <hr style={{ marginBottom: 2 + "em", marginTop: 2 + "em" }}></hr>
        <CommentList
          comments={eachPost.comments}
          style={style}
          postId={postId}
        ></CommentList>
        <EachPostNavigator
          postId={postId}
          navDisabled={warningVisibility}
          handleNavigateClick={handleNavigateClick}
        ></EachPostNavigator>
        <Warning visible={warningVisibility} message="마지막 게시물입니다." />
      </div>
    </div>
  );
}

export default EachPost;
