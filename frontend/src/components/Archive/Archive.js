import React, { useState } from "react";
import "./Archive.css";
import axios from "axios";
import { ArchiveModule } from "../../components";
import useAsync from "../../utils/useAsync";

async function getArchiveInfo() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {},
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        Accept: "application/json",
        "Content-type": "application/json",
      },
    }
  );
  return response.data;
}

function Archive() {
  const [archiveFilter, setArchiveFilter] = useState(0);
  const [state] = useAsync(() => getArchiveInfo(), []);
  const { loading, data: archive, error } = state;

  if (error) return <div className="archive_wrapper">Error Occurred!</div>;
  if (loading) return <div className="archive_wrapper">Loading...</div>;
  if (!archive) return null;

  return (
    <>
      <div className="archive_wrapper">
        <div className="archive_filter_wrapper">
          <div className="archive_filter_container">
            <button
              className="archive_filter_option"
              onClick={() => setArchiveFilter(0)}
            >
              전체보기
            </button>
            <button
              className="archive_filter_option"
              onClick={() => setArchiveFilter(5)}
            >
              졸업 주간
            </button>
            <button
              className="archive_filter_option"
              onClick={() => setArchiveFilter(6)}
            >
              와우영상제
            </button>
            <button
              className="archive_filter_option"
              onClick={() => setArchiveFilter(7)}
            >
              기타 전시
            </button>
          </div>
        </div>
        <div className="archive_container">
          {archive
            // .filter(
            //   (data) =>
            //     data.category === 5 ||
            //     data.category === 6 ||
            //     data.category === 7
            // )
            .slice(0, 100)
            // .filter((data) => {
            //   if (archiveFilter === null) return data;
            //   else if (data.category === archiveFilter) return data;
            //   return;
            // })
            .map((data) => {
              return (
                <ArchiveModule
                  key={data.id}
                  title={data.title}
                  //   thumbnailUrl={data.photos ? data.photos[0].photo : null}
                  thumbnailUrl={data.title}
                  date={data.title}
                  category={5}
                  link={data.title}
                ></ArchiveModule>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Archive;
