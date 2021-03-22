import React from "react";
import "./EachExhibition.css";
import axios from "axios";
import useAsync from "../../utils/useAsync";

async function getExhibitionInfo(postId) {
  const response = await axios.get(
    `https://sidi.hongik.ac.kr/api/v1/postings/exhibition/${postId}`
  );
  return response.data;
}

function setCategoryNumber(category) {
  let categoryName = null;
  if (category === 5) categoryName = "졸업 주간";
  else if (category === 6) categoryName = "와우영상제";
  else if (category === 7) categoryName = "소모임";

  return categoryName;
}

function EachExhibition({ postId, handleNavigateClick }) {
  const [state] = useAsync(() => getExhibitionInfo(postId), [postId]);
  const { loading, data: exhibition, error } = state;

  if (loading) return <div className="container_loading"></div>;
  if (error) return <div className="container_loading"></div>;
  if (!exhibition) return null;

  return (
    <div className="each_exhibition_wrapper">
      <div className="each_exhibition">
        <div className="each_exhibition_tag">
          {setCategoryNumber(exhibition.category)}
        </div>
        <h1>{exhibition.title}</h1>
        <hr style={{ marginBottom: 1 + "em" }}></hr>
        <p>
          {exhibition.text.split("\n").map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </p>
        {exhibition.photos.length
          ? exhibition.photos.map((photo) => {
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
        {exhibition.link.length ? (
          <>
            <hr style={{ marginBottom: 1 + "em", marginTop: 1 + "em" }}></hr>
            <a
              href={exhibition.link}
              target="_blank"
              rel="noopener noreferrer"
              alt="링크"
              className="attached_link"
            >
              웹사이트 바로가기 {exhibition.link}
            </a>
          </>
        ) : null}
        <hr style={{ marginBottom: 1 + "em", marginTop: 1 + "em" }}></hr>
      </div>
    </div>
  );
}

export default EachExhibition;
