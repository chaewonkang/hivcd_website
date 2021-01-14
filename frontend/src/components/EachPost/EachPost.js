import React, { useState, useRef, useEffect } from "react";
import "./EachPost.css";
import { EachPostNavigator, CommentList, Warning } from "../../components";
import axios from "axios";
import getCookie from "../../utils/getCookie";

function EachPost({ postId, handleNavigateClick }) {
  const [style, setStyle] = useState({
    color: null,
    borderColor: null,
  });
  const [eachPost, setEachPost] = useState({});
  const [token, setToken] = useState("");
  const [warningVisibility, setWarningVisibility] = useState(false);

  const showWarning = () => {
    setWarningVisibility(true);

    setTimeout(() => {
      setWarningVisibility(false);
    }, 1500);
  };

  const getEachPost = (pid) => {
    axios
      .get(
        "http://13.125.84.10:8000/api/v1/postings/" + pid,
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
        setEachPost({
          ...EachPost,
          loading: true,
          eachPost: data,
          fileUrl: data.files.length ? data.files[0]["files"] : "",
          fileName: data.files.length ? data.files[0]["name"] : "",
          comments: data.comments.length ? data.comments : [],
        });
      })
      .catch((e) => {
        console.error(e);
        setEachPost({
          ...eachPost,
          loading: false,
        });
        showWarning();
      });
  };

  useEffect(() => {
    setToken(getCookie("csrftoken"));
    return getEachPost(postId);
  }, []);

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

  const title = eachPost.title;
  const body = eachPost.text;
  const category = eachPost.category;
  const author = eachPost.author;
  const date = eachPost.created;
  const attachedfile = eachPost.fileUrl;
  const fileName = eachPost.fileName;

  let categoryName = null;

  if (category === 1) categoryName = "BOARD / NOTICE";
  else if (category === 2) categoryName = "BOARD / EVENT";
  else if (category === 3) categoryName = "BOARD / JOB";
  else if (category === 4) categoryName = "BOARD / LOST&FOUND";
  else if (category === 5) categoryName = "EXHIBITION / GRADUATION EXHIBITION";
  else if (category === 6) categoryName = "EXHIBITION / WOW FILM FESTIVAL";
  else if (category === 7) categoryName = "EXHIBITION / ETC";

  return (
    <div className="each_post_wrapper" style={style}>
      <div className="each_post">
        {" "}
        <div className="each_post_tag">{categoryName}</div>
        <h1>{title}</h1>
        <hr style={{ marginBottom: 1 + "em" }}></hr>
        <div className="each_post_info">
          <span>작성자 ▪︎ {author}</span>
          <span>작성일 ▪︎ {date}</span>
          <span>조회 ▪︎ 362</span>
        </div>
        <hr></hr>
        <div className="each_post_files">
          <span className="attached_file">첨부파일 ▪︎ {fileName}</span>
          <a
            href={attachedfile}
            target="_blank"
            download={attachedfile}
            rel="noopener noreferrer"
          >
            <button className="download_button">DOWNLOAD</button>
          </a>
        </div>
        <hr style={{ marginBottom: 2 + "em" }}></hr>
        <p>{body}</p>
        <hr style={{ marginBottom: 2 + "em", marginTop: 2 + "em" }}></hr>
        <CommentList
          comments={eachPost.comments}
          style={style}
          postId={postId}
        ></CommentList>
        <EachPostNavigator
          handleNavigateClick={handleNavigateClick}
          postId={postId}
          navDisabled={warningVisibility}
        ></EachPostNavigator>
        <Warning visible={warningVisibility} message="마지막 게시물입니다." />
      </div>
    </div>
  );
}

export default EachPost;
