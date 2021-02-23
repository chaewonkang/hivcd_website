import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Exhibition.css";
import axios from "axios";
import { ArchiveModule } from "../../components";
import useAsync from "../../utils/useAsync";
import getCookie from "../../utils/getCookie";

async function getExhibitionInfo(token) {
  const response = await axios.get(
    "http://devsidi.hongik.ac.kr/api/v1/postings/",
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

function Exhibition() {
  const [exhibitionFilter, setExhibitionFilter] = useState(0);
  const [token] = useState(getCookie("csrftoken"));

  const [state] = useAsync(() => getExhibitionInfo(token), [token]);
  const { loading, data: exhibition, error } = state;

  if (error) return <div className="exhibition_wrapper">Error Occurred!</div>;
  if (loading) return <div className="exhibition_wrapper">Loading...</div>;
  if (!exhibition) return null;

  return (
    <>
      <div className="exhibition_wrapper">
        <div className="exhibition_filter_wrapper">
          <div className="exhibition_filter_container">
            <button
              className="exhibition_filter_option"
              onClick={() => setExhibitionFilter(0)}
            >
              전체보기
            </button>
            <button
              className="exhibition_filter_option"
              onClick={() => setExhibitionFilter(5)}
            >
              졸업 주간
            </button>
            <button
              className="exhibition_filter_option"
              onClick={() => setExhibitionFilter(6)}
            >
              와우영상제
            </button>
            <button
              className="exhibition_filter_option"
              onClick={() => setExhibitionFilter(7)}
            >
              기타 전시
            </button>
          </div>
        </div>
        <div className="exhibition_container">
          {exhibition
            .filter(
              (data) =>
                data.category === 5 ||
                data.category === 6 ||
                data.category === 7
            )
            .slice(0, 100)
            .filter((data) => {
              if (exhibitionFilter === null || exhibitionFilter === 0)
                return data;
              else if (data.category === exhibitionFilter) return data;
              return;
            })
            .map((data) => {
              return (
                <Link to={`/exhibition/${data.pk}`}>
                  <ArchiveModule
                    key={data.pk}
                    title={data.title}
                    id={data.pk}
                    body={data.text}
                    category={data.category}
                    thumbnailUrl={
                      data.photos.length ? data.photos[0].photo : null
                    }
                    link={data.link}
                  ></ArchiveModule>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Exhibition;
