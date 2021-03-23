import React, { useState, useRef } from "react";
import "./EachAnnounce.css";
import { EachPostNavigator, CommentList, Warning } from "..";
import axios from "axios";
import useAsync from "../../utils/useAsync";
import logogif from "../../img/logogif.gif";
import { useHistory } from "react-router-dom";

function handleNavigateClick(type, postId) {
  if (type === "NEXT") {
    getEachAnnounce(parseInt(postId) + 1);
  } else {
    getEachAnnounce(parseInt(postId) - 1);
  }
}

async function getEachAnnounce(postId) {
  const response = await axios.get(
    `https://sidi.hongik.ac.kr/api/v1/postings/announce/${postId}`
  );
  return response.data;
}

function setCategoryNumber(category) {
  let categoryName = null;
  if (category === 9) categoryName = "학과생활";
  else if (category === 10) categoryName = "학사정보";
  else if (category === 11) categoryName = "학사내규";
  return categoryName;
}

function EachAnnounce({ postId }) {
  const [style, setStyle] = useState({
    color: null,
    borderColor: null,
  });
  const [warningVisibility] = useState(false);
  const [postState] = useAsync(() => getEachAnnounce(postId), [postId]);
  const { loading, data: eachAnnounce, error } = postState;

  let history = useHistory();
  let id = parseInt(postId, 10);

  function routeToPrevPost(id) {
    id = id - 1;
    if (id > 0) {
      history.push(`/announce/${id}`);
    }
    handleNavigateClick("PREV", postId);
  }
  function routeToNextPost(id) {
    id = id + 1;
    history.push(`/announce/${id}`);
    handleNavigateClick("NEXT", postId);
  }

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

  if (loading) return <div className="each_post_wrapper" style={style}></div>;
  if (error)
    return (
      <div className="each_post_wrapper" style={style}>
        학과사무실에서 회원 권한을 확인 중입니다. 권한 승인 뒤 모든 게시물을
        열람할 수 있습니다.
      </div>
    );
  if (!eachAnnounce) return null;

  if (eachAnnounce && eachAnnounce.sidi_only)
    return (
      <div className="each_post_wrapper" style={style}>
        시각디자인과 학생에게만 공개된 게시물입니다.
      </div>
    );

  return (
    <div className="each_post_wrapper" style={style}>
      <div className="each_post">
        <div className="each_post_tag">
          {setCategoryNumber(eachAnnounce.category)}
        </div>
        <h1>{eachAnnounce.title}</h1>
        <hr style={{ marginBottom: 1 + "em" }}></hr>
        <div className="each_post_info">
          <span>작성자 {eachAnnounce.author}</span>
          <span>작성일 {eachAnnounce.updated.slice(0, 10)}</span>
        </div>
        <hr></hr>
        <div className="each_post_files">
          <span className="attached_file">
            첨부파일{" "}
            {eachAnnounce.files[0] ? eachAnnounce.files[0].name : "없음"}
          </span>
          {eachAnnounce.files.length ? (
            <a
              href={eachAnnounce.files[0].files}
              target="_blank"
              download={eachAnnounce.files[0].files}
              rel="noopener noreferrer"
            >
              <button className="download_button">다운로드</button>
            </a>
          ) : null}
        </div>
        <hr style={{ marginBottom: 2 + "em" }}></hr>
        <p>
          {eachAnnounce.text.split("\n").map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </p>
        {eachAnnounce.photos.length
          ? eachAnnounce.photos.map((photo) => {
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
        {eachAnnounce.link.length ? (
          <>
            <hr style={{ marginBottom: 1 + "em", marginTop: 1 + "em" }}></hr>
            <a
              href={eachAnnounce.link}
              target="_blank"
              rel="noopener noreferrer"
              alt="링크"
              className="attached_link"
            >
              링크 {eachAnnounce.link.slice(0, 30)}...
            </a>
          </>
        ) : null}
        <hr style={{ marginBottom: 1 + "em", marginTop: 1 + "em" }}></hr>
        <CommentList
          comments={eachAnnounce.comments}
          style={style}
          postId={postId}
        ></CommentList>
        <div className="each_post_navigator_container">
          <div className="each_post_navigator">
            <button
              className="navigate_left_button"
              onClick={() => routeToPrevPost(id)}
            ></button>
            <button
              className="navigate_right_button"
              onClick={() => routeToNextPost(id)}
            ></button>
          </div>
        </div>
        <Warning
          visible={warningVisibility}
          message={"마지막 게시글입니다."}
        ></Warning>
      </div>
    </div>
  );
}

export default EachAnnounce;
