import React, { useState } from "react";
import "./PostModule.css";
import { Link, Redirect } from "react-router-dom";
import { Warning } from "../../components";
import getCookie from "../../utils/getCookie";

const PostModule = ({ style, title, date, category, id }) => {
  let categoryName = null;
  if (category === 1) categoryName = "학과 공지";
  else if (category === 2) categoryName = "행사";
  else if (category === 3) categoryName = "구인구직";
  else if (category === 4) categoryName = "분실물";
  else if (category === 5) categoryName = "졸업 주간";
  else if (category === 6) categoryName = "와우영상제";
  else if (category === 7) categoryName = "기타";
  const postId = parseInt(id, 10);
  const slicedDate = date.slice(0, 10);
  const [warningVisibility, setWarningVisibility] = useState(false);

  const isLogged = getCookie("SUSER_ID") === null ? false : true;
  console.log(`isLogged: ${isLogged}`);

  const showWarning = () => {
    setWarningVisibility(true);

    setTimeout(() => {
      setWarningVisibility(false);
    }, 1500);
    return <Redirect to="/"></Redirect>;
  };

  return (
    <>
      {isLogged === false ? (
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
      ) : (
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
      )}
      <Warning visible={warningVisibility} message="권한이 없습니다." />
    </>
  );
};

export default PostModule;
