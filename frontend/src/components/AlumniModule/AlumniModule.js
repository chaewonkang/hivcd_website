import React from "react";
import "./AlumniModule.css";

const AlumniModule = ({ year, name, tel, url }) => {
  return (
    <div className="alumni_module_container">
      {year}
      <br></br>
      {name}
      <br></br>
      {tel}
      <br></br>
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
