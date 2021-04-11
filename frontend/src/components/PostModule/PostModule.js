import React, { useState } from "react";
import "./PostModule.css";
import { Link, Redirect } from "react-router-dom";
import { Warning } from "../../components";

const PostModule = ({ style, title, date, category, id }) => {
  let categoryName = null;
  if (category === 1) categoryName = "소식";
  else if (category === 2) categoryName = "학과 공지";
  else if (category === 3) categoryName = "행사/홍보";
  else if (category === 4) categoryName = "구인구직";
  else if (category === 5) categoryName = "분실물";
  else if (category === 6) categoryName = "졸업 주간";
  else if (category === 7) categoryName = "와우영상제";
  else if (category === 8) categoryName = "소모임";
  else if (category === 9) categoryName = "생활";
  else if (category === 10) categoryName = "학사";
  else if (category === 11) categoryName = "학사내규";
  else if (category === 12) categoryName = "아카이브";
  const postId = parseInt(id, 10);
  const slicedDate = date.slice(0, 10);
  const [warningVisibility, setWarningVisibility] = useState(false);

  const showWarning = () => {
    setWarningVisibility(true);

    setTimeout(() => {
      setWarningVisibility(false);
    }, 1500);
    return <Redirect to="/"></Redirect>;
  };

  return (
    <>
      {category === 1 ||
      category === 2 ||
      category === 3 ||
      category === 4 ||
      category === 5 ? (
        <Link to={`/board/${postId}`}>
          <div className="post" style={style} onClick={() => showWarning()}>
            <div className="post_tag">
              <span>{categoryName}</span>
            </div>
            <div className="post_content">
              <div className="post_content_header">
                {title} <br></br>
              </div>
              <span className="post_content_date">{slicedDate}</span>
            </div>
          </div>
        </Link>
      ) : null}
      {category === 6 || category === 7 || category === 8 ? (
        <Link to={`/exhibition/${postId}`}>
          <div className="post" style={style} onClick={() => showWarning()}>
            <div className="post_tag">
              <span>{categoryName}</span>
            </div>
            <div className="post_content">
              <div className="post_content_header">
                {title} <br></br>
              </div>
              <span className="post_content_date">{slicedDate}</span>
            </div>
          </div>
        </Link>
      ) : null}
      {category === 9 || category === 10 || category === 11 ? (
        <Link to={`/announce/${postId}`}>
          <div className="post" style={style}>
            <div className="post_tag">
              <span>{categoryName}</span>
            </div>
            <div className="post_content">
              <div className="post_content_header">
                {title} <br></br>
              </div>
              <span className="post_content_date">{slicedDate}</span>
            </div>
          </div>
        </Link>
      ) : null}
      <Warning visible={warningVisibility} message="권한이 없습니다." />
    </>
  );
};

export default PostModule;
