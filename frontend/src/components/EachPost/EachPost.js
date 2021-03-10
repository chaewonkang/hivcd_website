import React, { useState, useRef } from "react";
import "./EachPost.css";
import { EachPostNavigator, CommentList, Warning } from "../../components";
import axios from "axios";
import useAsync from "../../utils/useAsync";
import logogif from "../../img/logogif.gif";
import Exhibition from "../Exhibition/Exhibition";

async function getEachPost(postId) {
  const response = await axios.get(
    `http://sidi.hongik.ac.kr/api/v1/postings/${postId}`
  );
  return response.data;
}

function setCategoryNumber(category) {
  let categoryName = null;
  if (category === 1) categoryName = "학과 공지";
  else if (category === 2) categoryName = "행사";
  else if (category === 3) categoryName = "구인구직";
  else if (category === 4) categoryName = "분실물";
  return categoryName;
}

function EachPost({ postId, handleNavigateClick }) {
  const [style, setStyle] = useState({
    color: null,
    borderColor: null,
  });
  const [warningVisibility] = useState(false);
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
    "#495B1D",
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

  if (loading) return <div className="each_post"></div>;
  if (error)
    return (
      <div className="each_post">
        <img className="loading_status" src={logogif} alt="logogif"></img>
      </div>
    );
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
          <span>작성자 {eachPost.author}</span>
          <span>작성일 {eachPost.updated.slice(0, 10)}</span>
        </div>
        <hr></hr>
        <div className="each_post_files">
          <span className="attached_file">
            첨부파일 {eachPost.files[0] ? eachPost.files[0].name : "없음"}
          </span>
          {eachPost.files.length ? (
            <a
              href={eachPost.files[0].files}
              target="_blank"
              download={eachPost.files[0].files}
              rel="noopener noreferrer"
            >
              <button className="download_button">다운로드</button>
            </a>
          ) : null}
        </div>
        <hr style={{ marginBottom: 2 + "em" }}></hr>
        <p>
          {eachPost.text.split("\n").map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </p>
        {eachPost.photos.length
          ? eachPost.photos.map((photo) => {
              return (
                <div>
                  <img
                    src={photo.photo}
                    alt={photo.alt}
                    style={{
                      width: 100 + "%",
                      border: `1px solid rgb(0, 0, 0, 0.1)`,
                    }}
                  ></img>
                  <br />
                </div>
              );
            })
          : null}
        {eachPost.link.length ? (
          <>
            <hr style={{ marginBottom: 1 + "em", marginTop: 1 + "em" }}></hr>
            <a
              href={eachPost.link}
              target="_blank"
              rel="noopener noreferrer"
              alt="링크"
              className="attached_link"
            >
              URL 바로가기 {eachPost.link}
            </a>
          </>
        ) : null}
        <hr style={{ marginBottom: 1 + "em", marginTop: 1 + "em" }}></hr>
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
