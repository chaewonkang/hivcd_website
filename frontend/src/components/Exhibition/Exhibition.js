import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Exhibition.css";
import axios from "axios";
import { ArchiveModule } from "../../components";
import useAsync from "../../utils/useAsync";
import logogif from "../../img/logogif.gif";

async function getExhibitionInfo() {
  const response = await axios.get(
    "https://sidi.hongik.ac.kr/api/v1/postings/exhibition/",
    {},
    {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    }
  );
  return response.data;
}

function Exhibition() {
  const [exhibitionFilter, setExhibitionFilter] = useState(0);
  const [options] = useState({
    all: "전체",
    gw: "졸업주간",
    wff: "와우영상제",
    club: "소모임",
    aetc: "기타",
  });
  const [state] = useAsync(() => getExhibitionInfo(), []);
  const { loading, data: exhibition, error } = state;

  if (loading)
    return (
      <div className="container_loading">
        <img className="loading_status" src={logogif} alt="logogif"></img>
      </div>
    );
  if (error)
    return (
      <div className="container_loading">
        <img className="loading_status" src={logogif} alt="logogif"></img>
      </div>
    );
  if (!exhibition) return null;

  return (
    <>
      <div className="exhibition_wrapper">
        <div className="exhibition_filter_wrapper">
          <div className="exhibition_filter_container" onTouchStart>
            <button
              className="exhibition_filter_option"
              onClick={() => setExhibitionFilter(0)}
            >
              {options.all}
            </button>
            <button
              className="exhibition_filter_option"
              onClick={() => setExhibitionFilter(6)}
            >
              {options.gw}
            </button>
            <button
              className="exhibition_filter_option"
              onClick={() => setExhibitionFilter(7)}
            >
              {options.wff}
            </button>
            <button
              className="exhibition_filter_option"
              onClick={() => setExhibitionFilter(8)}
            >
              {options.club}
            </button>
            <button
              className="exhibition_filter_option"
              onClick={() => setExhibitionFilter(8)}
            >
              {options.aetc}
            </button>
          </div>
        </div>
        <div className="exhibition_container">
          {exhibition
            .filter((data) => {
              if (exhibitionFilter === null || exhibitionFilter === 0)
                return data;
              else if (data.category === exhibitionFilter) return data;
              return null;
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
