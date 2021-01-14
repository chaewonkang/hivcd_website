import React, { useState } from "react";
import "./Alumni.css";
import axios from "axios";
import { AlumniModule, AlumniSearch, LogoImage } from "../../components";
import useAsync from "../../utils/useAsync";

async function getAlumnis() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
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

function Alumni() {
  const [alumniSearch, setAlumniSearch] = useState(null);
  const [state] = useAsync(() => getAlumnis(), []);
  const { loading, data: alumnis, error } = state;

  const alumniSearchSpace = (e) => {
    let keyword = e.target.value;
    setAlumniSearch(keyword);
  };

  if (error) return <div>에러 발생...</div>;
  if (loading) return <div>로딩 중...</div>;
  if (!alumnis) return null;

  return (
    <div className="alumni_wrapper">
      <AlumniSearch onChange={(e) => alumniSearchSpace(e)}></AlumniSearch>
      <div className="alumni_container">
        <LogoImage style={{ gridColumn: 1 / 1, gridRow: 1 / 1 }}></LogoImage>
        {alumnis
          .filter((data) => {
            if (alumniSearch === null) return data;
            else if (
              data.name.toLowerCase().includes(alumniSearch) ||
              data.name.includes(alumniSearch) ||
              data.name.toLowerCase().includes(alumniSearch) ||
              data.name.includes(alumniSearch)
            )
              return data;
            return null;
          })
          .map((data) => {
            return (
              <AlumniModule
                key={data.name}
                year={data.name}
                name={data.name}
                tel={data.name}
                url={data.name}
              ></AlumniModule>
            );
          })}
      </div>
    </div>
  );
}

export default Alumni;
