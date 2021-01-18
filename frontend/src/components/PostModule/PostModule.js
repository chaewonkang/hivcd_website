import React, { useState } from "react";
import "./PostModule.css";
import { Link, Redirect } from "react-router-dom";
import { Warning } from "../../components";

const PostModule = ({ style, title, date, category, id }) => {
  let categoryName = null;
  if (category === 1) categoryName = "NOTICE";
  else if (category === 2) categoryName = "EVENT";
  else if (category === 3) categoryName = "JOB";
  else if (category === 4) categoryName = "LOST&FOUND";
  else if (category === 5) categoryName = "GRADUATION EXHIBITION";
  else if (category === 6) categoryName = "WOW FILM FESTIVAL";
  else if (category === 7) categoryName = "ETC";
  const postId = parseInt(id, 10);
  const slicedDate = date.slice(0, 10);
  const [warningVisibility, setWarningVisibility] = useState(false);
  //   const token = localStorage.getItem("access_token");

  //   const showWarning = () => {
  //     setWarningVisibility(true);

  //     setTimeout(() => {
  //       setWarningVisibility(false);
  //     }, 1500);
  //     return <Redirect to="/"></Redirect>;
  //   };

  return (
    <>
      {/* {token === null ? (
        <div>
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
        </div>
      ) : ( */}
      <Link to={`/board/${postId}`}>
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
      {/* )} */}
      <Warning visible={warningVisibility} message="권한이 없습니다." />
    </>
  );
};

export default PostModule;
