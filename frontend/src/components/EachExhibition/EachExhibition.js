import React, { useState, useRef } from "react";
import "./EachExhibition.css";
import { CommentList, Warning } from "../../components";
import axios from "axios";
import getCookie from "../../utils/getCookie";
import useAsync from "../../utils/useAsync";

async function getEachExhibition(postId) {
  const response = await axios.get(
    `http://devsidi.hongik.ac.kr/api/v1/postings/archive/${postId}`
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

function EachExhibition({ postId, handleNavigateClick }) {
  const [style, setStyle] = useState({
    color: null,
    borderColor: null,
  });
  const [warningVisibility, setWarningVisibility] = useState(false);
  const [token] = useState(getCookie("csrftoken"));
  const [state] = useAsync(() => getEachExhibition(postId, token), [
    postId,
    token,
  ]);
  const { loading, data: EachExhibition, error } = state;

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

  if (error)
    return (
      <div className="each_post_wrapper" style={style}>
        아직 권한이 부여되지 않았습니다. 조교실에 문의해 주세요.
      </div>
    );
  if (loading)
    return (
      <div className="each_post_wrapper" style={style}>
        로딩 중...
      </div>
    );
  if (!EachExhibition) return null;

  return (
    <div className="each_post_wrapper" style={style}>
      <div className="each_post">
        <div className="each_post_tag">
          {setCategoryNumber(EachExhibition.category)}
        </div>
        <h1>{EachExhibition.title}</h1>
        <hr style={{ marginBottom: 1 + "em" }}></hr>
        <div className="each_post_info">
          <span>작성자 {EachExhibition.author}</span>
          <span>작성일 {EachExhibition.updated.slice(0, 10)}</span>
        </div>
        <hr></hr>
        <div className="each_post_files">
          <span className="attached_file">
            첨부파일{" "}
            {EachExhibition.files[0] ? EachExhibition.files[0].name : "없음"}
          </span>
          {EachExhibition.files.length ? (
            <a
              href={EachExhibition.files[0].files}
              target="_blank"
              download={EachExhibition.files[0].files}
              rel="noopener noreferrer"
            >
              <button className="download_button">다운로드</button>
            </a>
          ) : null}
        </div>
        <hr style={{ marginBottom: 2 + "em" }}></hr>
        <p>
          {EachExhibition.text.split("\n").map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </p>
        {EachExhibition.photos.length
          ? EachExhibition.photos.map((photo) => {
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
        {EachExhibition.link.length ? (
          <>
            <hr style={{ marginBottom: 1 + "em", marginTop: 1 + "em" }}></hr>
            <a
              href={EachExhibition.link}
              target="_blank"
              rel="noopener noreferrer"
              alt="링크"
              className="attached_link"
            >
              첨부 링크
            </a>
          </>
        ) : null}
        <hr style={{ marginBottom: 1 + "em", marginTop: 1 + "em" }}></hr>
        <CommentList
          comments={EachExhibition.comments}
          style={style}
          postId={postId}
        ></CommentList>
        <Warning
          visible={warningVisibility}
          message={"마지막 게시글입니다."}
        ></Warning>
      </div>
    </div>
  );
}

export default EachExhibition;