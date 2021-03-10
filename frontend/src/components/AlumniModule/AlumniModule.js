import React from "react";
import "./AlumniModule.css";
import getCookie from "../../utils/getCookie";

const AlumniModule = ({ year, name, tel, url }) => {
  return (
    <div className="alumni_module_container">
      {year}
      <br></br>
      {name}
      <br></br>
      {getCookie("SUSER_ID") !== null ? (
        <>
          {tel} <br></br>
        </>
      ) : null}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        alt="alumni_url"
        className="alumni_url"
      >
        {url}
      </a>
    </div>
  );
};

export default AlumniModule;
