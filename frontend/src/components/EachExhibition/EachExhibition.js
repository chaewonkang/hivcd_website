import React, { useState, useRef } from "react";
import "./EachExhibition.css";
import { CommentList, Warning } from "../../components";
import axios from "axios";
import useAsync from "../../utils/useAsync";

async function getEachExhibition() {
  const response = await axios.get(
    `http://devsidi.hongik.ac.kr/api/v1/postings/archive`
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
  const [warningVisibility, setWarningVisibility] = useState(false);
  const [state] = useAsync(() => getEachExhibition(), []);
  const { loading, data: EachExhibition, error } = state;

  const EachRet = EachExhibition.filter(
    (exhibition) => exhibition.pk === postId
  );

  if (error)
    return (
      <div className="each_post_wrapper">
        아직 권한이 부여되지 않았습니다. 조교실에 문의해 주세요.
      </div>
    );
  if (loading) return <div className="each_post_wrapper">로딩 중...</div>;
  if (!EachExhibition) return null;

  return (
    <div className="each_post_wrapper">
      <div className="each_post">
        <div className="each_post_tag">
          {setCategoryNumber(EachRet.category)}
        </div>
        <h1>{EachRet.title}</h1>
        <hr style={{ marginBottom: 1 + "em" }}></hr>
        <div className="each_post_info">
          <span>작성자 {EachRet.author}</span>
          <span>작성일 {EachRet.updated.slice(0, 10)}</span>
        </div>
        <hr></hr>
        <div className="each_post_files">
          <span className="attached_file">
            첨부파일 {EachRet.files[0] ? EachRet.files[0].name : "없음"}
          </span>
          {EachRet.files.length ? (
            <a
              href={EachRet.files[0].files}
              target="_blank"
              download={EachRet.files[0].files}
              rel="noopener noreferrer"
            >
              <button className="download_button">다운로드</button>
            </a>
          ) : null}
        </div>
        <hr style={{ marginBottom: 2 + "em" }}></hr>
        <p>
          {EachRet.text.split("\n").map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </p>
        {EachRet.photos.length
          ? EachRet.photos.map((photo) => {
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
        {EachRet.link.length ? (
          <>
            <hr style={{ marginBottom: 1 + "em", marginTop: 1 + "em" }}></hr>
            <a
              href={EachRet.link}
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
        <CommentList comments={EachRet.comments} postId={postId}></CommentList>
        <Warning
          visible={warningVisibility}
          message={"마지막 게시글입니다."}
        ></Warning>
      </div>
    </div>
  );
}

export default EachExhibition;
