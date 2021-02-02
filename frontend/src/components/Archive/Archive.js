import React, { useState } from "react";
import "./Archive.css";
import axios from "axios";
import { ArchiveModule } from "../../components";
import useAsync from "../../utils/useAsync";
import getCookie from "../../utils/getCookie";

async function getArchiveInfo(token) {
  const response = await axios.get(
    "http://18.219.73.211/api/v1/postings/",
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

function Archive() {
  const [archiveFilter, setArchiveFilter] = useState(0);
  const [token, setToken] = useState(getCookie("csrftoken"));

  const [state] = useAsync(() => getArchiveInfo(token), [token]);
  const { loading, data: archive, error } = state;

  if (error) return <div className="archive_wrapper">Error Occurred!</div>;
  if (loading) return <div className="archive_wrapper">Loading...</div>;
  if (!archive) return null;

  return (
    <>
      <div className="archive_wrapper">페이지 준비중입니다.</div>
    </>
  );
}

export default Archive;
