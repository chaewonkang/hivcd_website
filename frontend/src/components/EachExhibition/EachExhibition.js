import React, { useState } from "react";
import "./EachExhibition.css";
import axios from "axios";
import useAsync from "../../utils/useAsync";
import getCookie from "../../utils/getCookie";
import logogif from "../../img/logogif.gif";

async function getExhibitionInfo(token) {
  const response = await axios.get(
    "http://sidi.hongik.ac.kr/api/v1/postings/archive",
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

function EachExhibition({ postId, handleNavigateClick }) {
  const [token] = useState(getCookie("csrftoken"));
  const [warningVisibility, setWarningVisibility] = useState(false);
  const [state] = useAsync(() => getExhibitionInfo(token), [token]);
  const { loading, data: exhibition, error } = state;

  if (loading)
    return (
      <div className="container_loading">
        <img className="loading_status" src={logogif}></img>
      </div>
    );
  if (error)
    return (
      <div className="container_loading">
        <img className="loading_status" src={logogif}></img>
      </div>
    );
  if (!exhibition) return null;

  return (
    <div className="each_exhibition_wrapper">
      {exhibition
        .filter((data) => data.pk === parseInt(postId, 10))
        .map((data) => {
          return (
            <div className="each_exhibition">
              <div className="each_exhibition_tag">
                {setCategoryNumber(data.category)}
              </div>
              <h1>{data.title}</h1>
              <hr style={{ marginBottom: 1 + "em" }}></hr>
              <p>
                {data.text.split("\n").map((line) => {
                  return (
                    <span>
                      {line}
                      <br />
                    </span>
                  );
                })}
              </p>
              {data.photos.length
                ? data.photos.map((photo) => {
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
              {data.link.length ? (
                <>
                  <hr
                    style={{ marginBottom: 1 + "em", marginTop: 1 + "em" }}
                  ></hr>
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="링크"
                    className="attached_link"
                  >
                    URL 바로가기
                  </a>
                </>
              ) : null}
              <hr style={{ marginBottom: 1 + "em", marginTop: 1 + "em" }}></hr>
            </div>
          );
        })}
    </div>
  );
}

export default EachExhibition;
