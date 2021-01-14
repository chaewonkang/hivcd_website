import React, { useState } from "react";
import "./Archive.css";
import axios from "axios";
import { ArchiveModule } from "../../components";

function Archive() {
  const [loading, setLoading] = useState(false);
  const [archiveInfo, setArchiveInfo] = useState([]);
  const [archiveFilter, setArchiveFilter] = useState(0);

  const getArchiveInfo = async () => {
    await axios
      .get("http://13.125.84.10:8000/api/v1/postings/?format=json")
      .then(({ data }) => {
        setLoading(true);
        setArchiveInfo(data);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  };

  const items = archiveInfo
    .filter(
      (data) =>
        data.category === 5 || data.category === 6 || data.category === 7
    )
    .slice(0, 100)
    .filter((data) => {
      if (archiveFilter === null) return data;
      else if (data.category === archiveFilter) return data;
      return;
    })
    .map((data) => {
      return (
        <ArchiveModule
          key={data.id}
          title={data.title}
          thumbnailUrl={data.photos ? data.photos[0].photo : null}
          date={data.created}
          category={data.category}
          link={data.link}
        ></ArchiveModule>
      );
    });
  return (
    <>
      <div className="archive_wrapper">
        <div className="archive_filter_wrapper">
          <div className="archive_filter_container">
            <button
              className="archive_filter_option"
              onClick={() => setArchiveFilter(0)}
            >
              ALL
            </button>
            <button
              className="archive_filter_option"
              onClick={() => setArchiveFilter(5)}
            >
              GRADUATION EXHIBITION
            </button>
            <button
              className="archive_filter_option"
              onClick={() => setArchiveFilter(6)}
            >
              WOW FILM FESTIVAL
            </button>
            <button
              className="archive_filter_option"
              onClick={() => setArchiveFilter(7)}
            >
              ETC
            </button>
          </div>
        </div>
        <div className="archive_container">{items}</div>
      </div>
    </>
  );
}

export default Archive;
