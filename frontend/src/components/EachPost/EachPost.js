import React, { useState, useRef, useEffect } from "react";
import "./EachPost.css";
import { EachPostNavigator, CommentList, Warning } from "../../components";
import axios from "axios";
import getCookie from "../../utils/getCookie";
import useAsync from "../../utils/useAsync";

async function getEachPost(postId, token) {
  const response = await axios.get(
    `http://18.219.73.211/api/v1/postings/${postId}`,
    {},
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        Accept: "application/json",
        "X-CSRFToken": token,
        "Content-type": "application/json",
      },
    }
  );
  return response.data;
}

function setCategoryNumber(category) {
  let categoryName = null;
  if (category === 1) categoryName = "학과 공지";
  else if (category === 2) categoryName = "행사";
  else if (category === 3) categoryName = "구인구직";
  else if (category === 4) categoryName = "분실물";
  else if (category === 5) categoryName = "졸업 주간";
  else if (category === 6) categoryName = "와우영상제";
  else if (category === 7) categoryName = "기타";

  return categoryName;
}

function EachPost({ postId, handleNavigateClick }) {
  const [style, setStyle] = useState({
    color: null,
    borderColor: null,
  });
  const [warningVisibility, setWarningVisibility] = useState(false);
  const [token, setToken] = useState(getCookie("csrftoken"));
  const [state] = useAsync(() => getEachPost(postId), [postId]);
  const { loading, data: eachPost, error } = state;

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

  if (error) return <div>마지막 게시물입니다.</div>;
  if (loading) return <div>로딩 중...</div>;
  if (!eachPost) return null;

  return (
    <div className="each_post_wrapper" style={style}>
      <div className="each_post">
        <div className="each_post_tag">
          {setCategoryNumber(eachPost.category)}
        </div>
        <h1>{eachPost.title}</h1>
        <hr style={{ marginBottom: 1 + "em" }}></hr>
        <div className="each_post_info">
          <span>작성자 ▪︎ {eachPost.title}</span>
          <span>작성일 ▪︎ {eachPost.title}</span>
        </div>
        <hr></hr>
        <div className="each_post_files">
          <span className="attached_file">
            첨부파일 ▪︎ {eachPost.files[0].name}
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
        <p>{eachPost.text}</p>
        <hr style={{ marginBottom: 2 + "em", marginTop: 2 + "em" }}></hr>
        <CommentList
          comments={eachPost.comments}
          style={style}
          postId={postId}
        ></CommentList>
        <EachPostNavigator
          postId={postId}
          navDisabled={warningVisibility}
          handleNavigateClick={() => handleNavigateClick()}
        ></EachPostNavigator>
        <Warning
          visible={warningVisibility}
          message={"마지막 게시글입니다."}
        ></Warning>
      </div>
    </div>
  );
}

export default EachPost;
