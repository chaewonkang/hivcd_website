import React, { useState } from "react";
import "./Alumni.css";
import axios from "axios";
import { AlumniModule, AlumniSearch, LogoImage } from "../../components";
import useAsync from "../../utils/useAsync";
import getCookie from "../../utils/getCookie";

async function getAlumnis(token) {
  const response = await axios.get(
    "http://devsidi.hongik.ac.kr/api/v1/alumnis/",
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

function Alumni() {
  const [alumniSearch, setAlumniSearch] = useState(null);
  const [token] = useState(getCookie("csrftoken"));
  const [state] = useAsync(() => getAlumnis(token), [token]);
  const { loading, data: alumnis, error } = state;

  const alumniSearchSpace = (e) => {
    let keyword = e.target.value;
    setAlumniSearch(keyword);
  };

  if (error) return <div className="alumni_wrapper">Error Occurred</div>;
  if (loading) return <div className="alumni_wrapper">Loading...</div>;
  if (!alumnis) return null;

  return (
    <div className="alumni_wrapper">
      <AlumniSearch onChange={(e) => alumniSearchSpace(e)}></AlumniSearch>
      <div className="alumni_container">
        {alumnis
          .filter((data) => {
            if (alumniSearch === null) return data;
            else if (
              data.name.toLowerCase().includes(alumniSearch) ||
              data.year.includes(alumniSearch) ||
              data.website.toLowerCase().includes(alumniSearch) ||
              data.phone.includes(alumniSearch)
            )
              return data;
            return null;
          })
          .map((data) => {
            return (
              <AlumniModule
                key={data.id}
                year={data.year}
                name={data.name}
                tel={data.phone}
                url={data.website}
              ></AlumniModule>
            );
          })}
      </div>
    </div>
  );
}

export default Alumni;
