import React, { useState, useRef } from "react";
import "./EachPost.css";
import { CommentList, Warning } from "../../components";
import axios from "axios";
import getCookie from "../../utils/getCookie";
import useAsync from "../../utils/useAsync";
import { useHistory } from "react-router-dom";

async function getPosts() {
  const response = await axios.get(
    "https://sidi.hongik.ac.kr/api/v1/postings/board/"
  );
  return response.data;
}

async function getEachPost(postId) {
  const response = await axios.get(
    `https://sidi.hongik.ac.kr/api/v1/postings/board/${postId}`
  );
  return response.data;
}

function setCategoryNumber(category) {
  let categoryName = null;
  if (category === 1) categoryName = "소식";
  else if (category === 2) categoryName = "학과 공지";
  else if (category === 3) categoryName = "행사/홍보";
  else if (category === 4) categoryName = "구인구직";
  else if (category === 5) categoryName = "분실물";
  return categoryName;
}

function EachPost({ postId }) {
  const [style, setStyle] = useState({
    color: null,
    borderColor: null,
  });
  const [warningVisibility] = useState(false);
  const [postState] = useAsync(() => getEachPost(postId), [postId]);
  const [posts] = useAsync(() => getPosts());
  const isLogged = getCookie("SUSER_ID") === null ? false : true;
  const { loading, data: eachPost, error } = postState;
  const { loading: postLoading, data: postList, error: postError } = posts;
  let history = useHistory();

  function routeToPrevPost(id, arr) {
    if (arr.indexOf(parseInt(id)) > 0) {
      history.push(`/board/${arr[arr.indexOf(parseInt(id)) - 1]}`);
    }
  }

  function routeToNextPost(id, arr) {
    if (arr.indexOf(parseInt(id)) !== arr.length - 1)
      history.push(`/board/${arr[arr.indexOf(parseInt(id)) + 1]}`);
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
        존재하지 않는 게시물입니다.
      </div>
    );
  if (!eachPost) return null;
  if (!isLogged && eachPost && eachPost.sidi_only)
    return (
      <div className="each_post_wrapper" style={style}>
        시각디자인과 학생에게만 공개된 게시물입니다.
      </div>
    );

  if (isLogged && eachPost && !eachPost.sidi_only) {
    let pkArray = [];

    postList.map((post) => {
      pkArray.push(post.pk);
    });
    console.log(pkArray);
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
                링크 {eachPost.link.slice(0, 30)}...
              </a>
            </>
          ) : null}
          <hr style={{ marginBottom: 1 + "em", marginTop: 1 + "em" }}></hr>
          <CommentList
            comments={eachPost.comments}
            style={style}
            postId={postId}
          ></CommentList>
          <div className="each_post_navigator_container">
            <div className="each_post_navigator">
              <button
                className="navigate_left_button"
                onClick={(k = postId, arr = pkArray) => {
                  routeToPrevPost((k = postId), (arr = pkArray));
                }}
              ></button>
              <button
                className="navigate_right_button"
                onClick={(k = postId, arr = pkArray) => {
                  routeToNextPost((k = postId), (arr = pkArray));
                }}
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

  if (postList && eachPost) {
    let pkArray = [];

    postList.map((post) => {
      pkArray.push(post.pk);
    });
    console.log(pkArray);

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
                링크 {eachPost.link.slice(0, 30)}...
              </a>
            </>
          ) : null}
          <hr style={{ marginBottom: 1 + "em", marginTop: 1 + "em" }}></hr>
          <CommentList
            comments={eachPost.comments}
            style={style}
            postId={postId}
          ></CommentList>
          <div className="each_post_navigator_container">
            <div className="each_post_navigator">
              <button
                className="navigate_left_button"
                onClick={(k = postId, arr = pkArray) => {
                  routeToPrevPost((k = postId), (arr = pkArray));
                }}
              ></button>
              <button
                className="navigate_right_button"
                onClick={(k = postId, arr = pkArray) => {
                  routeToNextPost((k = postId), (arr = pkArray));
                }}
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
  return null;
}

export default EachPost;
